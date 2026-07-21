import { _ as d } from "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js_commonjs-proxy-DV0e2n0M.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-CcT-evVu.js";
import "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
function m(o, n) {
  for (var _ = 0; _ < n.length; _++) {
    const e = n[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e) if (t !== "default" && !(t in o)) {
        const a = Object.getOwnPropertyDescriptor(e, t);
        a && Object.defineProperty(o, t, a.get ? a : { enumerable: true, get: () => e[t] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var r = {}, i, l, c = d;
l = r.createRoot = c.createRoot, i = r.hydrateRoot = c.hydrateRoot;
const f = m({ __proto__: null, get createRoot() {
  return l;
}, default: r, get hydrateRoot() {
  return i;
} }, [r]), s = f, g = s.createRoot, R = s.hydrateRoot, b = Reflect.get(f, "default") ?? f;
export {
  g as createRoot,
  b as default,
  R as hydrateRoot
};
