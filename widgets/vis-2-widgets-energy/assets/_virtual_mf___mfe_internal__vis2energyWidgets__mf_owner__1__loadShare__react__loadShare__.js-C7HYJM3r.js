var _a, _b;
import { a as c } from "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
function X(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n) if (s !== "default" && !(s in e)) {
        const a = Object.getOwnPropertyDescriptor(n, s);
        a && Object.defineProperty(e, s, a.get ? a : { enumerable: true, get: () => n[s] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const _ = c, Z = _.Children, ee = _.Component, te = _.Fragment, _e = _.Profiler, re = _.PureComponent, ne = _.StrictMode, se = _.Suspense, ae = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = _.act, le = _.cloneElement, ue = _.createContext, oe = _.createElement, ce = _.createFactory, ie = _.createRef, me = _.forwardRef, ge = _.isValidElement, de = _.lazy, be = _.memo, Ee = _.startTransition, Se = _.unstable_act, ye = _.useCallback, pe = _.useContext, he = _.useDebugValue, Ce = _.useDeferredValue, Oe = _.useEffect, Re = _.useId, $e = _.useImperativeHandle, Te = _.useInsertionEffect, Ie = _.useLayoutEffect, xe = _.useMemo, Le = _.useReducer, je = _.useRef, De = _.useState, Pe = _.useSyncExternalStore, ve = _.useTransition, we = _.version, Ne = Reflect.get(c, "default") ?? c, Ve = Object.freeze(Object.defineProperty({ __proto__: null, Children: Z, Component: ee, Fragment: te, Profiler: _e, PureComponent: re, StrictMode: ne, Suspense: se, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ae, act: fe, cloneElement: le, createContext: ue, createElement: oe, createFactory: ce, createRef: ie, default: Ne, forwardRef: me, isValidElement: ge, lazy: de, memo: be, startTransition: Ee, unstable_act: Se, useCallback: ye, useContext: pe, useDebugValue: he, useDeferredValue: Ce, useEffect: Oe, useId: Re, useImperativeHandle: $e, useInsertionEffect: Te, useLayoutEffect: Ie, useMemo: xe, useReducer: Le, useRef: je, useState: De, useSyncExternalStore: Pe, useTransition: ve, version: we }, Symbol.toStringTag, { value: "Module" })), o = "__mf_module_cache__";
globalThis[o] || (globalThis[o] = { share: {}, remote: {} });
(_a = globalThis[o]).share || (_a.share = {});
(_b = globalThis[o]).remote || (_b.remote = {});
const f = globalThis[o];
for (const e of Object.keys(f.share)) if (e.startsWith("default:")) {
  const t = e.slice(8);
  f.share[t] === void 0 && (f.share[t] = f.share[e]);
} else if (!e.includes(":")) {
  const t = "default:" + e;
  f.share[t] === void 0 && (f.share[t] = f.share[e]);
}
const Me = (e, t) => {
  const r = e[t.canonical];
  if (r !== void 0) return r;
  const n = t.aliases || [];
  for (const s of n) {
    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
    const a = e[s];
    if (a !== void 0) return e[t.canonical] = a, a;
  }
}, i = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), Fe = (e) => {
  let t = e[i];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, i, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, ke = (e, t, r) => {
  var _a2;
  const n = Fe(e);
  (n[_a2 = t.canonical] || (n[_a2] = /* @__PURE__ */ new Set())).add(r);
}, m = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), ze = (e) => {
  let t = e[m];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, m, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, Ue = (e, t, r, n) => {
  var _a2;
  e[t.canonical] = r;
  const s = t.aliases || [];
  for (const l of s) Object.defineProperty(e, l, { value: r, enumerable: true, configurable: true, writable: true });
  e[m], ze(e)[t.canonical] = n;
  const a = (_a2 = e[i]) == null ? void 0 : _a2[t.canonical];
  if (a) for (const l of a) l(r);
  return r;
}, We = (e) => {
  const t = (() => {
    let r = e;
    for (let n = 0; n < 5; n++) {
      const s = r == null ? void 0 : r.default;
      if (!s || typeof s != "object") break;
      const a = Object.keys(r).filter((l) => l !== "default").map((l) => r[l]);
      if (a.length > 0 && a.some((l) => l !== void 0)) break;
      r = s;
    }
    return r;
  })();
  return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
};
let u = Me(f.share, { canonical: "default:react", aliases: ["react"] });
u === void 0 && (u = We(Ve), Ue(f.share, { canonical: "default:react", aliases: ["react"] }, u, "vis2energyWidgets"));
let g, d, b, E, S, y, p, h, C, O, R, $, T, I, x, L, j, D, P, v, w, N, V, M, F, k, z, U, W, A, K, B, H, Y, G, q, J;
const Q = (e) => {
  d = e.Children, b = e.Component, E = e.Fragment, S = e.Profiler, y = e.PureComponent, p = e.StrictMode, h = e.Suspense, C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = e.act, R = e.cloneElement, $ = e.createContext, T = e.createElement, I = e.createFactory, x = e.createRef, L = e.forwardRef, j = e.isValidElement, D = e.lazy, P = e.memo, v = e.startTransition, w = e.unstable_act, N = e.useCallback, V = e.useContext, M = e.useDebugValue, F = e.useDeferredValue, k = e.useEffect, z = e.useId, U = e.useImperativeHandle, W = e.useInsertionEffect, A = e.useLayoutEffect, K = e.useMemo, B = e.useReducer, H = e.useRef, Y = e.useState, G = e.useSyncExternalStore, q = e.useTransition, J = e.version, g = (() => {
    let t = e;
    for (let r = 0; r < 5; r++) {
      const n = t == null ? void 0 : t.default;
      if (!n || typeof n != "object") return n ?? t;
      t = n;
    }
    return t;
  })();
};
ke(f.share, { canonical: "default:react" }, Q);
Q(u);
const Ae = u, Be = X({ __proto__: null, get Children() {
  return d;
}, get Component() {
  return b;
}, get Fragment() {
  return E;
}, get Profiler() {
  return S;
}, get PureComponent() {
  return y;
}, get StrictMode() {
  return p;
}, get Suspense() {
  return h;
}, get __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
  return C;
}, get act() {
  return O;
}, get cloneElement() {
  return R;
}, get createContext() {
  return $;
}, get createElement() {
  return T;
}, get createFactory() {
  return I;
}, get createRef() {
  return x;
}, get default() {
  return g;
}, get forwardRef() {
  return L;
}, get isValidElement() {
  return j;
}, get lazy() {
  return D;
}, get memo() {
  return P;
}, get startTransition() {
  return v;
}, get unstable_act() {
  return w;
}, get useCallback() {
  return N;
}, get useContext() {
  return V;
}, get useDebugValue() {
  return M;
}, get useDeferredValue() {
  return F;
}, get useEffect() {
  return k;
}, get useId() {
  return z;
}, get useImperativeHandle() {
  return U;
}, get useInsertionEffect() {
  return W;
}, get useLayoutEffect() {
  return A;
}, get useMemo() {
  return K;
}, get useReducer() {
  return B;
}, get useRef() {
  return H;
}, get useState() {
  return Y;
}, get useSyncExternalStore() {
  return G;
}, get useTransition() {
  return q;
}, get version() {
  return J;
} }, [Ae]);
export {
  Be as R,
  A as _,
  $ as a,
  L as b,
  V as c,
  T as d,
  E as e,
  H as f,
  K as g,
  j as h,
  k as i,
  N as j,
  Y as k,
  d as l,
  R as m,
  P as n,
  g as o,
  U as p,
  J as q,
  b as r,
  y as s,
  B as t,
  x as u,
  Ve as v
};
