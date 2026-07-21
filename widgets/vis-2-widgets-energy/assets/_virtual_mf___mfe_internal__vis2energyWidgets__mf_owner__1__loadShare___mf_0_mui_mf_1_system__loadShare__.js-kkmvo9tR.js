var _a2, _b;
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-CJko9B86.js";
import { R as Ke, _ as es, a as je, b as Ze, c as fe, d as be, e as Pr, f as Er, g as Y, h as Pt, i as ve, j as dt, k as Ct, l as ts, m as rs } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C7HYJM3r.js";
import { _ as N, a as ns } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CFKObsBr.js";
function xt(e2, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e2}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e2}; visit ${r} for the full message.`;
}
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, br.apply(null, arguments);
}
function $i(e2) {
  if (e2.sheet) return e2.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e2) return document.styleSheets[t];
}
function ki(e2) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e2.key), e2.nonce !== void 0 && t.setAttribute("nonce", e2.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ss = (function() {
  function e2(r) {
    var n = this;
    this._insertTag = function(s) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(s, o), n.tags.push(s);
    }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e2.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ki(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = $i(s);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch {
      }
    } else s.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var s;
      return (s = n.parentNode) == null ? void 0 : s.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e2;
})(), V = "-ms-", vt = "-moz-", E = "-webkit-", os = "comm", Ar = "rule", Rr = "decl", Pi = "@import", is = "@keyframes", Ei = "@layer", Ai = Math.abs, Et = String.fromCharCode, Ri = Object.assign;
function Oi(e2, t) {
  return F(e2, 0) ^ 45 ? (((t << 2 ^ F(e2, 0)) << 2 ^ F(e2, 1)) << 2 ^ F(e2, 2)) << 2 ^ F(e2, 3) : 0;
}
function as(e2) {
  return e2.trim();
}
function Mi(e2, t) {
  return (e2 = t.exec(e2)) ? e2[0] : e2;
}
function A(e2, t, r) {
  return e2.replace(t, r);
}
function Sr(e2, t) {
  return e2.indexOf(t);
}
function F(e2, t) {
  return e2.charCodeAt(t) | 0;
}
function Ue(e2, t, r) {
  return e2.slice(t, r);
}
function ae(e2) {
  return e2.length;
}
function Or(e2) {
  return e2.length;
}
function ut(e2, t) {
  return t.push(e2), e2;
}
function Ii(e2, t) {
  return e2.map(t).join("");
}
var At = 1, Me = 1, cs = 0, U = 0, G = 0, Le = "";
function Rt(e2, t, r, n, s, o, i) {
  return { value: e2, root: t, parent: r, type: n, props: s, children: o, line: At, column: Me, length: i, return: "" };
}
function ze(e2, t) {
  return Ri(Rt("", null, null, "", null, null, 0), e2, { length: -e2.length }, t);
}
function ji() {
  return G;
}
function Li() {
  return G = U > 0 ? F(Le, --U) : 0, Me--, G === 10 && (Me = 1, At--), G;
}
function Q() {
  return G = U < cs ? F(Le, U++) : 0, Me++, G === 10 && (Me = 1, At++), G;
}
function le() {
  return F(Le, U);
}
function mt() {
  return U;
}
function Je(e2, t) {
  return Ue(Le, e2, t);
}
function He(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ls(e2) {
  return At = Me = 1, cs = ae(Le = e2), U = 0, [];
}
function fs(e2) {
  return Le = "", e2;
}
function pt(e2) {
  return as(Je(U - 1, Cr(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function Gi(e2) {
  for (; (G = le()) && G < 33; ) Q();
  return He(e2) > 2 || He(G) > 3 ? "" : " ";
}
function Ni(e2, t) {
  for (; --t && Q() && !(G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97); ) ;
  return Je(e2, mt() + (t < 6 && le() == 32 && Q() == 32));
}
function Cr(e2) {
  for (; Q(); ) switch (G) {
    case e2:
      return U;
    case 34:
    case 39:
      e2 !== 34 && e2 !== 39 && Cr(G);
      break;
    case 40:
      e2 === 41 && Cr(e2);
      break;
    case 92:
      Q();
      break;
  }
  return U;
}
function Bi(e2, t) {
  for (; Q() && e2 + G !== 57; ) if (e2 + G === 84 && le() === 47) break;
  return "/*" + Je(t, U - 1) + "*" + Et(e2 === 47 ? e2 : Q());
}
function Wi(e2) {
  for (; !He(le()); ) Q();
  return Je(e2, U);
}
function Fi(e2) {
  return fs(ht("", null, null, null, [""], e2 = ls(e2), 0, [0], e2));
}
function ht(e2, t, r, n, s, o, i, a, l) {
  for (var f = 0, u = 0, d = i, p = 0, m = 0, h = 0, y = 1, x = 1, C = 1, k = 0, R = "", $ = s, P = o, S = n, _ = R; x; ) switch (h = k, k = Q()) {
    case 40:
      if (h != 108 && F(_, d - 1) == 58) {
        Sr(_ += A(pt(k), "&", "&\f"), "&\f") != -1 && (C = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      _ += pt(k);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      _ += Gi(h);
      break;
    case 92:
      _ += Ni(mt() - 1, 7);
      continue;
    case 47:
      switch (le()) {
        case 42:
        case 47:
          ut(Vi(Bi(Q(), mt()), t, r), l);
          break;
        default:
          _ += "/";
      }
      break;
    case 123 * y:
      a[f++] = ae(_) * C;
    case 125 * y:
    case 59:
    case 0:
      switch (k) {
        case 0:
        case 125:
          x = 0;
        case 59 + u:
          C == -1 && (_ = A(_, /\f/g, "")), m > 0 && ae(_) - d && ut(m > 32 ? $n(_ + ";", n, r, d - 1) : $n(A(_, " ", "") + ";", n, r, d - 2), l);
          break;
        case 59:
          _ += ";";
        default:
          if (ut(S = Tn(_, t, r, f, u, s, a, R, $ = [], P = [], d), o), k === 123) if (u === 0) ht(_, t, S, S, $, o, d, a, P);
          else switch (p === 99 && F(_, 3) === 110 ? 100 : p) {
            case 100:
            case 108:
            case 109:
            case 115:
              ht(e2, S, S, n && ut(Tn(e2, S, S, 0, 0, s, a, R, s, $ = [], d), P), s, P, d, a, n ? $ : P);
              break;
            default:
              ht(_, S, S, S, [""], P, 0, a, P);
          }
      }
      f = u = m = 0, y = C = 1, R = _ = "", d = i;
      break;
    case 58:
      d = 1 + ae(_), m = h;
    default:
      if (y < 1) {
        if (k == 123) --y;
        else if (k == 125 && y++ == 0 && Li() == 125) continue;
      }
      switch (_ += Et(k), k * y) {
        case 38:
          C = u > 0 ? 1 : (_ += "\f", -1);
          break;
        case 44:
          a[f++] = (ae(_) - 1) * C, C = 1;
          break;
        case 64:
          le() === 45 && (_ += pt(Q())), p = le(), u = d = ae(R = _ += Wi(mt())), k++;
          break;
        case 45:
          h === 45 && ae(_) == 2 && (y = 0);
      }
  }
  return o;
}
function Tn(e2, t, r, n, s, o, i, a, l, f, u) {
  for (var d = s - 1, p = s === 0 ? o : [""], m = Or(p), h = 0, y = 0, x = 0; h < n; ++h) for (var C = 0, k = Ue(e2, d + 1, d = Ai(y = i[h])), R = e2; C < m; ++C) (R = as(y > 0 ? p[C] + " " + k : A(k, /&\f/g, p[C]))) && (l[x++] = R);
  return Rt(e2, t, r, s === 0 ? Ar : a, l, f, u);
}
function Vi(e2, t, r) {
  return Rt(e2, t, r, os, Et(ji()), Ue(e2, 2, -2), 0);
}
function $n(e2, t, r, n) {
  return Rt(e2, t, r, Rr, Ue(e2, 0, n), Ue(e2, n + 1, -1), n);
}
function Ae(e2, t) {
  for (var r = "", n = Or(e2), s = 0; s < n; s++) r += t(e2[s], s, e2, t) || "";
  return r;
}
function zi(e2, t, r, n) {
  switch (e2.type) {
    case Ei:
      if (e2.children.length) break;
    case Pi:
    case Rr:
      return e2.return = e2.return || e2.value;
    case os:
      return "";
    case is:
      return e2.return = e2.value + "{" + Ae(e2.children, n) + "}";
    case Ar:
      e2.value = e2.props.join(",");
  }
  return ae(r = Ae(e2.children, n)) ? e2.return = e2.value + "{" + r + "}" : "";
}
function Di(e2) {
  var t = Or(e2);
  return function(r, n, s, o) {
    for (var i = "", a = 0; a < t; a++) i += e2[a](r, n, s, o) || "";
    return i;
  };
}
function Ki(e2) {
  return function(t) {
    t.root || (t = t.return) && e2(t);
  };
}
function us(e2) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e2(r)), t[r];
  };
}
var Ui = function(t, r, n) {
  for (var s = 0, o = 0; s = o, o = le(), s === 38 && o === 12 && (r[n] = 1), !He(o); ) Q();
  return Je(t, U);
}, Hi = function(t, r) {
  var n = -1, s = 44;
  do
    switch (He(s)) {
      case 0:
        s === 38 && le() === 12 && (r[n] = 1), t[n] += Ui(U - 1, r, n);
        break;
      case 2:
        t[n] += pt(s);
        break;
      case 4:
        if (s === 44) {
          t[++n] = le() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Et(s);
    }
  while (s = Q());
  return t;
}, Yi = function(t, r) {
  return fs(Hi(ls(t), r));
}, kn = /* @__PURE__ */ new WeakMap(), Qi = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var r = t.value, n = t.parent, s = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !kn.get(n)) && !s) {
      kn.set(t, true);
      for (var o = [], i = Yi(r, o), a = n.props, l = 0, f = 0; l < i.length; l++) for (var u = 0; u < a.length; u++, f++) t.props[f] = o[l] ? i[l].replace(/&\f/g, a[u]) : a[u] + " " + i[l];
    }
  }
}, qi = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ds(e2, t) {
  switch (Oi(e2, t)) {
    case 5103:
      return E + "print-" + e2 + e2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return E + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return E + e2 + vt + e2 + V + e2 + e2;
    case 6828:
    case 4268:
      return E + e2 + V + e2 + e2;
    case 6165:
      return E + e2 + V + "flex-" + e2 + e2;
    case 5187:
      return E + e2 + A(e2, /(\w+).+(:[^]+)/, E + "box-$1$2" + V + "flex-$1$2") + e2;
    case 5443:
      return E + e2 + V + "flex-item-" + A(e2, /flex-|-self/, "") + e2;
    case 4675:
      return E + e2 + V + "flex-line-pack" + A(e2, /align-content|flex-|-self/, "") + e2;
    case 5548:
      return E + e2 + V + A(e2, "shrink", "negative") + e2;
    case 5292:
      return E + e2 + V + A(e2, "basis", "preferred-size") + e2;
    case 6060:
      return E + "box-" + A(e2, "-grow", "") + E + e2 + V + A(e2, "grow", "positive") + e2;
    case 4554:
      return E + A(e2, /([^-])(transform)/g, "$1" + E + "$2") + e2;
    case 6187:
      return A(A(A(e2, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return A(e2, /(image-set\([^]*)/, E + "$1$`$1");
    case 4968:
      return A(A(e2, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + E + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return A(e2, /(.+)-inline(.+)/, E + "$1$2") + e2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ae(e2) - 1 - t > 6) switch (F(e2, t + 1)) {
        case 109:
          if (F(e2, t + 4) !== 45) break;
        case 102:
          return A(e2, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + vt + (F(e2, t + 3) == 108 ? "$3" : "$2-$3")) + e2;
        case 115:
          return ~Sr(e2, "stretch") ? ds(A(e2, "stretch", "fill-available"), t) + e2 : e2;
      }
      break;
    case 4949:
      if (F(e2, t + 1) !== 115) break;
    case 6444:
      switch (F(e2, ae(e2) - 3 - (~Sr(e2, "!important") && 10))) {
        case 107:
          return A(e2, ":", ":" + E) + e2;
        case 101:
          return A(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + E + (F(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + V + "$2box$3") + e2;
      }
      break;
    case 5936:
      switch (F(e2, t + 11)) {
        case 114:
          return E + e2 + V + A(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return E + e2 + V + A(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return E + e2 + V + A(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
      return E + e2 + V + e2 + e2;
  }
  return e2;
}
var Xi = function(t, r, n, s) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Rr:
      t.return = ds(t.value, t.length);
      break;
    case is:
      return Ae([ze(t, { value: A(t.value, "@", "@" + E) })], s);
    case Ar:
      if (t.length) return Ii(t.props, function(o) {
        switch (Mi(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ae([ze(t, { props: [A(o, /:(read-\w+)/, ":" + vt + "$1")] })], s);
          case "::placeholder":
            return Ae([ze(t, { props: [A(o, /:(plac\w+)/, ":" + E + "input-$1")] }), ze(t, { props: [A(o, /:(plac\w+)/, ":" + vt + "$1")] }), ze(t, { props: [A(o, /:(plac\w+)/, V + "input-$1")] })], s);
        }
        return "";
      });
  }
}, Zi = [Xi], ms = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || Zi, o = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(y) {
    for (var x = y.getAttribute("data-emotion").split(" "), C = 1; C < x.length; C++) o[x[C]] = true;
    a.push(y);
  });
  var l, f = [Qi, qi];
  {
    var u, d = [zi, Ki(function(y) {
      u.insert(y);
    })], p = Di(f.concat(s, d)), m = function(x) {
      return Ae(Fi(x), p);
    };
    l = function(x, C, k, R) {
      u = k, m(x ? x + "{" + C.styles + "}" : C.styles), R && (h.inserted[C.name] = true);
    };
  }
  var h = { key: r, sheet: new ss({ key: r, container: i, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: o, registered: {}, insert: l };
  return h.sheet.hydrate(a), h;
}, ps = { exports: {} }, O = {};
var B = typeof Symbol == "function" && Symbol.for, Mr = B ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Ir = B ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Ot = B ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Mt = B ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, It = B ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, jt = B ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Lt = B ? /* @__PURE__ */ Symbol.for("react.context") : 60110, jr = B ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Gt = B ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Nt = B ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Bt = B ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Ji = B ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Wt = B ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Ft = B ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, ea = B ? /* @__PURE__ */ Symbol.for("react.block") : 60121, ta = B ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, ra = B ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, na = B ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function q(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Mr:
        switch (e2 = e2.type, e2) {
          case jr:
          case Gt:
          case Ot:
          case It:
          case Mt:
          case Bt:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Lt:
              case Nt:
              case Ft:
              case Wt:
              case jt:
                return e2;
              default:
                return t;
            }
        }
      case Ir:
        return t;
    }
  }
}
function hs(e2) {
  return q(e2) === Gt;
}
O.AsyncMode = jr;
O.ConcurrentMode = Gt;
O.ContextConsumer = Lt;
O.ContextProvider = jt;
O.Element = Mr;
O.ForwardRef = Nt;
O.Fragment = Ot;
O.Lazy = Ft;
O.Memo = Wt;
O.Portal = Ir;
O.Profiler = It;
O.StrictMode = Mt;
O.Suspense = Bt;
O.isAsyncMode = function(e2) {
  return hs(e2) || q(e2) === jr;
};
O.isConcurrentMode = hs;
O.isContextConsumer = function(e2) {
  return q(e2) === Lt;
};
O.isContextProvider = function(e2) {
  return q(e2) === jt;
};
O.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Mr;
};
O.isForwardRef = function(e2) {
  return q(e2) === Nt;
};
O.isFragment = function(e2) {
  return q(e2) === Ot;
};
O.isLazy = function(e2) {
  return q(e2) === Ft;
};
O.isMemo = function(e2) {
  return q(e2) === Wt;
};
O.isPortal = function(e2) {
  return q(e2) === Ir;
};
O.isProfiler = function(e2) {
  return q(e2) === It;
};
O.isStrictMode = function(e2) {
  return q(e2) === Mt;
};
O.isSuspense = function(e2) {
  return q(e2) === Bt;
};
O.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === Ot || e2 === Gt || e2 === It || e2 === Mt || e2 === Bt || e2 === Ji || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Ft || e2.$$typeof === Wt || e2.$$typeof === jt || e2.$$typeof === Lt || e2.$$typeof === Nt || e2.$$typeof === ta || e2.$$typeof === ra || e2.$$typeof === na || e2.$$typeof === ea);
};
O.typeOf = q;
ps.exports = O;
var sa = ps.exports, ys = sa, oa = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, ia = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, gs = {};
gs[ys.ForwardRef] = oa;
gs[ys.Memo] = ia;
var aa = true;
function _s(e2, t, r) {
  var n = "";
  return r.split(" ").forEach(function(s) {
    e2[s] !== void 0 ? t.push(e2[s] + ";") : s && (n += s + " ");
  }), n;
}
var Lr = function(t, r, n) {
  var s = t.key + "-" + r.name;
  (n === false || aa === false) && t.registered[s] === void 0 && (t.registered[s] = r.styles);
}, Gr = function(t, r, n) {
  Lr(t, r, n);
  var s = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + s : "", o, t.sheet, true), o = o.next;
    while (o !== void 0);
  }
};
function ca(e2) {
  for (var t = 0, r, n = 0, s = e2.length; s >= 4; ++n, s -= 4) r = e2.charCodeAt(n) & 255 | (e2.charCodeAt(++n) & 255) << 8 | (e2.charCodeAt(++n) & 255) << 16 | (e2.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      t ^= (e2.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e2.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e2.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var la = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, fa = /[A-Z]|^ms/g, ua = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bs = function(t) {
  return t.charCodeAt(1) === 45;
}, Pn = function(t) {
  return t != null && typeof t != "boolean";
}, pr = us(function(e2) {
  return bs(e2) ? e2 : e2.replace(fa, "-$&").toLowerCase();
}), En = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string") return r.replace(ua, function(n, s, o) {
        return ce = { name: s, styles: o, next: ce }, s;
      });
  }
  return la[t] !== 1 && !bs(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ye(e2, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1) return ce = { name: s.name, styles: s.styles, next: ce }, s.name;
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0) for (; i !== void 0; ) ce = { name: i.name, styles: i.styles, next: ce }, i = i.next;
        var a = o.styles + ";";
        return a;
      }
      return da(e2, t, r);
    }
    case "function": {
      if (e2 !== void 0) {
        var l = ce, f = r(e2);
        return ce = l, Ye(e2, t, f);
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function da(e2, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var s = 0; s < r.length; s++) n += Ye(e2, t, r[s]) + ";";
  else for (var o in r) {
    var i = r[o];
    if (typeof i != "object") {
      var a = i;
      t != null && t[a] !== void 0 ? n += o + "{" + t[a] + "}" : Pn(a) && (n += pr(o) + ":" + En(o, a) + ";");
    } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0)) for (var l = 0; l < i.length; l++) Pn(i[l]) && (n += pr(o) + ":" + En(o, i[l]) + ";");
    else {
      var f = Ye(e2, t, i);
      switch (o) {
        case "animation":
        case "animationName": {
          n += pr(o) + ":" + f + ";";
          break;
        }
        default:
          n += o + "{" + f + "}";
      }
    }
  }
  return n;
}
var An = /label:\s*([^\s;{]+)\s*(;|$)/g, ce;
function et(e2, t, r) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0) return e2[0];
  var n = true, s = "";
  ce = void 0;
  var o = e2[0];
  if (o == null || o.raw === void 0) n = false, s += Ye(r, t, o);
  else {
    var i = o;
    s += i[0];
  }
  for (var a = 1; a < e2.length; a++) if (s += Ye(r, t, e2[a]), n) {
    var l = o;
    s += l[a];
  }
  An.lastIndex = 0;
  for (var f = "", u; (u = An.exec(s)) !== null; ) f += "-" + u[1];
  var d = ca(s) + f;
  return { name: d, styles: s, next: ce };
}
var ma = function(t) {
  return t();
}, Ss = Ke.useInsertionEffect ? Ke.useInsertionEffect : false, Cs = Ss || ma, Rn = Ss || es, xs = je(typeof HTMLElement < "u" ? ms({ key: "css" }) : null), pa = xs.Provider, Nr = function(t) {
  return Ze(function(r, n) {
    var s = fe(xs);
    return t(r, s, n);
  });
}, tt = je({}), Br = {}.hasOwnProperty, xr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ha = function(t, r) {
  var n = {};
  for (var s in r) Br.call(r, s) && (n[s] = r[s]);
  return n[xr] = t, n;
}, ya = function(t) {
  var r = t.cache, n = t.serialized, s = t.isStringTag;
  return Lr(r, n, s), Cs(function() {
    return Gr(r, n, s);
  }), null;
}, ga = Nr(function(e2, t, r) {
  var n = e2.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var s = e2[xr], o = [n], i = "";
  typeof e2.className == "string" ? i = _s(t.registered, o, e2.className) : e2.className != null && (i = e2.className + " ");
  var a = et(o, void 0, fe(tt));
  i += t.key + "-" + a.name;
  var l = {};
  for (var f in e2) Br.call(e2, f) && f !== "css" && f !== xr && (l[f] = e2[f]);
  return l.className = i, r && (l.ref = r), be(Pr, null, be(ya, { cache: t, serialized: a, isStringTag: typeof s == "string" }), be(s, l));
}), _a = ga, On = function(t, r) {
  var n = arguments;
  if (r == null || !Br.call(r, "css")) return be.apply(void 0, n);
  var s = n.length, o = new Array(s);
  o[0] = _a, o[1] = ha(t, r);
  for (var i = 2; i < s; i++) o[i] = n[i];
  return be.apply(null, o);
};
(function(e2) {
  var t;
  t || (t = e2.JSX || (e2.JSX = {}));
})(On || (On = {}));
var ba = Nr(function(e2, t) {
  var r = e2.styles, n = et([r], void 0, fe(tt)), s = Er();
  return Rn(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({ key: o, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), a = false, l = document.querySelector('style[data-emotion="' + o + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (a = true, l.setAttribute("data-emotion", o), i.hydrate([l])), s.current = [i, a], function() {
      i.flush();
    };
  }, [t]), Rn(function() {
    var o = s.current, i = o[0], a = o[1];
    if (a) {
      o[1] = false;
      return;
    }
    if (n.next !== void 0 && Gr(t, n.next, true), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, false);
  }, [t, n.name]), null;
});
function vs() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
  return et(t);
}
function Sa() {
  var e2 = vs.apply(void 0, arguments), t = "animation-" + e2.name;
  return { name: t, styles: "@keyframes " + t + "{" + e2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var Ca = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xa = us(function(e2) {
  return Ca.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
}), va = xa, wa = function(t) {
  return t !== "theme";
}, Mn = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? va : wa;
}, In = function(t, r, n) {
  var s;
  if (r) {
    var o = r.shouldForwardProp;
    s = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof s != "function" && n && (s = t.__emotion_forwardProp), s;
}, Ta = function(t) {
  var r = t.cache, n = t.serialized, s = t.isStringTag;
  return Lr(r, n, s), Cs(function() {
    return Gr(r, n, s);
  }), null;
}, $a = function e(t, r) {
  var n = t.__emotion_real === t, s = n && t.__emotion_base || t, o, i;
  r !== void 0 && (o = r.label, i = r.target);
  var a = In(t, r, n), l = a || Mn(s), f = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0) d.push.apply(d, u);
    else {
      var p = u[0];
      d.push(p[0]);
      for (var m = u.length, h = 1; h < m; h++) d.push(u[h], p[h]);
    }
    var y = Nr(function(x, C, k) {
      var R = f && x.as || s, $ = "", P = [], S = x;
      if (x.theme == null) {
        S = {};
        for (var _ in x) S[_] = x[_];
        S.theme = fe(tt);
      }
      typeof x.className == "string" ? $ = _s(C.registered, P, x.className) : x.className != null && ($ = x.className + " ");
      var v = et(d.concat(P), C.registered, S);
      $ += C.key + "-" + v.name, i !== void 0 && ($ += " " + i);
      var b = f && a === void 0 ? Mn(R) : l, w = {};
      for (var T in x) f && T === "as" || b(T) && (w[T] = x[T]);
      return w.className = $, k && (w.ref = k), be(Pr, null, be(Ta, { cache: C, serialized: v, isStringTag: typeof R == "string" }), be(R, w));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = s, y.__emotion_styles = d, y.__emotion_forwardProp = a, Object.defineProperty(y, "toString", { value: function() {
      return "." + i;
    } }), y.withComponent = function(x, C) {
      var k = e(x, br({}, r, C, { shouldForwardProp: In(y, C, true) }));
      return k.apply(void 0, d);
    }, y;
  };
}, ka = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], vr = $a.bind(null);
ka.forEach(function(e2) {
  vr[e2] = vr(e2);
});
const hr = /* @__PURE__ */ new Map(), Pa = (e2, t) => {
  const r = ms(e2);
  return r.sheet = new t({ key: r.key, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy, prepend: r.sheet.prepend, insertionPoint: r.sheet.insertionPoint }), r;
};
let ge;
if (typeof document == "object" && (ge = document.querySelector('[name="emotion-insertion-point"]'), !ge)) {
  ge = document.createElement("meta"), ge.setAttribute("name", "emotion-insertion-point"), ge.setAttribute("content", "");
  const e2 = document.querySelector("head");
  e2 && e2.prepend(ge);
}
function Ea(e2, t) {
  if (e2 || t) {
    class r extends ss {
      insert(o, i) {
        return this.key && this.key.endsWith("global") && (this.before = ge), super.insert(o, i);
      }
    }
    const n = Pa({ key: t ? "mui" : "css", insertionPoint: e2 ? ge : void 0 }, r);
    if (t) {
      const s = n.insert;
      n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), s(...o));
    }
    return n;
  }
}
function Aa(e2) {
  const { injectFirst: t, enableCssLayer: r, children: n } = e2, s = Y(() => {
    const o = `${t}-${r}`;
    if (typeof document == "object" && hr.has(o)) return hr.get(o);
    const i = Ea(t, r);
    return hr.set(o, i), i;
  }, [t, r]);
  return s ? N(pa, { value: s, children: n }) : n;
}
function Ra(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function ws(e2) {
  const { styles: t, defaultTheme: r = {} } = e2;
  return N(ba, { styles: typeof t == "function" ? (s) => t(Ra(s) ? r : s) : t });
}
function Ts(e2, t) {
  return vr(e2, t);
}
function Oa(e2, t) {
  Array.isArray(e2.__emotion_styles) && (e2.__emotion_styles = t(e2.__emotion_styles));
}
const jn = [];
function Se(e2) {
  return jn[0] = e2, et(jn);
}
var $s = { exports: {} }, M = {};
var Wr = /* @__PURE__ */ Symbol.for("react.transitional.element"), Fr = /* @__PURE__ */ Symbol.for("react.portal"), Vt = /* @__PURE__ */ Symbol.for("react.fragment"), zt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Dt = /* @__PURE__ */ Symbol.for("react.profiler"), Kt = /* @__PURE__ */ Symbol.for("react.consumer"), Ut = /* @__PURE__ */ Symbol.for("react.context"), Ht = /* @__PURE__ */ Symbol.for("react.forward_ref"), Yt = /* @__PURE__ */ Symbol.for("react.suspense"), Qt = /* @__PURE__ */ Symbol.for("react.suspense_list"), qt = /* @__PURE__ */ Symbol.for("react.memo"), Xt = /* @__PURE__ */ Symbol.for("react.lazy"), Ma = /* @__PURE__ */ Symbol.for("react.view_transition"), Ia = /* @__PURE__ */ Symbol.for("react.client.reference");
function te(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Wr:
        switch (e2 = e2.type, e2) {
          case Vt:
          case Dt:
          case zt:
          case Yt:
          case Qt:
          case Ma:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Ut:
              case Ht:
              case Xt:
              case qt:
                return e2;
              case Kt:
                return e2;
              default:
                return t;
            }
        }
      case Fr:
        return t;
    }
  }
}
M.ContextConsumer = Kt;
M.ContextProvider = Ut;
M.Element = Wr;
M.ForwardRef = Ht;
M.Fragment = Vt;
M.Lazy = Xt;
M.Memo = qt;
M.Portal = Fr;
M.Profiler = Dt;
M.StrictMode = zt;
M.Suspense = Yt;
M.SuspenseList = Qt;
M.isContextConsumer = function(e2) {
  return te(e2) === Kt;
};
M.isContextProvider = function(e2) {
  return te(e2) === Ut;
};
M.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Wr;
};
M.isForwardRef = function(e2) {
  return te(e2) === Ht;
};
M.isFragment = function(e2) {
  return te(e2) === Vt;
};
M.isLazy = function(e2) {
  return te(e2) === Xt;
};
M.isMemo = function(e2) {
  return te(e2) === qt;
};
M.isPortal = function(e2) {
  return te(e2) === Fr;
};
M.isProfiler = function(e2) {
  return te(e2) === Dt;
};
M.isStrictMode = function(e2) {
  return te(e2) === zt;
};
M.isSuspense = function(e2) {
  return te(e2) === Yt;
};
M.isSuspenseList = function(e2) {
  return te(e2) === Qt;
};
M.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === Vt || e2 === Dt || e2 === zt || e2 === Yt || e2 === Qt || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Xt || e2.$$typeof === qt || e2.$$typeof === Ut || e2.$$typeof === Kt || e2.$$typeof === Ht || e2.$$typeof === Ia || e2.getModuleId !== void 0);
};
M.typeOf = te;
$s.exports = M;
var ks = $s.exports;
function _e(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  const t = Object.getPrototypeOf(e2);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e2) && !(Symbol.iterator in e2);
}
function Ps(e2) {
  if (Pt(e2) || ks.isValidElementType(e2) || !_e(e2)) return e2;
  const t = {};
  return Object.keys(e2).forEach((r) => {
    t[r] = Ps(e2[r]);
  }), t;
}
function ue(e2, t, r = { clone: true }) {
  const n = r.clone ? { ...e2 } : e2;
  return _e(e2) && _e(t) && Object.keys(t).forEach((s) => {
    Pt(t[s]) || ks.isValidElementType(t[s]) ? n[s] = t[s] : _e(t[s]) && Object.prototype.hasOwnProperty.call(e2, s) && _e(e2[s]) ? n[s] = ue(e2[s], t[s], r) : r.clone ? n[s] = _e(t[s]) ? Ps(t[s]) : t[s] : n[s] = t[s];
  }), n;
}
const ja = (e2) => {
  const t = Object.keys(e2).map((r) => ({ key: r, val: e2[r] })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({ ...r, [n.key]: n.val }), {});
};
function Vr(e2) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: r = "px", step: n = 5, ...s } = e2, o = ja(t), i = Object.keys(o);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function f(m, h) {
    const y = i.indexOf(h);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(y !== -1 && typeof t[i[y]] == "number" ? t[i[y]] : h) - n / 100}${r})`;
  }
  function u(m) {
    return i.indexOf(m) + 1 < i.length ? f(m, i[i.indexOf(m) + 1]) : a(m);
  }
  function d(m) {
    const h = i.indexOf(m);
    return h === 0 ? a(i[1]) : h === i.length - 1 ? l(i[h]) : f(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  const p = [];
  for (let m = 0; m < i.length; m += 1) p.push(a(i[m]));
  return { keys: i, values: o, up: a, down: l, between: f, only: u, not: d, unit: r, internal_mediaKeys: p, ...s };
}
const Ln = /min-width:\s*([0-9.]+)/;
function Gn(e2, t) {
  if (!e2.containerQueries || !La(t)) return t;
  const r = [];
  for (const s in t) s.startsWith("@container") && r.push(s);
  r.sort((s, o) => {
    var _a3, _b2;
    return +(((_a3 = s.match(Ln)) == null ? void 0 : _a3[1]) || 0) - +(((_b2 = o.match(Ln)) == null ? void 0 : _b2[1]) || 0);
  });
  const n = t;
  for (let s = 0; s < r.length; s += 1) {
    const o = r[s], i = n[o];
    delete n[o], n[o] = i;
  }
  return n;
}
function La(e2) {
  for (const t in e2) if (t.startsWith("@container")) return true;
  return false;
}
function Es(e2, t) {
  return t === "@" || t.startsWith("@") && (e2.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ga(e2, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) return null;
  const [, n, s] = r, o = Number.isNaN(+n) ? n || 0 : +n;
  return e2.containerQueries(s).up(o);
}
function As(e2) {
  const t = (o, i) => o.replace("@media", i ? `@container ${i}` : "@container");
  function r(o, i) {
    o.up = (...a) => t(e2.breakpoints.up(...a), i), o.down = (...a) => t(e2.breakpoints.down(...a), i), o.between = (...a) => t(e2.breakpoints.between(...a), i), o.only = (...a) => t(e2.breakpoints.only(...a), i), o.not = (...a) => {
      const l = t(e2.breakpoints.not(...a), i);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, s = (o) => (r(n, o), n);
  return r(s), { ...e2, containerQueries: s };
}
const Rs = { borderRadius: 4 }, Na = {};
function Os(e2) {
  if (e2 == null) return true;
  for (const t in e2) return false;
  return true;
}
function Re(e2, t) {
  const r = Array.isArray(t), n = Array.isArray(e2);
  return za(t) ? t : Da(e2) ? Ie(t) : r && n ? Fa(e2, t) : r !== n ? Ie(t) : Ka(e2, t);
}
function Ba(e2) {
  let t = 0;
  const r = e2.length, n = new Array(r);
  for (t = 0; t < r; t += 1) n[t] = Ie(e2[t]);
  return n;
}
function Wa(e2) {
  const t = {};
  for (const r in e2) r === "__proto__" || r === "constructor" || r === "prototype" || (t[r] = Ie(e2[r]));
  return t;
}
function Fa(e2, t) {
  const r = e2.length;
  for (let n = 0; n < t.length; n += 1) e2[r + n] = Ie(t[n]);
  return e2;
}
function Va(e2) {
  return typeof e2 == "object" && e2 !== null && !(e2 instanceof RegExp) && !(e2 instanceof Date);
}
function za(e2) {
  return typeof e2 != "object" || e2 === null;
}
function Da(e2) {
  return typeof e2 != "object" || e2 === null || e2 instanceof RegExp || e2 instanceof Date;
}
function Ie(e2) {
  return Va(e2) ? Array.isArray(e2) ? Ba(e2) : Wa(e2) : e2;
}
function Ka(e2, t) {
  for (const r in t) r === "__proto__" || r === "constructor" || r === "prototype" || (r in e2 ? e2[r] = Re(e2[r], t[r]) : e2[r] = Ie(t[r]));
  return e2;
}
const Ua = { clone: false };
function Ha(e2, t) {
  return t ? ue(e2, t, Ua) : e2;
}
const Ya = {}, Zt = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Qe = Vr({ values: Zt }), Qa = { containerQueries: (e2) => ({ up: (t) => {
  let r = typeof t == "number" ? t : Zt[t] || t;
  return typeof r == "number" && (r = `${r}px`), e2 ? `@container ${e2} (min-width:${r})` : `@container (min-width:${r})`;
} }) };
function de(e2, t, r) {
  const n = {};
  return Jt(n, e2.theme, t, (s, o, i) => {
    const a = r(o, i);
    s ? n[s] = a : Re(n, a);
  });
}
function Jt(e2, t, r, n) {
  if (t ?? (t = Ya), Array.isArray(r)) {
    const s = t.breakpoints ?? Qe;
    for (let o = 0; o < r.length; o += 1) yr(e2, s.up(s.keys[o]), r[o], void 0, n);
    return e2;
  }
  if (typeof r == "object") {
    const s = t.breakpoints ?? Qe, o = s.values ?? Zt;
    for (const i in r) if (Es(s.keys, i)) {
      const a = Ga(t.containerQueries ? t : Qa, i);
      a && yr(e2, a, r[i], i, n);
    } else if (i in o) {
      const a = s.up(i);
      yr(e2, a, r[i], i, n);
    } else {
      const a = i;
      e2[a] = r[a];
    }
    return e2;
  }
  return n(void 0, r), e2;
}
function yr(e2, t, r, n, s) {
  e2[t] ?? (e2[t] = {}), s(t, r, n);
}
function qa(e2) {
  const t = (r) => {
    const n = r.theme || {}, s = e2(r), o = n.breakpoints || Qe, i = o.keys.reduce((a, l) => (r[l] && (a = a || {}, a[o.up(l)] = e2({ theme: n, ...r[l] })), a), null);
    return Ha(s, i);
  };
  return t.propTypes = {}, t.filterProps = ["xs", "sm", "md", "lg", "xl", ...e2.filterProps], t;
}
function Ms(e2 = Qe) {
  const { internal_mediaKeys: t } = e2, r = {};
  for (let n = 0; n < t.length; n += 1) r[t[n]] = {};
  return r;
}
function wr(e2, t) {
  const r = e2.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const s = r[n];
    Os(t[s]) && delete t[s];
  }
  return t;
}
function Is(e2, ...t) {
  const n = [Ms(e2), ...t].reduce((s, o) => ue(s, o), {});
  return wr(e2, n);
}
function Xa(e2, t) {
  if (typeof e2 != "object") return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e2) ? n.forEach((s, o) => {
    o < e2.length && (r[s] = true);
  }) : n.forEach((s) => {
    e2[s] != null && (r[s] = true);
  }), r;
}
function yt(e2) {
  const { values: t, breakpoints: r, base: n } = e2, s = n || Xa(t, r), o = Object.keys(s);
  if (o.length === 0) return t;
  let i;
  return o.reduce((a, l, f) => {
    if (Array.isArray(t)) a[l] = t[f] != null ? t[f] : t[i], i = f;
    else if (typeof t == "object" && t) {
      const u = t;
      a[l] = u[l] != null ? u[l] : u[i], i = l;
    } else a[l] = t;
    return a;
  }, {});
}
function Za(e2, t) {
  if (Array.isArray(t)) return true;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e2.keys.length; n += 1) if (e2.keys[n] in t) return true;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1) if (Es(e2.keys, r[n])) return true;
  }
  return false;
}
function zr(e2) {
  if (typeof e2 != "string") throw new Error(xt(7));
  return e2.charAt(0).toUpperCase() + e2.slice(1);
}
function Ja(e2, t, r, n = r) {
  let s;
  return typeof e2 == "function" ? s = e2(r) : Array.isArray(e2) ? s = e2[r] || n : typeof r == "string" ? s = Ge(e2, r) || n : s = n, t && (s = t(s, n, e2)), s;
}
function js(e2, t, r, n) {
  let s;
  return typeof e2 == "function" ? s = e2(r) : Array.isArray(e2) ? s = e2[r] || r : typeof r == "string" ? s = Ge(e2, r, true, n) || r : s = r, t && (s = t(s, r, e2)), s;
}
function Ge(e2, t, r = true, n = void 0) {
  if (!e2 || !t) return null;
  const s = t.split(".");
  if (e2.vars && r) {
    const o = Nn(e2.vars, s, n);
    if (o != null) return o;
  }
  return Nn(e2, s, n);
}
function Nn(e2, t, r = void 0) {
  let n, s = e2, o = 0;
  for (; o < t.length; ) {
    if (s == null) return s;
    n = s, s = s[t[o]], o += 1;
  }
  if (r && s === void 0) {
    const i = t[t.length - 1], a = `${r}${i === "default" ? "" : zr(i)}`;
    return n == null ? void 0 : n[a];
  }
  return s;
}
function g(e2) {
  const { prop: t, cssProperty: r = e2.prop, themeKey: n, transform: s } = e2, o = (i) => {
    if (i[t] == null) return null;
    const a = i[t], l = i.theme, f = Ge(l, n) || {};
    return de(i, a, (d) => {
      const p = js(f, s, d, t);
      return r === false ? p : { [r]: p };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
const ec = { internal_cache: {} }, wt = { m: "margin", p: "padding" }, Bn = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Wn = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, qe = {};
for (const e2 in wt) qe[e2] = [wt[e2]];
for (const e2 in wt) for (const t in Bn) {
  const r = wt[e2], n = Bn[t], s = Array.isArray(n) ? n.map((o) => r + o) : [r + n];
  qe[e2 + t] = s;
}
for (const e2 in Wn) qe[e2] = qe[Wn[e2]];
const er = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), tr = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), Ls = /* @__PURE__ */ new Set([...er, ...tr]);
function Ne(e2, t, r, n) {
  const s = Ge(e2, t, true) ?? r;
  return typeof s == "number" || typeof s == "string" ? (o) => typeof o == "string" ? o : typeof s == "string" ? s.startsWith("var(") && o === 0 ? 0 : s.startsWith("var(") && o === 1 ? s : `calc(${o} * ${s})` : s * o : Array.isArray(s) ? (o) => {
    if (typeof o == "string") return o;
    const i = Math.abs(o), a = s[i];
    return o >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof s == "function" ? s : () => {
  };
}
function rr(e2) {
  return Ne(e2, "spacing", 8);
}
function Ce(e2, t) {
  return typeof t == "string" || t == null ? t : e2(t);
}
const Fn = [""];
function Dr(e2, t) {
  var _a3;
  const r = e2.theme ?? ec, n = ((_a3 = r == null ? void 0 : r.internal_cache) == null ? void 0 : _a3.unarySpacing) ?? rr(r), s = {};
  for (const o in e2) {
    if (!t.has(o)) continue;
    const i = qe[o] ?? (Fn[0] = o, Fn), a = e2[o];
    Jt(s, e2.theme, a, (l, f) => {
      const u = l ? s[l] : s;
      for (let d = 0; d < i.length; d += 1) u[i[d]] = Ce(n, f);
    });
  }
  return s;
}
function Kr(e2) {
  return Dr(e2, er);
}
Kr.propTypes = {};
Kr.filterProps = er;
const j = Kr;
function Ur(e2) {
  return Dr(e2, tr);
}
Ur.propTypes = {};
Ur.filterProps = tr;
const L = Ur;
function Hr(e2) {
  return Dr(e2, Ls);
}
Hr.propTypes = {};
Hr.filterProps = Ls;
const Yr = Hr;
function Gs(e2 = 8, t = rr({ spacing: e2 })) {
  if (e2.mui) return e2;
  const r = (...n) => (n.length === 0 ? [1] : n).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return r.mui = true, r;
}
function me(...e2) {
  const t = e2.reduce((n, s) => (s.filterProps.forEach((o) => {
    n[o] = s;
  }), n), {}), r = (n) => {
    const s = {};
    for (const o in n) t[o] && Re(s, t[o](n));
    return s;
  };
  return r.propTypes = {}, r.filterProps = e2.reduce((n, s) => n.concat(s.filterProps), []), r;
}
function H(e2) {
  return typeof e2 != "number" ? e2 : `${e2}px solid`;
}
function re(e2, t) {
  return g({ prop: e2, themeKey: "borders", transform: t });
}
const Ns = re("border", H), Bs = re("borderTop", H), Ws = re("borderRight", H), Fs = re("borderBottom", H), Vs = re("borderLeft", H), zs = re("borderColor"), Ds = re("borderTopColor"), Ks = re("borderRightColor"), Us = re("borderBottomColor"), Hs = re("borderLeftColor"), Ys = re("outline", H), Qs = re("outlineColor"), rt = (e2) => {
  if (e2.borderRadius !== void 0 && e2.borderRadius !== null) {
    const t = Ne(e2.theme, "shape.borderRadius", 4), r = (n) => ({ borderRadius: Ce(t, n) });
    return de(e2, e2.borderRadius, r);
  }
  return null;
};
rt.propTypes = {};
rt.filterProps = ["borderRadius"];
const Qr = me(Ns, Bs, Ws, Fs, Vs, zs, Ds, Ks, Us, Hs, rt, Ys, Qs), nt = (e2) => {
  if (e2.gap !== void 0 && e2.gap !== null) {
    const t = Ne(e2.theme, "spacing", 8), r = (n) => ({ gap: Ce(t, n) });
    return de(e2, e2.gap, r);
  }
  return null;
};
nt.propTypes = {};
nt.filterProps = ["gap"];
const st = (e2) => {
  if (e2.columnGap !== void 0 && e2.columnGap !== null) {
    const t = Ne(e2.theme, "spacing", 8), r = (n) => ({ columnGap: Ce(t, n) });
    return de(e2, e2.columnGap, r);
  }
  return null;
};
st.propTypes = {};
st.filterProps = ["columnGap"];
const ot = (e2) => {
  if (e2.rowGap !== void 0 && e2.rowGap !== null) {
    const t = Ne(e2.theme, "spacing", 8), r = (n) => ({ rowGap: Ce(t, n) });
    return de(e2, e2.rowGap, r);
  }
  return null;
};
ot.propTypes = {};
ot.filterProps = ["rowGap"];
const qs = g({ prop: "gridColumn" }), Xs = g({ prop: "gridRow" }), Zs = g({ prop: "gridAutoFlow" }), Js = g({ prop: "gridAutoColumns" }), eo = g({ prop: "gridAutoRows" }), to = g({ prop: "gridTemplateColumns" }), ro = g({ prop: "gridTemplateRows" }), no = g({ prop: "gridTemplateAreas" }), so = g({ prop: "gridArea" }), qr = me(nt, st, ot, qs, Xs, Zs, Js, eo, to, ro, no, so);
function we(e2, t) {
  return t === "grey" ? t : e2;
}
const oo = g({ prop: "color", themeKey: "palette", transform: we }), io = g({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: we }), ao = g({ prop: "backgroundColor", themeKey: "palette", transform: we }), Xr = me(oo, io, ao), tc = Zt;
function K(e2) {
  return e2 <= 1 && e2 !== 0 ? `${e2 * 100}%` : e2;
}
const co = g({ prop: "width", transform: K }), nr = (e2) => {
  if (e2.maxWidth !== void 0 && e2.maxWidth !== null) {
    const t = (r) => {
      var _a3, _b2, _c2, _d2, _e2;
      const n = ((_c2 = (_b2 = (_a3 = e2.theme) == null ? void 0 : _a3.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[r]) || tc[r];
      return n ? ((_e2 = (_d2 = e2.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? { maxWidth: `${n}${e2.theme.breakpoints.unit}` } : { maxWidth: n } : { maxWidth: K(r) };
    };
    return de(e2, e2.maxWidth, t);
  }
  return null;
};
nr.filterProps = ["maxWidth"];
const lo = g({ prop: "minWidth", transform: K }), fo = g({ prop: "height", transform: K }), uo = g({ prop: "maxHeight", transform: K }), mo = g({ prop: "minHeight", transform: K }), rc = g({ prop: "size", cssProperty: "width", transform: K }), nc = g({ prop: "size", cssProperty: "height", transform: K }), po = g({ prop: "boxSizing" }), Zr = me(co, nr, lo, fo, uo, mo, po), sr = { border: { themeKey: "borders", transform: H }, borderTop: { themeKey: "borders", transform: H }, borderRight: { themeKey: "borders", transform: H }, borderBottom: { themeKey: "borders", transform: H }, borderLeft: { themeKey: "borders", transform: H }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: H }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: rt }, color: { themeKey: "palette", transform: we }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: we }, backgroundColor: { themeKey: "palette", transform: we }, p: { style: L }, pt: { style: L }, pr: { style: L }, pb: { style: L }, pl: { style: L }, px: { style: L }, py: { style: L }, padding: { style: L }, paddingTop: { style: L }, paddingRight: { style: L }, paddingBottom: { style: L }, paddingLeft: { style: L }, paddingX: { style: L }, paddingY: { style: L }, paddingInline: { style: L }, paddingInlineStart: { style: L }, paddingInlineEnd: { style: L }, paddingBlock: { style: L }, paddingBlockStart: { style: L }, paddingBlockEnd: { style: L }, m: { style: j }, mt: { style: j }, mr: { style: j }, mb: { style: j }, ml: { style: j }, mx: { style: j }, my: { style: j }, margin: { style: j }, marginTop: { style: j }, marginRight: { style: j }, marginBottom: { style: j }, marginLeft: { style: j }, marginX: { style: j }, marginY: { style: j }, marginInline: { style: j }, marginInlineStart: { style: j }, marginInlineEnd: { style: j }, marginBlock: { style: j }, marginBlockStart: { style: j }, marginBlockEnd: { style: j }, displayPrint: { cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: nt }, rowGap: { style: ot }, columnGap: { style: st }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: K }, maxWidth: { style: nr }, minWidth: { transform: K }, height: { transform: K }, maxHeight: { transform: K }, minHeight: { transform: K }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } }, sc = {};
function ho() {
  function e2(t) {
    if (!t.sx) return null;
    const { sx: r, theme: n = sc, nested: s } = t, o = n.unstable_sxConfig ?? sr, i = { sx: null, theme: n, nested: true };
    function a(l) {
      let f = l;
      if (typeof l == "function") f = l(n);
      else if (typeof l != "object") return l;
      if (!f) return null;
      const u = n.breakpoints ?? Qe, d = Ms(u);
      for (const p in f) {
        const m = oc(f[p], n);
        if (m != null) {
          if (typeof m != "object") {
            Vn(d, p, m, n, o);
            continue;
          }
          if (o[p]) {
            Vn(d, p, m, n, o);
            continue;
          }
          Za(u, m) ? Jt(d, t.theme, m, (h, y) => {
            d[h][p] = y;
          }) : (i.sx = m, d[p] = e2(i));
        }
      }
      return !s && n.modularCssLayers ? { "@layer sx": Gn(n, wr(u, d)) } : Gn(n, wr(u, d));
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return e2.filterProps = ["sx"], e2;
}
const Xe = ho();
function Vn(e2, t, r, n, s) {
  const o = s[t];
  if (!o) {
    e2[t] = r;
    return;
  }
  if (r == null) return;
  const { themeKey: i } = o;
  if (i === "typography" && r === "inherit") {
    e2[t] = r;
    return;
  }
  const { style: a } = o;
  if (a) {
    Re(e2, a({ [t]: r, theme: n }));
    return;
  }
  const { cssProperty: l = t, transform: f } = o, u = Ge(n, i);
  Jt(e2, n, r, (d, p) => {
    const m = js(u, f, p, t);
    l === false ? Re(d ? e2[d] : e2, m) : d ? e2[d][l] = m : e2[l] = m;
  });
}
function oc(e2, t) {
  return typeof e2 == "function" ? e2(t) : e2;
}
function ic(e2, t) {
  var _a3;
  const r = this;
  if (r.vars) {
    if (!((_a3 = r.colorSchemes) == null ? void 0 : _a3[e2]) || typeof r.getColorSchemeSelector != "function") return {};
    let n = r.getColorSchemeSelector(e2);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), { [n]: t });
  }
  return r.palette.mode === e2 ? t : {};
}
function Be(e2 = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: s, shape: o = {}, ...i } = e2, a = Vr(r), l = Gs(s);
  let f = ue({ breakpoints: a, direction: "ltr", components: {}, palette: { mode: "light", ...n }, spacing: l, shape: { ...Rs, ...o } }, i);
  return f = As(f), f.applyStyles = ic, f = t.reduce((u, d) => ue(u, d), f), f.unstable_sxConfig = { ...sr, ...i == null ? void 0 : i.unstable_sxConfig }, f.unstable_sx = function(d) {
    return Xe({ sx: d, theme: this });
  }, f.internal_cache = {}, f;
}
function ac(e2) {
  return Object.keys(e2).length === 0;
}
function it(e2 = null) {
  const t = fe(tt);
  return !t || ac(t) ? e2 : t;
}
const cc = Be();
function at(e2 = cc) {
  return it(e2);
}
function gr(e2) {
  const t = Se(e2);
  return e2 !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e2;
}
function yo({ styles: e2, themeId: t, defaultTheme: r = {} }) {
  const n = at(r), s = t && n[t] || n;
  let o = typeof e2 == "function" ? e2(s) : e2;
  return s.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => gr(typeof i == "function" ? i(s) : i)) : o = gr(o)), N(ws, { styles: o });
}
const lc = g({ prop: "displayPrint", cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }), fc = g({ prop: "display" }), uc = g({ prop: "overflow" }), dc = g({ prop: "textOverflow" }), mc = g({ prop: "visibility" }), pc = g({ prop: "whiteSpace" }), Jr = me(lc, fc, uc, dc, mc, pc), go = g({ prop: "flexBasis" }), _o = g({ prop: "flexDirection" }), bo = g({ prop: "flexWrap" }), So = g({ prop: "justifyContent" }), Co = g({ prop: "alignItems" }), xo = g({ prop: "alignContent" }), vo = g({ prop: "order" }), wo = g({ prop: "flex" }), To = g({ prop: "flexGrow" }), $o = g({ prop: "flexShrink" }), ko = g({ prop: "alignSelf" }), Po = g({ prop: "justifyItems" }), Eo = g({ prop: "justifySelf" }), en = me(go, _o, bo, So, Co, xo, vo, wo, To, $o, ko, Po, Eo), Ao = g({ prop: "position" }), Ro = g({ prop: "zIndex", themeKey: "zIndex" }), Oo = g({ prop: "top" }), Mo = g({ prop: "right" }), Io = g({ prop: "bottom" }), jo = g({ prop: "left" }), tn = me(Ao, Ro, Oo, Mo, Io, jo), rn = g({ prop: "boxShadow", themeKey: "shadows" }), Lo = g({ prop: "fontFamily", themeKey: "typography" }), Go = g({ prop: "fontSize", themeKey: "typography" }), No = g({ prop: "fontStyle", themeKey: "typography" }), Bo = g({ prop: "fontWeight", themeKey: "typography" }), Wo = g({ prop: "letterSpacing" }), Fo = g({ prop: "textTransform" }), Vo = g({ prop: "lineHeight" }), zo = g({ prop: "textAlign" }), Do = g({ prop: "typography", cssProperty: false, themeKey: "typography" }), nn = me(Do, Lo, Go, No, Bo, Wo, Vo, zo, Fo), hc = (e2) => {
  var _a3;
  const t = { systemProps: {}, otherProps: {} }, r = ((_a3 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a3.unstable_sxConfig) ?? sr;
  return Object.keys(e2).forEach((n) => {
    r[n] ? t.systemProps[n] = e2[n] : t.otherProps[n] = e2[n];
  }), t;
};
function yc(e2) {
  const { sx: t, ...r } = e2, { systemProps: n, otherProps: s } = hc(r);
  let o;
  return Array.isArray(t) ? o = [n, ...t] : typeof t == "function" ? o = (...i) => {
    const a = t(...i);
    return _e(a) ? { ...n, ...a } : n;
  } : o = { ...n, ...t }, { ...s, sx: o };
}
const zn = { borders: Qr.filterProps, display: Jr.filterProps, flexbox: en.filterProps, grid: qr.filterProps, positions: tn.filterProps, palette: Xr.filterProps, shadows: rn.filterProps, sizing: Zr.filterProps, spacing: Yr.filterProps, typography: nn.filterProps }, gc = { borders: Qr, display: Jr, flexbox: en, grid: qr, positions: tn, palette: Xr, shadows: rn, sizing: Zr, spacing: Yr, typography: nn }, _c = Object.keys(zn).reduce((e2, t) => {
  for (const r of zn[t]) e2[r] = gc[t];
  return e2;
}, {});
function bc(e2, t, r) {
  const n = { [e2]: t, theme: r }, s = _c[e2];
  return s ? s(n) : { [e2]: t };
}
const Dn = (e2) => e2, Sc = () => {
  let e2 = Dn;
  return { configure(t) {
    e2 = t;
  }, generate(t) {
    return e2(t);
  }, reset() {
    e2 = Dn;
  } };
}, Ko = Sc();
function Uo(e2) {
  var t, r, n = "";
  if (typeof e2 == "string" || typeof e2 == "number") n += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var s = e2.length;
    for (t = 0; t < s; t++) e2[t] && (r = Uo(e2[t])) && (n && (n += " "), n += r);
  } else for (r in e2) e2[r] && (n && (n += " "), n += r);
  return n;
}
function ct() {
  for (var e2, t, r = 0, n = "", s = arguments.length; r < s; r++) (e2 = arguments[r]) && (t = Uo(e2)) && (n && (n += " "), n += t);
  return n;
}
function Ho(e2 = {}) {
  const { themeId: t, defaultTheme: r, defaultClassName: n = "MuiBox-root", generateClassName: s } = e2, o = Ts("div", { shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as" })(Xe);
  return Ze(function(l, f) {
    const u = at(r), { className: d, component: p = "div", ...m } = l;
    return N(o, { as: p, ref: f, className: ct(d, s ? s(n) : n), theme: t && u[t] || u, ...m });
  });
}
const Cc = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Te(e2, t, r = "Mui") {
  const n = Cc[t];
  return n ? `${r}-${n}` : `${Ko.generate(e2)}-${t}`;
}
function or(e2, t, r = "Mui") {
  const n = {};
  return t.forEach((s) => {
    n[s] = Te(e2, s, r);
  }), n;
}
const Yo = or("MuiBox", ["root"]), xc = Ho({ defaultClassName: Yo.root, generateClassName: Ko.generate });
function Qo(e2) {
  const { variants: t, ...r } = e2, n = { variants: t, style: Se(r), isProcessed: true };
  return n.style === r || t && t.forEach((s) => {
    typeof s.style != "function" && (s.style = Se(s.style));
  }), n;
}
const qo = Be();
function gt(e2) {
  return e2 !== "ownerState" && e2 !== "theme" && e2 !== "sx" && e2 !== "as";
}
function xe(e2, t) {
  return t && e2 && typeof e2 == "object" && e2.styles && !e2.styles.startsWith("@layer") && (e2.styles = `@layer ${t}{${String(e2.styles)}}`), e2;
}
function vc(e2) {
  return e2 ? (t, r) => r[e2] : null;
}
function wc(e2, t, r) {
  e2.theme = Os(e2.theme) ? r : e2.theme[t] || e2.theme;
}
function _t(e2, t, r) {
  const n = typeof t == "function" ? t(e2) : t;
  if (Array.isArray(n)) return n.flatMap((s) => _t(e2, s, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let s;
    if (n.isProcessed) s = r ? xe(n.style, r) : n.style;
    else {
      const { variants: o, ...i } = n;
      s = r ? xe(Se(i), r) : i;
    }
    return Xo(e2, n.variants, [s], r);
  }
  return (n == null ? void 0 : n.isProcessed) ? r ? xe(Se(n.style), r) : n.style : r ? xe(Se(n), r) : n;
}
function Xo(e2, t, r = [], n = void 0) {
  var _a3;
  let s;
  e: for (let o = 0; o < t.length; o += 1) {
    const i = t[o];
    if (typeof i.props == "function") {
      if (s ?? (s = { ...e2, ...e2.ownerState, ownerState: e2.ownerState }), !i.props(s)) continue;
    } else for (const a in i.props) if (e2[a] !== i.props[a] && ((_a3 = e2.ownerState) == null ? void 0 : _a3[a]) !== i.props[a]) continue e;
    typeof i.style == "function" ? (s ?? (s = { ...e2, ...e2.ownerState, ownerState: e2.ownerState }), r.push(n ? xe(Se(i.style(s)), n) : i.style(s))) : r.push(n ? xe(Se(i.style), n) : i.style);
  }
  return r;
}
function Zo(e2 = {}) {
  const { themeId: t, defaultTheme: r = qo, rootShouldForwardProp: n = gt, slotShouldForwardProp: s = gt } = e2;
  function o(a) {
    wc(a, t, r);
  }
  return (a, l = {}) => {
    Oa(a, (S) => S.filter((_) => _ !== Xe));
    const { name: f, slot: u, skipVariantsResolver: d, skipSx: p, overridesResolver: m = vc(kc(u)), ...h } = l, y = f && f.startsWith("Mui") || u ? "components" : "custom", x = d !== void 0 ? d : u && u !== "Root" && u !== "root" || false, C = p || false;
    let k = gt;
    u === "Root" || u === "root" ? k = n : u ? k = s : $c(a) && (k = void 0);
    const R = Ts(a, { shouldForwardProp: k, label: Tc(), ...h }), $ = (S) => {
      if (S.__emotion_real === S) return S;
      if (typeof S == "function") return function(v) {
        return _t(v, S, v.theme.modularCssLayers ? y : void 0);
      };
      if (_e(S)) {
        const _ = Qo(S);
        return function(b) {
          return _.variants ? _t(b, _, b.theme.modularCssLayers ? y : void 0) : b.theme.modularCssLayers ? xe(_.style, y) : _.style;
        };
      }
      return S;
    }, P = (...S) => {
      const _ = [], v = S.map($), b = [];
      if (_.push(o), f && m && b.push(function(z) {
        var _a3, _b2;
        const D = (_b2 = (_a3 = z.theme.components) == null ? void 0 : _a3[f]) == null ? void 0 : _b2.styleOverrides;
        if (!D) return null;
        const he = {};
        for (const ke in D) he[ke] = _t(z, D[ke], z.theme.modularCssLayers ? "theme" : void 0);
        return m(z, he);
      }), f && !x && b.push(function(z) {
        var _a3, _b2, _c2;
        const D = (_c2 = (_b2 = (_a3 = z.theme) == null ? void 0 : _a3.components) == null ? void 0 : _b2[f]) == null ? void 0 : _c2.variants;
        return D ? Xo(z, D, [], z.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || b.push(Xe), Array.isArray(v[0])) {
        const W = v.shift(), z = new Array(_.length).fill(""), pe = new Array(b.length).fill("");
        let D;
        D = [...z, ...W, ...pe], D.raw = [...z, ...W.raw, ...pe], _.unshift(D);
      }
      const w = [..._, ...v, ...b], T = R(...w);
      return a.muiName && (T.muiName = a.muiName), T;
    };
    return R.withConfig && (P.withConfig = R.withConfig), P;
  };
}
function Tc(e2, t) {
  return void 0;
}
function $c(e2) {
  return typeof e2 == "string" && e2.charCodeAt(0) > 96;
}
function kc(e2) {
  return e2 && e2.charAt(0).toLowerCase() + e2.slice(1);
}
const ir = Zo();
function Tt(e2, t, r = false) {
  const n = { ...t };
  for (const s in e2) if (Object.prototype.hasOwnProperty.call(e2, s)) {
    const o = s;
    if (o === "components" || o === "slots") n[o] = { ...e2[o], ...n[o] };
    else if (o === "componentsProps" || o === "slotProps") {
      const i = e2[o], a = t[o];
      if (!a) n[o] = i || {};
      else if (!i) n[o] = a;
      else {
        n[o] = { ...a };
        for (const l in i) if (Object.prototype.hasOwnProperty.call(i, l)) {
          const f = l;
          n[o][f] = Tt(i[f], a[f], r);
        }
      }
    } else o === "className" && r && t.className !== void 0 ? n.className = ct(e2 == null ? void 0 : e2.className, t == null ? void 0 : t.className) : o === "style" && r && t.style ? n.style = { ...e2 == null ? void 0 : e2.style, ...t == null ? void 0 : t.style } : n[o] === void 0 && (n[o] = e2[o]);
  }
  return n;
}
function sn(e2) {
  const { theme: t, name: r, props: n } = e2;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Tt(t.components[r].defaultProps, n);
}
function ar(e2) {
  const { props: t, name: r, defaultTheme: n, themeId: s } = e2;
  let o = at(n);
  return s && (o = o[s] || o), sn({ theme: o, name: r, props: t });
}
const on = typeof window < "u" ? es : ve;
function Pc(e2, t, r, n, s) {
  const [o, i] = Ct(() => s && r ? r(e2).matches : n ? n(e2).matches : t);
  return on(() => {
    if (!r) return;
    const a = r(e2), l = () => {
      i(a.matches);
    };
    return l(), a.addEventListener("change", l), () => {
      a.removeEventListener("change", l);
    };
  }, [e2, r]), o;
}
const Ec = { ...Ke }, Jo = Ec.useSyncExternalStore;
function Ac(e2, t, r, n, s) {
  const o = dt(() => t, [t]), i = Y(() => {
    if (s && r) return () => r(e2).matches;
    if (n !== null) {
      const { matches: u } = n(e2);
      return () => u;
    }
    return o;
  }, [o, e2, n, s, r]), [a, l] = Y(() => {
    if (r === null) return [o, () => () => {
    }];
    const u = r(e2);
    return [() => u.matches, (d) => (u.addEventListener("change", d), () => {
      u.removeEventListener("change", d);
    })];
  }, [o, r, e2]);
  return Jo(l, a, i);
}
function Rc(e2 = {}) {
  const { themeId: t } = e2;
  return function(n, s = {}) {
    let o = it();
    o && t && (o = o[t] || o);
    const a = typeof window < "u" && typeof window.matchMedia < "u" ? window.matchMedia : null, { defaultMatches: l = false, matchMedia: f, ssrMatchMedia: u = null, noSsr: d = false } = sn({ name: "MuiUseMediaQuery", props: s, theme: o }), p = Y(() => f !== void 0 ? f : a === null ? null : a.bind(window), [f, a]);
    let m = typeof n == "function" ? n(o) : n;
    return m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Jo !== void 0 ? Ac : Pc)(m, l, p, u, d);
  };
}
const Oc = Rc();
function Mc(e2, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e2, r));
}
function an(e2, t = 0, r = 1) {
  return Mc(e2, t, r);
}
function ei(e2) {
  e2 = e2.slice(1);
  const t = new RegExp(`.{1,${e2.length >= 6 ? 2 : 1}}`, "g");
  let r = e2.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, s) => s < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ic(e2) {
  const t = e2.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function ee(e2) {
  if (e2.type) return e2;
  if (e2.charAt(0) === "#") return ee(ei(e2));
  const t = e2.indexOf("("), r = e2.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r)) throw new Error(xt(9, e2));
  let n = e2.substring(t + 1, e2.length - 1), s;
  if (r === "color") {
    if (n = n.split(" "), s = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s)) throw new Error(xt(10, s));
  } else n = n.split(",");
  return n = n.map((o) => parseFloat(o)), { type: r, values: n, colorSpace: s };
}
const ti = (e2) => {
  const t = ee(e2);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, jc = (e2, t) => {
  try {
    return ti(e2);
  } catch {
    return e2;
  }
};
function We(e2) {
  const { type: t, colorSpace: r } = e2;
  let { values: n } = e2;
  return t.includes("rgb") ? n = n.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Lc(e2) {
  if (e2.startsWith("#")) return e2;
  const { values: t } = ee(e2);
  return `#${t.map((r, n) => Ic(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function ri(e2) {
  e2 = ee(e2);
  const { values: t } = e2, r = t[0], n = t[1] / 100, s = t[2] / 100, o = n * Math.min(s, 1 - s), i = (f, u = (f + r / 30) % 12) => s - o * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e2.type === "hsla" && (a += "a", l.push(t[3])), We({ type: a, values: l });
}
function $t(e2) {
  e2 = ee(e2);
  let t = e2.type === "hsl" || e2.type === "hsla" ? ee(ri(e2)).values : e2.values;
  return t = t.map((r) => (e2.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Gc(e2, t) {
  const r = $t(e2), n = $t(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ni(e2, t) {
  return e2 = ee(e2), t = an(t), (e2.type === "rgb" || e2.type === "hsl") && (e2.type += "a"), e2.type === "color" ? e2.values[3] = `/${t}` : e2.values[3] = t, We(e2);
}
function Nc(e2, t, r) {
  try {
    return ni(e2, t);
  } catch {
    return e2;
  }
}
function cn(e2, t) {
  if (e2 = ee(e2), t = an(t), e2.type.includes("hsl")) e2.values[2] *= 1 - t;
  else if (e2.type.includes("rgb") || e2.type.includes("color")) for (let r = 0; r < 3; r += 1) e2.values[r] *= 1 - t;
  return We(e2);
}
function Bc(e2, t, r) {
  try {
    return cn(e2, t);
  } catch {
    return e2;
  }
}
function ln(e2, t) {
  if (e2 = ee(e2), t = an(t), e2.type.includes("hsl")) e2.values[2] += (100 - e2.values[2]) * t;
  else if (e2.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e2.values[r] += (255 - e2.values[r]) * t;
  else if (e2.type.includes("color")) for (let r = 0; r < 3; r += 1) e2.values[r] += (1 - e2.values[r]) * t;
  return We(e2);
}
function Wc(e2, t, r) {
  try {
    return ln(e2, t);
  } catch {
    return e2;
  }
}
function si(e2, t = 0.15) {
  return $t(e2) > 0.5 ? cn(e2, t) : ln(e2, t);
}
function Fc(e2, t, r) {
  try {
    return si(e2, t);
  } catch {
    return e2;
  }
}
function Vc(e2, t, r, n = 1) {
  const s = (l, f) => Math.round((l ** (1 / n) * (1 - r) + f ** (1 / n) * r) ** n), o = ee(e2), i = ee(t), a = [s(o.values[0], i.values[0]), s(o.values[1], i.values[1]), s(o.values[2], i.values[2])];
  return We({ type: "rgb", values: a });
}
const oi = je(null);
function fn() {
  return fe(oi);
}
const zc = typeof Symbol == "function" && Symbol.for, Dc = zc ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
function Kc(e2, t) {
  return typeof t == "function" ? t(e2) : { ...e2, ...t };
}
function Uc(e2) {
  const { children: t, theme: r } = e2, n = fn(), s = Y(() => {
    const o = n === null ? { ...r } : Kc(n, r);
    return o != null && (o[Dc] = n !== null), o;
  }, [r, n]);
  return N(oi.Provider, { value: s, children: t });
}
const ii = je();
function ai({ value: e2, ...t }) {
  return N(ii.Provider, { value: e2 ?? true, ...t });
}
const Hc = () => fe(ii) ?? false, ci = je(void 0);
function Yc({ value: e2, children: t }) {
  return N(ci.Provider, { value: e2, children: t });
}
function Qc(e2) {
  const { theme: t, name: r, props: n } = e2;
  if (!t || !t.components || !t.components[r]) return n;
  const s = t.components[r];
  return s.defaultProps ? Tt(s.defaultProps, n, t.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? Tt(s, n, t.components.mergeClassNameAndStyle) : n;
}
function Km({ props: e2, name: t }) {
  const r = fe(ci);
  return Qc({ props: e2, name: t, theme: { components: r } });
}
let Kn = 0;
function qc(e2) {
  const [t, r] = Ct(e2), n = e2 || t;
  return ve(() => {
    t == null && (Kn += 1, r(`mui-${Kn}`));
  }, [t]), n;
}
const Xc = { ...Ke }, Un = Xc.useId;
function Zc(e2) {
  if (Un !== void 0) {
    const t = Un();
    return e2 ?? t;
  }
  return qc(e2);
}
function Jc(e2) {
  const t = it(), r = Zc() || "", { modularCssLayers: n } = e2;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? s = "" : typeof n == "string" ? s = n.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, on(() => {
    var _a3, _b2;
    const o = document.querySelector("head");
    if (!o) return;
    const i = o.firstChild;
    if (s) {
      if (i && ((_a3 = i.hasAttribute) == null ? void 0 : _a3.call(i, "data-mui-layer-order")) && i.getAttribute("data-mui-layer-order") === r) return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", r), a.textContent = s, o.prepend(a);
    } else (_b2 = o.querySelector(`style[data-mui-layer-order="${r}"]`)) == null ? void 0 : _b2.remove();
  }, [s, r]), s ? N(yo, { styles: s }) : null;
}
const Hn = {};
function Yn(e2, t, r, n = false) {
  return Y(() => {
    const s = e2 && t[e2] || t;
    if (typeof r == "function") {
      const o = r(s), i = e2 ? { ...t, [e2]: o } : o;
      return n ? () => i : i;
    }
    return e2 ? { ...t, [e2]: r } : { ...t, ...r };
  }, [e2, t, r, n]);
}
function li(e2) {
  const { children: t, theme: r, themeId: n } = e2, s = it(Hn), o = fn() || Hn, i = Yn(n, s, r), a = Yn(n, o, r, true), l = (n ? i[n] : i).direction === "rtl", f = Jc(i);
  return N(Uc, { theme: a, children: N(tt.Provider, { value: i, children: N(ai, { value: l, children: ns(Yc, { value: n ? i[n].components : i.components, children: [f, t] }) }) }) });
}
const Qn = { theme: void 0 };
function el(e2) {
  let t, r;
  return function(s) {
    let o = t;
    return (o === void 0 || s.theme !== r) && (Qn.theme = s.theme, o = Qo(e2(Qn)), t = o, r = s.theme), o;
  };
}
const un = "mode", dn = "color-scheme", fi = "data-color-scheme", tl = { ...Ke }, qn = tl.useSyncExternalStore, rl = () => () => {
};
function nl() {
  return qn === void 0 ? true : qn(rl, () => false, () => true);
}
function ui(e2) {
  const { defaultMode: t = "system", defaultLightColorScheme: r = "light", defaultDarkColorScheme: n = "dark", modeStorageKey: s = un, colorSchemeStorageKey: o = dn, attribute: i = fi, colorSchemeNode: a = "document.documentElement", nonce: l } = e2 || {};
  let f = "", u = i;
  if (i === "class" && (u = ".%s"), i === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const p = u.substring(1);
    f += `${a}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${a}.classList.add('${p}'.replace('%s', colorScheme));`;
  }
  const d = u.match(/\[([^[\]]+)\]/);
  if (d) {
    const [p, m] = d[1].split("=");
    m || (f += `${a}.removeAttribute('${p}'.replace('%s', light));
      ${a}.removeAttribute('${p}'.replace('%s', dark));`), f += `
      ${a}.setAttribute('${p}'.replace('%s', colorScheme), ${m ? `${m}.replace('%s', colorScheme)` : '""'});`;
  } else u !== ".%s" && (f += `${a}.setAttribute('${u}', colorScheme);`);
  return N("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${t}';
  const dark = localStorage.getItem('${o}-dark') || '${n}';
  const light = localStorage.getItem('${o}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${f}
  }
} catch(e){}})();` } }, "mui-color-scheme-init");
}
function Um(e2) {
  return nl() ? ui(e2) : null;
}
function sl() {
}
const ol = ({ key: e2, storageWindow: t }) => (!t && typeof window < "u" && (t = window), { get(r) {
  if (typeof window > "u") return;
  if (!t) return r;
  let n;
  try {
    n = t.localStorage.getItem(e2);
  } catch {
  }
  return n || r;
}, set: (r) => {
  if (t) try {
    t.localStorage.setItem(e2, r);
  } catch {
  }
}, subscribe: (r) => {
  if (!t) return sl;
  const n = (s) => {
    const o = s.newValue;
    s.key === e2 && r(o);
  };
  return t.addEventListener("storage", n), () => {
    t.removeEventListener("storage", n);
  };
} });
function _r() {
}
function Xn(e2) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e2 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function di(e2, t) {
  if (e2.mode === "light" || e2.mode === "system" && e2.systemMode === "light") return t("light");
  if (e2.mode === "dark" || e2.mode === "system" && e2.systemMode === "dark") return t("dark");
}
function il(e2) {
  return di(e2, (t) => {
    if (t === "light") return e2.lightColorScheme;
    if (t === "dark") return e2.darkColorScheme;
  });
}
function al(e2) {
  const { defaultMode: t = "light", defaultLightColorScheme: r, defaultDarkColorScheme: n, supportedColorSchemes: s = [], modeStorageKey: o = un, colorSchemeStorageKey: i = dn, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: l = ol, noSsr: f = false } = e2, u = s.join(","), d = s.length > 1, p = Y(() => l == null ? void 0 : l({ key: o, storageWindow: a }), [l, o, a]), m = Y(() => l == null ? void 0 : l({ key: `${i}-light`, storageWindow: a }), [l, i, a]), h = Y(() => l == null ? void 0 : l({ key: `${i}-dark`, storageWindow: a }), [l, i, a]), [y, x] = Ct(() => {
    const v = (p == null ? void 0 : p.get(t)) || t, b = (m == null ? void 0 : m.get(r)) || r, w = (h == null ? void 0 : h.get(n)) || n;
    return { mode: v, systemMode: Xn(v), lightColorScheme: b, darkColorScheme: w };
  }), [C, k] = Ct(f || !d);
  ve(() => {
    k(true);
  }, []);
  const R = il(y), $ = dt((v) => {
    x((b) => {
      if (v === b.mode) return b;
      const w = v ?? t;
      return p == null ? void 0 : p.set(w), { ...b, mode: w, systemMode: Xn(w) };
    });
  }, [p, t]), P = dt((v) => {
    v ? typeof v == "string" ? v && !u.includes(v) ? console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`) : x((b) => {
      const w = { ...b };
      return di(b, (T) => {
        T === "light" && (m == null ? void 0 : m.set(v), w.lightColorScheme = v), T === "dark" && (h == null ? void 0 : h.set(v), w.darkColorScheme = v);
      }), w;
    }) : x((b) => {
      const w = { ...b }, T = v.light === null ? r : v.light, W = v.dark === null ? n : v.dark;
      return T && (u.includes(T) ? (w.lightColorScheme = T, m == null ? void 0 : m.set(T)) : console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`)), W && (u.includes(W) ? (w.darkColorScheme = W, h == null ? void 0 : h.set(W)) : console.error(`\`${W}\` does not exist in \`theme.colorSchemes\`.`)), w;
    }) : x((b) => (m == null ? void 0 : m.set(r), h == null ? void 0 : h.set(n), { ...b, lightColorScheme: r, darkColorScheme: n }));
  }, [u, m, h, r, n]), S = dt((v) => {
    y.mode === "system" && x((b) => {
      const w = (v == null ? void 0 : v.matches) ? "dark" : "light";
      return b.systemMode === w ? b : { ...b, systemMode: w };
    });
  }, [y.mode]), _ = Er(S);
  return _.current = S, ve(() => {
    if (typeof window.matchMedia != "function" || !d) return;
    const v = (...w) => _.current(...w), b = window.matchMedia("(prefers-color-scheme: dark)");
    return b.addListener(v), v(b), () => {
      b.removeListener(v);
    };
  }, [d]), ve(() => {
    if (d) {
      const v = (p == null ? void 0 : p.subscribe((T) => {
        (!T || ["light", "dark", "system"].includes(T)) && $(T || t);
      })) || _r, b = (m == null ? void 0 : m.subscribe((T) => {
        (!T || u.match(T)) && P({ light: T });
      })) || _r, w = (h == null ? void 0 : h.subscribe((T) => {
        (!T || u.match(T)) && P({ dark: T });
      })) || _r;
      return () => {
        v(), b(), w();
      };
    }
  }, [P, $, u, t, a, d, p, m, h]), { ...y, mode: C ? y.mode : void 0, systemMode: C ? y.systemMode : void 0, colorScheme: C ? R : void 0, setMode: $, setColorScheme: P };
}
const cl = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function ll(e2) {
  const { themeId: t, theme: r = {}, modeStorageKey: n = un, colorSchemeStorageKey: s = dn, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = e2, l = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, f = je(void 0), u = () => fe(f) || l, d = {}, p = {};
  function m(C) {
    var _a3, _b2, _c2, _d2;
    const { children: k, theme: R, modeStorageKey: $ = n, colorSchemeStorageKey: P = s, disableTransitionOnChange: S = o, storageManager: _, storageWindow: v = typeof window > "u" ? void 0 : window, documentNode: b = typeof document > "u" ? void 0 : document, colorSchemeNode: w = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: T = false, disableStyleSheetGeneration: W = false, defaultMode: z = "system", forceThemeRerender: pe = false, noSsr: D } = C, he = Er(false), ke = fn(), Fe = fe(f), Pe = !!Fe && !T, lt = Y(() => R || (typeof r == "function" ? r() : r), [R]), ne = lt[t], X = ne || lt, { colorSchemes: ye = d, components: pn = p, cssVarPrefix: fr } = X, hn = Object.keys(ye).filter((Z) => !!ye[Z]).join(","), Ee = Y(() => hn.split(","), [hn]), yn = typeof i == "string" ? i : i.light, gn = typeof i == "string" ? i : i.dark, Ci = ye[yn] && ye[gn] ? z : ((_b2 = (_a3 = ye[X.defaultColorScheme]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode) || ((_c2 = X.palette) == null ? void 0 : _c2.mode), { mode: xi, setMode: _n, systemMode: bn, lightColorScheme: Sn, darkColorScheme: Cn, colorScheme: vi, setColorScheme: xn } = al({ supportedColorSchemes: Ee, defaultLightColorScheme: yn, defaultDarkColorScheme: gn, modeStorageKey: $, colorSchemeStorageKey: P, defaultMode: Ci, storageManager: _, storageWindow: v, noSsr: D });
    let ur = xi, se = vi;
    Pe && (ur = Fe.mode, se = Fe.colorScheme);
    let ft = se || X.defaultColorScheme;
    X.vars && !pe && (ft = X.defaultColorScheme);
    const dr = Y(() => {
      var _a4;
      const Z = ((_a4 = X.generateThemeVars) == null ? void 0 : _a4.call(X)) || X.vars, I = { ...X, components: pn, colorSchemes: ye, cssVarPrefix: fr, vars: Z };
      if (typeof I.generateSpacing == "function" && (I.spacing = I.generateSpacing()), ft) {
        const J = ye[ft];
        J && typeof J == "object" && Object.keys(J).forEach((oe) => {
          J[oe] && typeof J[oe] == "object" ? I[oe] = { ...I[oe], ...J[oe] } : I[oe] = J[oe];
        });
      }
      return a ? a(I) : I;
    }, [X, ft, pn, ye, fr]), Ve = X.colorSchemeSelector;
    on(() => {
      if (se && w && Ve && Ve !== "media") {
        const Z = Ve;
        let I = Ve;
        if (Z === "class" && (I = ".%s"), Z === "data" && (I = "[data-%s]"), (Z == null ? void 0 : Z.startsWith("data-")) && !Z.includes("%s") && (I = `[${Z}="%s"]`), I.startsWith(".")) w.classList.remove(...Ee.map((J) => I.substring(1).replace("%s", J))), w.classList.add(I.substring(1).replace("%s", se));
        else {
          const J = I.replace("%s", se).match(/\[([^\]]+)\]/);
          if (J) {
            const [oe, mr] = J[1].split("=");
            mr || Ee.forEach((Ti) => {
              w.removeAttribute(oe.replace(se, Ti));
            }), w.setAttribute(oe, mr ? mr.replace(/"|'/g, "") : "");
          } else w.setAttribute(I, se);
        }
      }
    }, [se, Ve, w, Ee]), ve(() => {
      let Z;
      if (S && he.current && b) {
        const I = b.createElement("style");
        I.appendChild(b.createTextNode(cl)), b.head.appendChild(I), window.getComputedStyle(b.body), Z = setTimeout(() => {
          b.head.removeChild(I);
        }, 1);
      }
      return () => {
        clearTimeout(Z);
      };
    }, [se, S, b]), ve(() => (he.current = true, () => {
      he.current = false;
    }), []);
    const wi = Y(() => ({ allColorSchemes: Ee, colorScheme: se, darkColorScheme: Cn, lightColorScheme: Sn, mode: ur, setColorScheme: xn, setMode: _n, systemMode: bn }), [Ee, se, Cn, Sn, ur, xn, _n, bn, dr.colorSchemeSelector]);
    let vn = true;
    (W || X.cssVariables === false || Pe && (ke == null ? void 0 : ke.cssVarPrefix) === fr) && (vn = false);
    const wn = ns(Pr, { children: [N(li, { themeId: ne ? t : void 0, theme: dr, children: k }), vn && N(ws, { styles: ((_d2 = dr.generateStyleSheets) == null ? void 0 : _d2.call(dr)) || [] })] });
    return Pe ? wn : N(f.Provider, { value: wi, children: wn });
  }
  const h = typeof i == "string" ? i : i.light, y = typeof i == "string" ? i : i.dark;
  return { CssVarsProvider: m, useColorScheme: u, getInitColorSchemeScript: (C) => ui({ colorSchemeStorageKey: s, defaultLightColorScheme: h, defaultDarkColorScheme: y, modeStorageKey: n, ...C }) };
}
function fl(e2 = "") {
  function t(...n) {
    if (!n.length) return "";
    const s = n[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ""}${s}${t(...n.slice(1))})` : `, ${s}`;
  }
  return (n, ...s) => `var(--${e2 ? `${e2}-` : ""}${n}${t(...s)})`;
}
const Zn = (e2, t, r, n = []) => {
  let s = e2;
  t.forEach((o, i) => {
    i === t.length - 1 ? Array.isArray(s) ? s[Number(o)] = r : s && typeof s == "object" && (s[o] = r) : s && typeof s == "object" && (s[o] || (s[o] = n.includes(o) ? [] : {}), s = s[o]);
  });
}, ul = (e2, t, r) => {
  function n(s, o = [], i = []) {
    Object.entries(s).forEach(([a, l]) => {
      (!r || r && !r([...o, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...o, a], Array.isArray(l) ? [...i, a] : i) : t([...o, a], l, i));
    });
  }
  n(e2);
}, dl = (e2, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e2.includes(n)) || e2[e2.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function bt(e2, t) {
  const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, s = {}, o = {}, i = {};
  return ul(e2, (a, l, f) => {
    if ((typeof l == "string" || typeof l == "number") && (!n || !n(a, l))) {
      const u = `--${r ? `${r}-` : ""}${a.join("-")}`, d = dl(a, l);
      Object.assign(s, { [u]: d }), Zn(o, a, `var(${u})`, f), Zn(i, a, `var(${u}, ${d})`, f);
    }
  }, (a) => a[0] === "vars"), { css: s, vars: o, varsWithDefaults: i };
}
function mi(e2, t = {}) {
  const { getSelector: r = C, disableCssColorScheme: n, colorSchemeSelector: s, enableContrastVars: o } = t, { colorSchemes: i = {}, components: a, defaultColorScheme: l = "light", ...f } = e2, { vars: u, css: d, varsWithDefaults: p } = bt(f, t);
  let m = p;
  const h = {}, { [l]: y, ...x } = i;
  if (Object.entries(x || {}).forEach(([$, P]) => {
    const { vars: S, css: _, varsWithDefaults: v } = bt(P, t);
    m = ue(m, v), h[$] = { css: _, vars: S };
  }), y) {
    const { css: $, vars: P, varsWithDefaults: S } = bt(y, t);
    m = ue(m, S), h[l] = { css: $, vars: P };
  }
  function C($, P) {
    var _a3, _b2;
    let S = s;
    if (s === "class" && (S = ".%s"), s === "data" && (S = "[data-%s]"), (s == null ? void 0 : s.startsWith("data-")) && !s.includes("%s") && (S = `[${s}="%s"]`), $) {
      if (S === "media") return e2.defaultColorScheme === $ ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a3 = i[$]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode) || $})`]: { ":root": P } };
      if (S) return e2.defaultColorScheme === $ ? `:root, ${S.replace("%s", String($))}` : S.replace("%s", String($));
    }
    return ":root";
  }
  return { vars: m, generateThemeVars: () => {
    let $ = { ...u };
    return Object.entries(h).forEach(([, { vars: P }]) => {
      $ = ue($, P);
    }), $;
  }, generateStyleSheets: () => {
    var _a3, _b2;
    const $ = [], P = e2.defaultColorScheme || "light";
    function S(b, w) {
      Object.keys(w).length && $.push(typeof b == "string" ? { [b]: { ...w } } : b);
    }
    S(r(void 0, { ...d }), d);
    const { [P]: _, ...v } = h;
    if (_) {
      const { css: b } = _, w = (_b2 = (_a3 = i[P]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, T = !n && w ? { colorScheme: w, ...b } : { ...b };
      S(r(P, { ...T }), T);
    }
    return Object.entries(v).forEach(([b, { css: w }]) => {
      var _a4, _b3;
      const T = (_b3 = (_a4 = i[b]) == null ? void 0 : _a4.palette) == null ? void 0 : _b3.mode, W = !n && T ? { colorScheme: T, ...w } : { ...w };
      S(r(b, { ...W }), W);
    }), o && $.push({ ":root": { "--__l-threshold": "0.7", "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)", "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)" } }), $;
  } };
}
function ml(e2) {
  return function(r) {
    return e2 === "media" ? `@media (prefers-color-scheme: ${r})` : e2 ? e2.startsWith("data-") && !e2.includes("%s") ? `[${e2}="${r}"] &` : e2 === "class" ? `.${r} &` : e2 === "data" ? `[data-${r}] &` : `${e2.replace("%s", r)} &` : "&";
  };
}
function pl({ colorSchemeSelector: e2 = `[${fi}="%s"]`, ...t }) {
  const r = t, n = mi(r, { ...t, prefix: t.cssVarPrefix, colorSchemeSelector: e2 });
  return r.vars = n.vars, r.generateThemeVars = n.generateThemeVars, r.generateStyleSheets = n.generateStyleSheets, r.colorSchemeSelector = e2, r.getColorSchemeSelector = ml(e2), r.internal_cache = {}, r;
}
const hl = "9.2.0", yl = 9, gl = 2, _l = 0, bl = void 0;
function mn(e2, t, r = void 0) {
  const n = {};
  for (const s in e2) {
    const o = e2[s];
    let i = "", a = true;
    for (let l = 0; l < o.length; l += 1) {
      const f = o[l];
      f && (i += (a === true ? "" : " ") + t(f), a = false, r && r[f] && (i += " " + r[f]));
    }
    n[s] = i;
  }
  return n;
}
const Sl = Be(), Cl = ir("div", { name: "MuiContainer", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: r } = e2;
  return [t.root, t[`maxWidth${zr(String(r.maxWidth))}`], r.fixed && t.fixed, r.disableGutters && t.disableGutters];
} }), xl = (e2) => ar({ props: e2, name: "MuiContainer", defaultTheme: Sl }), vl = (e2, t) => {
  const r = (l) => Te(t, l), { classes: n, fixed: s, disableGutters: o, maxWidth: i } = e2, a = { root: ["root", i && `maxWidth${zr(String(i))}`, s && "fixed", o && "disableGutters"] };
  return mn(a, r, n);
};
function pi(e2 = {}) {
  const { createStyledComponent: t = Cl, useThemeProps: r = xl, componentName: n = "MuiContainer" } = e2, s = t(({ theme: i, ownerState: a }) => ({ width: "100%", marginLeft: "auto", boxSizing: "border-box", marginRight: "auto", ...!a.disableGutters && { paddingLeft: i.spacing(2), paddingRight: i.spacing(2), [i.breakpoints.up("sm")]: { paddingLeft: i.spacing(3), paddingRight: i.spacing(3) } } }), ({ theme: i, ownerState: a }) => a.fixed && Object.keys(i.breakpoints.values).reduce((l, f) => {
    const u = f, d = i.breakpoints.values[u];
    return d !== 0 && (l[i.breakpoints.up(u)] = { maxWidth: `${d}${i.breakpoints.unit}` }), l;
  }, {}), ({ theme: i, ownerState: a }) => ({ ...a.maxWidth === "xs" && { [i.breakpoints.up("xs")]: { maxWidth: Math.max(i.breakpoints.values.xs, 444) } }, ...a.maxWidth && a.maxWidth !== "xs" && { [i.breakpoints.up(a.maxWidth)]: { maxWidth: `${i.breakpoints.values[a.maxWidth]}${i.breakpoints.unit}` } } }));
  return Ze(function(a, l) {
    const f = r(a), { className: u, component: d = "div", disableGutters: p = false, fixed: m = false, maxWidth: h = "lg", classes: y, ...x } = f, C = { ...f, component: d, disableGutters: p, fixed: m, maxWidth: h }, k = vl(C, n);
    return N(s, { as: d, ownerState: C, className: ct(k.root, u), ref: l, ...x });
  });
}
const wl = pi();
function Tl(e2) {
  return Te("MuiContainer", e2);
}
const $l = or("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);
function kl(e2, t) {
  var _a3, _b2, _c2;
  return Pt(e2) && t.indexOf(e2.type.muiName ?? ((_c2 = (_b2 = (_a3 = e2.type) == null ? void 0 : _a3._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
}
const Pl = (e2, t) => e2.filter((r) => t.includes(r)), $e = (e2, t, r) => {
  const n = e2.keys[0];
  Array.isArray(t) ? t.forEach((s, o) => {
    r((i, a) => {
      o <= e2.keys.length - 1 && (o === 0 ? Object.assign(i, a) : i[e2.up(e2.keys[o])] = a);
    }, s);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e2.keys.length ? e2.keys : Pl(e2.keys, Object.keys(t))).forEach((o) => {
    if (e2.keys.includes(o)) {
      const i = t[o];
      i !== void 0 && r((a, l) => {
        n === o ? Object.assign(a, l) : a[e2.up(o)] = l;
      }, i);
    }
  }) : (typeof t == "number" || typeof t == "string") && r((s, o) => {
    Object.assign(s, o);
  }, t);
};
function kt(e2) {
  return `--Grid-${e2}Spacing`;
}
function cr(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
const Jn = "--Grid-columns", Oe = "--Grid-parent-columns", El = ({ theme: e2, ownerState: t }) => {
  const r = {};
  return $e(e2.breakpoints, t.size, (n, s) => {
    let o = {};
    s === "grow" && (o = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }), s === "auto" && (o = { flexBasis: "auto", flexGrow: 0, flexShrink: 0, maxWidth: "none", width: "auto" }), typeof s == "number" && (o = { flexGrow: 0, flexBasis: "auto", width: `calc(100% * ${s} / var(${Oe}) - (var(${Oe}) - ${s}) * (var(${cr("column")}) / var(${Oe})))` }), n(r, o);
  }), r;
}, Al = ({ theme: e2, ownerState: t }) => {
  const r = {};
  return $e(e2.breakpoints, t.offset, (n, s) => {
    let o = {};
    s === "auto" && (o = { marginLeft: "auto" }), typeof s == "number" && (o = { marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / var(${Oe}) + var(${cr("column")}) * ${s} / var(${Oe}))` }), n(r, o);
  }), r;
}, Rl = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = { [Jn]: 12 };
  return $e(e2.breakpoints, t.columns, (n, s) => {
    const o = s ?? 12;
    n(r, { [Jn]: o, "> *": { [Oe]: o } });
  }), r;
}, Ol = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = {};
  return $e(e2.breakpoints, t.rowSpacing, (n, s) => {
    var _a3;
    const o = typeof s == "string" ? s : (_a3 = e2.spacing) == null ? void 0 : _a3.call(e2, s);
    n(r, { [kt("row")]: o, "> *": { [cr("row")]: o } });
  }), r;
}, Ml = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = {};
  return $e(e2.breakpoints, t.columnSpacing, (n, s) => {
    var _a3;
    const o = typeof s == "string" ? s : (_a3 = e2.spacing) == null ? void 0 : _a3.call(e2, s);
    n(r, { [kt("column")]: o, "> *": { [cr("column")]: o } });
  }), r;
}, Il = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = {};
  return $e(e2.breakpoints, t.direction, (n, s) => {
    n(r, { flexDirection: s });
  }), r;
}, jl = ({ ownerState: e2 }) => ({ minWidth: 0, boxSizing: "border-box", ...e2.container && { display: "flex", flexWrap: "wrap", ...e2.wrap && e2.wrap !== "wrap" && { flexWrap: e2.wrap }, gap: `var(${kt("row")}) var(${kt("column")})` } }), hi = (e2) => {
  const t = [];
  return Object.entries(e2).forEach(([r, n]) => {
    n !== false && n !== void 0 && t.push(`grid-${r}-${String(n)}`);
  }), t;
}, yi = (e2, t = "xs") => {
  function r(n) {
    return n === void 0 ? false : typeof n == "string" && !Number.isNaN(Number(n)) || typeof n == "number" && n > 0;
  }
  if (r(e2)) return [`spacing-${t}-${String(e2)}`];
  if (typeof e2 == "object" && !Array.isArray(e2)) {
    const n = [];
    return Object.entries(e2).forEach(([s, o]) => {
      r(o) && n.push(`spacing-${s}-${String(o)}`);
    }), n;
  }
  return [];
}, gi = (e2) => e2 === void 0 ? [] : typeof e2 == "object" ? Object.entries(e2).map(([t, r]) => `direction-${t}-${r}`) : [`direction-xs-${String(e2)}`], Ll = Be(), Gl = ir("div", { name: "MuiGrid", slot: "Root" });
function Nl(e2) {
  return ar({ props: e2, name: "MuiGrid", defaultTheme: Ll });
}
function _i(e2 = {}) {
  const { createStyledComponent: t = Gl, useThemeProps: r = Nl, useTheme: n = at, componentName: s = "MuiGrid" } = e2, o = (f, u) => {
    const { container: d, direction: p, spacing: m, wrap: h, size: y } = f, x = { root: ["root", d && "container", h !== "wrap" && `wrap-xs-${String(h)}`, ...gi(p), ...hi(y), ...d ? yi(m, u.breakpoints.keys[0]) : []] };
    return mn(x, (C) => Te(s, C), {});
  };
  function i(f, u, d = () => true) {
    const p = {};
    return f === null || (Array.isArray(f) ? f.forEach((m, h) => {
      m !== null && d(m) && u.keys[h] && (p[u.keys[h]] = m);
    }) : typeof f == "object" ? Object.keys(f).forEach((m) => {
      const h = f[m];
      h != null && d(h) && (p[m] = h);
    }) : p[u.keys[0]] = f), p;
  }
  const a = t(Rl, Ml, Ol, El, Il, jl, Al), l = Ze(function(u, d) {
    const p = n(), h = r(u), { className: y, children: x, columns: C = 12, container: k = false, component: R = "div", direction: $ = "row", wrap: P = "wrap", size: S = {}, offset: _ = {}, spacing: v = 0, rowSpacing: b = v, columnSpacing: w = v, unstable_level: T = 0, ...W } = h, z = i(S, p.breakpoints, (ne) => ne !== false), pe = i(_, p.breakpoints), D = u.columns ?? (T ? void 0 : C), he = u.spacing ?? (T ? void 0 : v), ke = u.rowSpacing ?? u.spacing ?? (T ? void 0 : b), Fe = u.columnSpacing ?? u.spacing ?? (T ? void 0 : w), Pe = { ...h, level: T, columns: D, container: k, direction: $, wrap: P, spacing: he, rowSpacing: ke, columnSpacing: Fe, size: z, offset: pe }, lt = o(Pe, p);
    return N(a, { ref: d, as: R, ownerState: Pe, className: ct(lt.root, y), ...W, children: ts.map(x, (ne) => {
      var _a3;
      return Pt(ne) && kl(ne, ["Grid"]) && k && ne.props.container ? rs(ne, { unstable_level: ((_a3 = ne.props) == null ? void 0 : _a3.unstable_level) ?? T + 1 }) : ne;
    }) });
  });
  return l.muiName = "Grid", l;
}
const Bl = _i();
function Wl(e2) {
  return Te("MuiGrid", e2);
}
const Fl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Vl = ["column-reverse", "column", "row-reverse", "row"], zl = ["nowrap", "wrap-reverse", "wrap"], De = ["auto", "grow", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Dl = or("MuiGrid", ["root", "container", "item", ...Fl.map((e2) => `spacing-xs-${e2}`), ...Vl.map((e2) => `direction-xs-${e2}`), ...zl.map((e2) => `wrap-xs-${e2}`), ...De.map((e2) => `grid-xs-${e2}`), ...De.map((e2) => `grid-sm-${e2}`), ...De.map((e2) => `grid-md-${e2}`), ...De.map((e2) => `grid-lg-${e2}`), ...De.map((e2) => `grid-xl-${e2}`)]), Kl = Be(), Ul = ir("div", { name: "MuiStack", slot: "Root" });
function Hl(e2) {
  return ar({ props: e2, name: "MuiStack", defaultTheme: Kl });
}
function Yl(e2, t) {
  const r = ts.toArray(e2).filter(Boolean);
  return r.reduce((n, s, o) => (n.push(s), o < r.length - 1 && n.push(rs(t, { key: `separator-${o}` })), n), []);
}
const Ql = (e2) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[e2], ql = ({ ownerState: e2, theme: t }) => {
  let r = { display: "flex", flexDirection: "column", ...de({ theme: t }, yt({ values: e2.direction, breakpoints: t.breakpoints.values }), (n) => ({ flexDirection: n })) };
  if (e2.spacing) {
    const n = rr(t), s = Object.keys(t.breakpoints.values).reduce((l, f) => ((typeof e2.spacing == "object" && e2.spacing[f] != null || typeof e2.direction == "object" && e2.direction[f] != null) && (l[f] = true), l), {}), o = yt({ values: e2.direction, base: s }), i = yt({ values: e2.spacing, base: s });
    typeof o == "object" && Object.keys(o).forEach((l, f, u) => {
      if (!o[l]) {
        const p = f > 0 ? o[u[f - 1]] : "column";
        o[l] = p;
      }
    }), r = ue(r, de({ theme: t }, i, (l, f) => e2.useFlexGap ? { gap: Ce(n, l) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${Ql(f ? o[f] : e2.direction)}`]: Ce(n, l) } }));
  }
  return r = Is(t.breakpoints, r), r;
};
function bi(e2 = {}) {
  const { createStyledComponent: t = Ul, useThemeProps: r = Hl, componentName: n = "MuiStack" } = e2, s = () => mn({ root: ["root"] }, (l) => Te(n, l), {}), o = t(ql);
  return Ze(function(l, f) {
    const u = r(l), { component: d = "div", direction: p = "column", spacing: m = 0, divider: h, children: y, className: x, useFlexGap: C = false, ...k } = u, R = { direction: p, spacing: m, useFlexGap: C }, $ = s();
    return N(o, { as: d, ownerState: R, ref: f, className: ct($.root, x), ...k, children: h ? Yl(y, h) : y });
  });
}
const Xl = bi();
function Zl(e2) {
  return Te("MuiStack", e2);
}
const Jl = or("MuiStack", ["root"]);
function ef() {
  throw new Error(xt(19));
}
const Tr = Object.freeze(Object.defineProperty({ __proto__: null, Box: xc, Container: wl, GlobalStyles: yo, Grid: Bl, RtlProvider: ai, Stack: Xl, StyledEngineProvider: Aa, ThemeProvider: li, alignContent: xo, alignItems: Co, alignSelf: ko, alpha: ni, backgroundColor: ao, bgcolor: io, blend: Vc, border: Ns, borderBottom: Fs, borderBottomColor: Us, borderColor: zs, borderLeft: Vs, borderLeftColor: Hs, borderRadius: rt, borderRight: Ws, borderRightColor: Ks, borderTop: Bs, borderTopColor: Ds, borderTransform: H, borders: Qr, bottom: Io, boxClasses: Yo, boxSizing: po, breakpoints: qa, color: oo, colorChannel: ti, columnGap: st, compose: me, containerClasses: $l, createBox: Ho, createBreakpoints: Vr, createContainer: pi, createGrid: _i, createSpacing: Gs, createStack: bi, createStyled: Zo, createTheme: Be, createUnarySpacing: rr, createUnaryUnit: Ne, css: vs, cssContainerQueries: As, darken: cn, decomposeColor: ee, display: Jr, emphasize: si, experimental_sx: ef, flex: wo, flexBasis: go, flexDirection: _o, flexGrow: To, flexShrink: $o, flexWrap: bo, flexbox: en, fontFamily: Lo, fontSize: Go, fontStyle: No, fontWeight: Bo, gap: nt, getContainerUtilityClass: Tl, getContrastRatio: Gc, getGridUtilityClass: Wl, getLuminance: $t, getPath: Ge, getStackUtilityClass: Zl, getStyleValue: Ja, getThemeProps: sn, getValue: Ce, grid: qr, gridArea: so, gridAutoColumns: Js, gridAutoFlow: Zs, gridAutoRows: eo, gridClasses: Dl, gridColumn: qs, gridRow: Xs, gridTemplateAreas: no, gridTemplateColumns: to, gridTemplateRows: ro, handleBreakpoints: de, height: fo, hexToRgb: ei, hslToRgb: ri, justifyContent: So, justifyItems: Po, justifySelf: Eo, keyframes: Sa, left: jo, letterSpacing: Wo, lighten: ln, lineHeight: Vo, major: yl, margin: j, marginKeys: er, maxHeight: uo, maxWidth: nr, mergeBreakpointsInOrder: Is, minHeight: mo, minWidth: lo, minor: gl, order: vo, outline: Ys, outlineColor: Qs, padding: L, paddingKeys: tr, palette: Xr, paletteTransform: we, patch: _l, position: Ao, positions: tn, prerelease: bl, private_safeAlpha: Nc, private_safeColorChannel: jc, private_safeDarken: Bc, private_safeEmphasize: Fc, private_safeLighten: Wc, recomposeColor: We, responsivePropType: Na, rgbToHex: Lc, right: Mo, rowGap: ot, shadows: rn, shape: Rs, shouldForwardProp: gt, sizeHeight: nc, sizeWidth: rc, sizing: Zr, sizingTransform: K, spacing: Yr, stackClasses: Jl, style: g, styled: ir, systemDefaultTheme: qo, textAlign: zo, textTransform: Fo, top: Oo, typography: nn, typographyVariant: Do, unstable_createCssVarsProvider: ll, unstable_createCssVarsTheme: pl, unstable_createGetCssVar: fl, unstable_createStyleFunctionSx: ho, unstable_cssVarsParser: bt, unstable_defaultSxConfig: sr, unstable_extendSxProp: yc, unstable_generateDirectionClasses: gi, unstable_generateSizeClassNames: hi, unstable_generateSpacingClassNames: yi, unstable_getThemeValue: bc, unstable_memoTheme: el, unstable_prepareCssVars: mi, unstable_resolveBreakpointValues: yt, unstable_styleFunctionSx: Xe, unstable_traverseBreakpoints: $e, useMediaQuery: Oc, useRtl: Hc, useTheme: at, useThemeProps: ar, useThemeWithoutDefault: it, version: hl, width: co, zIndex: Ro }, Symbol.toStringTag, { value: "Module" })), c = Tr, tf = c.experimental_sx, rf = c.css, nf = c.keyframes, sf = c.StyledEngineProvider, of = c.GlobalStyles, af = c.borders, cf = c.breakpoints, lf = c.cssContainerQueries, ff = c.handleBreakpoints, uf = c.mergeBreakpointsInOrder, df = c.unstable_resolveBreakpointValues, mf = c.compose, pf = c.display, hf = c.flexbox, yf = c.grid, gf = c.palette, _f = c.positions, bf = c.shadows, Sf = c.sizing, Cf = c.spacing, xf = c.style, vf = c.getPath, wf = c.getStyleValue, Tf = c.typography, $f = c.unstable_styleFunctionSx, kf = c.unstable_createStyleFunctionSx, Pf = c.unstable_extendSxProp, Ef = c.unstable_defaultSxConfig, Af = c.unstable_getThemeValue, Rf = c.Box, Of = c.createBox, Mf = c.createStyled, If = c.styled, jf = c.createTheme, Lf = c.createBreakpoints, Gf = c.createSpacing, Nf = c.shape, Bf = c.useThemeProps, Wf = c.getThemeProps, Ff = c.useTheme, Vf = c.useThemeWithoutDefault, zf = c.useMediaQuery, Df = c.ThemeProvider, Kf = c.unstable_memoTheme, Uf = c.unstable_createCssVarsProvider, Hf = c.unstable_createGetCssVar, Yf = c.unstable_cssVarsParser, Qf = c.unstable_prepareCssVars, qf = c.unstable_createCssVarsTheme, Xf = c.responsivePropType, Zf = c.RtlProvider, Jf = c.createContainer, eu = c.Container, tu = c.Grid, ru = c.Stack, nu = c.borderTransform, su = c.border, ou = c.borderTop, iu = c.borderRight, au = c.borderBottom, cu = c.borderLeft, lu = c.borderColor, fu = c.borderTopColor, uu = c.borderRightColor, du = c.borderBottomColor, mu = c.borderLeftColor, pu = c.outline, hu = c.outlineColor, yu = c.borderRadius, gu = c.flexBasis, _u = c.flexDirection, bu = c.flexWrap, Su = c.justifyContent, Cu = c.alignItems, xu = c.alignContent, vu = c.order, wu = c.flex, Tu = c.flexGrow, $u = c.flexShrink, ku = c.alignSelf, Pu = c.justifyItems, Eu = c.justifySelf, Au = c.gap, Ru = c.columnGap, Ou = c.rowGap, Mu = c.gridColumn, Iu = c.gridRow, ju = c.gridAutoFlow, Lu = c.gridAutoColumns, Gu = c.gridAutoRows, Nu = c.gridTemplateColumns, Bu = c.gridTemplateRows, Wu = c.gridTemplateAreas, Fu = c.gridArea, Vu = c.paletteTransform, zu = c.color, Du = c.bgcolor, Ku = c.backgroundColor, Uu = c.position, Hu = c.zIndex, Yu = c.top, Qu = c.right, qu = c.bottom, Xu = c.left, Zu = c.sizingTransform, Ju = c.width, ed = c.maxWidth, td = c.minWidth, rd = c.height, nd = c.maxHeight, sd = c.minHeight, od = c.sizeWidth, id = c.sizeHeight, ad = c.boxSizing, cd = c.marginKeys, ld = c.paddingKeys, fd = c.createUnaryUnit, ud = c.createUnarySpacing, dd = c.getValue, md = c.margin, pd = c.padding, hd = c.fontFamily, yd = c.fontSize, gd = c.fontStyle, _d = c.fontWeight, bd = c.letterSpacing, Sd = c.textTransform, Cd = c.lineHeight, xd = c.textAlign, vd = c.typographyVariant, wd = c.boxClasses, Td = c.systemDefaultTheme, $d = c.shouldForwardProp, kd = c.hexToRgb, Pd = c.decomposeColor, Ed = c.colorChannel, Ad = c.private_safeColorChannel, Rd = c.recomposeColor, Od = c.rgbToHex, Md = c.hslToRgb, Id = c.getLuminance, jd = c.getContrastRatio, Ld = c.alpha, Gd = c.private_safeAlpha, Nd = c.darken, Bd = c.private_safeDarken, Wd = c.lighten, Fd = c.private_safeLighten, Vd = c.emphasize, zd = c.private_safeEmphasize, Dd = c.blend, Kd = c.useRtl, Ud = c.version, Hd = c.major, Yd = c.minor, Qd = c.patch, qd = c.prerelease, Xd = c.containerClasses, Zd = c.getContainerUtilityClass, Jd = c.createGrid, em = c.gridClasses, tm = c.unstable_traverseBreakpoints, rm = c.unstable_generateDirectionClasses, nm = c.unstable_generateSizeClassNames, sm = c.unstable_generateSpacingClassNames, om = c.getGridUtilityClass, im = c.createStack, am = c.stackClasses, cm = c.getStackUtilityClass, lm = Reflect.get(Tr, "default") ?? Tr, fm = Object.freeze(Object.defineProperty({ __proto__: null, Box: Rf, Container: eu, GlobalStyles: of, Grid: tu, RtlProvider: Zf, Stack: ru, StyledEngineProvider: sf, ThemeProvider: Df, alignContent: xu, alignItems: Cu, alignSelf: ku, alpha: Ld, backgroundColor: Ku, bgcolor: Du, blend: Dd, border: su, borderBottom: au, borderBottomColor: du, borderColor: lu, borderLeft: cu, borderLeftColor: mu, borderRadius: yu, borderRight: iu, borderRightColor: uu, borderTop: ou, borderTopColor: fu, borderTransform: nu, borders: af, bottom: qu, boxClasses: wd, boxSizing: ad, breakpoints: cf, color: zu, colorChannel: Ed, columnGap: Ru, compose: mf, containerClasses: Xd, createBox: Of, createBreakpoints: Lf, createContainer: Jf, createGrid: Jd, createSpacing: Gf, createStack: im, createStyled: Mf, createTheme: jf, createUnarySpacing: ud, createUnaryUnit: fd, css: rf, cssContainerQueries: lf, darken: Nd, decomposeColor: Pd, default: lm, display: pf, emphasize: Vd, experimental_sx: tf, flex: wu, flexBasis: gu, flexDirection: _u, flexGrow: Tu, flexShrink: $u, flexWrap: bu, flexbox: hf, fontFamily: hd, fontSize: yd, fontStyle: gd, fontWeight: _d, gap: Au, getContainerUtilityClass: Zd, getContrastRatio: jd, getGridUtilityClass: om, getLuminance: Id, getPath: vf, getStackUtilityClass: cm, getStyleValue: wf, getThemeProps: Wf, getValue: dd, grid: yf, gridArea: Fu, gridAutoColumns: Lu, gridAutoFlow: ju, gridAutoRows: Gu, gridClasses: em, gridColumn: Mu, gridRow: Iu, gridTemplateAreas: Wu, gridTemplateColumns: Nu, gridTemplateRows: Bu, handleBreakpoints: ff, height: rd, hexToRgb: kd, hslToRgb: Md, justifyContent: Su, justifyItems: Pu, justifySelf: Eu, keyframes: nf, left: Xu, letterSpacing: bd, lighten: Wd, lineHeight: Cd, major: Hd, margin: md, marginKeys: cd, maxHeight: nd, maxWidth: ed, mergeBreakpointsInOrder: uf, minHeight: sd, minWidth: td, minor: Yd, order: vu, outline: pu, outlineColor: hu, padding: pd, paddingKeys: ld, palette: gf, paletteTransform: Vu, patch: Qd, position: Uu, positions: _f, prerelease: qd, private_safeAlpha: Gd, private_safeColorChannel: Ad, private_safeDarken: Bd, private_safeEmphasize: zd, private_safeLighten: Fd, recomposeColor: Rd, responsivePropType: Xf, rgbToHex: Od, right: Qu, rowGap: Ou, shadows: bf, shape: Nf, shouldForwardProp: $d, sizeHeight: id, sizeWidth: od, sizing: Sf, sizingTransform: Zu, spacing: Cf, stackClasses: am, style: xf, styled: If, systemDefaultTheme: Td, textAlign: xd, textTransform: Sd, top: Yu, typography: Tf, typographyVariant: vd, unstable_createCssVarsProvider: Uf, unstable_createCssVarsTheme: qf, unstable_createGetCssVar: Hf, unstable_createStyleFunctionSx: kf, unstable_cssVarsParser: Yf, unstable_defaultSxConfig: Ef, unstable_extendSxProp: Pf, unstable_generateDirectionClasses: rm, unstable_generateSizeClassNames: nm, unstable_generateSpacingClassNames: sm, unstable_getThemeValue: Af, unstable_memoTheme: Kf, unstable_prepareCssVars: Qf, unstable_resolveBreakpointValues: df, unstable_styleFunctionSx: $f, unstable_traverseBreakpoints: tm, useMediaQuery: zf, useRtl: Kd, useTheme: Ff, useThemeProps: Bf, useThemeWithoutDefault: Vf, version: Ud, width: Ju, zIndex: Hu }, Symbol.toStringTag, { value: "Module" })), lr = "__mf_module_cache__";
globalThis[lr] || (globalThis[lr] = { share: {}, remote: {} });
(_a2 = globalThis[lr]).share || (_a2.share = {});
(_b = globalThis[lr]).remote || (_b.remote = {});
const ie = globalThis[lr];
for (const e2 of Object.keys(ie.share)) if (e2.startsWith("default:")) {
  const t = e2.slice(8);
  ie.share[t] === void 0 && (ie.share[t] = ie.share[e2]);
} else if (!e2.includes(":")) {
  const t = "default:" + e2;
  ie.share[t] === void 0 && (ie.share[t] = ie.share[e2]);
}
const um = (e2, t) => {
  const r = e2[t.canonical];
  if (r !== void 0) return r;
  const n = t.aliases || [];
  for (const s of n) {
    if (!Object.prototype.hasOwnProperty.call(e2, s)) continue;
    const o = e2[s];
    if (o !== void 0) return e2[t.canonical] = o, o;
  }
}, $r = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), dm = (e2) => {
  let t = e2[$r];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, $r, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, mm = (e2, t, r) => {
  var _a3;
  const n = dm(e2);
  (n[_a3 = t.canonical] || (n[_a3] = /* @__PURE__ */ new Set())).add(r);
}, kr = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), pm = (e2) => {
  let t = e2[kr];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, kr, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, hm = (e2, t, r, n) => {
  var _a3;
  e2[t.canonical] = r;
  const s = t.aliases || [];
  for (const i of s) Object.defineProperty(e2, i, { value: r, enumerable: true, configurable: true, writable: true });
  e2[kr], pm(e2)[t.canonical] = n;
  const o = (_a3 = e2[$r]) == null ? void 0 : _a3[t.canonical];
  if (o) for (const i of o) i(r);
  return r;
}, ym = (e2) => {
  const t = (() => {
    let r = e2;
    for (let n = 0; n < 5; n++) {
      const s = r == null ? void 0 : r.default;
      if (!s || typeof s != "object") break;
      const o = Object.keys(r).filter((i) => i !== "default").map((i) => r[i]);
      if (o.length > 0 && o.some((i) => i !== void 0)) break;
      r = s;
    }
    return r;
  })();
  return t && Object.getPrototypeOf(t) === null ? Object.assign({}, t) : t;
};
let St = um(ie.share, { canonical: "default:@mui/system", aliases: ["@mui/system"] });
St === void 0 && (St = ym(fm), hm(ie.share, { canonical: "default:@mui/system", aliases: ["@mui/system"] }, St, "vis2energyWidgets"));
let gm, _m, bm, Sm, Cm, xm, vm, wm, Tm, $m, km, Pm, Em, Am, Rm, Om, Mm, Im, jm, Lm, Gm, Nm, Bm, Wm, Fm;
const Si = (e2) => {
  e2.experimental_sx, gm = e2.css, _m = e2.keyframes, bm = e2.StyledEngineProvider, Sm = e2.GlobalStyles, e2.borders, e2.breakpoints, e2.cssContainerQueries, e2.handleBreakpoints, e2.mergeBreakpointsInOrder, e2.unstable_resolveBreakpointValues, e2.compose, e2.display, e2.flexbox, e2.grid, e2.palette, e2.positions, e2.shadows, e2.sizing, e2.spacing, e2.style, e2.getPath, e2.getStyleValue, e2.typography, e2.unstable_styleFunctionSx, e2.unstable_createStyleFunctionSx, e2.unstable_extendSxProp, e2.unstable_defaultSxConfig, e2.unstable_getThemeValue, e2.Box, Cm = e2.createBox, e2.createStyled, e2.styled, e2.createTheme, xm = e2.createBreakpoints, vm = e2.createSpacing, e2.shape, e2.useThemeProps, e2.getThemeProps, wm = e2.useTheme, e2.useThemeWithoutDefault, e2.useMediaQuery, Tm = e2.ThemeProvider, $m = e2.unstable_memoTheme, km = e2.unstable_createCssVarsProvider, Pm = e2.unstable_createGetCssVar, e2.unstable_cssVarsParser, e2.unstable_prepareCssVars, e2.unstable_createCssVarsTheme, e2.responsivePropType, e2.RtlProvider, Em = e2.createContainer, e2.Container, e2.Grid, e2.Stack, e2.borderTransform, e2.border, e2.borderTop, e2.borderRight, e2.borderBottom, e2.borderLeft, e2.borderColor, e2.borderTopColor, e2.borderRightColor, e2.borderBottomColor, e2.borderLeftColor, e2.outline, e2.outlineColor, e2.borderRadius, e2.flexBasis, e2.flexDirection, e2.flexWrap, e2.justifyContent, e2.alignItems, e2.alignContent, e2.order, e2.flex, e2.flexGrow, e2.flexShrink, e2.alignSelf, e2.justifyItems, e2.justifySelf, e2.gap, e2.columnGap, e2.rowGap, e2.gridColumn, e2.gridRow, e2.gridAutoFlow, e2.gridAutoColumns, e2.gridAutoRows, e2.gridTemplateColumns, e2.gridTemplateRows, e2.gridTemplateAreas, e2.gridArea, e2.paletteTransform, e2.color, e2.bgcolor, e2.backgroundColor, e2.position, e2.zIndex, e2.top, e2.right, e2.bottom, e2.left, e2.sizingTransform, e2.width, e2.maxWidth, e2.minWidth, e2.height, e2.maxHeight, e2.minHeight, e2.sizeWidth, e2.sizeHeight, e2.boxSizing, e2.marginKeys, e2.paddingKeys, e2.createUnaryUnit, e2.createUnarySpacing, e2.getValue, e2.margin, e2.padding, e2.fontFamily, e2.fontSize, e2.fontStyle, e2.fontWeight, e2.letterSpacing, e2.textTransform, e2.lineHeight, e2.textAlign, e2.typographyVariant, e2.boxClasses, e2.systemDefaultTheme, e2.shouldForwardProp, Am = e2.hexToRgb, Rm = e2.decomposeColor, e2.colorChannel, e2.private_safeColorChannel, Om = e2.recomposeColor, Mm = e2.rgbToHex, Im = e2.hslToRgb, jm = e2.getLuminance, Lm = e2.getContrastRatio, Gm = e2.alpha, e2.private_safeAlpha, Nm = e2.darken, e2.private_safeDarken, Bm = e2.lighten, e2.private_safeLighten, Wm = e2.emphasize, e2.private_safeEmphasize, e2.blend, e2.useRtl, e2.version, e2.major, e2.minor, e2.patch, e2.prerelease, e2.containerClasses, e2.getContainerUtilityClass, e2.createGrid, e2.gridClasses, e2.unstable_traverseBreakpoints, e2.unstable_generateDirectionClasses, e2.unstable_generateSizeClassNames, e2.unstable_generateSpacingClassNames, e2.getGridUtilityClass, Fm = e2.createStack, e2.stackClasses, e2.getStackUtilityClass, (() => {
    let t = e2;
    for (let r = 0; r < 5; r++) {
      const n = t == null ? void 0 : t.default;
      if (!n || typeof n != "object") return n ?? t;
      t = n;
    }
    return t;
  })();
};
mm(ie.share, { canonical: "default:@mui/system" }, Si);
Si(St);
export {
  Gm as $,
  Zo as A,
  $m as B,
  Km as C,
  zr as D,
  ct as E,
  mn as F,
  ar as G,
  Tm as H,
  Um as I,
  km as J,
  kl as K,
  Zc as L,
  Ko as M,
  gm as N,
  _m as O,
  Hc as P,
  Cm as Q,
  si as R,
  Tt as S,
  Em as T,
  _i as U,
  Ge as V,
  Mc as W,
  Fm as X,
  Rc as Y,
  bm as Z,
  vm as _,
  xm as a,
  Nm as a0,
  Rm as a1,
  Wm as a2,
  Lm as a3,
  jm as a4,
  Am as a5,
  Im as a6,
  Bm as a7,
  Om as a8,
  Mm as a9,
  Vr as aa,
  fm as ab,
  cn as b,
  Be as c,
  ue as d,
  sr as e,
  xt as f,
  Gc as g,
  ni as h,
  _e as i,
  Wc as j,
  Nc as k,
  ln as l,
  Fc as m,
  jc as n,
  mi as o,
  Bc as p,
  rr as q,
  ml as r,
  Xe as s,
  Pm as t,
  ri as u,
  or as v,
  Te as w,
  on as x,
  wm as y,
  Sm as z
};
