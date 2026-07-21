var _a, _b;
import { g as T } from "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
function S(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const o in a) if (o !== "default" && !(o in e)) {
        const s = Object.getOwnPropertyDescriptor(a, o);
        s && Object.defineProperty(e, o, s.get ? s : { enumerable: true, get: () => a[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} }, j = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", P = j, x = P;
function b() {
}
function h() {
}
h.resetWarningCache = b;
var C = function() {
  function e(a, o, s, f, oe, O) {
    if (O !== x) {
      var y = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw y.name = "Invariant Violation", y;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: h, resetWarningCache: b };
  return n.PropTypes = n, n;
};
m.exports = C();
var d = m.exports;
const v = T(d), i = S({ __proto__: null, default: v }, [d]), r = i, w = r.array, k = r.bigint, E = r.bool, R = r.func, W = r.number, N = r.object, D = r.string, K = r.symbol, L = r.any, F = r.arrayOf, M = r.element, z = r.elementType, A = r.instanceOf, I = r.node, G = r.objectOf, V = r.oneOf, U = r.oneOfType, q = r.shape, B = r.exact, H = r.checkPropTypes, Y = r.resetWarningCache, $ = r.PropTypes, J = Reflect.get(i, "default") ?? i, Q = Object.freeze(Object.defineProperty({ __proto__: null, PropTypes: $, any: L, array: w, arrayOf: F, bigint: k, bool: E, checkPropTypes: H, default: J, element: M, elementType: z, exact: B, func: R, instanceOf: A, node: I, number: W, object: N, objectOf: G, oneOf: V, oneOfType: U, resetWarningCache: Y, shape: q, string: D, symbol: K }, Symbol.toStringTag, { value: "Module" })), l = "__mf_module_cache__";
globalThis[l] || (globalThis[l] = { share: {}, remote: {} });
(_a = globalThis[l]).share || (_a.share = {});
(_b = globalThis[l]).remote || (_b.remote = {});
const c = globalThis[l];
for (const e of Object.keys(c.share)) if (e.startsWith("default:")) {
  const t = e.slice(8);
  c.share[t] === void 0 && (c.share[t] = c.share[e]);
} else if (!e.includes(":")) {
  const t = "default:" + e;
  c.share[t] === void 0 && (c.share[t] = c.share[e]);
}
const X = (e, t) => {
  const n = e[t.canonical];
  if (n !== void 0) return n;
  const a = t.aliases || [];
  for (const o of a) {
    if (!Object.prototype.hasOwnProperty.call(e, o)) continue;
    const s = e[o];
    if (s !== void 0) return e[t.canonical] = s, s;
  }
}, p = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), Z = (e) => {
  let t = e[p];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, p, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, ee = (e, t, n) => {
  var _a2;
  const a = Z(e);
  (a[_a2 = t.canonical] || (a[_a2] = /* @__PURE__ */ new Set())).add(n);
}, u = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), te = (e) => {
  let t = e[u];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, u, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, ne = (e, t, n, a) => {
  var _a2;
  e[t.canonical] = n;
  const o = t.aliases || [];
  for (const f of o) Object.defineProperty(e, f, { value: n, enumerable: true, configurable: true, writable: true });
  e[u], te(e)[t.canonical] = a;
  const s = (_a2 = e[p]) == null ? void 0 : _a2[t.canonical];
  if (s) for (const f of s) f(n);
  return n;
}, re = (e) => {
  const t = (() => {
    let n = e;
    for (let a = 0; a < 5; a++) {
      const o = n == null ? void 0 : n.default;
      if (!o || typeof o != "object") break;
      const s = Object.keys(n).filter((f) => f !== "default").map((f) => n[f]);
      if (s.length > 0 && s.some((f) => f !== void 0)) break;
      n = o;
    }
    return n;
  })();
  return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
};
let _ = X(c.share, { canonical: "default:prop-types", aliases: ["prop-types"] });
_ === void 0 && (_ = re(Q), ne(c.share, { canonical: "default:prop-types", aliases: ["prop-types"] }, _, "vis2energyWidgets"));
let ae;
const g = (e) => {
  e.array, e.bigint, e.bool, e.func, e.number, e.object, e.string, e.symbol, e.any, e.arrayOf, e.element, e.elementType, e.instanceOf, e.node, e.objectOf, e.oneOf, e.oneOfType, e.shape, e.exact, e.checkPropTypes, e.resetWarningCache, e.PropTypes, ae = (() => {
    let t = e;
    for (let n = 0; n < 5; n++) {
      const a = t == null ? void 0 : t.default;
      if (!a || typeof a != "object") return a ?? t;
      t = a;
    }
    return t;
  })();
};
ee(c.share, { canonical: "default:prop-types" }, g);
g(_);
export {
  ae as _,
  Q as a
};
