var _a, _b;
import { a as c } from "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BrPVjzm9.js";
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
const _ = c, Z = _.Children, ee = _.Component, te = _.Fragment, _e = _.Profiler, re = _.PureComponent, ne = _.StrictMode, se = _.Suspense, ae = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = _.act, le = _.cloneElement, ue = _.createContext, oe = _.createElement, ce = _.createFactory, ie = _.createRef, me = _.forwardRef, ge = _.isValidElement, de = _.lazy, Ee = _.memo, be = _.startTransition, Se = _.unstable_act, ye = _.useCallback, pe = _.useContext, he = _.useDebugValue, Oe = _.useDeferredValue, Re = _.useEffect, Ce = _.useId, $e = _.useImperativeHandle, Te = _.useInsertionEffect, Ie = _.useLayoutEffect, De = _.useMemo, Le = _.useReducer, Ne = _.useRef, Pe = _.useState, je = _.useSyncExternalStore, we = _.useTransition, xe = _.version, ve = Reflect.get(c, "default") ?? c, Ae = Object.freeze(Object.defineProperty({ __proto__: null, Children: Z, Component: ee, Fragment: te, Profiler: _e, PureComponent: re, StrictMode: ne, Suspense: se, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ae, act: fe, cloneElement: le, createContext: ue, createElement: oe, createFactory: ce, createRef: ie, default: ve, forwardRef: me, isValidElement: ge, lazy: de, memo: Ee, startTransition: be, unstable_act: Se, useCallback: ye, useContext: pe, useDebugValue: he, useDeferredValue: Oe, useEffect: Re, useId: Ce, useImperativeHandle: $e, useInsertionEffect: Te, useLayoutEffect: Ie, useMemo: De, useReducer: Le, useRef: Ne, useState: Pe, useSyncExternalStore: je, useTransition: we, version: xe }, Symbol.toStringTag, { value: "Module" })), o = "__mf_module_cache__";
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
const Ve = (e, t) => {
  const r = e[t.canonical];
  if (r !== void 0) return r;
  const n = t.aliases || [];
  for (const s of n) {
    if (!Object.prototype.hasOwnProperty.call(e, s)) continue;
    const a = e[s];
    if (a !== void 0) return e[t.canonical] = a, a;
  }
}, i = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), Me = (e) => {
  let t = e[i];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, i, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, Fe = (e, t, r) => {
  var _a2;
  const n = Me(e);
  (n[_a2 = t.canonical] || (n[_a2] = /* @__PURE__ */ new Set())).add(r);
}, m = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), Ue = (e) => {
  let t = e[m];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, m, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, ke = (e, t, r, n) => {
  var _a2;
  e[t.canonical] = r;
  const s = t.aliases || [];
  for (const l of s) Object.defineProperty(e, l, { value: r, enumerable: true, configurable: true, writable: true });
  e[m], Ue(e)[t.canonical] = n;
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
let u = Ve(f.share, { canonical: "default:react", aliases: ["react"] });
u === void 0 && (u = We(Ae), ke(f.share, { canonical: "default:react", aliases: ["react"] }, u, "vis2energyWidgets"));
let g, d, E, b, S, y, p, h, O, R, C, $, T, I, D, L, N, P, j, w, x, v, A, V, M, F, U, k, W, z, K, H, Y, B, G, q, J;
const Q = (e) => {
  const t = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  if (t && "A" in t) {
    let r = t.A;
    Object.defineProperty(t, "A", { configurable: true, enumerable: true, get: () => r, set: (n) => {
      n && typeof n.getOwner != "function" && (n.getOwner = () => null), r = n;
    } }), t.A = r;
  }
  d = e.Children, E = e.Component, b = e.Fragment, S = e.Profiler, y = e.PureComponent, p = e.StrictMode, h = e.Suspense, O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = e.act, C = e.cloneElement, $ = e.createContext, T = e.createElement, I = e.createFactory, D = e.createRef, L = e.forwardRef, N = e.isValidElement, P = e.lazy, j = e.memo, w = e.startTransition, x = e.unstable_act, v = e.useCallback, A = e.useContext, V = e.useDebugValue, M = e.useDeferredValue, F = e.useEffect, U = e.useId, k = e.useImperativeHandle, W = e.useInsertionEffect, z = e.useLayoutEffect, K = e.useMemo, H = e.useReducer, Y = e.useRef, B = e.useState, G = e.useSyncExternalStore, q = e.useTransition, J = e.version, g = (() => {
    let r = e;
    for (let n = 0; n < 5; n++) {
      const s = r == null ? void 0 : r.default;
      if (!s || typeof s != "object") return s ?? r;
      r = s;
    }
    return r;
  })();
};
Fe(f.share, { canonical: "default:react" }, Q);
Q(u);
const ze = u, He = X({ __proto__: null, get Children() {
  return d;
}, get Component() {
  return E;
}, get Fragment() {
  return b;
}, get Profiler() {
  return S;
}, get PureComponent() {
  return y;
}, get StrictMode() {
  return p;
}, get Suspense() {
  return h;
}, get __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
  return O;
}, get act() {
  return R;
}, get cloneElement() {
  return C;
}, get createContext() {
  return $;
}, get createElement() {
  return T;
}, get createFactory() {
  return I;
}, get createRef() {
  return D;
}, get default() {
  return g;
}, get forwardRef() {
  return L;
}, get isValidElement() {
  return N;
}, get lazy() {
  return P;
}, get memo() {
  return j;
}, get startTransition() {
  return w;
}, get unstable_act() {
  return x;
}, get useCallback() {
  return v;
}, get useContext() {
  return A;
}, get useDebugValue() {
  return V;
}, get useDeferredValue() {
  return M;
}, get useEffect() {
  return F;
}, get useId() {
  return U;
}, get useImperativeHandle() {
  return k;
}, get useInsertionEffect() {
  return W;
}, get useLayoutEffect() {
  return z;
}, get useMemo() {
  return K;
}, get useReducer() {
  return H;
}, get useRef() {
  return Y;
}, get useState() {
  return B;
}, get useSyncExternalStore() {
  return G;
}, get useTransition() {
  return q;
}, get version() {
  return J;
} }, [ze]);
export {
  He as R,
  z as _,
  $ as a,
  L as b,
  A as c,
  T as d,
  b as e,
  Y as f,
  K as g,
  N as h,
  F as i,
  v as j,
  B as k,
  d as l,
  C as m,
  j as n,
  g as o,
  k as p,
  J as q,
  E as r,
  y as s,
  H as t,
  D as u,
  Ae as v
};
