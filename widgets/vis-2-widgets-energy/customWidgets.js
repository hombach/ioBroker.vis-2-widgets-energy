import { _ as ve } from "./assets/preload-helper-PPVm8Dsz.js";
import { h as Ke, i as Be, __tla as __tla_0 } from "./assets/index-BrOa4hLN.js";
let nr, rr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a, _b;
  const We = Ke.share;
  typeof __VUE_HMR_RUNTIME__ > "u" && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  const pe = "__mf_init__virtual:mf:__mfe_internal__vis2energyWidgets__mf_owner__1__mf_v__runtimeInit__mf_v__.js__";
  let ne = globalThis[pe];
  if (!ne) {
    let s, a;
    const d = new Promise((_, w) => {
      s = _, a = w;
    });
    ne = globalThis[pe] = {
      initPromise: d,
      initResolve: s,
      initReject: a
    };
  }
  const Ge = ne.initResolve, J = "__mf_module_cache__";
  globalThis[J] || (globalThis[J] = {
    share: {},
    remote: {}
  });
  (_a = globalThis[J]).share || (_a.share = {});
  (_b = globalThis[J]).remote || (_b.remote = {});
  const f = globalThis[J];
  for (const s of Object.keys(f.share)) if (s.startsWith("default:")) {
    const a = s.slice(8);
    f.share[a] === void 0 && (f.share[a] = f.share[s]);
  } else if (!s.includes(":")) {
    const a = "default:" + s;
    f.share[a] === void 0 && (f.share[a] = f.share[s]);
  }
  const he = {}, He = Array.isArray("default") ? "default" : [
    "default"
  ], _e = "default", I = "vis2energyWidgets";
  let H, U;
  async function oe(s) {
    for (let a = 0; ; a++) try {
      return await s();
    } catch (d) {
      throw d;
    }
  }
  const ge = /* @__PURE__ */ Symbol("mf.originalSharedProvider"), Ue = {
    emit: (s) => s
  }, qe = (s, a) => {
    if (a !== "version-first") return s;
    const d = {};
    for (const [_, w] of Object.entries(s)) d[_] = Object.assign({}, w, {
      [ge]: w
    });
    return d;
  }, re = (s, a) => {
    if (!a) return;
    const d = Object.entries(s || {}), _ = d.find(([, g]) => g === a);
    if (_) return {
      version: _[0],
      provider: a,
      registered: true
    };
    if (typeof a.version == "string" && a.version) return {
      version: a.version,
      provider: a,
      registered: false
    };
    const w = d.filter(([, g]) => g === a || !!(a.from && (g == null ? void 0 : g.from) === a.from));
    if (w.length === 1) return {
      version: w[0][0],
      provider: a,
      registered: false
    };
  }, te = (s, a, d, _) => {
    var _a2;
    if (!s || !d) return;
    const w = Array.isArray(d.scope) ? d.scope : [
      d.scope || "default"
    ], g = qe(s, _), E = {};
    for (const T of w) E[T || "default"] = {
      [a]: g
    };
    const S = (_a2 = We.getRegisteredShare(E, a, {
      ...d,
      scope: w,
      strategy: _
    }, Ue)) == null ? void 0 : _a2.shared;
    return (S == null ? void 0 : S[ge]) || S;
  }, q = (s, a, d, _) => {
    const w = (S) => x(S, d), g = Object.fromEntries(Object.entries(s || {}).filter(([, S]) => !w(S)));
    (d == null ? void 0 : d.version) && (g[d.version] || (g[d.version] = d));
    const E = te(g, a, d, _);
    return w(E) ? void 0 : E;
  }, x = (s, a) => s === a || !!((a == null ? void 0 : a.from) && (s == null ? void 0 : s.from) === a.from), Je = (s, a, d, _, w, g, E, S, T) => {
    var _a2, _b2, _c;
    if (!S) return;
    const V = (_b2 = (_a2 = a == null ? void 0 : a.options) == null ? void 0 : _a2.shared) == null ? void 0 : _b2[w], A = Array.isArray(V) ? V.find((M) => (M == null ? void 0 : M.version) === g) : void 0, D = ((S == null ? void 0 : S.from) === ((_c = a == null ? void 0 : a.options) == null ? void 0 : _c.name) ? S : void 0) || (x(A, S) ? A : a ? void 0 : S);
    return D && s.some((M) => {
      var _a3, _b3;
      return M !== a && ((_a3 = M == null ? void 0 : M.options) == null ? void 0 : _a3.name) === (E == null ? void 0 : E.from) && ((_b3 = M == null ? void 0 : M.shareScopeMap) == null ? void 0 : _b3[_]) === d;
    }) ? D : void 0;
  }, Qe = (s, a, d, _, w, g, E, S, T) => {
    const V = g.registered ? Je(s, a, d, _, w, g.version, g.provider, S) : void 0, A = V || E;
    if (A && !(g.registered && !x(A, S))) return {
      provider: A,
      scopeRootProvider: V
    };
  };
  async function Xe() {
    return H || (H = oe(() => ve(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__vis2energyWidgets__mf_owner__1-wsTtZ1GN.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)).catch((s) => {
      throw H = void 0, s;
    })), H;
  }
  async function Ye() {
    return U || (U = oe(() => ve(() => import("./assets/virtualExposes-B7wUfbGX.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)).then((s) => s.default ?? s).catch((s) => {
      throw U = void 0, s;
    })), U;
  }
  rr = async function(s = {}, a = []) {
    var _a2, _b2, _c, _d, _e2;
    const d = (r, e, n, t) => {
      const i = (Array.isArray(t) ? t[0] : t) || "default", c = e || !n ? r : r + "@" + n, u = {
        canonical: i + ":" + c
      };
      return i === "default" && (u.aliases = [
        c
      ]), u;
    }, _ = (r, e) => {
      const n = r[e.canonical];
      if (n !== void 0) return n;
      const t = e.aliases || [];
      for (const o of t) {
        if (!Object.prototype.hasOwnProperty.call(r, o)) continue;
        const i = r[o];
        if (i !== void 0) return r[e.canonical] = i, i;
      }
    }, w = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), g = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), E = (r) => {
      let e = r[g];
      return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(r, g, {
        value: e,
        enumerable: false,
        configurable: false,
        writable: false
      })), e;
    }, S = (r, e) => {
      var _a3;
      return (_a3 = r[g]) == null ? void 0 : _a3[e.canonical];
    }, T = (r, e, n, t) => {
      var _a3;
      r[e.canonical] = n;
      const o = e.aliases || [];
      for (const u of o) Object.defineProperty(r, u, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
      const i = r[g];
      t === void 0 ? i && delete i[e.canonical] : E(r)[e.canonical] = t;
      const c = (_a3 = r[w]) == null ? void 0 : _a3[e.canonical];
      if (c) for (const u of c) u(n);
      return n;
    }, V = /* @__PURE__ */ Symbol.for("module-federation.tree-shaking-shared-cache"), A = (r) => {
      let e = r[V];
      return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(r, V, {
        value: e,
        enumerable: false,
        configurable: false,
        writable: false
      })), e;
    }, ie = (r, e, n, t) => {
      var _a3;
      if (!Array.isArray(n)) return t;
      const o = [
        ...new Set(n)
      ].sort(), i = A(r), c = i[_a3 = e.canonical] || (i[_a3] = []), u = c.find((m) => m.providedExports.length === o.length && m.providedExports.every((P, h) => P === o[h]));
      return u ? u.value = t : c.push({
        providedExports: o,
        value: t
      }), t;
    }, D = /* @__PURE__ */ Symbol.for("module-federation.tree-shaking-shared-selection-cache"), se = (r) => {
      let e = r[D];
      return e === void 0 && (e = /* @__PURE__ */ Object.create(null), Object.defineProperty(r, D, {
        value: e,
        enumerable: false,
        configurable: false,
        writable: false
      })), e;
    }, M = (r, e, n) => {
      var _a3, _b3;
      const t = _(r, e);
      return t !== void 0 ? t : (_b3 = (_a3 = r[D]) == null ? void 0 : _a3[e.canonical]) == null ? void 0 : _b3[n];
    }, Se = (r, e, n, t) => {
      var _a3;
      const o = se(r), i = o[_a3 = e.canonical] || (o[_a3] = /* @__PURE__ */ Object.create(null));
      return i[n] = t, t;
    }, Q = ((_a2 = globalThis.__FEDERATION__) == null ? void 0 : _a2.__INSTANCES__) || [], ye = (_b2 = a.find((r) => r == null ? void 0 : r.from)) == null ? void 0 : _b2.from, be = Q.find((r) => {
      var _a3, _b3;
      return ((_a3 = r == null ? void 0 : r.options) == null ? void 0 : _a3.name) === ye && ((_b3 = r == null ? void 0 : r.shareScopeMap) == null ? void 0 : _b3.default) === s;
    }) || Q.find((r) => {
      var _a3, _b3;
      return ((_a3 = r == null ? void 0 : r.options) == null ? void 0 : _a3.name) !== I && ((_b3 = r == null ? void 0 : r.shareScopeMap) == null ? void 0 : _b3.default) === s;
    }), z = /* @__PURE__ */ Object.create(null);
    for (const [r, e] of Object.entries(s)) {
      const n = z[r] = /* @__PURE__ */ Object.create(null);
      for (const [t, o] of Object.entries(e)) n[t] = Object.assign({}, o);
    }
    const { usedShared: C, usedRemotes: Pe } = await Xe();
    var B = he[_e];
    if (B || (B = he[_e] = {
      from: I
    }), a.indexOf(B) >= 0) return;
    a.push(B);
    const ae = (r) => {
      let e = r;
      for (let n = 0; n < 5; n++) {
        const t = e == null ? void 0 : e.default;
        if (!t || typeof t != "object" || Object.keys(t).length === 0) break;
        const o = Object.keys(e).filter((i) => i !== "default").map((i) => e[i]);
        if (o.length > 0 && o.some((i) => i !== void 0)) break;
        e = t;
      }
      return e;
    }, je = [], Oe = typeof globalThis.window > "u" ? await Promise.all([]) : [], X = "__mf_vite_runtime_share_load_id__";
    let we = 0;
    const Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = Be({
      name: I,
      remotes: Pe,
      shared: C,
      plugins: [
        ke(),
        ...je,
        ...Oe
      ],
      shareStrategy: "version-first"
    });
    K.initShareScopeMap("default", s);
    function ke() {
      return {
        name: "vite-share-pin-lifecycle-plugin",
        resolveShare(r) {
          var _a3;
          const e = (_a3 = r.shareInfo) == null ? void 0 : _a3[X], n = e === void 0 ? void 0 : Z.get(e);
          if (!n) return r;
          const t = r.resolver;
          return r.resolver = (...o) => (n.pinned.reapply(), t(...o)), n.pinned.reveal(), r;
        }
      };
    }
    const Re = K.sharedHandler.hooks.lifecycle.resolveShare, W = /* @__PURE__ */ new WeakMap();
    Re.on((r) => {
      var _a3;
      const e = (_a3 = r.shareInfo) == null ? void 0 : _a3[X], n = r.resolver;
      if (typeof n != "function") return r;
      const t = (...o) => {
        const i = n(...o), c = i == null ? void 0 : i.shared;
        return c && (typeof c == "object" || typeof c == "function") && !W.has(c) && W.set(c, {
          from: c.from
        }), e !== void 0 && c && Y.set(e, c), i;
      };
      return r.resolver = t, r;
    });
    const Ce = (r, e, n, t) => {
      if (!r || r[e] !== n) return;
      const o = Object.assign({}, t, {
        version: t.version ?? e,
        scope: t.scope ?? (n == null ? void 0 : n.scope) ?? [
          "default"
        ],
        strategy: "loaded-first"
      }), i = t.from;
      r[e] = o;
      const c = () => n === void 0 ? r[e] === void 0 : r[e] === n;
      return {
        provider: o,
        reveal() {
          return r[e] !== o ? false : (n === void 0 ? delete r[e] : r[e] = n, true);
        },
        reapply() {
          return c() ? (r[e] = o, true) : false;
        },
        release(u, m = true) {
          return t.from = i, r[e] !== o ? !m && c() : m ? u ? (o.from = i, u && o.lib && (o.loaded = true), t.strategy === void 0 ? delete o.strategy : o.strategy = t.strategy, true) : (n === void 0 ? delete r[e] : r[e] = n, false) : (n === void 0 ? delete r[e] : r[e] = n, true);
        }
      };
    }, Ee = (r) => Object.entries(r || {}).map(([e, n]) => ({
      provider: n,
      version: e,
      from: n.from,
      registered: true
    })), Ie = (r, e) => {
      if (e === void 0) return;
      let n;
      for (const t of r) {
        const o = t.provider, i = o.treeShaking || o;
        if (!(t.loadedFactory !== e && o.lib !== e && i.lib !== e)) {
          if (n) return;
          n = t;
        }
      }
      return n;
    }, xe = async (r, e, n) => {
      const t = ++we;
      Z.set(t, {
        pinned: n
      });
      try {
        const o = await K.loadShare(r, {
          customShareInfo: {
            shareConfig: e,
            [X]: t
          }
        });
        return {
          factory: o === false ? void 0 : o,
          selectedProvider: Y.get(t)
        };
      } finally {
        Y.delete(t), Z.delete(t);
      }
    }, ce = async (r, e, n, t, o, i, c = true) => {
      const u = i.from, m = Ce(n, t, o, i);
      if (!m) return;
      let P;
      try {
        P = await xe(r, e, m);
      } catch (b) {
        throw m.release(false), b;
      }
      const h = P == null ? void 0 : P.factory;
      if (h === void 0) {
        m.release(false);
        return;
      }
      const l = Ee(n), j = m.provider.treeShaking || m.provider, O = m.provider.lib === h || j.lib === h;
      if (!c && O) {
        const b = l.findIndex((k) => k.provider === m.provider);
        b !== -1 && l.splice(b, 1);
      }
      !c && !l.some((b) => b.provider === i) && l.push({
        provider: i,
        version: t,
        from: u,
        registered: false,
        loadedFactory: O ? h : void 0
      });
      const y = !c && P.selectedProvider === m.provider && O ? i : P.selectedProvider;
      if (y && !l.some((b) => b.provider === y)) {
        const b = W.get(y), k = typeof y.version == "string" && y.version ? y.version : t;
        l.push({
          provider: y,
          version: k,
          from: b ? b.from : y.from,
          registered: (n == null ? void 0 : n[k]) === y,
          loadedFactory: h
        });
      }
      const v = l.find((b) => b.provider === y) ?? Ie(l, h);
      if (!m.release(true, (v == null ? void 0 : v.provider) === m.provider) || !v) return;
      const p = W.get(v.provider);
      v.from = v.provider === i ? u : p ? p.from : v.provider.from, p && (v.provider.from = p.from);
      const N = typeof h == "function" ? h() : h, L = await Promise.resolve(N);
      if (!(v.registered && (n == null ? void 0 : n[v.version]) !== v.provider)) return {
        provider: v.provider,
        selection: v,
        resolved: L
      };
    }, $ = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Map(), Te = async (r, e, n) => {
      var _a3;
      const t = !!((_a3 = e.shareConfig) == null ? void 0 : _a3.singleton);
      if (!t && e.canLiveRebind !== false) try {
        const o = q(n, r, e, "version-first"), i = re(n, o);
        if (!i) return;
        const { version: c } = i;
        if (!t && c !== e.version || !o.lib && !o.loading && !(o.loaded && typeof o.get == "function")) return;
        const u = d(r, t, e.version, e.scope);
        if (_(f.share, u) !== void 0) return;
        const m = s[r], P = m == null ? void 0 : m[c];
        if (i.registered && !x(P, o)) return;
        let h, l = o.lib;
        if (!l && o.loading && (l = await o.loading), !l && o.loaded && typeof o.get == "function" && (l = await o.get()), !l) return;
        const j = typeof l == "function" ? l() : l, O = await Promise.resolve(j), y = i.registered ? P : o;
        h = {
          provider: y,
          selection: {
            provider: y,
            version: c,
            from: o.from,
            registered: i.registered
          },
          resolved: O
        };
        const v = h == null ? void 0 : h.provider, R = h == null ? void 0 : h.selection;
        if (!R) return;
        const p = h == null ? void 0 : h.resolved;
        if (p === void 0 || _(f.share, u) !== void 0 || R.registered && (m == null ? void 0 : m[R.version]) !== v) return;
        T(f.share, u, ae(p), R.from), $.add(v);
      } catch (o) {
        console.error('[Module Federation] Failed to bridge materialized shared module "' + r + '"', o);
      }
    }, fe = async (r, e, n, t, o) => {
      var _a3, _b3;
      try {
        const i = d(r, (_a3 = e.shareConfig) == null ? void 0 : _a3.singleton, e.version, e.scope), c = _(f.share, i), u = S(f.share, i), m = q(n, r, e, "version-first"), P = m || te(n, r, e, "version-first") || e, h = re(n, P);
        if (!h) return;
        const l = x(P, e), { version: j } = h, O = t == null ? void 0 : t[j], y = Qe(Q, be, s, "default", r, h, m, O, "version-first");
        if (!y && !l) return;
        const { provider: v, scopeRootProvider: R } = y || {
          provider: P,
          scopeRootProvider: void 0
        };
        if (!((_b3 = e.shareConfig) == null ? void 0 : _b3.singleton) || e.canLiveRebind === false || c !== void 0 && u !== I) return;
        const p = s[r], N = p == null ? void 0 : p[j];
        if (h.registered && !R && !x(N, v)) return;
        const L = await ce(r, e.shareConfig, p, j, N, v, h.registered && !l), b = L == null ? void 0 : L.provider, k = L == null ? void 0 : L.selection;
        if (!k || x(b, e) || o && (o.version !== k.version || !x({
          from: k.from
        }, o.provider)) || $.has(b)) return;
        const me = L == null ? void 0 : L.resolved;
        if (me === void 0) return;
        const Ne = _(f.share, i), De = S(f.share, i);
        if (Ne !== void 0 && De !== I || k.registered && (p == null ? void 0 : p[k.version]) !== b) return;
        o || ee.set(r, {
          version: k.version,
          provider: {
            from: k.from
          }
        }), $.add(b);
        const ze = ae(me);
        T(f.share, i, ze, k.from);
      } catch (i) {
        console.error('[Module Federation] Failed to bridge external shared module "' + r + '"', i);
      }
    };
    for (const [r, e] of Object.entries(C)) e.treeShaking || await Te(r, e, z[r]);
    for (const [r, e] of Object.entries(C)) {
      if (e.treeShaking) continue;
      const n = d(r, (_c = e.shareConfig) == null ? void 0 : _c.singleton, e.version, e.scope);
      if (_(f.share, n) !== void 0) continue;
      const t = d(r, true, e.version, e.scope), o = _(f.share, t);
      o !== void 0 && T(f.share, n, o, S(f.share, t));
    }
    const F = [
      "react",
      "react/jsx-runtime",
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
    ].filter((r) => C[r] !== void 0), de = (r) => r.startsWith("@") ? r.split("/").slice(0, 2).join("/") : r.split("/")[0];
    for (const r of Object.keys(C)) {
      if (F.includes(r)) continue;
      const e = de(r), n = F.indexOf(e);
      if (n === -1) {
        F.push(r);
        continue;
      }
      let t = n;
      for (; t > 0 && de(F[t - 1]) === e && F[t - 1] !== e; ) t--;
      F.splice(t, 0, r);
    }
    var le = async (r) => {
      var _a3, _b3;
      for (const e of r) {
        const n = C[e], t = d(e, (_a3 = n.shareConfig) == null ? void 0 : _a3.singleton, n.version, n.scope);
        if (((_b3 = n.shareConfig) == null ? void 0 : _b3.import) === false || n.treeShaking || _(f.share, t) !== void 0) continue;
        const o = d(e, true, n.version, n.scope), i = _(f.share, o);
        if (i !== void 0) {
          T(f.share, t, i, S(f.share, o));
          continue;
        }
        const c = await n.get(), u = typeof c == "function" ? c() : c, m = await Promise.resolve(u), h = ((j) => {
          let O = j;
          for (let y = 0; y < 5; y++) {
            const v = O == null ? void 0 : O.default;
            if (!v || typeof v != "object" || Object.keys(v).length === 0) break;
            const R = Object.keys(O).filter((p) => p !== "default").map((p) => O[p]);
            if (R.length > 0 && R.some((p) => p !== void 0)) break;
            O = v;
          }
          return O;
        })(m), l = h === m ? {
          ...m
        } : h;
        l.__esModule !== true && Object.defineProperty(l, "__esModule", {
          value: true,
          enumerable: false
        }), T(f.share, t, l, I);
      }
    };
    const ue = (r) => {
      var _a3, _b3;
      const e = C[r];
      if (!e.treeShaking && ((_a3 = e.shareConfig) == null ? void 0 : _a3.import) !== false) return false;
      const n = d(r, (_b3 = e.shareConfig) == null ? void 0 : _b3.singleton, e.version, e.scope);
      return e.treeShaking ? M(f.share, n, I) === void 0 && _(f.share, n) === void 0 : _(f.share, n) === void 0;
    }, Me = (r) => {
      var _a3, _b3, _c2;
      const e = C[r], n = d(r, (_a3 = e.shareConfig) == null ? void 0 : _a3.singleton, e.version, e.scope);
      return (e.treeShaking ? M(f.share, n, I) ?? _(f.share, n) : _(f.share, n)) !== void 0 ? false : e.treeShaking || ((_b3 = e.shareConfig) == null ? void 0 : _b3.import) === false ? true : !((_c2 = e.shareConfig) == null ? void 0 : _c2.singleton) || typeof q != "function" ? false : !!q(z[r], r, e, "version-first");
    }, G = F.findIndex(Me), Fe = G === -1 ? F : F.slice(0, G);
    var Le = G === -1 ? [] : F.slice(G);
    await le(Fe);
    try {
      await oe(async () => {
        await Promise.all(await K.initializeSharing("default", {
          strategy: "version-first",
          from: "build",
          initScope: a
        }));
      });
    } catch (r) {
      console.error("[Module Federation]", r);
    }
    for (const [r, e] of Object.entries(C)) e.treeShaking || await fe(r, e, s[r], z[r], void 0);
    try {
      const r = (_d = globalThis.__FEDERATION__) == null ? void 0 : _d.__SHARE__, e = /* @__PURE__ */ Object.create(null);
      if (r) for (const [, n] of Object.entries(r)) for (const t of He) {
        const o = n == null ? void 0 : n[t];
        if (o) for (const [i, c] of Object.entries(o)) {
          const u = C == null ? void 0 : C[i], m = z[i], P = ee.get(i);
          if (!u || !m || !P || u.treeShaking) continue;
          const h = e[i] || (e[i] = /* @__PURE__ */ Object.create(null));
          for (const [l, j] of Object.entries(c)) {
            if (!j.lib || P.version !== l || !x(j, P.provider)) continue;
            const O = m[l];
            (j === O || (O == null ? void 0 : O.from) && j.from === O.from) && (j === u || u.from && j.from === u.from || h[l] === void 0 && (h[l] = j));
          }
        }
      }
      for (const [n, t] of Object.entries(e)) await fe(n, C[n], t, z[n], ee.get(n));
    } catch (r) {
      console.error("[Module Federation] Failed to bridge external shared modules", r);
    }
    const Ve = async () => {
    }, Ae = async (r, e) => {
      var _a3, _b3;
      const n = d(r, (_a3 = e.shareConfig) == null ? void 0 : _a3.singleton, e.version, e.scope), t = e.treeShaking ? M(f.share, n, I) : _(f.share, n);
      if (((_b3 = e.shareConfig) == null ? void 0 : _b3.import) !== false || t !== void 0) return;
      const o = (R) => {
        let p = R;
        for (let N = 0; N < 5; N++) {
          const L = p == null ? void 0 : p.default;
          if (!L || typeof L != "object" || Object.keys(L).length === 0) break;
          const b = Object.keys(p).filter((k) => k !== "default").map((k) => p[k]);
          if (b.length > 0 && b.some((k) => k !== void 0)) break;
          p = L;
        }
        return p;
      }, i = s == null ? void 0 : s[r], c = te(i, r, e, "version-first") || e, u = re(i, c);
      if (!u) return;
      const { version: m } = u, P = i == null ? void 0 : i[m], h = await ce(r, e.shareConfig, i, m, P, c, u.registered && !x(c, e)), l = h == null ? void 0 : h.selection, j = h == null ? void 0 : h.provider, O = h == null ? void 0 : h.resolved;
      if (!l || x(j, e) || O === void 0 || (e.treeShaking ? M(f.share, n, I) : _(f.share, n)) !== void 0 || l.registered && (i == null ? void 0 : i[l.version]) !== j) return;
      const v = o(O);
      if (e.treeShaking) {
        const R = e.treeShaking.providedExports ?? e.treeShaking.usedExports ?? [];
        ie(f.share, n, R, v), Se(f.share, n, I, v);
      } else T(f.share, n, v, l.from);
    };
    for (const r of Le) {
      const e = C[r];
      if (ue(r) && (e.treeShaking ? await Ve() : ((_e2 = e.shareConfig) == null ? void 0 : _e2.import) === false && await Ae(r, e)), ue(r)) break;
      await le([
        r
      ]);
    }
    return Ge(K), K;
  };
  nr = async function(s) {
    const a = await Ye();
    if (!(s in a)) throw new Error(`[Module Federation] Module ${s} does not exist in container.`);
    return f.pendingShareLoads && await Promise.all(f.pendingShareLoads), a[s]().then((d) => () => d);
  };
});
export {
  __tla,
  nr as get,
  rr as init
};
