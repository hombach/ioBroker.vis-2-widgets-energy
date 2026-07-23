import { _ as r } from "./preload-helper-PPVm8Dsz.js";
let f;
let __tla = (async () => {
  const c = {}, d = /* @__PURE__ */ new Set();
  let u = Promise.resolve();
  async function s(e) {
    const t = u.then(e, e);
    return u = t.then(() => {
    }, () => {
    }), t;
  }
  async function a(e) {
    if (typeof document > "u") return;
    const t = c[e] || [];
    await Promise.all(t.map((n) => {
      const o = new URL(n, import.meta.url).href;
      return d.has(o) || (d.add(o), document.querySelector(`link[rel="stylesheet"][href="${o}"]`)) ? Promise.resolve() : new Promise((l, _) => {
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = o, i.onload = () => l(), i.onerror = () => _(new Error(`[Module Federation] Failed to load CSS asset: ${o}`)), document.head.appendChild(i);
      });
    }));
  }
  f = {
    "./Consumption": async () => {
      await a("./Consumption"), await Promise.all([]);
      const e = await s(() => r(() => import("./Consumption-DN3b4Pvl.js"), [], import.meta.url)), t = e && e.__mf_remote_dependency_pending;
      t && typeof t.then == "function" && await t;
      const n = {};
      return Object.assign(n, e), Object.defineProperty(n, "__esModule", {
        value: true,
        enumerable: false
      }), n;
    },
    "./ConsumptionComparison": async () => {
      await a("./ConsumptionComparison"), await Promise.all([]);
      const e = await s(() => r(() => import("./ConsumptionComparison-BhSKRngv.js"), [], import.meta.url)), t = e && e.__mf_remote_dependency_pending;
      t && typeof t.then == "function" && await t;
      const n = {};
      return Object.assign(n, e), Object.defineProperty(n, "__esModule", {
        value: true,
        enumerable: false
      }), n;
    },
    "./Distribution": async () => {
      await a("./Distribution"), await Promise.all([]);
      const e = await s(() => r(() => import("./Distribution-Ci_tWdTA.js"), [], import.meta.url)), t = e && e.__mf_remote_dependency_pending;
      t && typeof t.then == "function" && await t;
      const n = {};
      return Object.assign(n, e), Object.defineProperty(n, "__esModule", {
        value: true,
        enumerable: false
      }), n;
    },
    "./IntervalSelector": async () => {
      await a("./IntervalSelector"), await Promise.all([]);
      const e = await s(() => r(() => import("./IntervalSelector-CD6DD6Lw.js"), [], import.meta.url)), t = e && e.__mf_remote_dependency_pending;
      t && typeof t.then == "function" && await t;
      const n = {};
      return Object.assign(n, e), Object.defineProperty(n, "__esModule", {
        value: true,
        enumerable: false
      }), n;
    },
    "./translations": async () => {
      await a("./translations"), await Promise.all([]);
      const e = await s(() => r(() => import("./translations-DzL1UiEE.js"), [], import.meta.url)), t = e && e.__mf_remote_dependency_pending;
      t && typeof t.then == "function" && await t;
      const n = {};
      return Object.assign(n, e), Object.defineProperty(n, "__esModule", {
        value: true,
        enumerable: false
      }), n;
    }
  };
})();
export {
  __tla,
  f as default
};
