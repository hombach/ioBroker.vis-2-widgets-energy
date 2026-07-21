var _a, _b;
import { _ as j, g } from "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
function O(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r) if (a !== "default" && !(a in t)) {
        const s = Object.getOwnPropertyDescriptor(r, a);
        s && Object.defineProperty(t, a, s.get ? s : { enumerable: true, get: () => r[a] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} }, i = {};
var x = j, S = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, v = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: true, ref: true, __self: true, __source: true };
function b(t, e, n) {
  var r, a = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (r in e) w.call(e, r) && !E.hasOwnProperty(r) && (a[r] = e[r]);
  if (t && t.defaultProps) for (r in e = t.defaultProps, e) a[r] === void 0 && (a[r] = e[r]);
  return { $$typeof: S, type: t, key: s, ref: o, props: a, _owner: v.current };
}
i.Fragment = P;
i.jsx = b;
i.jsxs = b;
m.exports = i;
var h = m.exports;
const p = g(h), C = O({ __proto__: null, default: p }, [h]), u = p ?? C, k = u.Fragment, R = u.jsx, T = u.jsxs, D = Object.freeze(Object.defineProperty({ __proto__: null, Fragment: k, default: u, jsx: R, jsxs: T }, Symbol.toStringTag, { value: "Module" })), c = "__mf_module_cache__";
globalThis[c] || (globalThis[c] = { share: {}, remote: {} });
(_a = globalThis[c]).share || (_a.share = {});
(_b = globalThis[c]).remote || (_b.remote = {});
const l = globalThis[c];
for (const t of Object.keys(l.share)) if (t.startsWith("default:")) {
  const e = t.slice(8);
  l.share[e] === void 0 && (l.share[e] = l.share[t]);
} else if (!t.includes(":")) {
  const e = "default:" + t;
  l.share[e] === void 0 && (l.share[e] = l.share[t]);
}
const L = (t, e) => {
  const n = t[e.canonical];
  if (n !== void 0) return n;
  const r = e.aliases || [];
  for (const a of r) {
    if (!Object.prototype.hasOwnProperty.call(t, a)) continue;
    const s = t[a];
    if (s !== void 0) return t[e.canonical] = s, s;
  }
}, _ = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), F = (t) => {
  let e = t[_];
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(t, _, { value: e, enumerable: false, configurable: false, writable: false })), e;
}, K = (t, e, n) => {
  var _a2;
  const r = F(t);
  (r[_a2 = e.canonical] || (r[_a2] = /* @__PURE__ */ new Set())).add(n);
}, d = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), N = (t) => {
  let e = t[d];
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(t, d, { value: e, enumerable: false, configurable: false, writable: false })), e;
}, M = (t, e, n, r) => {
  var _a2;
  t[e.canonical] = n;
  const a = e.aliases || [];
  for (const o of a) Object.defineProperty(t, o, { value: n, enumerable: true, configurable: true, writable: true });
  t[d], N(t)[e.canonical] = r;
  const s = (_a2 = t[_]) == null ? void 0 : _a2[e.canonical];
  if (s) for (const o of s) o(n);
  return n;
}, z = (t) => {
  const e = (() => {
    let n = t;
    for (let r = 0; r < 5; r++) {
      const a = n == null ? void 0 : n.default;
      if (!a || typeof a != "object") break;
      const s = Object.keys(n).filter((o) => o !== "default").map((o) => n[o]);
      if (s.length > 0 && s.some((o) => o !== void 0)) break;
      n = a;
    }
    return n;
  })();
  return e && Object.getPrototypeOf(e) === null ? Object.assign({}, e) : e;
};
let f = L(l.share, { canonical: "default:react/jsx-runtime", aliases: ["react/jsx-runtime"] });
f === void 0 && (f = z(D), M(l.share, { canonical: "default:react/jsx-runtime", aliases: ["react/jsx-runtime"] }, f, "vis2energyWidgets"));
let A, W, G;
const y = (t) => {
  A = t.Fragment, W = t.jsx, G = t.jsxs, (() => {
    let e = t;
    for (let n = 0; n < 5; n++) {
      const r = e == null ? void 0 : e.default;
      if (!r || typeof r != "object") return r ?? e;
      e = r;
    }
    return e;
  })();
};
K(l.share, { canonical: "default:react/jsx-runtime" }, y);
y(f);
export {
  W as _,
  G as a,
  A as b,
  D as c
};
