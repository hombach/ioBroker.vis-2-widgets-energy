var _a, _b;
function W(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n) if (o !== "default" && !(o in e)) {
        const f = Object.getOwnPropertyDescriptor(n, o);
        f && Object.defineProperty(e, o, f.get ? f : { enumerable: true, get: () => n[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function K(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var I = { exports: {} }, u = {};
var d = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.portal"), B = /* @__PURE__ */ Symbol.for("react.fragment"), H = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.provider"), J = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.memo"), ee = /* @__PURE__ */ Symbol.for("react.lazy"), P = Symbol.iterator;
function te(e) {
  return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
}
var D = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $ = Object.assign, L = {};
function y(e, t, r) {
  this.props = e, this.context = t, this.refs = L, this.updater = r || D;
}
y.prototype.isReactComponent = {};
y.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
y.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function V() {
}
V.prototype = y.prototype;
function R(e, t, r) {
  this.props = e, this.context = t, this.refs = L, this.updater = r || D;
}
var w = R.prototype = new V();
w.constructor = R;
$(w, y.prototype);
w.isPureReactComponent = true;
var T = Array.isArray, M = Object.prototype.hasOwnProperty, j = { current: null }, N = { key: true, ref: true, __self: true, __source: true };
function F(e, t, r) {
  var n, o = {}, f = null, a = null;
  if (t != null) for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (f = "" + t.key), t) M.call(t, n) && !N.hasOwnProperty(n) && (o[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) o.children = r;
  else if (1 < l) {
    for (var c = Array(l), _ = 0; _ < l; _++) c[_] = arguments[_ + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (n in l = e.defaultProps, l) o[n] === void 0 && (o[n] = l[n]);
  return { $$typeof: d, type: e, key: f, ref: a, props: o, _owner: j.current };
}
function re(e, t) {
  return { $$typeof: d, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function k(e) {
  return typeof e == "object" && e !== null && e.$$typeof === d;
}
function ne(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var x = /\/+/g;
function v(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ne("" + e.key) : t.toString(36);
}
function h(e, t, r, n, o) {
  var f = typeof e;
  (f === "undefined" || f === "boolean") && (e = null);
  var a = false;
  if (e === null) a = true;
  else switch (f) {
    case "string":
    case "number":
      a = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case d:
        case q:
          a = true;
      }
  }
  if (a) return a = e, o = o(a), e = n === "" ? "." + v(a, 0) : n, T(o) ? (r = "", e != null && (r = e.replace(x, "$&/") + "/"), h(o, t, r, "", function(_) {
    return _;
  })) : o != null && (k(o) && (o = re(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(x, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", T(e)) for (var l = 0; l < e.length; l++) {
    f = e[l];
    var c = n + v(f, l);
    a += h(f, t, r, c, o);
  }
  else if (c = te(e), typeof c == "function") for (e = c.call(e), l = 0; !(f = e.next()).done; ) f = f.value, c = n + v(f, l++), a += h(f, t, r, c, o);
  else if (f === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function m(e, t, r) {
  if (e == null) return e;
  var n = [], o = 0;
  return h(e, n, "", "", function(f) {
    return t.call(r, f, o++);
  }), n;
}
function oe(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var i = { current: null }, b = { transition: null }, ue = { ReactCurrentDispatcher: i, ReactCurrentBatchConfig: b, ReactCurrentOwner: j };
function A() {
  throw Error("act(...) is not supported in production builds of React.");
}
u.Children = { map: m, forEach: function(e, t, r) {
  m(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return m(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return m(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
u.Component = y;
u.Fragment = B;
u.Profiler = G;
u.PureComponent = R;
u.StrictMode = H;
u.Suspense = X;
u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue;
u.act = A;
u.cloneElement = function(e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = $({}, e.props), o = e.key, f = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (f = t.ref, a = j.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (c in t) M.call(t, c) && !N.hasOwnProperty(c) && (n[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) n.children = r;
  else if (1 < c) {
    l = Array(c);
    for (var _ = 0; _ < c; _++) l[_] = arguments[_ + 2];
    n.children = l;
  }
  return { $$typeof: d, type: e.type, key: o, ref: f, props: n, _owner: a };
};
u.createContext = function(e) {
  return e = { $$typeof: J, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Y, _context: e }, e.Consumer = e;
};
u.createElement = F;
u.createFactory = function(e) {
  var t = F.bind(null, e);
  return t.type = e, t;
};
u.createRef = function() {
  return { current: null };
};
u.forwardRef = function(e) {
  return { $$typeof: Q, render: e };
};
u.isValidElement = k;
u.lazy = function(e) {
  return { $$typeof: ee, _payload: { _status: -1, _result: e }, _init: oe };
};
u.memo = function(e, t) {
  return { $$typeof: Z, type: e, compare: t === void 0 ? null : t };
};
u.startTransition = function(e) {
  var t = b.transition;
  b.transition = {};
  try {
    e();
  } finally {
    b.transition = t;
  }
};
u.unstable_act = A;
u.useCallback = function(e, t) {
  return i.current.useCallback(e, t);
};
u.useContext = function(e) {
  return i.current.useContext(e);
};
u.useDebugValue = function() {
};
u.useDeferredValue = function(e) {
  return i.current.useDeferredValue(e);
};
u.useEffect = function(e, t) {
  return i.current.useEffect(e, t);
};
u.useId = function() {
  return i.current.useId();
};
u.useImperativeHandle = function(e, t, r) {
  return i.current.useImperativeHandle(e, t, r);
};
u.useInsertionEffect = function(e, t) {
  return i.current.useInsertionEffect(e, t);
};
u.useLayoutEffect = function(e, t) {
  return i.current.useLayoutEffect(e, t);
};
u.useMemo = function(e, t) {
  return i.current.useMemo(e, t);
};
u.useReducer = function(e, t, r) {
  return i.current.useReducer(e, t, r);
};
u.useRef = function(e) {
  return i.current.useRef(e);
};
u.useState = function(e) {
  return i.current.useState(e);
};
u.useSyncExternalStore = function(e, t, r) {
  return i.current.useSyncExternalStore(e, t, r);
};
u.useTransition = function() {
  return i.current.useTransition();
};
u.version = "18.3.1";
I.exports = u;
var U = I.exports;
const se = K(U), g = W({ __proto__: null, default: se }, [U]), s = g, fe = s.Children, ae = s.Component, ce = s.Fragment, le = s.Profiler, ie = s.PureComponent, _e = s.StrictMode, pe = s.Suspense, ye = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, de = s.act, me = s.cloneElement, he = s.createContext, be = s.createElement, Se = s.createFactory, Ee = s.createRef, ve = s.forwardRef, ge = s.isValidElement, Ce = s.lazy, Oe = s.memo, Re = s.startTransition, we = s.unstable_act, je = s.useCallback, ke = s.useContext, Pe = s.useDebugValue, Te = s.useDeferredValue, xe = s.useEffect, Ie = s.useId, De = s.useImperativeHandle, $e = s.useInsertionEffect, Le = s.useLayoutEffect, Ve = s.useMemo, Me = s.useReducer, Ne = s.useRef, Fe = s.useState, Ae = s.useSyncExternalStore, Ue = s.useTransition, ze = s.version, We = Reflect.get(g, "default") ?? g, Ke = Object.freeze(Object.defineProperty({ __proto__: null, Children: fe, Component: ae, Fragment: ce, Profiler: le, PureComponent: ie, StrictMode: _e, Suspense: pe, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye, act: de, cloneElement: me, createContext: he, createElement: be, createFactory: Se, createRef: Ee, default: We, forwardRef: ve, isValidElement: ge, lazy: Ce, memo: Oe, startTransition: Re, unstable_act: we, useCallback: je, useContext: ke, useDebugValue: Pe, useDeferredValue: Te, useEffect: xe, useId: Ie, useImperativeHandle: De, useInsertionEffect: $e, useLayoutEffect: Le, useMemo: Ve, useReducer: Me, useRef: Ne, useState: Fe, useSyncExternalStore: Ae, useTransition: Ue, version: ze }, Symbol.toStringTag, { value: "Module" })), E = "__mf_module_cache__";
globalThis[E] || (globalThis[E] = { share: {}, remote: {} });
(_a = globalThis[E]).share || (_a.share = {});
(_b = globalThis[E]).remote || (_b.remote = {});
const p = globalThis[E];
for (const e of Object.keys(p.share)) if (e.startsWith("default:")) {
  const t = e.slice(8);
  p.share[t] === void 0 && (p.share[t] = p.share[e]);
} else if (!e.includes(":")) {
  const t = "default:" + e;
  p.share[t] === void 0 && (p.share[t] = p.share[e]);
}
const qe = (e, t) => {
  const r = e[t.canonical];
  if (r !== void 0) return r;
  const n = t.aliases || [];
  for (const o of n) {
    if (!Object.prototype.hasOwnProperty.call(e, o)) continue;
    const f = e[o];
    if (f !== void 0) return e[t.canonical] = f, f;
  }
}, C = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), Be = (e) => {
  let t = e[C];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, C, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, He = (e, t, r) => {
  var _a2;
  const n = Be(e);
  (n[_a2 = t.canonical] || (n[_a2] = /* @__PURE__ */ new Set())).add(r);
}, O = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), Ge = (e) => {
  let t = e[O];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e, O, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, Ye = (e, t, r, n) => {
  var _a2;
  e[t.canonical] = r;
  const o = t.aliases || [];
  for (const a of o) Object.defineProperty(e, a, { value: r, enumerable: true, configurable: true, writable: true });
  e[O], Ge(e)[t.canonical] = n;
  const f = (_a2 = e[C]) == null ? void 0 : _a2[t.canonical];
  if (f) for (const a of f) a(r);
  return r;
}, Je = (e) => {
  const t = (() => {
    let r = e;
    for (let n = 0; n < 5; n++) {
      const o = r == null ? void 0 : r.default;
      if (!o || typeof o != "object") break;
      const f = Object.keys(r).filter((a) => a !== "default").map((a) => r[a]);
      if (f.length > 0 && f.some((a) => a !== void 0)) break;
      r = o;
    }
    return r;
  })();
  return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
};
let S = qe(p.share, { canonical: "default:react", aliases: ["react"] });
S === void 0 && (S = Je(Ke), Ye(p.share, { canonical: "default:react", aliases: ["react"] }, S, "vis2energyWidgets"));
let Qe;
const z = (e) => {
  e.Children, e.Component, e.Fragment, e.Profiler, e.PureComponent, e.StrictMode, e.Suspense, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, e.act, e.cloneElement, e.createContext, e.createElement, e.createFactory, e.createRef, e.forwardRef, e.isValidElement, e.lazy, e.memo, e.startTransition, e.unstable_act, e.useCallback, e.useContext, e.useDebugValue, e.useDeferredValue, e.useEffect, e.useId, e.useImperativeHandle, e.useInsertionEffect, e.useLayoutEffect, e.useMemo, e.useReducer, e.useRef, e.useState, e.useSyncExternalStore, e.useTransition, e.version, Qe = (() => {
    let t = e;
    for (let r = 0; r < 5; r++) {
      const n = t == null ? void 0 : t.default;
      if (!n || typeof n != "object") return n ?? t;
      t = n;
    }
    return t;
  })();
};
He(p.share, { canonical: "default:react" }, z);
z(S);
export {
  Qe as _,
  g as a,
  Xe as c,
  K as g
};
