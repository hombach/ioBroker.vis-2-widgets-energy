var _a2, _b;
import { R as yt, _ as Nn, a as je, b as Ye, c as ue, d as be, e as $r, f as Tr, g as ee, h as wt, i as ve, j as ct, k as _t, l as Wn, m as zn } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C1tKYn4A.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-Cb-nZPEP.js";
import { _ as B, a as Fn } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CXPcvUgs.js";
function bt(e2, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e2}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e2}; visit ${r} for the full message.`;
}
function hr() {
  return hr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, hr.apply(null, arguments);
}
function ci(e2) {
  if (e2.sheet) return e2.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e2) return document.styleSheets[t];
}
function li(e2) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e2.key), e2.nonce !== void 0 && t.setAttribute("nonce", e2.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Vn = (function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(li(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = ci(s);
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
})(), F = "-ms-", St = "-moz-", A = "-webkit-", Dn = "comm", Pr = "rule", kr = "decl", fi = "@import", Kn = "@keyframes", ui = "@layer", di = Math.abs, $t = String.fromCharCode, mi = Object.assign;
function pi(e2, t) {
  return W(e2, 0) ^ 45 ? (((t << 2 ^ W(e2, 0)) << 2 ^ W(e2, 1)) << 2 ^ W(e2, 2)) << 2 ^ W(e2, 3) : 0;
}
function Un(e2) {
  return e2.trim();
}
function hi(e2, t) {
  return (e2 = t.exec(e2)) ? e2[0] : e2;
}
function R(e2, t, r) {
  return e2.replace(t, r);
}
function gr(e2, t) {
  return e2.indexOf(t);
}
function W(e2, t) {
  return e2.charCodeAt(t) | 0;
}
function De(e2, t, r) {
  return e2.slice(t, r);
}
function ce(e2) {
  return e2.length;
}
function Er(e2) {
  return e2.length;
}
function at(e2, t) {
  return t.push(e2), e2;
}
function gi(e2, t) {
  return e2.map(t).join("");
}
var Tt = 1, Oe = 1, Hn = 0, H = 0, I = 0, Le = "";
function Pt(e2, t, r, n, s, o, i) {
  return { value: e2, root: t, parent: r, type: n, props: s, children: o, line: Tt, column: Oe, length: i, return: "" };
}
function Fe(e2, t) {
  return mi(Pt("", null, null, "", null, null, 0), e2, { length: -e2.length }, t);
}
function yi() {
  return I;
}
function _i() {
  return I = H > 0 ? W(Le, --H) : 0, Oe--, I === 10 && (Oe = 1, Tt--), I;
}
function X() {
  return I = H < Hn ? W(Le, H++) : 0, Oe++, I === 10 && (Oe = 1, Tt++), I;
}
function fe() {
  return W(Le, H);
}
function lt() {
  return H;
}
function Qe(e2, t) {
  return De(Le, e2, t);
}
function Ke(e2) {
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
function Yn(e2) {
  return Tt = Oe = 1, Hn = ce(Le = e2), H = 0, [];
}
function Qn(e2) {
  return Le = "", e2;
}
function ft(e2) {
  return Un(Qe(H - 1, yr(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function bi(e2) {
  for (; (I = fe()) && I < 33; ) X();
  return Ke(e2) > 2 || Ke(I) > 3 ? "" : " ";
}
function Si(e2, t) {
  for (; --t && X() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); ) ;
  return Qe(e2, lt() + (t < 6 && fe() == 32 && X() == 32));
}
function yr(e2) {
  for (; X(); ) switch (I) {
    case e2:
      return H;
    case 34:
    case 39:
      e2 !== 34 && e2 !== 39 && yr(I);
      break;
    case 40:
      e2 === 41 && yr(e2);
      break;
    case 92:
      X();
      break;
  }
  return H;
}
function Ci(e2, t) {
  for (; X() && e2 + I !== 57; ) if (e2 + I === 84 && fe() === 47) break;
  return "/*" + Qe(t, H - 1) + "*" + $t(e2 === 47 ? e2 : X());
}
function xi(e2) {
  for (; !Ke(fe()); ) X();
  return Qe(e2, H);
}
function vi(e2) {
  return Qn(ut("", null, null, null, [""], e2 = Yn(e2), 0, [0], e2));
}
function ut(e2, t, r, n, s, o, i, a, l) {
  for (var f = 0, u = 0, m = i, d = 0, h = 0, p = 0, g = 1, C = 1, x = 1, k = 0, v = "", E = s, T = o, $ = n, S = v; C; ) switch (p = k, k = X()) {
    case 40:
      if (p != 108 && W(S, m - 1) == 58) {
        gr(S += R(ft(k), "&", "&\f"), "&\f") != -1 && (x = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      S += ft(k);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      S += bi(p);
      break;
    case 92:
      S += Si(lt() - 1, 7);
      continue;
    case 47:
      switch (fe()) {
        case 42:
        case 47:
          at(wi(Ci(X(), lt()), t, r), l);
          break;
        default:
          S += "/";
      }
      break;
    case 123 * g:
      a[f++] = ce(S) * x;
    case 125 * g:
    case 59:
    case 0:
      switch (k) {
        case 0:
        case 125:
          C = 0;
        case 59 + u:
          x == -1 && (S = R(S, /\f/g, "")), h > 0 && ce(S) - m && at(h > 32 ? yn(S + ";", n, r, m - 1) : yn(R(S, " ", "") + ";", n, r, m - 2), l);
          break;
        case 59:
          S += ";";
        default:
          if (at($ = gn(S, t, r, f, u, s, a, v, E = [], T = [], m), o), k === 123) if (u === 0) ut(S, t, $, $, E, o, m, a, T);
          else switch (d === 99 && W(S, 3) === 110 ? 100 : d) {
            case 100:
            case 108:
            case 109:
            case 115:
              ut(e2, $, $, n && at(gn(e2, $, $, 0, 0, s, a, v, s, E = [], m), T), s, T, m, a, n ? E : T);
              break;
            default:
              ut(S, $, $, $, [""], T, 0, a, T);
          }
      }
      f = u = h = 0, g = x = 1, v = S = "", m = i;
      break;
    case 58:
      m = 1 + ce(S), h = p;
    default:
      if (g < 1) {
        if (k == 123) --g;
        else if (k == 125 && g++ == 0 && _i() == 125) continue;
      }
      switch (S += $t(k), k * g) {
        case 38:
          x = u > 0 ? 1 : (S += "\f", -1);
          break;
        case 44:
          a[f++] = (ce(S) - 1) * x, x = 1;
          break;
        case 64:
          fe() === 45 && (S += ft(X())), d = fe(), u = m = ce(v = S += xi(lt())), k++;
          break;
        case 45:
          p === 45 && ce(S) == 2 && (g = 0);
      }
  }
  return o;
}
function gn(e2, t, r, n, s, o, i, a, l, f, u) {
  for (var m = s - 1, d = s === 0 ? o : [""], h = Er(d), p = 0, g = 0, C = 0; p < n; ++p) for (var x = 0, k = De(e2, m + 1, m = di(g = i[p])), v = e2; x < h; ++x) (v = Un(g > 0 ? d[x] + " " + k : R(k, /&\f/g, d[x]))) && (l[C++] = v);
  return Pt(e2, t, r, s === 0 ? Pr : a, l, f, u);
}
function wi(e2, t, r) {
  return Pt(e2, t, r, Dn, $t(yi()), De(e2, 2, -2), 0);
}
function yn(e2, t, r, n) {
  return Pt(e2, t, r, kr, De(e2, 0, n), De(e2, n + 1, -1), n);
}
function Ee(e2, t) {
  for (var r = "", n = Er(e2), s = 0; s < n; s++) r += t(e2[s], s, e2, t) || "";
  return r;
}
function $i(e2, t, r, n) {
  switch (e2.type) {
    case ui:
      if (e2.children.length) break;
    case fi:
    case kr:
      return e2.return = e2.return || e2.value;
    case Dn:
      return "";
    case Kn:
      return e2.return = e2.value + "{" + Ee(e2.children, n) + "}";
    case Pr:
      e2.value = e2.props.join(",");
  }
  return ce(r = Ee(e2.children, n)) ? e2.return = e2.value + "{" + r + "}" : "";
}
function Ti(e2) {
  var t = Er(e2);
  return function(r, n, s, o) {
    for (var i = "", a = 0; a < t; a++) i += e2[a](r, n, s, o) || "";
    return i;
  };
}
function Pi(e2) {
  return function(t) {
    t.root || (t = t.return) && e2(t);
  };
}
function qn(e2) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e2(r)), t[r];
  };
}
var ki = function(t, r, n) {
  for (var s = 0, o = 0; s = o, o = fe(), s === 38 && o === 12 && (r[n] = 1), !Ke(o); ) X();
  return Qe(t, H);
}, Ei = function(t, r) {
  var n = -1, s = 44;
  do
    switch (Ke(s)) {
      case 0:
        s === 38 && fe() === 12 && (r[n] = 1), t[n] += ki(H - 1, r, n);
        break;
      case 2:
        t[n] += ft(s);
        break;
      case 4:
        if (s === 44) {
          t[++n] = fe() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += $t(s);
    }
  while (s = X());
  return t;
}, Ai = function(t, r) {
  return Qn(Ei(Yn(t), r));
}, _n = /* @__PURE__ */ new WeakMap(), Ri = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var r = t.value, n = t.parent, s = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !_n.get(n)) && !s) {
      _n.set(t, true);
      for (var o = [], i = Ai(r, o), a = n.props, l = 0, f = 0; l < i.length; l++) for (var u = 0; u < a.length; u++, f++) t.props[f] = o[l] ? i[l].replace(/&\f/g, a[u]) : a[u] + " " + i[l];
    }
  }
}, Oi = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Xn(e2, t) {
  switch (pi(e2, t)) {
    case 5103:
      return A + "print-" + e2 + e2;
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
      return A + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return A + e2 + St + e2 + F + e2 + e2;
    case 6828:
    case 4268:
      return A + e2 + F + e2 + e2;
    case 6165:
      return A + e2 + F + "flex-" + e2 + e2;
    case 5187:
      return A + e2 + R(e2, /(\w+).+(:[^]+)/, A + "box-$1$2" + F + "flex-$1$2") + e2;
    case 5443:
      return A + e2 + F + "flex-item-" + R(e2, /flex-|-self/, "") + e2;
    case 4675:
      return A + e2 + F + "flex-line-pack" + R(e2, /align-content|flex-|-self/, "") + e2;
    case 5548:
      return A + e2 + F + R(e2, "shrink", "negative") + e2;
    case 5292:
      return A + e2 + F + R(e2, "basis", "preferred-size") + e2;
    case 6060:
      return A + "box-" + R(e2, "-grow", "") + A + e2 + F + R(e2, "grow", "positive") + e2;
    case 4554:
      return A + R(e2, /([^-])(transform)/g, "$1" + A + "$2") + e2;
    case 6187:
      return R(R(R(e2, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return R(e2, /(image-set\([^]*)/, A + "$1$`$1");
    case 4968:
      return R(R(e2, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + F + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return R(e2, /(.+)-inline(.+)/, A + "$1$2") + e2;
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
      if (ce(e2) - 1 - t > 6) switch (W(e2, t + 1)) {
        case 109:
          if (W(e2, t + 4) !== 45) break;
        case 102:
          return R(e2, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + St + (W(e2, t + 3) == 108 ? "$3" : "$2-$3")) + e2;
        case 115:
          return ~gr(e2, "stretch") ? Xn(R(e2, "stretch", "fill-available"), t) + e2 : e2;
      }
      break;
    case 4949:
      if (W(e2, t + 1) !== 115) break;
    case 6444:
      switch (W(e2, ce(e2) - 3 - (~gr(e2, "!important") && 10))) {
        case 107:
          return R(e2, ":", ":" + A) + e2;
        case 101:
          return R(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (W(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + F + "$2box$3") + e2;
      }
      break;
    case 5936:
      switch (W(e2, t + 11)) {
        case 114:
          return A + e2 + F + R(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return A + e2 + F + R(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return A + e2 + F + R(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
      return A + e2 + F + e2 + e2;
  }
  return e2;
}
var Mi = function(t, r, n, s) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case kr:
      t.return = Xn(t.value, t.length);
      break;
    case Kn:
      return Ee([Fe(t, { value: R(t.value, "@", "@" + A) })], s);
    case Pr:
      if (t.length) return gi(t.props, function(o) {
        switch (hi(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ee([Fe(t, { props: [R(o, /:(read-\w+)/, ":" + St + "$1")] })], s);
          case "::placeholder":
            return Ee([Fe(t, { props: [R(o, /:(plac\w+)/, ":" + A + "input-$1")] }), Fe(t, { props: [R(o, /:(plac\w+)/, ":" + St + "$1")] }), Fe(t, { props: [R(o, /:(plac\w+)/, F + "input-$1")] })], s);
        }
        return "";
      });
  }
}, ji = [Mi], Zn = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var C = g.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || ji, o = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(g) {
    for (var C = g.getAttribute("data-emotion").split(" "), x = 1; x < C.length; x++) o[C[x]] = true;
    a.push(g);
  });
  var l, f = [Ri, Oi];
  {
    var u, m = [$i, Pi(function(g) {
      u.insert(g);
    })], d = Ti(f.concat(s, m)), h = function(C) {
      return Ee(vi(C), d);
    };
    l = function(C, x, k, v) {
      u = k, h(C ? C + "{" + x.styles + "}" : x.styles), v && (p.inserted[x.name] = true);
    };
  }
  var p = { key: r, sheet: new Vn({ key: r, container: i, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: o, registered: {}, insert: l };
  return p.sheet.hydrate(a), p;
}, Jn = { exports: {} }, O = {};
var N = typeof Symbol == "function" && Symbol.for, Ar = N ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Rr = N ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, kt = N ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Et = N ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, At = N ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Rt = N ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Ot = N ? /* @__PURE__ */ Symbol.for("react.context") : 60110, Or = N ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, Mt = N ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, jt = N ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, Lt = N ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, Li = N ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, It = N ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, Gt = N ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Ii = N ? /* @__PURE__ */ Symbol.for("react.block") : 60121, Gi = N ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Bi = N ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Ni = N ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function Z(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Ar:
        switch (e2 = e2.type, e2) {
          case Or:
          case Mt:
          case kt:
          case At:
          case Et:
          case Lt:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Ot:
              case jt:
              case Gt:
              case It:
              case Rt:
                return e2;
              default:
                return t;
            }
        }
      case Rr:
        return t;
    }
  }
}
function es(e2) {
  return Z(e2) === Mt;
}
O.AsyncMode = Or;
O.ConcurrentMode = Mt;
O.ContextConsumer = Ot;
O.ContextProvider = Rt;
O.Element = Ar;
O.ForwardRef = jt;
O.Fragment = kt;
O.Lazy = Gt;
O.Memo = It;
O.Portal = Rr;
O.Profiler = At;
O.StrictMode = Et;
O.Suspense = Lt;
O.isAsyncMode = function(e2) {
  return es(e2) || Z(e2) === Or;
};
O.isConcurrentMode = es;
O.isContextConsumer = function(e2) {
  return Z(e2) === Ot;
};
O.isContextProvider = function(e2) {
  return Z(e2) === Rt;
};
O.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Ar;
};
O.isForwardRef = function(e2) {
  return Z(e2) === jt;
};
O.isFragment = function(e2) {
  return Z(e2) === kt;
};
O.isLazy = function(e2) {
  return Z(e2) === Gt;
};
O.isMemo = function(e2) {
  return Z(e2) === It;
};
O.isPortal = function(e2) {
  return Z(e2) === Rr;
};
O.isProfiler = function(e2) {
  return Z(e2) === At;
};
O.isStrictMode = function(e2) {
  return Z(e2) === Et;
};
O.isSuspense = function(e2) {
  return Z(e2) === Lt;
};
O.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === kt || e2 === Mt || e2 === At || e2 === Et || e2 === Lt || e2 === Li || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Gt || e2.$$typeof === It || e2.$$typeof === Rt || e2.$$typeof === Ot || e2.$$typeof === jt || e2.$$typeof === Gi || e2.$$typeof === Bi || e2.$$typeof === Ni || e2.$$typeof === Ii);
};
O.typeOf = Z;
Jn.exports = O;
var Wi = Jn.exports, ts = Wi, zi = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, Fi = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, rs = {};
rs[ts.ForwardRef] = zi;
rs[ts.Memo] = Fi;
var Vi = true;
function ns(e2, t, r) {
  var n = "";
  return r.split(" ").forEach(function(s) {
    e2[s] !== void 0 ? t.push(e2[s] + ";") : s && (n += s + " ");
  }), n;
}
var Mr = function(t, r, n) {
  var s = t.key + "-" + r.name;
  (n === false || Vi === false) && t.registered[s] === void 0 && (t.registered[s] = r.styles);
}, jr = function(t, r, n) {
  Mr(t, r, n);
  var s = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + s : "", o, t.sheet, true), o = o.next;
    while (o !== void 0);
  }
};
function Di(e2) {
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
var Ki = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Ui = /[A-Z]|^ms/g, Hi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ss = function(t) {
  return t.charCodeAt(1) === 45;
}, bn = function(t) {
  return t != null && typeof t != "boolean";
}, ur = qn(function(e2) {
  return ss(e2) ? e2 : e2.replace(Ui, "-$&").toLowerCase();
}), Sn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string") return r.replace(Hi, function(n, s, o) {
        return le = { name: s, styles: o, next: le }, s;
      });
  }
  return Ki[t] !== 1 && !ss(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ue(e2, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1) return le = { name: s.name, styles: s.styles, next: le }, s.name;
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0) for (; i !== void 0; ) le = { name: i.name, styles: i.styles, next: le }, i = i.next;
        var a = o.styles + ";";
        return a;
      }
      return Yi(e2, t, r);
    }
    case "function": {
      if (e2 !== void 0) {
        var l = le, f = r(e2);
        return le = l, Ue(e2, t, f);
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var m = t[u];
  return m !== void 0 ? m : u;
}
function Yi(e2, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var s = 0; s < r.length; s++) n += Ue(e2, t, r[s]) + ";";
  else for (var o in r) {
    var i = r[o];
    if (typeof i != "object") {
      var a = i;
      t != null && t[a] !== void 0 ? n += o + "{" + t[a] + "}" : bn(a) && (n += ur(o) + ":" + Sn(o, a) + ";");
    } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0)) for (var l = 0; l < i.length; l++) bn(i[l]) && (n += ur(o) + ":" + Sn(o, i[l]) + ";");
    else {
      var f = Ue(e2, t, i);
      switch (o) {
        case "animation":
        case "animationName": {
          n += ur(o) + ":" + f + ";";
          break;
        }
        default:
          n += o + "{" + f + "}";
      }
    }
  }
  return n;
}
var Cn = /label:\s*([^\s;{]+)\s*(;|$)/g, le;
function qe(e2, t, r) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0) return e2[0];
  var n = true, s = "";
  le = void 0;
  var o = e2[0];
  if (o == null || o.raw === void 0) n = false, s += Ue(r, t, o);
  else {
    var i = o;
    s += i[0];
  }
  for (var a = 1; a < e2.length; a++) if (s += Ue(r, t, e2[a]), n) {
    var l = o;
    s += l[a];
  }
  Cn.lastIndex = 0;
  for (var f = "", u; (u = Cn.exec(s)) !== null; ) f += "-" + u[1];
  var m = Di(s) + f;
  return { name: m, styles: s, next: le };
}
var Qi = function(t) {
  return t();
}, os = yt.useInsertionEffect ? yt.useInsertionEffect : false, is = os || Qi, xn = os || Nn, as = je(typeof HTMLElement < "u" ? Zn({ key: "css" }) : null), qi = as.Provider, Lr = function(t) {
  return Ye(function(r, n) {
    var s = ue(as);
    return t(r, s, n);
  });
}, Xe = je({}), Ir = {}.hasOwnProperty, _r = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Xi = function(t, r) {
  var n = {};
  for (var s in r) Ir.call(r, s) && (n[s] = r[s]);
  return n[_r] = t, n;
}, Zi = function(t) {
  var r = t.cache, n = t.serialized, s = t.isStringTag;
  return Mr(r, n, s), is(function() {
    return jr(r, n, s);
  }), null;
}, Ji = Lr(function(e2, t, r) {
  var n = e2.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var s = e2[_r], o = [n], i = "";
  typeof e2.className == "string" ? i = ns(t.registered, o, e2.className) : e2.className != null && (i = e2.className + " ");
  var a = qe(o, void 0, ue(Xe));
  i += t.key + "-" + a.name;
  var l = {};
  for (var f in e2) Ir.call(e2, f) && f !== "css" && f !== _r && (l[f] = e2[f]);
  return l.className = i, r && (l.ref = r), be($r, null, be(Zi, { cache: t, serialized: a, isStringTag: typeof s == "string" }), be(s, l));
}), ea = Ji, vn = function(t, r) {
  var n = arguments;
  if (r == null || !Ir.call(r, "css")) return be.apply(void 0, n);
  var s = n.length, o = new Array(s);
  o[0] = ea, o[1] = Xi(t, r);
  for (var i = 2; i < s; i++) o[i] = n[i];
  return be.apply(null, o);
};
(function(e2) {
  var t;
  t || (t = e2.JSX || (e2.JSX = {}));
})(vn || (vn = {}));
var ta = Lr(function(e2, t) {
  var r = e2.styles, n = qe([r], void 0, ue(Xe)), s = Tr();
  return xn(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({ key: o, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), a = false, l = document.querySelector('style[data-emotion="' + o + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (a = true, l.setAttribute("data-emotion", o), i.hydrate([l])), s.current = [i, a], function() {
      i.flush();
    };
  }, [t]), xn(function() {
    var o = s.current, i = o[0], a = o[1];
    if (a) {
      o[1] = false;
      return;
    }
    if (n.next !== void 0 && jr(t, n.next, true), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, false);
  }, [t, n.name]), null;
});
function cs() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
  return qe(t);
}
function ra() {
  var e2 = cs.apply(void 0, arguments), t = "animation-" + e2.name;
  return { name: t, styles: "@keyframes " + t + "{" + e2.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var na = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sa = qn(function(e2) {
  return na.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
}), oa = sa, ia = function(t) {
  return t !== "theme";
}, wn = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? oa : ia;
}, $n = function(t, r, n) {
  var s;
  if (r) {
    var o = r.shouldForwardProp;
    s = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof s != "function" && n && (s = t.__emotion_forwardProp), s;
}, aa = function(t) {
  var r = t.cache, n = t.serialized, s = t.isStringTag;
  return Mr(r, n, s), is(function() {
    return jr(r, n, s);
  }), null;
}, ca = function e(t, r) {
  var n = t.__emotion_real === t, s = n && t.__emotion_base || t, o, i;
  r !== void 0 && (o = r.label, i = r.target);
  var a = $n(t, r, n), l = a || wn(s), f = !l("as");
  return function() {
    var u = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && m.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0) m.push.apply(m, u);
    else {
      var d = u[0];
      m.push(d[0]);
      for (var h = u.length, p = 1; p < h; p++) m.push(u[p], d[p]);
    }
    var g = Lr(function(C, x, k) {
      var v = f && C.as || s, E = "", T = [], $ = C;
      if (C.theme == null) {
        $ = {};
        for (var S in C) $[S] = C[S];
        $.theme = ue(Xe);
      }
      typeof C.className == "string" ? E = ns(x.registered, T, C.className) : C.className != null && (E = C.className + " ");
      var _ = qe(m.concat(T), x.registered, $);
      E += x.key + "-" + _.name, i !== void 0 && (E += " " + i);
      var b = f && a === void 0 ? wn(v) : l, w = {};
      for (var P in C) f && P === "as" || b(P) && (w[P] = C[P]);
      return w.className = E, k && (w.ref = k), be($r, null, be(aa, { cache: x, serialized: _, isStringTag: typeof v == "string" }), be(v, w));
    });
    return g.displayName = o !== void 0 ? o : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = s, g.__emotion_styles = m, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", { value: function() {
      return "." + i;
    } }), g.withComponent = function(C, x) {
      var k = e(C, hr({}, r, x, { shouldForwardProp: $n(g, x, true) }));
      return k.apply(void 0, m);
    }, g;
  };
}, la = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], br = ca.bind(null);
la.forEach(function(e2) {
  br[e2] = br(e2);
});
const dr = /* @__PURE__ */ new Map(), fa = (e2, t) => {
  const r = Zn(e2);
  return r.sheet = new t({ key: r.key, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy, prepend: r.sheet.prepend, insertionPoint: r.sheet.insertionPoint }), r;
};
let ye;
if (typeof document == "object" && (ye = document.querySelector('[name="emotion-insertion-point"]'), !ye)) {
  ye = document.createElement("meta"), ye.setAttribute("name", "emotion-insertion-point"), ye.setAttribute("content", "");
  const e2 = document.querySelector("head");
  e2 && e2.prepend(ye);
}
function ua(e2, t) {
  if (e2 || t) {
    class r extends Vn {
      insert(o, i) {
        return this.key && this.key.endsWith("global") && (this.before = ye), super.insert(o, i);
      }
    }
    const n = fa({ key: "css", insertionPoint: e2 ? ye : void 0 }, r);
    if (t) {
      const s = n.insert;
      n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), s(...o));
    }
    return n;
  }
}
function da(e2) {
  const { injectFirst: t, enableCssLayer: r, children: n } = e2, s = ee(() => {
    const o = `${t}-${r}`;
    if (typeof document == "object" && dr.has(o)) return dr.get(o);
    const i = ua(t, r);
    return dr.set(o, i), i;
  }, [t, r]);
  return s ? B(qi, { value: s, children: n }) : n;
}
function ma(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function ls(e2) {
  const { styles: t, defaultTheme: r = {} } = e2;
  return B(ta, { styles: typeof t == "function" ? (s) => t(ma(s) ? r : s) : t });
}
function fs(e2, t) {
  return br(e2, t);
}
function pa(e2, t) {
  Array.isArray(e2.__emotion_styles) && (e2.__emotion_styles = t(e2.__emotion_styles));
}
const Tn = [];
function Se(e2) {
  return Tn[0] = e2, qe(Tn);
}
var us = { exports: {} }, M = {};
var Gr = /* @__PURE__ */ Symbol.for("react.transitional.element"), Br = /* @__PURE__ */ Symbol.for("react.portal"), Bt = /* @__PURE__ */ Symbol.for("react.fragment"), Nt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Wt = /* @__PURE__ */ Symbol.for("react.profiler"), zt = /* @__PURE__ */ Symbol.for("react.consumer"), Ft = /* @__PURE__ */ Symbol.for("react.context"), Vt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Dt = /* @__PURE__ */ Symbol.for("react.suspense"), Kt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ut = /* @__PURE__ */ Symbol.for("react.memo"), Ht = /* @__PURE__ */ Symbol.for("react.lazy"), ha = /* @__PURE__ */ Symbol.for("react.view_transition"), ga = /* @__PURE__ */ Symbol.for("react.client.reference");
function ne(e2) {
  if (typeof e2 == "object" && e2 !== null) {
    var t = e2.$$typeof;
    switch (t) {
      case Gr:
        switch (e2 = e2.type, e2) {
          case Bt:
          case Wt:
          case Nt:
          case Dt:
          case Kt:
          case ha:
            return e2;
          default:
            switch (e2 = e2 && e2.$$typeof, e2) {
              case Ft:
              case Vt:
              case Ht:
              case Ut:
                return e2;
              case zt:
                return e2;
              default:
                return t;
            }
        }
      case Br:
        return t;
    }
  }
}
M.ContextConsumer = zt;
M.ContextProvider = Ft;
M.Element = Gr;
M.ForwardRef = Vt;
M.Fragment = Bt;
M.Lazy = Ht;
M.Memo = Ut;
M.Portal = Br;
M.Profiler = Wt;
M.StrictMode = Nt;
M.Suspense = Dt;
M.SuspenseList = Kt;
M.isContextConsumer = function(e2) {
  return ne(e2) === zt;
};
M.isContextProvider = function(e2) {
  return ne(e2) === Ft;
};
M.isElement = function(e2) {
  return typeof e2 == "object" && e2 !== null && e2.$$typeof === Gr;
};
M.isForwardRef = function(e2) {
  return ne(e2) === Vt;
};
M.isFragment = function(e2) {
  return ne(e2) === Bt;
};
M.isLazy = function(e2) {
  return ne(e2) === Ht;
};
M.isMemo = function(e2) {
  return ne(e2) === Ut;
};
M.isPortal = function(e2) {
  return ne(e2) === Br;
};
M.isProfiler = function(e2) {
  return ne(e2) === Wt;
};
M.isStrictMode = function(e2) {
  return ne(e2) === Nt;
};
M.isSuspense = function(e2) {
  return ne(e2) === Dt;
};
M.isSuspenseList = function(e2) {
  return ne(e2) === Kt;
};
M.isValidElementType = function(e2) {
  return typeof e2 == "string" || typeof e2 == "function" || e2 === Bt || e2 === Wt || e2 === Nt || e2 === Dt || e2 === Kt || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Ht || e2.$$typeof === Ut || e2.$$typeof === Ft || e2.$$typeof === zt || e2.$$typeof === Vt || e2.$$typeof === ga || e2.getModuleId !== void 0);
};
M.typeOf = ne;
us.exports = M;
var ds = us.exports;
function _e(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  const t = Object.getPrototypeOf(e2);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e2) && !(Symbol.iterator in e2);
}
function ms(e2) {
  if (wt(e2) || ds.isValidElementType(e2) || !_e(e2)) return e2;
  const t = {};
  return Object.keys(e2).forEach((r) => {
    t[r] = ms(e2[r]);
  }), t;
}
function de(e2, t, r = { clone: true }) {
  const n = r.clone ? { ...e2 } : e2;
  return _e(e2) && _e(t) && Object.keys(t).forEach((s) => {
    wt(t[s]) || ds.isValidElementType(t[s]) ? n[s] = t[s] : _e(t[s]) && Object.prototype.hasOwnProperty.call(e2, s) && _e(e2[s]) ? n[s] = de(e2[s], t[s], r) : r.clone ? n[s] = _e(t[s]) ? ms(t[s]) : t[s] : n[s] = t[s];
  }), n;
}
const ya = (e2) => {
  const t = Object.keys(e2).map((r) => ({ key: r, val: e2[r] })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({ ...r, [n.key]: n.val }), {});
};
function ps(e2) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: r = "px", step: n = 5, ...s } = e2, o = ya(t), i = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function f(d, h) {
    const p = i.indexOf(h);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(p !== -1 && typeof t[i[p]] == "number" ? t[i[p]] : h) - n / 100}${r})`;
  }
  function u(d) {
    return i.indexOf(d) + 1 < i.length ? f(d, i[i.indexOf(d) + 1]) : a(d);
  }
  function m(d) {
    const h = i.indexOf(d);
    return h === 0 ? a(i[1]) : h === i.length - 1 ? l(i[h]) : f(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return { keys: i, values: o, up: a, down: l, between: f, only: u, not: m, unit: r, ...s };
}
function Pn(e2, t) {
  if (!e2.containerQueries) return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, s) => {
    var _a3, _b2;
    const o = /min-width:\s*([0-9.]+)/;
    return +(((_a3 = n.match(o)) == null ? void 0 : _a3[1]) || 0) - +(((_b2 = s.match(o)) == null ? void 0 : _b2[1]) || 0);
  });
  return r.length ? r.reduce((n, s) => {
    const o = t[s];
    return delete n[s], n[s] = o, n;
  }, { ...t }) : t;
}
function _a(e2, t) {
  return t === "@" || t.startsWith("@") && (e2.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function ba(e2, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) return null;
  const [, n, s] = r, o = Number.isNaN(+n) ? n || 0 : +n;
  return e2.containerQueries(s).up(o);
}
function hs(e2) {
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
const gs = { borderRadius: 4 }, Sa = {};
function Ae(e2, t) {
  return t ? de(e2, t, { clone: false }) : e2;
}
const Yt = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Sr = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e2) => `@media (min-width:${Yt[e2]}px)` }, Ca = { containerQueries: (e2) => ({ up: (t) => {
  let r = typeof t == "number" ? t : Yt[t] || t;
  return typeof r == "number" && (r = `${r}px`), e2 ? `@container ${e2} (min-width:${r})` : `@container (min-width:${r})`;
} }) };
function te(e2, t, r) {
  const n = e2.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || Sr;
    return t.reduce((i, a, l) => (i[o.up(o.keys[l])] = r(t[l]), i), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || Sr;
    return Object.keys(t).reduce((i, a) => {
      if (_a(o.keys, a)) {
        const l = ba(n.containerQueries ? n : Ca, a);
        l && (i[l] = r(t[a], a));
      } else if (Object.keys(o.values || Yt).includes(a)) {
        const l = o.up(a);
        i[l] = r(t[a], a);
      } else {
        const l = a;
        i[l] = t[l];
      }
      return i;
    }, {});
  }
  return r(t);
}
function xa(e2) {
  const t = (r) => {
    const n = r.theme || {}, s = e2(r), o = n.breakpoints || Sr, i = o.keys.reduce((a, l) => (r[l] && (a = a || {}, a[o.up(l)] = e2({ theme: n, ...r[l] })), a), null);
    return Ae(s, i);
  };
  return t.propTypes = {}, t.filterProps = ["xs", "sm", "md", "lg", "xl", ...e2.filterProps], t;
}
function ys(e2 = {}) {
  var _a3;
  return ((_a3 = e2.keys) == null ? void 0 : _a3.reduce((r, n) => {
    const s = e2.up(n);
    return r[s] = {}, r;
  }, {})) || {};
}
function Cr(e2, t) {
  return e2.reduce((r, n) => {
    const s = r[n];
    return (!s || Object.keys(s).length === 0) && delete r[n], r;
  }, t);
}
function _s(e2, ...t) {
  const r = ys(e2), n = [r, ...t].reduce((s, o) => de(s, o), {});
  return Cr(Object.keys(r), n);
}
function va(e2, t) {
  if (typeof e2 != "object") return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e2) ? n.forEach((s, o) => {
    o < e2.length && (r[s] = true);
  }) : n.forEach((s) => {
    e2[s] != null && (r[s] = true);
  }), r;
}
function dt({ values: e2, breakpoints: t, base: r }) {
  const n = r || va(e2, t), s = Object.keys(n);
  if (s.length === 0) return e2;
  let o;
  return s.reduce((i, a, l) => (Array.isArray(e2) ? (i[a] = e2[l] != null ? e2[l] : e2[o], o = l) : typeof e2 == "object" ? (i[a] = e2[a] != null ? e2[a] : e2[o], o = a) : i[a] = e2, i), {});
}
function Qt(e2) {
  if (typeof e2 != "string") throw new Error(bt(7));
  return e2.charAt(0).toUpperCase() + e2.slice(1);
}
function Ze(e2, t, r = true) {
  if (!t || typeof t != "string") return null;
  if (e2 && e2.vars && r) {
    const n = `vars.${t}`.split(".").reduce((s, o) => s && s[o] ? s[o] : null, e2);
    if (n != null) return n;
  }
  return t.split(".").reduce((n, s) => n && n[s] != null ? n[s] : null, e2);
}
function He(e2, t, r, n = r) {
  let s;
  return typeof e2 == "function" ? s = e2(r) : Array.isArray(e2) ? s = e2[r] || n : s = Ze(e2, r) || n, t && (s = t(s, n, e2)), s;
}
function y(e2) {
  const { prop: t, cssProperty: r = e2.prop, themeKey: n, transform: s } = e2, o = (i) => {
    if (i[t] == null) return null;
    const a = i[t], l = i.theme, f = Ze(l, n) || {};
    return te(i, a, (m) => {
      let d = He(f, s, m);
      return m === d && typeof m == "string" && (d = He(f, s, `${t}${m === "default" ? "" : Qt(m)}`, m)), r === false ? d : { [r]: d };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function wa(e2) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e2(r)), t[r]);
}
const $a = { m: "margin", p: "padding" }, Ta = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, kn = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, Pa = wa((e2) => {
  if (e2.length > 2) if (kn[e2]) e2 = kn[e2];
  else return [e2];
  const [t, r] = e2.split(""), n = $a[t], s = Ta[r] || "";
  return Array.isArray(s) ? s.map((o) => n + o) : [n + s];
}), qt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], bs = [...qt, ...Xt];
function Ie(e2, t, r, n) {
  const s = Ze(e2, t, true) ?? r;
  return typeof s == "number" || typeof s == "string" ? (o) => typeof o == "string" ? o : typeof s == "string" ? `calc(${o} * ${s})` : s * o : Array.isArray(s) ? (o) => {
    if (typeof o == "string") return o;
    const i = Math.abs(o), a = s[i];
    return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof s == "function" ? s : () => {
  };
}
function Zt(e2) {
  return Ie(e2, "spacing", 8);
}
function Ce(e2, t) {
  return typeof t == "string" || t == null ? t : e2(t);
}
function Ss(e2, t) {
  return (r) => e2.reduce((n, s) => (n[s] = Ce(t, r), n), {});
}
function ka(e2, t, r, n) {
  if (!t.includes(r)) return null;
  const s = Pa(r), o = Ss(s, n), i = e2[r];
  return te(e2, i, o);
}
function Nr(e2, t) {
  const r = Zt(e2.theme);
  return Object.keys(e2).map((n) => ka(e2, t, n, r)).reduce(Ae, {});
}
function j(e2) {
  return Nr(e2, qt);
}
j.propTypes = {};
j.filterProps = qt;
function L(e2) {
  return Nr(e2, Xt);
}
L.propTypes = {};
L.filterProps = Xt;
function Je(e2) {
  return Nr(e2, bs);
}
Je.propTypes = {};
Je.filterProps = bs;
function Cs(e2 = 8, t = Zt({ spacing: e2 })) {
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
  }), n), {}), r = (n) => Object.keys(n).reduce((s, o) => t[o] ? Ae(s, t[o](n)) : s, {});
  return r.propTypes = {}, r.filterProps = e2.reduce((n, s) => n.concat(s.filterProps), []), r;
}
function q(e2) {
  return typeof e2 != "number" ? e2 : `${e2}px solid`;
}
function se(e2, t) {
  return y({ prop: e2, themeKey: "borders", transform: t });
}
const xs = se("border", q), vs = se("borderTop", q), ws = se("borderRight", q), $s = se("borderBottom", q), Ts = se("borderLeft", q), Ps = se("borderColor"), ks = se("borderTopColor"), Es = se("borderRightColor"), As = se("borderBottomColor"), Rs = se("borderLeftColor"), Os = se("outline", q), Ms = se("outlineColor"), et = (e2) => {
  if (e2.borderRadius !== void 0 && e2.borderRadius !== null) {
    const t = Ie(e2.theme, "shape.borderRadius", 4), r = (n) => ({ borderRadius: Ce(t, n) });
    return te(e2, e2.borderRadius, r);
  }
  return null;
};
et.propTypes = {};
et.filterProps = ["borderRadius"];
const Wr = me(xs, vs, ws, $s, Ts, Ps, ks, Es, As, Rs, et, Os, Ms), tt = (e2) => {
  if (e2.gap !== void 0 && e2.gap !== null) {
    const t = Ie(e2.theme, "spacing", 8), r = (n) => ({ gap: Ce(t, n) });
    return te(e2, e2.gap, r);
  }
  return null;
};
tt.propTypes = {};
tt.filterProps = ["gap"];
const rt = (e2) => {
  if (e2.columnGap !== void 0 && e2.columnGap !== null) {
    const t = Ie(e2.theme, "spacing", 8), r = (n) => ({ columnGap: Ce(t, n) });
    return te(e2, e2.columnGap, r);
  }
  return null;
};
rt.propTypes = {};
rt.filterProps = ["columnGap"];
const nt = (e2) => {
  if (e2.rowGap !== void 0 && e2.rowGap !== null) {
    const t = Ie(e2.theme, "spacing", 8), r = (n) => ({ rowGap: Ce(t, n) });
    return te(e2, e2.rowGap, r);
  }
  return null;
};
nt.propTypes = {};
nt.filterProps = ["rowGap"];
const js = y({ prop: "gridColumn" }), Ls = y({ prop: "gridRow" }), Is = y({ prop: "gridAutoFlow" }), Gs = y({ prop: "gridAutoColumns" }), Bs = y({ prop: "gridAutoRows" }), Ns = y({ prop: "gridTemplateColumns" }), Ws = y({ prop: "gridTemplateRows" }), zs = y({ prop: "gridTemplateAreas" }), Fs = y({ prop: "gridArea" }), zr = me(tt, rt, nt, js, Ls, Is, Gs, Bs, Ns, Ws, zs, Fs);
function we(e2, t) {
  return t === "grey" ? t : e2;
}
const Vs = y({ prop: "color", themeKey: "palette", transform: we }), Ds = y({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: we }), Ks = y({ prop: "backgroundColor", themeKey: "palette", transform: we }), Fr = me(Vs, Ds, Ks);
function U(e2) {
  return e2 <= 1 && e2 !== 0 ? `${e2 * 100}%` : e2;
}
const Us = y({ prop: "width", transform: U }), Jt = (e2) => {
  if (e2.maxWidth !== void 0 && e2.maxWidth !== null) {
    const t = (r) => {
      var _a3, _b2, _c2, _d2, _e2;
      const n = ((_c2 = (_b2 = (_a3 = e2.theme) == null ? void 0 : _a3.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[r]) || Yt[r];
      return n ? ((_e2 = (_d2 = e2.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? { maxWidth: `${n}${e2.theme.breakpoints.unit}` } : { maxWidth: n } : { maxWidth: U(r) };
    };
    return te(e2, e2.maxWidth, t);
  }
  return null;
};
Jt.filterProps = ["maxWidth"];
const Hs = y({ prop: "minWidth", transform: U }), Ys = y({ prop: "height", transform: U }), Qs = y({ prop: "maxHeight", transform: U }), qs = y({ prop: "minHeight", transform: U }), Ea = y({ prop: "size", cssProperty: "width", transform: U }), Aa = y({ prop: "size", cssProperty: "height", transform: U }), Xs = y({ prop: "boxSizing" }), Vr = me(Us, Jt, Hs, Ys, Qs, qs, Xs), er = { border: { themeKey: "borders", transform: q }, borderTop: { themeKey: "borders", transform: q }, borderRight: { themeKey: "borders", transform: q }, borderBottom: { themeKey: "borders", transform: q }, borderLeft: { themeKey: "borders", transform: q }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: q }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: et }, color: { themeKey: "palette", transform: we }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: we }, backgroundColor: { themeKey: "palette", transform: we }, p: { style: L }, pt: { style: L }, pr: { style: L }, pb: { style: L }, pl: { style: L }, px: { style: L }, py: { style: L }, padding: { style: L }, paddingTop: { style: L }, paddingRight: { style: L }, paddingBottom: { style: L }, paddingLeft: { style: L }, paddingX: { style: L }, paddingY: { style: L }, paddingInline: { style: L }, paddingInlineStart: { style: L }, paddingInlineEnd: { style: L }, paddingBlock: { style: L }, paddingBlockStart: { style: L }, paddingBlockEnd: { style: L }, m: { style: j }, mt: { style: j }, mr: { style: j }, mb: { style: j }, ml: { style: j }, mx: { style: j }, my: { style: j }, margin: { style: j }, marginTop: { style: j }, marginRight: { style: j }, marginBottom: { style: j }, marginLeft: { style: j }, marginX: { style: j }, marginY: { style: j }, marginInline: { style: j }, marginInlineStart: { style: j }, marginInlineEnd: { style: j }, marginBlock: { style: j }, marginBlockStart: { style: j }, marginBlockEnd: { style: j }, displayPrint: { cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: tt }, rowGap: { style: nt }, columnGap: { style: rt }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: U }, maxWidth: { style: Jt }, minWidth: { transform: U }, height: { transform: U }, maxHeight: { transform: U }, minHeight: { transform: U }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function Ra(...e2) {
  const t = e2.reduce((n, s) => n.concat(Object.keys(s)), []), r = new Set(t);
  return e2.every((n) => r.size === Object.keys(n).length);
}
function Oa(e2, t) {
  return typeof e2 == "function" ? e2(t) : e2;
}
function Zs() {
  function e2(r, n, s, o) {
    const i = { [r]: n, theme: s }, a = o[r];
    if (!a) return { [r]: n };
    const { cssProperty: l = r, themeKey: f, transform: u, style: m } = a;
    if (n == null) return null;
    if (f === "typography" && n === "inherit") return { [r]: n };
    const d = Ze(s, f) || {};
    return m ? m(i) : te(i, n, (p) => {
      let g = He(d, u, p);
      return p === g && typeof p == "string" && (g = He(d, u, `${r}${p === "default" ? "" : Qt(p)}`, p)), l === false ? g : { [l]: g };
    });
  }
  function t(r) {
    const { sx: n, theme: s = {}, nested: o } = r || {};
    if (!n) return null;
    const i = s.unstable_sxConfig ?? er;
    function a(l) {
      let f = l;
      if (typeof l == "function") f = l(s);
      else if (typeof l != "object") return l;
      if (!f) return null;
      const u = ys(s.breakpoints), m = Object.keys(u);
      let d = u;
      return Object.keys(f).forEach((h) => {
        const p = Oa(f[h], s);
        if (p != null) if (typeof p == "object") if (i[h]) d = Ae(d, e2(h, p, s, i));
        else {
          const g = te({ theme: s }, p, (C) => ({ [h]: C }));
          Ra(g, p) ? d[h] = t({ sx: p, theme: s, nested: true }) : d = Ae(d, g);
        }
        else d = Ae(d, e2(h, p, s, i));
      }), !o && s.modularCssLayers ? { "@layer sx": Pn(s, Cr(m, d)) } : Pn(s, Cr(m, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Me = Zs();
Me.filterProps = ["sx"];
function Ma(e2, t) {
  var _a3;
  const r = this;
  if (r.vars) {
    if (!((_a3 = r.colorSchemes) == null ? void 0 : _a3[e2]) || typeof r.getColorSchemeSelector != "function") return {};
    let n = r.getColorSchemeSelector(e2);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), { [n]: t });
  }
  return r.palette.mode === e2 ? t : {};
}
function Ge(e2 = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: s, shape: o = {}, ...i } = e2, a = ps(r), l = Cs(s);
  let f = de({ breakpoints: a, direction: "ltr", components: {}, palette: { mode: "light", ...n }, spacing: l, shape: { ...gs, ...o } }, i);
  return f = hs(f), f.applyStyles = Ma, f = t.reduce((u, m) => de(u, m), f), f.unstable_sxConfig = { ...er, ...i == null ? void 0 : i.unstable_sxConfig }, f.unstable_sx = function(m) {
    return Me({ sx: m, theme: this });
  }, f;
}
function ja(e2) {
  return Object.keys(e2).length === 0;
}
function st(e2 = null) {
  const t = ue(Xe);
  return !t || ja(t) ? e2 : t;
}
const La = Ge();
function ot(e2 = La) {
  return st(e2);
}
function mr(e2) {
  const t = Se(e2);
  return e2 !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e2;
}
function Js({ styles: e2, themeId: t, defaultTheme: r = {} }) {
  const n = ot(r), s = t && n[t] || n;
  let o = typeof e2 == "function" ? e2(s) : e2;
  return s.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => mr(typeof i == "function" ? i(s) : i)) : o = mr(o)), B(ls, { styles: o });
}
const Ia = y({ prop: "displayPrint", cssProperty: false, transform: (e2) => ({ "@media print": { display: e2 } }) }), Ga = y({ prop: "display" }), Ba = y({ prop: "overflow" }), Na = y({ prop: "textOverflow" }), Wa = y({ prop: "visibility" }), za = y({ prop: "whiteSpace" }), Dr = me(Ia, Ga, Ba, Na, Wa, za), eo = y({ prop: "flexBasis" }), to = y({ prop: "flexDirection" }), ro = y({ prop: "flexWrap" }), no = y({ prop: "justifyContent" }), so = y({ prop: "alignItems" }), oo = y({ prop: "alignContent" }), io = y({ prop: "order" }), ao = y({ prop: "flex" }), co = y({ prop: "flexGrow" }), lo = y({ prop: "flexShrink" }), fo = y({ prop: "alignSelf" }), uo = y({ prop: "justifyItems" }), mo = y({ prop: "justifySelf" }), Kr = me(eo, to, ro, no, so, oo, io, ao, co, lo, fo, uo, mo), po = y({ prop: "position" }), ho = y({ prop: "zIndex", themeKey: "zIndex" }), go = y({ prop: "top" }), yo = y({ prop: "right" }), _o = y({ prop: "bottom" }), bo = y({ prop: "left" }), Ur = me(po, ho, go, yo, _o, bo), Hr = y({ prop: "boxShadow", themeKey: "shadows" }), So = y({ prop: "fontFamily", themeKey: "typography" }), Co = y({ prop: "fontSize", themeKey: "typography" }), xo = y({ prop: "fontStyle", themeKey: "typography" }), vo = y({ prop: "fontWeight", themeKey: "typography" }), wo = y({ prop: "letterSpacing" }), $o = y({ prop: "textTransform" }), To = y({ prop: "lineHeight" }), Po = y({ prop: "textAlign" }), ko = y({ prop: "typography", cssProperty: false, themeKey: "typography" }), Yr = me(ko, So, Co, xo, vo, wo, To, Po, $o), Fa = (e2) => {
  var _a3;
  const t = { systemProps: {}, otherProps: {} }, r = ((_a3 = e2 == null ? void 0 : e2.theme) == null ? void 0 : _a3.unstable_sxConfig) ?? er;
  return Object.keys(e2).forEach((n) => {
    r[n] ? t.systemProps[n] = e2[n] : t.otherProps[n] = e2[n];
  }), t;
};
function tr(e2) {
  const { sx: t, ...r } = e2, { systemProps: n, otherProps: s } = Fa(r);
  let o;
  return Array.isArray(t) ? o = [n, ...t] : typeof t == "function" ? o = (...i) => {
    const a = t(...i);
    return _e(a) ? { ...n, ...a } : n;
  } : o = { ...n, ...t }, { ...s, sx: o };
}
const En = { borders: Wr.filterProps, display: Dr.filterProps, flexbox: Kr.filterProps, grid: zr.filterProps, positions: Ur.filterProps, palette: Fr.filterProps, shadows: Hr.filterProps, sizing: Vr.filterProps, spacing: Je.filterProps, typography: Yr.filterProps }, Va = { borders: Wr, display: Dr, flexbox: Kr, grid: zr, positions: Ur, palette: Fr, shadows: Hr, sizing: Vr, spacing: Je, typography: Yr }, Da = Object.keys(En).reduce((e2, t) => (En[t].forEach((r) => {
  e2[r] = Va[t];
}), e2), {});
function Ka(e2, t, r) {
  const n = { [e2]: t, theme: r }, s = Da[e2];
  return s ? s(n) : { [e2]: t };
}
const An = (e2) => e2, Ua = () => {
  let e2 = An;
  return { configure(t) {
    e2 = t;
  }, generate(t) {
    return e2(t);
  }, reset() {
    e2 = An;
  } };
}, Eo = Ua();
function Ao(e2) {
  var t, r, n = "";
  if (typeof e2 == "string" || typeof e2 == "number") n += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var s = e2.length;
    for (t = 0; t < s; t++) e2[t] && (r = Ao(e2[t])) && (n && (n += " "), n += r);
  } else for (r in e2) e2[r] && (n && (n += " "), n += r);
  return n;
}
function rr() {
  for (var e2, t, r = 0, n = "", s = arguments.length; r < s; r++) (e2 = arguments[r]) && (t = Ao(e2)) && (n && (n += " "), n += t);
  return n;
}
function Ro(e2 = {}) {
  const { themeId: t, defaultTheme: r, defaultClassName: n = "MuiBox-root", generateClassName: s } = e2, o = fs("div", { shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as" })(Me);
  return Ye(function(l, f) {
    const u = ot(r), { className: m, component: d = "div", ...h } = tr(l);
    return B(o, { as: d, ref: f, className: rr(m, s ? s(n) : n), theme: t && u[t] || u, ...h });
  });
}
const Ha = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function $e(e2, t, r = "Mui") {
  const n = Ha[t];
  return n ? `${r}-${n}` : `${Eo.generate(e2)}-${t}`;
}
function nr(e2, t, r = "Mui") {
  const n = {};
  return t.forEach((s) => {
    n[s] = $e(e2, s, r);
  }), n;
}
const Ya = nr("MuiBox", ["root"]), Qa = Ro({ defaultClassName: Ya.root, generateClassName: Eo.generate });
function Oo(e2) {
  const { variants: t, ...r } = e2, n = { variants: t, style: Se(r), isProcessed: true };
  return n.style === r || t && t.forEach((s) => {
    typeof s.style != "function" && (s.style = Se(s.style));
  }), n;
}
const Mo = Ge();
function mt(e2) {
  return e2 !== "ownerState" && e2 !== "theme" && e2 !== "sx" && e2 !== "as";
}
function xe(e2, t) {
  return t && e2 && typeof e2 == "object" && e2.styles && !e2.styles.startsWith("@layer") && (e2.styles = `@layer ${t}{${String(e2.styles)}}`), e2;
}
function qa(e2) {
  return e2 ? (t, r) => r[e2] : null;
}
function Xa(e2, t, r) {
  e2.theme = Ja(e2.theme) ? r : e2.theme[t] || e2.theme;
}
function pt(e2, t, r) {
  const n = typeof t == "function" ? t(e2) : t;
  if (Array.isArray(n)) return n.flatMap((s) => pt(e2, s, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let s;
    if (n.isProcessed) s = r ? xe(n.style, r) : n.style;
    else {
      const { variants: o, ...i } = n;
      s = r ? xe(Se(i), r) : i;
    }
    return jo(e2, n.variants, [s], r);
  }
  return (n == null ? void 0 : n.isProcessed) ? r ? xe(Se(n.style), r) : n.style : r ? xe(Se(n), r) : n;
}
function jo(e2, t, r = [], n = void 0) {
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
function Lo(e2 = {}) {
  const { themeId: t, defaultTheme: r = Mo, rootShouldForwardProp: n = mt, slotShouldForwardProp: s = mt } = e2;
  function o(a) {
    Xa(a, t, r);
  }
  return (a, l = {}) => {
    pa(a, ($) => $.filter((S) => S !== Me));
    const { name: f, slot: u, skipVariantsResolver: m, skipSx: d, overridesResolver: h = qa(tc(u)), ...p } = l, g = f && f.startsWith("Mui") || u ? "components" : "custom", C = m !== void 0 ? m : u && u !== "Root" && u !== "root" || false, x = d || false;
    let k = mt;
    u === "Root" || u === "root" ? k = n : u ? k = s : ec(a) && (k = void 0);
    const v = fs(a, { shouldForwardProp: k, label: Za(), ...p }), E = ($) => {
      if ($.__emotion_real === $) return $;
      if (typeof $ == "function") return function(_) {
        return pt(_, $, _.theme.modularCssLayers ? g : void 0);
      };
      if (_e($)) {
        const S = Oo($);
        return function(b) {
          return S.variants ? pt(b, S, b.theme.modularCssLayers ? g : void 0) : b.theme.modularCssLayers ? xe(S.style, g) : S.style;
        };
      }
      return $;
    }, T = (...$) => {
      const S = [], _ = $.map(E), b = [];
      if (S.push(o), f && h && b.push(function(V) {
        var _a3, _b2;
        const z = (_b2 = (_a3 = V.theme.components) == null ? void 0 : _a3[f]) == null ? void 0 : _b2.styleOverrides;
        if (!z) return null;
        const Pe = {};
        for (const he in z) Pe[he] = pt(V, z[he], V.theme.modularCssLayers ? "theme" : void 0);
        return h(V, Pe);
      }), f && !C && b.push(function(V) {
        var _a3, _b2, _c2;
        const z = (_c2 = (_b2 = (_a3 = V.theme) == null ? void 0 : _a3.components) == null ? void 0 : _b2[f]) == null ? void 0 : _c2.variants;
        return z ? jo(V, z, [], V.theme.modularCssLayers ? "theme" : void 0) : null;
      }), x || b.push(Me), Array.isArray(_[0])) {
        const D = _.shift(), V = new Array(S.length).fill(""), pe = new Array(b.length).fill("");
        let z;
        z = [...V, ...D, ...pe], z.raw = [...V, ...D.raw, ...pe], S.unshift(z);
      }
      const w = [...S, ..._, ...b], P = v(...w);
      return a.muiName && (P.muiName = a.muiName), P;
    };
    return v.withConfig && (T.withConfig = v.withConfig), T;
  };
}
function Za(e2, t) {
  return void 0;
}
function Ja(e2) {
  for (const t in e2) return false;
  return true;
}
function ec(e2) {
  return typeof e2 == "string" && e2.charCodeAt(0) > 96;
}
function tc(e2) {
  return e2 && e2.charAt(0).toLowerCase() + e2.slice(1);
}
const sr = Lo();
function Ct(e2, t) {
  const r = { ...t };
  for (const n in e2) if (Object.prototype.hasOwnProperty.call(e2, n)) {
    const s = n;
    if (s === "components" || s === "slots") r[s] = { ...e2[s], ...r[s] };
    else if (s === "componentsProps" || s === "slotProps") {
      const o = e2[s], i = t[s];
      if (!i) r[s] = o || {};
      else if (!o) r[s] = i;
      else {
        r[s] = { ...i };
        for (const a in o) if (Object.prototype.hasOwnProperty.call(o, a)) {
          const l = a;
          r[s][l] = Ct(o[l], i[l]);
        }
      }
    } else r[s] === void 0 && (r[s] = e2[s]);
  }
  return r;
}
function Qr(e2) {
  const { theme: t, name: r, props: n } = e2;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Ct(t.components[r].defaultProps, n);
}
function or({ props: e2, name: t, defaultTheme: r, themeId: n }) {
  let s = ot(r);
  return n && (s = s[n] || s), Qr({ theme: s, name: t, props: e2 });
}
const qr = typeof window < "u" ? Nn : ve;
function rc(e2, t, r, n, s) {
  const [o, i] = _t(() => s && r ? r(e2).matches : n ? n(e2).matches : t);
  return qr(() => {
    if (!r) return;
    const a = r(e2), l = () => {
      i(a.matches);
    };
    return l(), a.addEventListener("change", l), () => {
      a.removeEventListener("change", l);
    };
  }, [e2, r]), o;
}
const nc = { ...yt }, Io = nc.useSyncExternalStore;
function sc(e2, t, r, n, s) {
  const o = ct(() => t, [t]), i = ee(() => {
    if (s && r) return () => r(e2).matches;
    if (n !== null) {
      const { matches: u } = n(e2);
      return () => u;
    }
    return o;
  }, [o, e2, n, s, r]), [a, l] = ee(() => {
    if (r === null) return [o, () => () => {
    }];
    const u = r(e2);
    return [() => u.matches, (m) => (u.addEventListener("change", m), () => {
      u.removeEventListener("change", m);
    })];
  }, [o, r, e2]);
  return Io(l, a, i);
}
function oc(e2 = {}) {
  const { themeId: t } = e2;
  return function(n, s = {}) {
    let o = st();
    o && t && (o = o[t] || o);
    const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: a = false, matchMedia: l = i ? window.matchMedia : null, ssrMatchMedia: f = null, noSsr: u = false } = Qr({ name: "MuiUseMediaQuery", props: s, theme: o });
    let m = typeof n == "function" ? n(o) : n;
    return m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Io !== void 0 ? sc : rc)(m, a, l, f, u);
  };
}
const ic = oc();
function ac(e2, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e2, r));
}
function Xr(e2, t = 0, r = 1) {
  return ac(e2, t, r);
}
function Go(e2) {
  e2 = e2.slice(1);
  const t = new RegExp(`.{1,${e2.length >= 6 ? 2 : 1}}`, "g");
  let r = e2.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, s) => s < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function cc(e2) {
  const t = e2.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function re(e2) {
  if (e2.type) return e2;
  if (e2.charAt(0) === "#") return re(Go(e2));
  const t = e2.indexOf("("), r = e2.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r)) throw new Error(bt(9, e2));
  let n = e2.substring(t + 1, e2.length - 1), s;
  if (r === "color") {
    if (n = n.split(" "), s = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s)) throw new Error(bt(10, s));
  } else n = n.split(",");
  return n = n.map((o) => parseFloat(o)), { type: r, values: n, colorSpace: s };
}
const Bo = (e2) => {
  const t = re(e2);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, lc = (e2, t) => {
  try {
    return Bo(e2);
  } catch {
    return e2;
  }
};
function Be(e2) {
  const { type: t, colorSpace: r } = e2;
  let { values: n } = e2;
  return t.includes("rgb") ? n = n.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function fc(e2) {
  if (e2.startsWith("#")) return e2;
  const { values: t } = re(e2);
  return `#${t.map((r, n) => cc(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function No(e2) {
  e2 = re(e2);
  const { values: t } = e2, r = t[0], n = t[1] / 100, s = t[2] / 100, o = n * Math.min(s, 1 - s), i = (f, u = (f + r / 30) % 12) => s - o * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e2.type === "hsla" && (a += "a", l.push(t[3])), Be({ type: a, values: l });
}
function xt(e2) {
  e2 = re(e2);
  let t = e2.type === "hsl" || e2.type === "hsla" ? re(No(e2)).values : e2.values;
  return t = t.map((r) => (e2.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function uc(e2, t) {
  const r = xt(e2), n = xt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Wo(e2, t) {
  return e2 = re(e2), t = Xr(t), (e2.type === "rgb" || e2.type === "hsl") && (e2.type += "a"), e2.type === "color" ? e2.values[3] = `/${t}` : e2.values[3] = t, Be(e2);
}
function dc(e2, t, r) {
  try {
    return Wo(e2, t);
  } catch {
    return e2;
  }
}
function Zr(e2, t) {
  if (e2 = re(e2), t = Xr(t), e2.type.includes("hsl")) e2.values[2] *= 1 - t;
  else if (e2.type.includes("rgb") || e2.type.includes("color")) for (let r = 0; r < 3; r += 1) e2.values[r] *= 1 - t;
  return Be(e2);
}
function mc(e2, t, r) {
  try {
    return Zr(e2, t);
  } catch {
    return e2;
  }
}
function Jr(e2, t) {
  if (e2 = re(e2), t = Xr(t), e2.type.includes("hsl")) e2.values[2] += (100 - e2.values[2]) * t;
  else if (e2.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e2.values[r] += (255 - e2.values[r]) * t;
  else if (e2.type.includes("color")) for (let r = 0; r < 3; r += 1) e2.values[r] += (1 - e2.values[r]) * t;
  return Be(e2);
}
function pc(e2, t, r) {
  try {
    return Jr(e2, t);
  } catch {
    return e2;
  }
}
function zo(e2, t = 0.15) {
  return xt(e2) > 0.5 ? Zr(e2, t) : Jr(e2, t);
}
function hc(e2, t, r) {
  try {
    return zo(e2, t);
  } catch {
    return e2;
  }
}
function gc(e2, t, r, n = 1) {
  const s = (l, f) => Math.round((l ** (1 / n) * (1 - r) + f ** (1 / n) * r) ** n), o = re(e2), i = re(t), a = [s(o.values[0], i.values[0]), s(o.values[1], i.values[1]), s(o.values[2], i.values[2])];
  return Be({ type: "rgb", values: a });
}
const Fo = je(null);
function en() {
  return ue(Fo);
}
const yc = typeof Symbol == "function" && Symbol.for, _c = yc ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
function bc(e2, t) {
  return typeof t == "function" ? t(e2) : { ...e2, ...t };
}
function Sc(e2) {
  const { children: t, theme: r } = e2, n = en(), s = ee(() => {
    const o = n === null ? { ...r } : bc(n, r);
    return o != null && (o[_c] = n !== null), o;
  }, [r, n]);
  return B(Fo.Provider, { value: s, children: t });
}
const Vo = je();
function Do({ value: e2, ...t }) {
  return B(Vo.Provider, { value: e2 ?? true, ...t });
}
const Cc = () => ue(Vo) ?? false, Ko = je(void 0);
function xc({ value: e2, children: t }) {
  return B(Ko.Provider, { value: e2, children: t });
}
function vc(e2) {
  const { theme: t, name: r, props: n } = e2;
  if (!t || !t.components || !t.components[r]) return n;
  const s = t.components[r];
  return s.defaultProps ? Ct(s.defaultProps, n) : !s.styleOverrides && !s.variants ? Ct(s, n) : n;
}
function _m({ props: e2, name: t }) {
  const r = ue(Ko);
  return vc({ props: e2, name: t, theme: { components: r } });
}
let Rn = 0;
function wc(e2) {
  const [t, r] = _t(e2), n = e2 || t;
  return ve(() => {
    t == null && (Rn += 1, r(`mui-${Rn}`));
  }, [t]), n;
}
const $c = { ...yt }, On = $c.useId;
function Tc(e2) {
  return On !== void 0 ? On() : wc(e2);
}
function Pc(e2) {
  const t = st(), r = Tc() || "", { modularCssLayers: n } = e2;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? s = "" : typeof n == "string" ? s = n.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, qr(() => {
    var _a3, _b2;
    const o = document.querySelector("head");
    if (!o) return;
    const i = o.firstChild;
    if (s) {
      if (i && ((_a3 = i.hasAttribute) == null ? void 0 : _a3.call(i, "data-mui-layer-order")) && i.getAttribute("data-mui-layer-order") === r) return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", r), a.textContent = s, o.prepend(a);
    } else (_b2 = o.querySelector(`style[data-mui-layer-order="${r}"]`)) == null ? void 0 : _b2.remove();
  }, [s, r]), s ? B(Js, { styles: s }) : null;
}
const Mn = {};
function jn(e2, t, r, n = false) {
  return ee(() => {
    const s = e2 && t[e2] || t;
    if (typeof r == "function") {
      const o = r(s), i = e2 ? { ...t, [e2]: o } : o;
      return n ? () => i : i;
    }
    return e2 ? { ...t, [e2]: r } : { ...t, ...r };
  }, [e2, t, r, n]);
}
function Uo(e2) {
  const { children: t, theme: r, themeId: n } = e2, s = st(Mn), o = en() || Mn, i = jn(n, s, r), a = jn(n, o, r, true), l = (n ? i[n] : i).direction === "rtl", f = Pc(i);
  return B(Sc, { theme: a, children: B(Xe.Provider, { value: i, children: B(Do, { value: l, children: Fn(xc, { value: n ? i[n].components : i.components, children: [f, t] }) }) }) });
}
const Ln = { theme: void 0 };
function kc(e2) {
  let t, r;
  return function(s) {
    let o = t;
    return (o === void 0 || s.theme !== r) && (Ln.theme = s.theme, o = Oo(e2(Ln)), t = o, r = s.theme), o;
  };
}
const tn = "mode", rn = "color-scheme", Ho = "data-color-scheme";
function Ec(e2) {
  const { defaultMode: t = "system", defaultLightColorScheme: r = "light", defaultDarkColorScheme: n = "dark", modeStorageKey: s = tn, colorSchemeStorageKey: o = rn, attribute: i = Ho, colorSchemeNode: a = "document.documentElement", nonce: l } = e2 || {};
  let f = "", u = i;
  if (i === "class" && (u = ".%s"), i === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const d = u.substring(1);
    f += `${a}.classList.remove('${d}'.replace('%s', light), '${d}'.replace('%s', dark));
      ${a}.classList.add('${d}'.replace('%s', colorScheme));`;
  }
  const m = u.match(/\[([^\]]+)\]/);
  if (m) {
    const [d, h] = m[1].split("=");
    h || (f += `${a}.removeAttribute('${d}'.replace('%s', light));
      ${a}.removeAttribute('${d}'.replace('%s', dark));`), f += `
      ${a}.setAttribute('${d}'.replace('%s', colorScheme), ${h ? `${h}.replace('%s', colorScheme)` : '""'});`;
  } else f += `${a}.setAttribute('${u}', colorScheme);`;
  return B("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(function() {
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
function Ac() {
}
const Rc = ({ key: e2, storageWindow: t }) => (!t && typeof window < "u" && (t = window), { get(r) {
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
  if (!t) return Ac;
  const n = (s) => {
    const o = s.newValue;
    s.key === e2 && r(o);
  };
  return t.addEventListener("storage", n), () => {
    t.removeEventListener("storage", n);
  };
} });
function pr() {
}
function In(e2) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e2 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Yo(e2, t) {
  if (e2.mode === "light" || e2.mode === "system" && e2.systemMode === "light") return t("light");
  if (e2.mode === "dark" || e2.mode === "system" && e2.systemMode === "dark") return t("dark");
}
function Oc(e2) {
  return Yo(e2, (t) => {
    if (t === "light") return e2.lightColorScheme;
    if (t === "dark") return e2.darkColorScheme;
  });
}
function Mc(e2) {
  const { defaultMode: t = "light", defaultLightColorScheme: r, defaultDarkColorScheme: n, supportedColorSchemes: s = [], modeStorageKey: o = tn, colorSchemeStorageKey: i = rn, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: l = Rc, noSsr: f = false } = e2, u = s.join(","), m = s.length > 1, d = ee(() => l == null ? void 0 : l({ key: o, storageWindow: a }), [l, o, a]), h = ee(() => l == null ? void 0 : l({ key: `${i}-light`, storageWindow: a }), [l, i, a]), p = ee(() => l == null ? void 0 : l({ key: `${i}-dark`, storageWindow: a }), [l, i, a]), [g, C] = _t(() => {
    const _ = (d == null ? void 0 : d.get(t)) || t, b = (h == null ? void 0 : h.get(r)) || r, w = (p == null ? void 0 : p.get(n)) || n;
    return { mode: _, systemMode: In(_), lightColorScheme: b, darkColorScheme: w };
  }), [x, k] = _t(f || !m);
  ve(() => {
    k(true);
  }, []);
  const v = Oc(g), E = ct((_) => {
    C((b) => {
      if (_ === b.mode) return b;
      const w = _ ?? t;
      return d == null ? void 0 : d.set(w), { ...b, mode: w, systemMode: In(w) };
    });
  }, [d, t]), T = ct((_) => {
    _ ? typeof _ == "string" ? _ && !u.includes(_) ? console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`) : C((b) => {
      const w = { ...b };
      return Yo(b, (P) => {
        P === "light" && (h == null ? void 0 : h.set(_), w.lightColorScheme = _), P === "dark" && (p == null ? void 0 : p.set(_), w.darkColorScheme = _);
      }), w;
    }) : C((b) => {
      const w = { ...b }, P = _.light === null ? r : _.light, D = _.dark === null ? n : _.dark;
      return P && (u.includes(P) ? (w.lightColorScheme = P, h == null ? void 0 : h.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), D && (u.includes(D) ? (w.darkColorScheme = D, p == null ? void 0 : p.set(D)) : console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`)), w;
    }) : C((b) => (h == null ? void 0 : h.set(r), p == null ? void 0 : p.set(n), { ...b, lightColorScheme: r, darkColorScheme: n }));
  }, [u, h, p, r, n]), $ = ct((_) => {
    g.mode === "system" && C((b) => {
      const w = (_ == null ? void 0 : _.matches) ? "dark" : "light";
      return b.systemMode === w ? b : { ...b, systemMode: w };
    });
  }, [g.mode]), S = Tr($);
  return S.current = $, ve(() => {
    if (typeof window.matchMedia != "function" || !m) return;
    const _ = (...w) => S.current(...w), b = window.matchMedia("(prefers-color-scheme: dark)");
    return b.addListener(_), _(b), () => {
      b.removeListener(_);
    };
  }, [m]), ve(() => {
    if (m) {
      const _ = (d == null ? void 0 : d.subscribe((P) => {
        (!P || ["light", "dark", "system"].includes(P)) && E(P || t);
      })) || pr, b = (h == null ? void 0 : h.subscribe((P) => {
        (!P || u.match(P)) && T({ light: P });
      })) || pr, w = (p == null ? void 0 : p.subscribe((P) => {
        (!P || u.match(P)) && T({ dark: P });
      })) || pr;
      return () => {
        _(), b(), w();
      };
    }
  }, [T, E, u, t, a, m, d, h, p]), { ...g, mode: x ? g.mode : void 0, systemMode: x ? g.systemMode : void 0, colorScheme: x ? v : void 0, setMode: E, setColorScheme: T };
}
const jc = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Lc(e2) {
  const { themeId: t, theme: r = {}, modeStorageKey: n = tn, colorSchemeStorageKey: s = rn, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = e2, l = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, f = je(void 0), u = () => ue(f) || l, m = {}, d = {};
  function h(x) {
    var _a3, _b2, _c2, _d2;
    const { children: k, theme: v, modeStorageKey: E = n, colorSchemeStorageKey: T = s, disableTransitionOnChange: $ = o, storageManager: S, storageWindow: _ = typeof window > "u" ? void 0 : window, documentNode: b = typeof document > "u" ? void 0 : document, colorSchemeNode: w = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: P = false, disableStyleSheetGeneration: D = false, defaultMode: V = "system", noSsr: pe } = x, z = Tr(false), Pe = en(), he = ue(f), Ne = !!he && !P, We = ee(() => v || (typeof r == "function" ? r() : r), [v]), it = We[t], G = it || We, { colorSchemes: ge = m, components: sn = d, cssVarPrefix: cr } = G, on = Object.keys(ge).filter((Y) => !!ge[Y]).join(","), ke = ee(() => on.split(","), [on]), an = typeof i == "string" ? i : i.light, cn = typeof i == "string" ? i : i.dark, ni = ge[an] && ge[cn] ? V : ((_b2 = (_a3 = ge[G.defaultColorScheme]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode) || ((_c2 = G.palette) == null ? void 0 : _c2.mode), { mode: si, setMode: ln, systemMode: fn, lightColorScheme: un, darkColorScheme: dn, colorScheme: oi, setColorScheme: mn } = Mc({ supportedColorSchemes: ke, defaultLightColorScheme: an, defaultDarkColorScheme: cn, modeStorageKey: E, colorSchemeStorageKey: T, defaultMode: ni, storageManager: S, storageWindow: _, noSsr: pe });
    let lr = si, J = oi;
    Ne && (lr = he.mode, J = he.colorScheme);
    const fr = ee(() => {
      var _a4;
      const Y = J || G.defaultColorScheme, K = ((_a4 = G.generateThemeVars) == null ? void 0 : _a4.call(G)) || G.vars, Q = { ...G, components: sn, colorSchemes: ge, cssVarPrefix: cr, vars: K };
      if (typeof Q.generateSpacing == "function" && (Q.spacing = Q.generateSpacing()), Y) {
        const ie = ge[Y];
        ie && typeof ie == "object" && Object.keys(ie).forEach((oe) => {
          ie[oe] && typeof ie[oe] == "object" ? Q[oe] = { ...Q[oe], ...ie[oe] } : Q[oe] = ie[oe];
        });
      }
      return a ? a(Q) : Q;
    }, [G, J, sn, ge, cr]), ze = G.colorSchemeSelector;
    qr(() => {
      if (J && w && ze && ze !== "media") {
        const Y = ze;
        let K = ze;
        if (Y === "class" && (K = ".%s"), Y === "data" && (K = "[data-%s]"), (Y == null ? void 0 : Y.startsWith("data-")) && !Y.includes("%s") && (K = `[${Y}="%s"]`), K.startsWith(".")) w.classList.remove(...ke.map((Q) => K.substring(1).replace("%s", Q))), w.classList.add(K.substring(1).replace("%s", J));
        else {
          const Q = K.replace("%s", J).match(/\[([^\]]+)\]/);
          if (Q) {
            const [ie, oe] = Q[1].split("=");
            oe || ke.forEach((ai) => {
              w.removeAttribute(ie.replace(J, ai));
            }), w.setAttribute(ie, oe ? oe.replace(/"|'/g, "") : "");
          } else w.setAttribute(K, J);
        }
      }
    }, [J, ze, w, ke]), ve(() => {
      let Y;
      if ($ && z.current && b) {
        const K = b.createElement("style");
        K.appendChild(b.createTextNode(jc)), b.head.appendChild(K), window.getComputedStyle(b.body), Y = setTimeout(() => {
          b.head.removeChild(K);
        }, 1);
      }
      return () => {
        clearTimeout(Y);
      };
    }, [J, $, b]), ve(() => (z.current = true, () => {
      z.current = false;
    }), []);
    const ii = ee(() => ({ allColorSchemes: ke, colorScheme: J, darkColorScheme: dn, lightColorScheme: un, mode: lr, setColorScheme: mn, setMode: ln, systemMode: fn }), [ke, J, dn, un, lr, mn, ln, fn, fr.colorSchemeSelector]);
    let pn = true;
    (D || G.cssVariables === false || Ne && (Pe == null ? void 0 : Pe.cssVarPrefix) === cr) && (pn = false);
    const hn = Fn($r, { children: [B(Uo, { themeId: it ? t : void 0, theme: fr, children: k }), pn && B(ls, { styles: ((_d2 = fr.generateStyleSheets) == null ? void 0 : _d2.call(fr)) || [] })] });
    return Ne ? hn : B(f.Provider, { value: ii, children: hn });
  }
  const p = typeof i == "string" ? i : i.light, g = typeof i == "string" ? i : i.dark;
  return { CssVarsProvider: h, useColorScheme: u, getInitColorSchemeScript: (x) => Ec({ colorSchemeStorageKey: s, defaultLightColorScheme: p, defaultDarkColorScheme: g, modeStorageKey: n, ...x }) };
}
function Ic(e2 = "") {
  function t(...n) {
    if (!n.length) return "";
    const s = n[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ""}${s}${t(...n.slice(1))})` : `, ${s}`;
  }
  return (n, ...s) => `var(--${e2 ? `${e2}-` : ""}${n}${t(...s)})`;
}
const Gn = (e2, t, r, n = []) => {
  let s = e2;
  t.forEach((o, i) => {
    i === t.length - 1 ? Array.isArray(s) ? s[Number(o)] = r : s && typeof s == "object" && (s[o] = r) : s && typeof s == "object" && (s[o] || (s[o] = n.includes(o) ? [] : {}), s = s[o]);
  });
}, Gc = (e2, t, r) => {
  function n(s, o = [], i = []) {
    Object.entries(s).forEach(([a, l]) => {
      (!r || r && !r([...o, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...o, a], Array.isArray(l) ? [...i, a] : i) : t([...o, a], l, i));
    });
  }
  n(e2);
}, Bc = (e2, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e2.includes(n)) || e2[e2.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ht(e2, t) {
  const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, s = {}, o = {}, i = {};
  return Gc(e2, (a, l, f) => {
    if ((typeof l == "string" || typeof l == "number") && (!n || !n(a, l))) {
      const u = `--${r ? `${r}-` : ""}${a.join("-")}`, m = Bc(a, l);
      Object.assign(s, { [u]: m }), Gn(o, a, `var(${u})`, f), Gn(i, a, `var(${u}, ${m})`, f);
    }
  }, (a) => a[0] === "vars"), { css: s, vars: o, varsWithDefaults: i };
}
function Qo(e2, t = {}) {
  const { getSelector: r = C, disableCssColorScheme: n, colorSchemeSelector: s } = t, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...l } = e2, { vars: f, css: u, varsWithDefaults: m } = ht(l, t);
  let d = m;
  const h = {}, { [a]: p, ...g } = o;
  if (Object.entries(g || {}).forEach(([v, E]) => {
    const { vars: T, css: $, varsWithDefaults: S } = ht(E, t);
    d = de(d, S), h[v] = { css: $, vars: T };
  }), p) {
    const { css: v, vars: E, varsWithDefaults: T } = ht(p, t);
    d = de(d, T), h[a] = { css: v, vars: E };
  }
  function C(v, E) {
    var _a3, _b2;
    let T = s;
    if (s === "class" && (T = ".%s"), s === "data" && (T = "[data-%s]"), (s == null ? void 0 : s.startsWith("data-")) && !s.includes("%s") && (T = `[${s}="%s"]`), v) {
      if (T === "media") return e2.defaultColorScheme === v ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a3 = o[v]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode) || v})`]: { ":root": E } };
      if (T) return e2.defaultColorScheme === v ? `:root, ${T.replace("%s", String(v))}` : T.replace("%s", String(v));
    }
    return ":root";
  }
  return { vars: d, generateThemeVars: () => {
    let v = { ...f };
    return Object.entries(h).forEach(([, { vars: E }]) => {
      v = de(v, E);
    }), v;
  }, generateStyleSheets: () => {
    var _a3, _b2;
    const v = [], E = e2.defaultColorScheme || "light";
    function T(_, b) {
      Object.keys(b).length && v.push(typeof _ == "string" ? { [_]: { ...b } } : _);
    }
    T(r(void 0, { ...u }), u);
    const { [E]: $, ...S } = h;
    if ($) {
      const { css: _ } = $, b = (_b2 = (_a3 = o[E]) == null ? void 0 : _a3.palette) == null ? void 0 : _b2.mode, w = !n && b ? { colorScheme: b, ..._ } : { ..._ };
      T(r(E, { ...w }), w);
    }
    return Object.entries(S).forEach(([_, { css: b }]) => {
      var _a4, _b3;
      const w = (_b3 = (_a4 = o[_]) == null ? void 0 : _a4.palette) == null ? void 0 : _b3.mode, P = !n && w ? { colorScheme: w, ...b } : { ...b };
      T(r(_, { ...P }), P);
    }), v;
  } };
}
function Nc(e2) {
  return function(r) {
    return e2 === "media" ? `@media (prefers-color-scheme: ${r})` : e2 ? e2.startsWith("data-") && !e2.includes("%s") ? `[${e2}="${r}"] &` : e2 === "class" ? `.${r} &` : e2 === "data" ? `[data-${r}] &` : `${e2.replace("%s", r)} &` : "&";
  };
}
function Wc({ colorSchemeSelector: e2 = `[${Ho}="%s"]`, ...t }) {
  const r = t, n = Qo(r, { ...t, prefix: t.cssVarPrefix, colorSchemeSelector: e2 });
  return r.vars = n.vars, r.generateThemeVars = n.generateThemeVars, r.generateStyleSheets = n.generateStyleSheets, r.colorSchemeSelector = e2, r.getColorSchemeSelector = Nc(e2), r;
}
const zc = "6.5.0", Fc = 6, Vc = 5, Dc = 0, Kc = void 0;
function nn(e2, t, r = void 0) {
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
const Uc = Ge(), Hc = sr("div", { name: "MuiContainer", slot: "Root", overridesResolver: (e2, t) => {
  const { ownerState: r } = e2;
  return [t.root, t[`maxWidth${Qt(String(r.maxWidth))}`], r.fixed && t.fixed, r.disableGutters && t.disableGutters];
} }), Yc = (e2) => or({ props: e2, name: "MuiContainer", defaultTheme: Uc }), Qc = (e2, t) => {
  const r = (l) => $e(t, l), { classes: n, fixed: s, disableGutters: o, maxWidth: i } = e2, a = { root: ["root", i && `maxWidth${Qt(String(i))}`, s && "fixed", o && "disableGutters"] };
  return nn(a, r, n);
};
function qo(e2 = {}) {
  const { createStyledComponent: t = Hc, useThemeProps: r = Yc, componentName: n = "MuiContainer" } = e2, s = t(({ theme: i, ownerState: a }) => ({ width: "100%", marginLeft: "auto", boxSizing: "border-box", marginRight: "auto", ...!a.disableGutters && { paddingLeft: i.spacing(2), paddingRight: i.spacing(2), [i.breakpoints.up("sm")]: { paddingLeft: i.spacing(3), paddingRight: i.spacing(3) } } }), ({ theme: i, ownerState: a }) => a.fixed && Object.keys(i.breakpoints.values).reduce((l, f) => {
    const u = f, m = i.breakpoints.values[u];
    return m !== 0 && (l[i.breakpoints.up(u)] = { maxWidth: `${m}${i.breakpoints.unit}` }), l;
  }, {}), ({ theme: i, ownerState: a }) => ({ ...a.maxWidth === "xs" && { [i.breakpoints.up("xs")]: { maxWidth: Math.max(i.breakpoints.values.xs, 444) } }, ...a.maxWidth && a.maxWidth !== "xs" && { [i.breakpoints.up(a.maxWidth)]: { maxWidth: `${i.breakpoints.values[a.maxWidth]}${i.breakpoints.unit}` } } }));
  return Ye(function(a, l) {
    const f = r(a), { className: u, component: m = "div", disableGutters: d = false, fixed: h = false, maxWidth: p = "lg", classes: g, ...C } = f, x = { ...f, component: m, disableGutters: d, fixed: h, maxWidth: p }, k = Qc(x, n);
    return B(s, { as: m, ownerState: x, className: rr(k.root, u), ref: l, ...C });
  });
}
const qc = qo();
function Xc(e2) {
  return $e("MuiContainer", e2);
}
const Zc = nr("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);
function Jc(e2, t) {
  var _a3, _b2, _c2;
  return wt(e2) && t.indexOf(e2.type.muiName ?? ((_c2 = (_b2 = (_a3 = e2.type) == null ? void 0 : _a3._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
}
const el = (e2, t) => e2.filter((r) => t.includes(r)), Te = (e2, t, r) => {
  const n = e2.keys[0];
  Array.isArray(t) ? t.forEach((s, o) => {
    r((i, a) => {
      o <= e2.keys.length - 1 && (o === 0 ? Object.assign(i, a) : i[e2.up(e2.keys[o])] = a);
    }, s);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e2.keys.length ? e2.keys : el(e2.keys, Object.keys(t))).forEach((o) => {
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
function vt(e2) {
  return `--Grid-${e2}Spacing`;
}
function ir(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
const Bn = "--Grid-columns", Re = "--Grid-parent-columns", tl = ({ theme: e2, ownerState: t }) => {
  const r = {};
  return Te(e2.breakpoints, t.size, (n, s) => {
    let o = {};
    s === "grow" && (o = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }), s === "auto" && (o = { flexBasis: "auto", flexGrow: 0, flexShrink: 0, maxWidth: "none", width: "auto" }), typeof s == "number" && (o = { flexGrow: 0, flexBasis: "auto", width: `calc(100% * ${s} / var(${Re}) - (var(${Re}) - ${s}) * (var(${ir("column")}) / var(${Re})))` }), n(r, o);
  }), r;
}, rl = ({ theme: e2, ownerState: t }) => {
  const r = {};
  return Te(e2.breakpoints, t.offset, (n, s) => {
    let o = {};
    s === "auto" && (o = { marginLeft: "auto" }), typeof s == "number" && (o = { marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / var(${Re}) + var(${ir("column")}) * ${s} / var(${Re}))` }), n(r, o);
  }), r;
}, nl = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = { [Bn]: 12 };
  return Te(e2.breakpoints, t.columns, (n, s) => {
    const o = s ?? 12;
    n(r, { [Bn]: o, "> *": { [Re]: o } });
  }), r;
}, sl = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = {};
  return Te(e2.breakpoints, t.rowSpacing, (n, s) => {
    var _a3;
    const o = typeof s == "string" ? s : (_a3 = e2.spacing) == null ? void 0 : _a3.call(e2, s);
    n(r, { [vt("row")]: o, "> *": { [ir("row")]: o } });
  }), r;
}, ol = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = {};
  return Te(e2.breakpoints, t.columnSpacing, (n, s) => {
    var _a3;
    const o = typeof s == "string" ? s : (_a3 = e2.spacing) == null ? void 0 : _a3.call(e2, s);
    n(r, { [vt("column")]: o, "> *": { [ir("column")]: o } });
  }), r;
}, il = ({ theme: e2, ownerState: t }) => {
  if (!t.container) return {};
  const r = {};
  return Te(e2.breakpoints, t.direction, (n, s) => {
    n(r, { flexDirection: s });
  }), r;
}, al = ({ ownerState: e2 }) => ({ minWidth: 0, boxSizing: "border-box", ...e2.container && { display: "flex", flexWrap: "wrap", ...e2.wrap && e2.wrap !== "wrap" && { flexWrap: e2.wrap }, gap: `var(${vt("row")}) var(${vt("column")})` } }), Xo = (e2) => {
  const t = [];
  return Object.entries(e2).forEach(([r, n]) => {
    n !== false && n !== void 0 && t.push(`grid-${r}-${String(n)}`);
  }), t;
}, Zo = (e2, t = "xs") => {
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
}, Jo = (e2) => e2 === void 0 ? [] : typeof e2 == "object" ? Object.entries(e2).map(([t, r]) => `direction-${t}-${r}`) : [`direction-xs-${String(e2)}`];
function cl(e2, t) {
  e2.item !== void 0 && delete e2.item, e2.zeroMinWidth !== void 0 && delete e2.zeroMinWidth, t.keys.forEach((r) => {
    e2[r] !== void 0 && delete e2[r];
  });
}
const ll = Ge(), fl = sr("div", { name: "MuiGrid", slot: "Root", overridesResolver: (e2, t) => t.root });
function ul(e2) {
  return or({ props: e2, name: "MuiGrid", defaultTheme: ll });
}
function ei(e2 = {}) {
  const { createStyledComponent: t = fl, useThemeProps: r = ul, useTheme: n = ot, componentName: s = "MuiGrid" } = e2, o = (f, u) => {
    const { container: m, direction: d, spacing: h, wrap: p, size: g } = f, C = { root: ["root", m && "container", p !== "wrap" && `wrap-xs-${String(p)}`, ...Jo(d), ...Xo(g), ...m ? Zo(h, u.breakpoints.keys[0]) : []] };
    return nn(C, (x) => $e(s, x), {});
  };
  function i(f, u, m = () => true) {
    const d = {};
    return f === null || (Array.isArray(f) ? f.forEach((h, p) => {
      h !== null && m(h) && u.keys[p] && (d[u.keys[p]] = h);
    }) : typeof f == "object" ? Object.keys(f).forEach((h) => {
      const p = f[h];
      p != null && m(p) && (d[h] = p);
    }) : d[u.keys[0]] = f), d;
  }
  const a = t(nl, ol, sl, tl, il, al, rl), l = Ye(function(u, m) {
    const d = n(), h = r(u), p = tr(h);
    cl(p, d.breakpoints);
    const { className: g, children: C, columns: x = 12, container: k = false, component: v = "div", direction: E = "row", wrap: T = "wrap", size: $ = {}, offset: S = {}, spacing: _ = 0, rowSpacing: b = _, columnSpacing: w = _, unstable_level: P = 0, ...D } = p, V = i($, d.breakpoints, (G) => G !== false), pe = i(S, d.breakpoints), z = u.columns ?? (P ? void 0 : x), Pe = u.spacing ?? (P ? void 0 : _), he = u.rowSpacing ?? u.spacing ?? (P ? void 0 : b), Ne = u.columnSpacing ?? u.spacing ?? (P ? void 0 : w), We = { ...p, level: P, columns: z, container: k, direction: E, wrap: T, spacing: Pe, rowSpacing: he, columnSpacing: Ne, size: V, offset: pe }, it = o(We, d);
    return B(a, { ref: m, as: v, ownerState: We, className: rr(it.root, g), ...D, children: Wn.map(C, (G) => {
      var _a3;
      return wt(G) && Jc(G, ["Grid"]) && k && G.props.container ? zn(G, { unstable_level: ((_a3 = G.props) == null ? void 0 : _a3.unstable_level) ?? P + 1 }) : G;
    }) });
  });
  return l.muiName = "Grid", l;
}
const dl = ei();
function ml(e2) {
  return $e("MuiGrid", e2);
}
const pl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], hl = ["column-reverse", "column", "row-reverse", "row"], gl = ["nowrap", "wrap-reverse", "wrap"], Ve = ["auto", "grow", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], yl = nr("MuiGrid", ["root", "container", "item", ...pl.map((e2) => `spacing-xs-${e2}`), ...hl.map((e2) => `direction-xs-${e2}`), ...gl.map((e2) => `wrap-xs-${e2}`), ...Ve.map((e2) => `grid-xs-${e2}`), ...Ve.map((e2) => `grid-sm-${e2}`), ...Ve.map((e2) => `grid-md-${e2}`), ...Ve.map((e2) => `grid-lg-${e2}`), ...Ve.map((e2) => `grid-xl-${e2}`)]), _l = Ge(), bl = sr("div", { name: "MuiStack", slot: "Root", overridesResolver: (e2, t) => t.root });
function Sl(e2) {
  return or({ props: e2, name: "MuiStack", defaultTheme: _l });
}
function Cl(e2, t) {
  const r = Wn.toArray(e2).filter(Boolean);
  return r.reduce((n, s, o) => (n.push(s), o < r.length - 1 && n.push(zn(t, { key: `separator-${o}` })), n), []);
}
const xl = (e2) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[e2], vl = ({ ownerState: e2, theme: t }) => {
  let r = { display: "flex", flexDirection: "column", ...te({ theme: t }, dt({ values: e2.direction, breakpoints: t.breakpoints.values }), (n) => ({ flexDirection: n })) };
  if (e2.spacing) {
    const n = Zt(t), s = Object.keys(t.breakpoints.values).reduce((l, f) => ((typeof e2.spacing == "object" && e2.spacing[f] != null || typeof e2.direction == "object" && e2.direction[f] != null) && (l[f] = true), l), {}), o = dt({ values: e2.direction, base: s }), i = dt({ values: e2.spacing, base: s });
    typeof o == "object" && Object.keys(o).forEach((l, f, u) => {
      if (!o[l]) {
        const d = f > 0 ? o[u[f - 1]] : "column";
        o[l] = d;
      }
    }), r = de(r, te({ theme: t }, i, (l, f) => e2.useFlexGap ? { gap: Ce(n, l) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${xl(f ? o[f] : e2.direction)}`]: Ce(n, l) } }));
  }
  return r = _s(t.breakpoints, r), r;
};
function ti(e2 = {}) {
  const { createStyledComponent: t = bl, useThemeProps: r = Sl, componentName: n = "MuiStack" } = e2, s = () => nn({ root: ["root"] }, (l) => $e(n, l), {}), o = t(vl);
  return Ye(function(l, f) {
    const u = r(l), m = tr(u), { component: d = "div", direction: h = "column", spacing: p = 0, divider: g, children: C, className: x, useFlexGap: k = false, ...v } = m, E = { direction: h, spacing: p, useFlexGap: k }, T = s();
    return B(o, { as: d, ownerState: E, ref: f, className: rr(T.root, x), ...v, children: g ? Cl(C, g) : C });
  });
}
const wl = ti();
function $l(e2) {
  return $e("MuiStack", e2);
}
const Tl = nr("MuiStack", ["root"]);
function Pl() {
  throw new Error(bt(19));
}
const xr = Object.freeze(Object.defineProperty({ __proto__: null, Box: Qa, Container: qc, GlobalStyles: Js, Grid: dl, RtlProvider: Do, Stack: wl, StyledEngineProvider: da, ThemeProvider: Uo, alignContent: oo, alignItems: so, alignSelf: fo, alpha: Wo, backgroundColor: Ks, bgcolor: Ds, blend: gc, border: xs, borderBottom: $s, borderBottomColor: As, borderColor: Ps, borderLeft: Ts, borderLeftColor: Rs, borderRadius: et, borderRight: ws, borderRightColor: Es, borderTop: vs, borderTopColor: ks, borderTransform: q, borders: Wr, bottom: _o, boxSizing: Xs, breakpoints: xa, color: Vs, colorChannel: Bo, columnGap: rt, compose: me, containerClasses: Zc, createBox: Ro, createBreakpoints: ps, createContainer: qo, createGrid: ei, createSpacing: Cs, createStack: ti, createStyled: Lo, createTheme: Ge, createUnarySpacing: Zt, createUnaryUnit: Ie, css: cs, cssContainerQueries: hs, darken: Zr, decomposeColor: re, display: Dr, emphasize: zo, experimental_sx: Pl, flex: ao, flexBasis: eo, flexDirection: to, flexGrow: co, flexShrink: lo, flexWrap: ro, flexbox: Kr, fontFamily: So, fontSize: Co, fontStyle: xo, fontWeight: vo, gap: tt, getContainerUtilityClass: Xc, getContrastRatio: uc, getGridUtilityClass: ml, getLuminance: xt, getPath: Ze, getStackUtilityClass: $l, getStyleFromPropValue: Ss, getStyleValue: He, getThemeProps: Qr, getValue: Ce, grid: zr, gridArea: Fs, gridAutoColumns: Gs, gridAutoFlow: Is, gridAutoRows: Bs, gridClasses: yl, gridColumn: js, gridRow: Ls, gridTemplateAreas: zs, gridTemplateColumns: Ns, gridTemplateRows: Ws, handleBreakpoints: te, height: Ys, hexToRgb: Go, hslToRgb: No, justifyContent: no, justifyItems: uo, justifySelf: mo, keyframes: ra, left: bo, letterSpacing: wo, lighten: Jr, lineHeight: To, major: Fc, margin: j, marginKeys: qt, maxHeight: Qs, maxWidth: Jt, mergeBreakpointsInOrder: _s, minHeight: qs, minWidth: Hs, minor: Vc, order: io, outline: Os, outlineColor: Ms, padding: L, paddingKeys: Xt, palette: Fr, paletteTransform: we, patch: Dc, position: po, positions: Ur, prerelease: Kc, private_safeAlpha: dc, private_safeColorChannel: lc, private_safeDarken: mc, private_safeEmphasize: hc, private_safeLighten: pc, recomposeColor: Be, responsivePropType: Sa, rgbToHex: fc, right: yo, rowGap: nt, shadows: Hr, shape: gs, shouldForwardProp: mt, sizeHeight: Aa, sizeWidth: Ea, sizing: Vr, sizingTransform: U, spacing: Je, stackClasses: Tl, style: y, styled: sr, systemDefaultTheme: Mo, textAlign: Po, textTransform: $o, top: go, typography: Yr, typographyVariant: ko, unstable_createCssVarsProvider: Lc, unstable_createCssVarsTheme: Wc, unstable_createGetCssVar: Ic, unstable_createStyleFunctionSx: Zs, unstable_cssVarsParser: ht, unstable_defaultSxConfig: er, unstable_extendSxProp: tr, unstable_generateDirectionClasses: Jo, unstable_generateSizeClassNames: Xo, unstable_generateSpacingClassNames: Zo, unstable_getThemeValue: Ka, unstable_memoTheme: kc, unstable_prepareCssVars: Qo, unstable_resolveBreakpointValues: dt, unstable_styleFunctionSx: Me, unstable_traverseBreakpoints: Te, useMediaQuery: ic, useRtl: Cc, useTheme: ot, useThemeProps: or, useThemeWithoutDefault: st, version: zc, width: Us, zIndex: ho }, Symbol.toStringTag, { value: "Module" })), c = xr, kl = c.experimental_sx, El = c.css, Al = c.keyframes, Rl = c.StyledEngineProvider, Ol = c.GlobalStyles, Ml = c.borders, jl = c.breakpoints, Ll = c.cssContainerQueries, Il = c.handleBreakpoints, Gl = c.mergeBreakpointsInOrder, Bl = c.unstable_resolveBreakpointValues, Nl = c.compose, Wl = c.display, zl = c.flexbox, Fl = c.grid, Vl = c.palette, Dl = c.positions, Kl = c.shadows, Ul = c.sizing, Hl = c.spacing, Yl = c.style, Ql = c.getPath, ql = c.getStyleValue, Xl = c.typography, Zl = c.unstable_styleFunctionSx, Jl = c.unstable_createStyleFunctionSx, ef = c.unstable_extendSxProp, tf = c.unstable_defaultSxConfig, rf = c.unstable_getThemeValue, nf = c.Box, sf = c.createBox, of = c.createStyled, af = c.styled, cf = c.createTheme, lf = c.createBreakpoints, ff = c.createSpacing, uf = c.shape, df = c.useThemeProps, mf = c.getThemeProps, pf = c.useTheme, hf = c.useThemeWithoutDefault, gf = c.useMediaQuery, yf = c.ThemeProvider, _f = c.unstable_memoTheme, bf = c.unstable_createCssVarsProvider, Sf = c.unstable_createGetCssVar, Cf = c.unstable_cssVarsParser, xf = c.unstable_prepareCssVars, vf = c.unstable_createCssVarsTheme, wf = c.responsivePropType, $f = c.RtlProvider, Tf = c.createContainer, Pf = c.Container, kf = c.Grid, Ef = c.Stack, Af = c.borderTransform, Rf = c.border, Of = c.borderTop, Mf = c.borderRight, jf = c.borderBottom, Lf = c.borderLeft, If = c.borderColor, Gf = c.borderTopColor, Bf = c.borderRightColor, Nf = c.borderBottomColor, Wf = c.borderLeftColor, zf = c.outline, Ff = c.outlineColor, Vf = c.borderRadius, Df = c.flexBasis, Kf = c.flexDirection, Uf = c.flexWrap, Hf = c.justifyContent, Yf = c.alignItems, Qf = c.alignContent, qf = c.order, Xf = c.flex, Zf = c.flexGrow, Jf = c.flexShrink, eu = c.alignSelf, tu = c.justifyItems, ru = c.justifySelf, nu = c.gap, su = c.columnGap, ou = c.rowGap, iu = c.gridColumn, au = c.gridRow, cu = c.gridAutoFlow, lu = c.gridAutoColumns, fu = c.gridAutoRows, uu = c.gridTemplateColumns, du = c.gridTemplateRows, mu = c.gridTemplateAreas, pu = c.gridArea, hu = c.paletteTransform, gu = c.color, yu = c.bgcolor, _u = c.backgroundColor, bu = c.position, Su = c.zIndex, Cu = c.top, xu = c.right, vu = c.bottom, wu = c.left, $u = c.sizingTransform, Tu = c.width, Pu = c.maxWidth, ku = c.minWidth, Eu = c.height, Au = c.maxHeight, Ru = c.minHeight, Ou = c.sizeWidth, Mu = c.sizeHeight, ju = c.boxSizing, Lu = c.marginKeys, Iu = c.paddingKeys, Gu = c.createUnaryUnit, Bu = c.createUnarySpacing, Nu = c.getValue, Wu = c.getStyleFromPropValue, zu = c.margin, Fu = c.padding, Vu = c.fontFamily, Du = c.fontSize, Ku = c.fontStyle, Uu = c.fontWeight, Hu = c.letterSpacing, Yu = c.textTransform, Qu = c.lineHeight, qu = c.textAlign, Xu = c.typographyVariant, Zu = c.systemDefaultTheme, Ju = c.shouldForwardProp, ed = c.hexToRgb, td = c.decomposeColor, rd = c.colorChannel, nd = c.private_safeColorChannel, sd = c.recomposeColor, od = c.rgbToHex, id = c.hslToRgb, ad = c.getLuminance, cd = c.getContrastRatio, ld = c.alpha, fd = c.private_safeAlpha, ud = c.darken, dd = c.private_safeDarken, md = c.lighten, pd = c.private_safeLighten, hd = c.emphasize, gd = c.private_safeEmphasize, yd = c.blend, _d = c.useRtl, bd = c.version, Sd = c.major, Cd = c.minor, xd = c.patch, vd = c.prerelease, wd = c.containerClasses, $d = c.getContainerUtilityClass, Td = c.createGrid, Pd = c.gridClasses, kd = c.unstable_traverseBreakpoints, Ed = c.unstable_generateDirectionClasses, Ad = c.unstable_generateSizeClassNames, Rd = c.unstable_generateSpacingClassNames, Od = c.getGridUtilityClass, Md = c.createStack, jd = c.stackClasses, Ld = c.getStackUtilityClass, Id = Reflect.get(xr, "default") ?? xr, Gd = Object.freeze(Object.defineProperty({ __proto__: null, Box: nf, Container: Pf, GlobalStyles: Ol, Grid: kf, RtlProvider: $f, Stack: Ef, StyledEngineProvider: Rl, ThemeProvider: yf, alignContent: Qf, alignItems: Yf, alignSelf: eu, alpha: ld, backgroundColor: _u, bgcolor: yu, blend: yd, border: Rf, borderBottom: jf, borderBottomColor: Nf, borderColor: If, borderLeft: Lf, borderLeftColor: Wf, borderRadius: Vf, borderRight: Mf, borderRightColor: Bf, borderTop: Of, borderTopColor: Gf, borderTransform: Af, borders: Ml, bottom: vu, boxSizing: ju, breakpoints: jl, color: gu, colorChannel: rd, columnGap: su, compose: Nl, containerClasses: wd, createBox: sf, createBreakpoints: lf, createContainer: Tf, createGrid: Td, createSpacing: ff, createStack: Md, createStyled: of, createTheme: cf, createUnarySpacing: Bu, createUnaryUnit: Gu, css: El, cssContainerQueries: Ll, darken: ud, decomposeColor: td, default: Id, display: Wl, emphasize: hd, experimental_sx: kl, flex: Xf, flexBasis: Df, flexDirection: Kf, flexGrow: Zf, flexShrink: Jf, flexWrap: Uf, flexbox: zl, fontFamily: Vu, fontSize: Du, fontStyle: Ku, fontWeight: Uu, gap: nu, getContainerUtilityClass: $d, getContrastRatio: cd, getGridUtilityClass: Od, getLuminance: ad, getPath: Ql, getStackUtilityClass: Ld, getStyleFromPropValue: Wu, getStyleValue: ql, getThemeProps: mf, getValue: Nu, grid: Fl, gridArea: pu, gridAutoColumns: lu, gridAutoFlow: cu, gridAutoRows: fu, gridClasses: Pd, gridColumn: iu, gridRow: au, gridTemplateAreas: mu, gridTemplateColumns: uu, gridTemplateRows: du, handleBreakpoints: Il, height: Eu, hexToRgb: ed, hslToRgb: id, justifyContent: Hf, justifyItems: tu, justifySelf: ru, keyframes: Al, left: wu, letterSpacing: Hu, lighten: md, lineHeight: Qu, major: Sd, margin: zu, marginKeys: Lu, maxHeight: Au, maxWidth: Pu, mergeBreakpointsInOrder: Gl, minHeight: Ru, minWidth: ku, minor: Cd, order: qf, outline: zf, outlineColor: Ff, padding: Fu, paddingKeys: Iu, palette: Vl, paletteTransform: hu, patch: xd, position: bu, positions: Dl, prerelease: vd, private_safeAlpha: fd, private_safeColorChannel: nd, private_safeDarken: dd, private_safeEmphasize: gd, private_safeLighten: pd, recomposeColor: sd, responsivePropType: wf, rgbToHex: od, right: xu, rowGap: ou, shadows: Kl, shape: uf, shouldForwardProp: Ju, sizeHeight: Mu, sizeWidth: Ou, sizing: Ul, sizingTransform: $u, spacing: Hl, stackClasses: jd, style: Yl, styled: af, systemDefaultTheme: Zu, textAlign: qu, textTransform: Yu, top: Cu, typography: Xl, typographyVariant: Xu, unstable_createCssVarsProvider: bf, unstable_createCssVarsTheme: vf, unstable_createGetCssVar: Sf, unstable_createStyleFunctionSx: Jl, unstable_cssVarsParser: Cf, unstable_defaultSxConfig: tf, unstable_extendSxProp: ef, unstable_generateDirectionClasses: Ed, unstable_generateSizeClassNames: Ad, unstable_generateSpacingClassNames: Rd, unstable_getThemeValue: rf, unstable_memoTheme: _f, unstable_prepareCssVars: xf, unstable_resolveBreakpointValues: Bl, unstable_styleFunctionSx: Zl, unstable_traverseBreakpoints: kd, useMediaQuery: gf, useRtl: _d, useTheme: pf, useThemeProps: df, useThemeWithoutDefault: hf, version: bd, width: Tu, zIndex: Su }, Symbol.toStringTag, { value: "Module" })), ar = "__mf_module_cache__";
globalThis[ar] || (globalThis[ar] = { share: {}, remote: {} });
(_a2 = globalThis[ar]).share || (_a2.share = {});
(_b = globalThis[ar]).remote || (_b.remote = {});
const ae = globalThis[ar];
for (const e2 of Object.keys(ae.share)) if (e2.startsWith("default:")) {
  const t = e2.slice(8);
  ae.share[t] === void 0 && (ae.share[t] = ae.share[e2]);
} else if (!e2.includes(":")) {
  const t = "default:" + e2;
  ae.share[t] === void 0 && (ae.share[t] = ae.share[e2]);
}
const Bd = (e2, t) => {
  const r = e2[t.canonical];
  if (r !== void 0) return r;
  const n = t.aliases || [];
  for (const s of n) {
    if (!Object.prototype.hasOwnProperty.call(e2, s)) continue;
    const o = e2[s];
    if (o !== void 0) return e2[t.canonical] = o, o;
  }
}, vr = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-listeners"), Nd = (e2) => {
  let t = e2[vr];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, vr, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, Wd = (e2, t, r) => {
  var _a3;
  const n = Nd(e2);
  (n[_a3 = t.canonical] || (n[_a3] = /* @__PURE__ */ new Set())).add(r);
}, wr = /* @__PURE__ */ Symbol.for("module-federation.shared-cache-owners"), zd = (e2) => {
  let t = e2[wr];
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, wr, { value: t, enumerable: false, configurable: false, writable: false })), t;
}, Fd = (e2, t, r, n) => {
  var _a3;
  e2[t.canonical] = r;
  const s = t.aliases || [];
  for (const i of s) Object.defineProperty(e2, i, { value: r, enumerable: true, configurable: true, writable: true });
  e2[wr], zd(e2)[t.canonical] = n;
  const o = (_a3 = e2[vr]) == null ? void 0 : _a3[t.canonical];
  if (o) for (const i of o) i(r);
  return r;
}, Vd = (e2) => {
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
let gt = Bd(ae.share, { canonical: "default:@mui/system", aliases: ["@mui/system"] });
gt === void 0 && (gt = Vd(Gd), Fd(ae.share, { canonical: "default:@mui/system", aliases: ["@mui/system"] }, gt, "vis2energyWidgets"));
let Dd, Kd, Ud, Hd, Yd, Qd, qd, Xd, Zd, Jd, em, tm, rm, nm, sm, om, im, am, cm, lm, fm, um, dm, mm, pm;
const ri = (e2) => {
  e2.experimental_sx, Dd = e2.css, Kd = e2.keyframes, Ud = e2.StyledEngineProvider, Hd = e2.GlobalStyles, e2.borders, e2.breakpoints, e2.cssContainerQueries, e2.handleBreakpoints, e2.mergeBreakpointsInOrder, e2.unstable_resolveBreakpointValues, e2.compose, e2.display, e2.flexbox, e2.grid, e2.palette, e2.positions, e2.shadows, e2.sizing, e2.spacing, e2.style, e2.getPath, e2.getStyleValue, e2.typography, e2.unstable_styleFunctionSx, e2.unstable_createStyleFunctionSx, e2.unstable_extendSxProp, e2.unstable_defaultSxConfig, e2.unstable_getThemeValue, e2.Box, Yd = e2.createBox, e2.createStyled, e2.styled, e2.createTheme, Qd = e2.createBreakpoints, qd = e2.createSpacing, e2.shape, e2.useThemeProps, e2.getThemeProps, Xd = e2.useTheme, e2.useThemeWithoutDefault, e2.useMediaQuery, Zd = e2.ThemeProvider, Jd = e2.unstable_memoTheme, em = e2.unstable_createCssVarsProvider, tm = e2.unstable_createGetCssVar, e2.unstable_cssVarsParser, e2.unstable_prepareCssVars, e2.unstable_createCssVarsTheme, e2.responsivePropType, e2.RtlProvider, rm = e2.createContainer, e2.Container, e2.Grid, e2.Stack, e2.borderTransform, e2.border, e2.borderTop, e2.borderRight, e2.borderBottom, e2.borderLeft, e2.borderColor, e2.borderTopColor, e2.borderRightColor, e2.borderBottomColor, e2.borderLeftColor, e2.outline, e2.outlineColor, e2.borderRadius, e2.flexBasis, e2.flexDirection, e2.flexWrap, e2.justifyContent, e2.alignItems, e2.alignContent, e2.order, e2.flex, e2.flexGrow, e2.flexShrink, e2.alignSelf, e2.justifyItems, e2.justifySelf, e2.gap, e2.columnGap, e2.rowGap, e2.gridColumn, e2.gridRow, e2.gridAutoFlow, e2.gridAutoColumns, e2.gridAutoRows, e2.gridTemplateColumns, e2.gridTemplateRows, e2.gridTemplateAreas, e2.gridArea, e2.paletteTransform, e2.color, e2.bgcolor, e2.backgroundColor, e2.position, e2.zIndex, e2.top, e2.right, e2.bottom, e2.left, e2.sizingTransform, e2.width, e2.maxWidth, e2.minWidth, e2.height, e2.maxHeight, e2.minHeight, e2.sizeWidth, e2.sizeHeight, e2.boxSizing, e2.marginKeys, e2.paddingKeys, e2.createUnaryUnit, e2.createUnarySpacing, e2.getValue, e2.getStyleFromPropValue, e2.margin, e2.padding, e2.fontFamily, e2.fontSize, e2.fontStyle, e2.fontWeight, e2.letterSpacing, e2.textTransform, e2.lineHeight, e2.textAlign, e2.typographyVariant, e2.systemDefaultTheme, e2.shouldForwardProp, nm = e2.hexToRgb, sm = e2.decomposeColor, e2.colorChannel, e2.private_safeColorChannel, om = e2.recomposeColor, im = e2.rgbToHex, am = e2.hslToRgb, cm = e2.getLuminance, lm = e2.getContrastRatio, fm = e2.alpha, e2.private_safeAlpha, um = e2.darken, e2.private_safeDarken, dm = e2.lighten, e2.private_safeLighten, mm = e2.emphasize, e2.private_safeEmphasize, e2.blend, e2.useRtl, e2.version, e2.major, e2.minor, e2.patch, e2.prerelease, e2.containerClasses, e2.getContainerUtilityClass, e2.createGrid, e2.gridClasses, e2.unstable_traverseBreakpoints, e2.unstable_generateDirectionClasses, e2.unstable_generateSizeClassNames, e2.unstable_generateSpacingClassNames, e2.getGridUtilityClass, pm = e2.createStack, e2.stackClasses, e2.getStackUtilityClass, (() => {
    let t = e2;
    for (let r = 0; r < 5; r++) {
      const n = t == null ? void 0 : t.default;
      if (!n || typeof n != "object") return n ?? t;
      t = n;
    }
    return t;
  })();
};
Wd(ae.share, { canonical: "default:@mui/system" }, ri);
ri(gt);
export {
  Gd as $,
  Zd as A,
  em as B,
  Dd as C,
  Kd as D,
  Cc as E,
  Yd as F,
  zo as G,
  rm as H,
  Ec as I,
  ei as J,
  Ze as K,
  pm as L,
  oc as M,
  Ud as N,
  fm as O,
  um as P,
  sm as Q,
  mm as R,
  lm as S,
  cm as T,
  nm as U,
  am as V,
  dm as W,
  om as X,
  im as Y,
  ps as Z,
  qd as _,
  Qd as a,
  er as b,
  Ge as c,
  Zr as d,
  Wo as e,
  pc as f,
  uc as g,
  dc as h,
  hc as i,
  lc as j,
  Qo as k,
  Jr as l,
  Zt as m,
  Nc as n,
  tm as o,
  mc as p,
  No as q,
  ds as r,
  Me as s,
  Xd as t,
  Hd as u,
  Lo as v,
  Jd as w,
  _m as x,
  rr as y,
  or as z
};
