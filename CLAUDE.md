# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

An ioBroker adapter of type `visualization-widgets` (`onlyWWW: true`, `mode: none`) — it ships **no runtime Node.js code**. Everything it delivers is a set of React widgets that the `vis-2` adapter loads at runtime via **Vite module federation** (`@module-federation/vite`).

Four widgets: `Distribution` (animated SVG energy flow diagram), `Consumption` (echarts bar chart over history data), `ConsumptionComparison` (bar or pie chart), `IntervalSelector` (day/week/month/year period picker that other widgets subscribe to).

## Commands

All commands run from the repo root unless stated otherwise.

```bash
npm run npm       # install both package trees (src-widgets needs `npm i -f`)
npm run build     # full build: clean -> npm install in src-widgets -> vite build -> copy to widgets/
npm run check     # type check (cd src-widgets && tsc)
npm run lint      # eslint src-widgets/src
npm test          # mocha; boots js-controller + web + vis-2 and a headless browser (~3 min)
```

`npm run build` (see `tasks.js`) also supports single stages: `node tasks --widget-0-clean`, `--widget-1-npm`, `--widget-2-compile`, `--widget-3-copy`. Use `--widget-2-compile` + `--widget-3-copy` for a fast rebuild after source edits.

Widget dev server (from `src-widgets/`): `npm start` — Vite on **port 4173**. `npm run i18n` scans the sources for used translation keys and reports missing/unused entries in `src/i18n/*.json`.

`npm test` requires `widgets/` to exist, so run `npm run build` first. There is a single test file with a single case (`test/widgets.test.js`) that adds every widget from the palette and screenshots it into `tmp/screenshots/`; narrow it with `npx mocha ./test/widgets.test.js --grep "Check all widgets"`.

**The test refuses to run when an ioBroker instance is already running on the machine** ("Cannot initiate the first run of test, because one instance of application is running on this PC") — and it still exits 0, so a green exit code is not proof that the test ran. Check the output for the actual mocha summary.

## Architecture

### Runtime loading model

`src-widgets/vite.config.ts` declares the federation remote: name `vis2energyWidgets`, filename `customWidgets.js`, one `exposes` entry per widget plus `./translations`. The bundle is registered in `io-package.json` under `common.visWidgets.vis2energyWidgets`.

**Three lists must stay in sync when adding or renaming a widget**: `exposes` in `vite.config.ts`, `common.visWidgets.vis2energyWidgets.components` in `io-package.json`, and the module file itself.

`common.visWidgets.vis2energyWidgets.bundlerType` **must be `"module"`** for the Vite build. The official template (`ioBroker.vis-2-widgets-react-template`) states the inverse rule for a CRA build: with craco/react-scripts the attribute must *not* be set. Getting this wrong means vis-2 loads the bundle with the wrong loader.

React, MUI and `@iobroker/adapter-react-v5` are shared as module-federation **singletons with `requiredVersion: '*'`** (see `sharedModules` in `vite.config.ts`), so the host decides the actual version at runtime and a mismatch does not fail loudly. `window.visRxWidget` is likewise provided by vis-2; `Generic.tsx` types it via `@iobroker/types-vis-2` and every widget extends `Generic`. Never import a vis-2 base class directly.

Because of that, `io-package.json` declares `common.dependencies: [{ "vis-2": ">=2.12.8" }]` — same convention as `ioBroker.vis-2-widgets-material`. Bumping MUI / adapter-react-v5 majors may require raising that floor.

### Build output

`tasks.js` compiles `src-widgets/` and copies the whole Vite output to `widgets/vis-2-widgets-energy/` (gitignored, but listed in `package.json` `files` — a publish artifact, generated at release time by the release script's `before_commit` hook). `index.html`, `mf-manifest.json`, `mf-stats.json` and `customWidgets.ssr.js` are excluded.

`copyAllFiles()` carries a workaround for a zrender (echarts renderer) minification bug that used `isFunction` before defining it. It detects the broken pattern **by file content, not by chunk name** — Vite/Rollup chunk names are not stable, and the original name-based check (`installSVGRenderer`) matched no file at all after the Vite migration. As of echarts 6 the pattern is not emitted any more, so the workaround currently patches nothing and logs that fact. Keep it visible rather than silent; if it starts matching again, that is real information.

Note the `copyFiles` `process` callback contract from `@iobroker/build-tools`: returning `undefined` copies the file through **unchanged**, `null`/`false` skips it, a string replaces the content.

### Widget contract

Each widget class implements:

- `static getWidgetInfo(): RxWidgetInfo` — returns `id` (`tplEnergy2*`), `visSet: 'vis-2-widgets-energy'`, `visWidgetLabel`, `visDefaultStyle`, `visPrev` (path `widgets/vis-2-widgets-energy/img/prev_*.png`, sourced from `src-widgets/public/img/`), and `visAttrs`. Only `Distribution` carries `visSetLabel` — the set label belongs to exactly one widget.
- `getWidgetInfo()` (instance) — must return the static one; vis-2 calls both.
- `renderWidgetBody(props)` — must call `super.renderWidgetBody(props)` first, and normally returns `this.wrapContent(content)` so the card/`noCard` handling comes from the base class.
- Optional `onRxDataChanged()`, `onStateUpdated(id, state)`. `componentDidMount`/`componentWillUnmount`/`componentDidUpdate` must call `super`.

`visAttrs` is a declarative schema rendered by the vis-2 attribute editor. Notable field mechanics used here:

- `hidden` accepts either a JS-expression string (`'data.type !== "pie"'`) or a function `data => bool`.
- A group with `indexFrom: 1, indexTo: 'devicesCount'` repeats its fields per index, producing `oid1`, `name1`, `color1`, … Read them as `this.state.rxData[`oid${i}`]`.
- `onChange: async (field, data, changeData, socket) => …` on `id`/`hid` fields auto-fills name and color from the selected object's `common`.
- An `id` field that is unset arrives as the literal string `'nothing_selected'` — always check for it, not just falsiness.

Data access inside a widget: resolved attributes live in `this.state.rxData`; subscribed state values in `this.state.values['<oid>.val']` (`Generic.getPropertyValue` wraps this). Everything else — `socket`, `theme`, `themeType`, `views`, `systemConfig`, `setValue`, `adapterName`, `instance`, `projectName` — comes from `this.props.context`.

### Cross-widget time synchronization

`Consumption` and `ConsumptionComparison` need the period selected in `IntervalSelector`. Two channels exist:

1. **Global vis-2 context** — `this.props.context.timeStart` / `timeInterval` with `setTimeStart` / `setTimeInterval`. Used when the selector has no OIDs bound.
2. **Direct DOM handshake** — `IntervalSelector` renders a `div.time-selector` and attaches `_addEventHandler` / `_removeEventHandler` to that DOM node in `propertiesUpdate()`. A consumer configured with the `timeWidget` attribute looks the node up by widget id and subscribes. Callbacks receive `('update', {start, interval})` or `('unmount')`.

Because widget mount order is not guaranteed, `Consumption.registerTimeSelector()` retries on a 300 ms interval until the node exists, and re-subscribes on the `'unmount'` event. Any new widget consuming the selector must follow the same retry-and-cleanup pattern, or it will silently never receive updates.

History reads go through `this.props.context.socket.getHistory(id, options)` with `instance: systemConfig?.common?.defaultHistory || 'history.0'`, wrapped in `getHistory()` with a manual timeout because a missing history instance never rejects. `Utils.getFromToTime(timeStart, interval)` derives the from/to bounds — note `getDay() || 7` so weeks start on Monday and Sunday stays in its own week. The `difference` attribute (for monotonically increasing counters) fetches one extra bucket before the range and diffs consecutive samples.

### TypeScript and linting

Sources are TypeScript (`.tsx`/`.ts`). `src-widgets/tsconfig.json` is `strict: true` and is what `npm run check` and `src-widgets`' own `build` (`tsc && vite build`) use. The root `tsconfig.json` is `strict: false` and exists for the ESLint project service on the root-level `.mjs` config files.

The migration from JSX is deliberately not strict *in practice*: state interfaces carry `[key: string]: any`, widgets are typed `Generic<Record<string, any>, …>`, and `eslint.config.mjs` switches off every `@typescript-eslint/no-unsafe-*` plus `no-explicit-any` for `src-widgets/src/**`. Treat it as a syntactic migration to be tightened incrementally, not as type-safe code.

`prettier/prettier` is **off** for the widget sources, so formatting there is not enforced even though the rest of the repo follows the ioBroker prettier config.

### i18n

Keys in `src-widgets/src/i18n/*.json` are stored **unprefixed**; the prefix `vis_2_widgets_energy_` is added by `Generic.getI18nPrefix()` and declared in `src/translations.ts`. Labels/tooltips in `visAttrs` are plain keys and are translated by vis-2 (opt out per field with `noTranslation: true`). Eleven languages are maintained (en, de, ru, pt, nl, fr, it, es, pl, uk, zh-cn) — add a key to all of them.

## Releasing

Use `npm run release-patch|release-minor|release-major` (`@alcalzone/release-script` with the iobroker plugin). It keeps `package.json`, `io-package.json` (`common.version` plus a new `common.news` entry in all 11 languages) and the README changelog in sync, and runs `npm run build` before committing. The `### **WORK IN PROGRESS**` section of the README changelog is what becomes the news entry — put user-facing notes there.

Do not hand-edit version numbers or add changelog/news entries manually — note that `src-widgets/package.json` carries its own version field that mirrors the root one.

**The pending release is a breaking one** and needs `release-major`: the comparison widget no longer auto-converts W→Wh / kW→kWh nor divides Wh by 1000, so existing dashboards using Wh datapoints show values 1000× larger until the per-device `factor` is set.

Dependency bumps arrive as Dependabot PRs against both `package.json` and `src-widgets/package.json` and are auto-merged; `npm run update-packages` does the same locally for both trees.
