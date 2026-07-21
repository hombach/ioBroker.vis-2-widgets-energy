var _a, _b;
import { b as i } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-CcT-evVu.js";
const r = i, b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = r.createPortal, S = r.createRoot, y = r.findDOMNode, O = r.flushSync, p = r.hydrate, E = r.hydrateRoot, R = r.render, g = r.unmountComponentAtNode, C = r.unstable_batchedUpdates, N = r.unstable_renderSubtreeIntoContainer, j = r.version, T = Reflect.get(i, "default") ?? i, L = Object.freeze(Object.defineProperty({ __proto__: null, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: b, createPortal: h, createRoot: S, default: T, findDOMNode: y, flushSync: O, hydrate: p, hydrateRoot: E, render: R, unmountComponentAtNode: g, unstable_batchedUpdates: C, unstable_renderSubtreeIntoContainer: N, version: j }, Symbol.toStringTag, { value: "Module" })), c = "__mf_module_cache__";
globalThis[c] || (globalThis[c] = { share: {}, remote: {} });
(_a = globalThis[c]).share || (_a.share = {});
(_b = globalThis[c]).remote || (_b.remote = {});
const o = globalThis[c];
for (const e of Object.keys(o.share)) if (e.startsWith("default:")) {
  const t = e.slice(8);
  o.share[t] === void 0 && (o.share[t] = o.share[e]);
} else if (!e.includes(":")) {
  const t = "default:" + e;
  o.share[t] === void 0 && (o.share[t] = o.share[e]);
}
const I = (e, t) => {
  const n = e[t.canonical];
  if (n !== void 0) return n;
  const a = t.aliases || [];
  for (const l of a) {
    if (!Object.prototype.hasOwnProperty.call(e, l)) continue;
    const _ = e[l];
    if (_ !== void 0) return e[t.canonical] = _, _;
  }
}, u = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), D = (e) => {
  let t = e[u];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, u, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, P = (e, t, n) => {
  var _a2;
  const a = D(e);
  (a[_a2 = t.canonical] || (a[_a2] = /* @__PURE__ */ new Set())).add(n);
}, d = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), w = (e) => {
  let t = e[d];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, d, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, U = (e, t, n, a) => {
  var _a2;
  e[t.canonical] = n;
  const l = t.aliases || [];
  for (const s of l) Object.defineProperty(e, s, { value: n, enumerable: true, configurable: true, writable: true });
  e[d], w(e)[t.canonical] = a;
  const _ = (_a2 = e[u]) == null ? void 0 : _a2[t.canonical];
  if (_) for (const s of _) s(n);
  return n;
}, v = (e) => {
  const t = (() => {
    let n = e;
    for (let a = 0; a < 5; a++) {
      const l = n == null ? void 0 : n.default;
      if (!l || typeof l != "object") break;
      const _ = Object.keys(n).filter((s) => s !== "default").map((s) => n[s]);
      if (_.length > 0 && _.some((s) => s !== void 0)) break;
      n = l;
    }
    return n;
  })();
  return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
};
let f = I(o.share, { canonical: "default:react-dom", aliases: ["react-dom"] });
f === void 0 && (f = v(L), U(o.share, { canonical: "default:react-dom", aliases: ["react-dom"] }, f, "vis2energyWidgets"));
let x;
const m = (e) => {
  e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, e.createPortal, e.createRoot, e.findDOMNode, e.flushSync, e.hydrate, e.hydrateRoot, e.render, e.unmountComponentAtNode, e.unstable_batchedUpdates, e.unstable_renderSubtreeIntoContainer, e.version, x = (() => {
    let t = e;
    for (let n = 0; n < 5; n++) {
      const a = t == null ? void 0 : t.default;
      if (!a || typeof a != "object") return a ?? t;
      t = a;
    }
    return t;
  })();
};
P(o.share, { canonical: "default:react-dom" }, m);
m(f);
export {
  x as _
};
