import { _ as b } from "./preload-helper-PPVm8Dsz.js";
let d, g;
let __tla = (async () => {
  var _a, _b;
  const f = "__mf_module_cache__";
  globalThis[f] || (globalThis[f] = {
    share: {},
    remote: {}
  });
  (_a = globalThis[f]).share || (_a.share = {});
  (_b = globalThis[f]).remote || (_b.remote = {});
  const i = globalThis[f];
  for (const s of Object.keys(i.share)) if (s.startsWith("default:")) {
    const c = s.slice(8);
    i.share[c] === void 0 && (i.share[c] = i.share[s]);
  } else if (!s.includes(":")) {
    const c = "default:" + s;
    i.share[c] === void 0 && (i.share[c] = i.share[s]);
  }
  g = async function() {
    return d || (d = (async () => {
      var _a2;
      const s = (r, e, t, o) => {
        const a = (Array.isArray(o) ? o[0] : o) || "default", l = e || !t ? r : r + "@" + t, p = {
          canonical: a + ":" + l
        };
        return a === "default" && (p.aliases = [
          l
        ]), p;
      }, c = (r, e) => {
        const t = r[e.canonical];
        if (t !== void 0) return t;
        const o = e.aliases || [];
        for (const n of o) {
          if (!Object.prototype.hasOwnProperty.call(r, n)) continue;
          const a = r[n];
          if (a !== void 0) return r[e.canonical] = a, a;
        }
      }, _ = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), u = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), k = (r) => {
        let e = r[u];
        return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(r, u, {
          value: e,
          enumerable: false,
          configurable: false,
          writable: false
        })), e;
      }, j = (r, e, t, o) => {
        var _a3;
        r[e.canonical] = t;
        const n = e.aliases || [];
        for (const l of n) Object.defineProperty(r, l, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
        r[u], k(r)[e.canonical] = o;
        const a = (_a3 = r[_]) == null ? void 0 : _a3[e.canonical];
        if (a) for (const l of a) l(t);
        return t;
      }, m = await (await b(() => import("../customWidgets.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url)).init(), { usedShared: h } = await b(async () => {
        const { usedShared: r } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__vis2energyWidgets__mf_owner__1-B8XPk2nQ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        });
        return {
          usedShared: r
        };
      }, [], import.meta.url), y = (r) => {
        let e = r;
        for (let t = 0; t < 5; t++) {
          const o = e == null ? void 0 : e.default;
          if (!o || typeof o != "object" || Object.keys(o).length === 0) break;
          const n = Object.keys(e).filter((a) => a !== "default").map((a) => e[a]);
          if (n.length > 0 && n.some((a) => a !== void 0)) break;
          e = o;
        }
        return e;
      }, v = [
        "react",
        "react-dom",
        "react-dom/client",
        "prop-types",
        "@mui/system",
        "@mui/material",
        "@mui/icons-material",
        "@iobroker/adapter-react-v5/i18n/de.json",
        "@iobroker/adapter-react-v5/i18n/en.json",
        "@iobroker/adapter-react-v5/i18n/es.json",
        "@iobroker/adapter-react-v5/i18n/fr.json",
        "@iobroker/adapter-react-v5/i18n/it.json",
        "@iobroker/adapter-react-v5/i18n/nl.json",
        "@iobroker/adapter-react-v5/i18n/pl.json",
        "@iobroker/adapter-react-v5/i18n/pt.json",
        "@iobroker/adapter-react-v5/i18n/ru.json",
        "@iobroker/adapter-react-v5/i18n/uk.json",
        "@iobroker/adapter-react-v5/i18n/zh-cn.json",
        "@iobroker/adapter-react-v5"
      ].concat(Object.keys(h).filter((r) => ![
        "react",
        "react-dom",
        "react-dom/client",
        "prop-types",
        "@mui/system",
        "@mui/material",
        "@mui/icons-material",
        "@iobroker/adapter-react-v5/i18n/de.json",
        "@iobroker/adapter-react-v5/i18n/en.json",
        "@iobroker/adapter-react-v5/i18n/es.json",
        "@iobroker/adapter-react-v5/i18n/fr.json",
        "@iobroker/adapter-react-v5/i18n/it.json",
        "@iobroker/adapter-react-v5/i18n/nl.json",
        "@iobroker/adapter-react-v5/i18n/pl.json",
        "@iobroker/adapter-react-v5/i18n/pt.json",
        "@iobroker/adapter-react-v5/i18n/ru.json",
        "@iobroker/adapter-react-v5/i18n/uk.json",
        "@iobroker/adapter-react-v5/i18n/zh-cn.json",
        "@iobroker/adapter-react-v5"
      ].includes(r)));
      for (const r of v) {
        const e = h[r];
        if (!e || e.treeShaking) continue;
        const t = s(r, (_a2 = e.shareConfig) == null ? void 0 : _a2.singleton, e.version, e.scope);
        c(i.share, t) === void 0 && await m.loadShare(r, {
          customShareInfo: {
            shareConfig: e.shareConfig
          }
        }).then((o) => {
          const n = typeof o == "function" ? o() : o;
          return Promise.resolve(n).then((a) => {
            j(i.share, t, y(a), "vis2energyWidgets");
          });
        });
      }
      const S = [];
      return await Promise.all(S), m;
    })()), d;
  };
  d = g();
})();
export {
  __tla,
  d as hostInitPromise,
  g as initHost
};
