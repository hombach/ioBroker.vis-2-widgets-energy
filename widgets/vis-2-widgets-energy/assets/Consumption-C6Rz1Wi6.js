import { _ as v } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CFKObsBr.js";
import { o as T } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C7HYJM3r.js";
import { E as I } from "./index-BIwAPpOA.js";
import { g as x, h } from "./Utils-CEFQvMQb.js";
import { I as S } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_iobroker_mf_1_adapter_mf_2_react_mf_2_v5__loadShare__.js-D9hGLxGk.js";
import { G as w } from "./Generic-BqkVmzeM.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_material__loadShare__.js-D3v0E93H.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__.js-CyCVg1DT.js";
import "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_system__loadShare__.js-kkmvo9tR.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-CJko9B86.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-CcT-evVu.js";
const C = { cardContent: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden" } };
class y extends w {
  refCardContent = T.createRef();
  timeSelectorRegistered = false;
  timeSelectorRegisterInterval = null;
  readTimer = null;
  chartUpdateInterval = null;
  timeStart;
  timeInterval;
  lastUpdate;
  static getWidgetInfo() {
    return { id: "tplEnergy2Consumption", visSet: "vis-2-widgets-energy", visWidgetLabel: "consumption", visName: "Consumption", visAttrs: [{ name: "common", fields: [{ name: "noCard", label: "without_card", type: "checkbox" }, { name: "widgetTitle", label: "name", hidden: "!!data.noCard" }, { name: "devicesCount", type: "number", label: "devices_count", default: 1 }, { name: "timeWidget", type: "widget", label: "time_widget", tpl: "tplEnergy2IntervalSelector" }, { name: "start-oid", type: "id", hidden: (t) => !!t.timeWidget, label: "start_oid", tooltip: "start_oid_tooltip" }, { name: "interval-oid", type: "id", hidden: (t) => !t["start-oid"] || !!t.timeWidget, label: "interval_oid", tooltip: "start_oid_tooltip" }] }, { name: "aggregation", label: "aggregation", fields: [{ name: "aggregate", label: "aggregate", type: "select", noTranslation: true, options: ["minmax", "max", "min", "average", "total", "count", "percentile", "quantile", "integral", "none"], default: "max" }, { name: "difference", label: "difference", type: "checkbox", tooltip: "difference_tooltip", hidden: (t) => t.aggregate !== "max" && t.aggregate !== "min" && t.aggregate !== "average" && t.aggregate !== "none" && t.aggregate !== "integral" }, { name: "percentile", default: 50, type: "number", label: "percentile", hidden: (t) => t.aggregate !== "percentile" }, { name: "quantile", default: 0.5, type: "number", label: "quantile", hidden: (t) => t.aggregate !== "quantile" }, { name: "integralUnit", default: 60, type: "number", label: "integral_unit", hidden: (t) => t.aggregate !== "integral" }, { name: "integralInterpolation", default: "none", type: "select", options: ["linear", "none"], label: "integral_interpolation", hidden: (t) => t.aggregate !== "integral" }] }, { name: "devices", label: "Value", indexFrom: 1, indexTo: "devicesCount", fields: [{ name: "oid", type: "hid", label: "oid", onChange: async (t, e, a, r) => {
      const i = await r.getObject(e[t.name]);
      i && i.common && (e[`color${t.index}`] = i.common.color !== void 0 ? i.common.color : null, e[`name${t.index}`] = i.common.name && typeof i.common.name == "object" ? i.common.name[S.getLanguage()] : i.common.name, a(e));
    } }, { name: "name", label: "name" }, { name: "color", type: "color", label: "color" }, { name: "unit", label: "unit" }, { name: "factor", label: "factor", type: "number", default: 1, tooltip: "factor_tooltip" }] }], visDefaultStyle: { width: 320, height: 182, position: "relative" }, visPrev: "widgets/vis-2-widgets-energy/img/prev_consumption.png" };
  }
  getTimeWidget(t) {
    const e = window.document.getElementById(t || this.state.rxData.timeWidget), a = e && e.querySelector(".time-selector");
    return a && a._addEventHandler ? a : null;
  }
  getHistory(t, e) {
    return e.timeout ? new Promise((a) => {
      let r = setTimeout(() => {
        r && (clearTimeout(r), r = null, a([]));
      }, e.timeout);
      this.props.context.socket.getHistory(t, e).then((i) => {
        r ? (clearTimeout(r), r = null, a(i)) : console.warn(`Too late answer for ${t}`);
      });
    }) : this.props.context.socket.getHistory(t, e);
  }
  _readCharts() {
    var _a, _b;
    const t = this.getTimeInterval(), e = x(this.getTimeStart(), t), a = { year: { count: 12, format: "MMM" }, month: { count: new Date(e.from.getFullYear(), e.from.getMonth(), 0).getDate(), format: "DD" }, week: { count: 7, format: "ddd" }, day: { count: 24, format: "HH" } }, r = a[t].count, i = new Array(r).fill(0).map((m, d) => new Date(e.from.getTime() + (e.to.getTime() - e.from.getTime()) / r * d + 1));
    this.state.rxData.difference && (t === "year" ? e.from = new Date(e.from.getFullYear(), e.from.getMonth() - 1, 1) : t === "month" ? e.from = new Date(e.from.getFullYear(), e.from.getMonth(), e.from.getDate() - 1) : t === "week" ? e.from = new Date(e.from.getFullYear(), e.from.getMonth(), e.from.getDate() - 1) : t === "day" && (e.from = new Date(e.from.getFullYear(), e.from.getMonth(), e.from.getDate(), e.from.getHours() - 1)));
    const c = { instance: ((_b = (_a = this.props.context.systemConfig) == null ? void 0 : _a.common) == null ? void 0 : _b.defaultHistory) || "history.0", start: e.from.getTime(), end: e.to.getTime(), count: this.state.rxData.difference ? r + 1 : r, from: false, ack: false, q: false, addID: false, aggregate: this.state.rxData.aggregate || "total", percentile: this.state.rxData.percentile, quantile: this.state.rxData.quantile, integralUnit: this.state.rxData.integralUnit, integralInterpolation: this.state.rxData.integralInterpolation, timeout: 1e4 };
    this.setState({ loading: true }, async () => {
      if (e.from !== e.to) {
        const m = { loading: false }, d = a[this.getTimeInterval()].format;
        for (let l = 1; l <= this.state.rxData.devicesCount; l++) if (this.state.rxData[`oid${l}`] && this.state.rxData[`oid${l}`] !== "nothing_selected") {
          const g = (await this.getHistory(this.state.rxData[`oid${l}`], c)).sort((s, o) => s.ts > o.ts ? 1 : -1).filter((s) => s && s.val !== void 0 && s.val !== null);
          if (g.forEach((s) => {
            s.tsF = h(s.ts).format(d), s.tsS = h(s.ts).format("YYYY-MM-DD HH:mm:ss");
          }), this.state.rxData.difference) {
            let s = g.findLast((n) => n.ts < i[0].getTime()) || null;
            const o = [];
            m[`history${l}`] = o;
            for (let n = 0; n < i.length - 1; n++) {
              const f = i[n].getTime(), D = i[n + 1].getTime(), u = g.find((p) => p.ts >= f && p.ts < D);
              u ? (s !== null ? o.push({ ts: i[n].getTime(), val: u.val - s.val }) : o.push({ ts: i[n].getTime(), val: 0 }), s = u) : o.push({ ts: i[n].getTime(), val: 0 });
            }
          } else m[`history${l}`] = i.map((s) => {
            const o = h(s).format(d);
            return g.findLast((f) => f.tsF === o) || { ts: s.getTime(), val: 0 };
          });
        }
        this.setState(m);
      }
    });
  }
  readCharts() {
    this.readTimer && clearTimeout(this.readTimer), this.readTimer = setTimeout(() => {
      this.readTimer = null, this._readCharts();
    }, 200);
  }
  registerTimeSelector() {
    !this.timeSelectorRegistered && this.state.rxData.timeWidget && this.props.context.views[this.props.view].widgets[this.state.rxData.timeWidget] && (this.timeSelectorRegisterInterval = this.timeSelectorRegisterInterval || setInterval(() => {
      if (!this.timeSelectorRegistered && this.state.rxData.timeWidget) {
        const t = this.getTimeWidget();
        t && (t._addEventHandler(this.onTimeFromWidgetChanged), this.timeSelectorRegistered = this.state.rxData.timeWidget);
      }
      (!this.state.rxData.timeWidget || this.timeSelectorRegistered) && this.timeSelectorRegisterInterval && (clearInterval(this.timeSelectorRegisterInterval), this.timeSelectorRegisterInterval = null);
    }, 300));
  }
  componentDidUpdate(t, e) {
    var _a;
    super.componentDidUpdate(t, e), this.state.rxData.timeWidget && this.props.context.views[this.props.view].widgets[this.state.rxData.timeWidget] && (this.timeSelectorRegistered && this.state.rxData.timeWidget !== this.timeSelectorRegistered && ((_a = this.getTimeWidget(this.timeSelectorRegistered)) == null ? void 0 : _a._removeEventHandler(this.onTimeFromWidgetChanged), this.timeSelectorRegistered = null, this.timeSelectorRegisterInterval && clearInterval(this.timeSelectorRegisterInterval), this.timeSelectorRegisterInterval = null), this.registerTimeSelector()), this.props.context.timeStart !== t.context.timeStart ? this.readCharts() : this.props.context.timeInterval !== t.context.timeInterval && this.readCharts(), !this.getTimeStart() && !this.chartUpdateInterval && (this.chartUpdateInterval = setInterval(() => this.readCharts(), 1e3 * 60 * 10)), this.getTimeStart() && this.chartUpdateInterval && (clearInterval(this.chartUpdateInterval), this.chartUpdateInterval = null);
  }
  componentWillUnmount() {
    var _a;
    this.timeSelectorRegisterInterval && clearInterval(this.timeSelectorRegisterInterval), this.timeSelectorRegisterInterval = null, this.readTimer && clearTimeout(this.readTimer), this.readTimer = null, this.chartUpdateInterval && clearInterval(this.chartUpdateInterval), this.chartUpdateInterval = null, this.timeSelectorRegistered && ((_a = this.getTimeWidget(this.timeSelectorRegistered)) == null ? void 0 : _a._removeEventHandler(this.onTimeFromWidgetChanged), this.timeSelectorRegistered = false), super.componentWillUnmount();
  }
  onTimeFromWidgetChanged = (t, e) => {
    if (t === "unmount") {
      if (this.timeSelectorRegistered) {
        const a = window.document.getElementById(this.state.rxData.timeWidget);
        if (a) {
          const r = a.querySelector(".time-selector");
          r && (r._removeEventHandler(this.onTimeChange), this.timeSelectorRegistered = false);
        }
      }
      this.registerTimeSelector();
    } else t === "update" && (this.timeStart !== e.start || this.timeInterval !== e.interval) && (this.timeStart = e.start, this.timeInterval = e.interval, setTimeout(() => this.readCharts(), 0));
  };
  onStateUpdated() {
    x(this.getTimeStart(), this.getTimeInterval()).to.getTime() >= Date.now() && (!this.lastUpdate || Date.now() - this.lastUpdate > 6e4) && (this.lastUpdate = Date.now(), this.readCharts());
  }
  onRxDataChanged() {
    this.readCharts();
  }
  getWidgetInfo() {
    return y.getWidgetInfo();
  }
  getOption() {
    var _a, _b;
    const t = [];
    let e = "";
    for (let i = 1; i <= this.state.rxData.devicesCount; i++) !e && this.state.rxData[`unit${i}`] && (e = this.state.rxData[`unit${i}`]), t.push({ name: this.state.rxData[`name${i}`] || "", value: this.state.values[`${this.state.rxData[`oid${i}`]}.val`] || "", values: this.state[`history${i}`] || [], color: this.state.rxData[`color${i}`] || "", factor: parseFloat(this.state.rxData[`factor${i}`]) || 1 });
    const a = { year: "MMM", month: "DD.MM", week: "ddd", day: "HH:00" }, r = { color: this.props.context.themeType === "dark" ? "#ddd" : "#222" };
    return { backgroundColor: "transparent", tooltip: {}, legend: { data: t.map((i) => ({ name: i.name, textStyle: r })) }, toolbox: { feature: { magicType: { type: ["stack"] }, dataView: {} } }, grid: { containLabel: true, left: 10, top: 40, right: 10, bottom: 10 }, yAxis: { name: e }, xAxis: { type: "category", data: (_b = (_a = t == null ? void 0 : t[0]) == null ? void 0 : _a.values) == null ? void 0 : _b.map((i) => h(i.ts).format(a[this.getTimeInterval()])) }, series: t.map((i) => {
      var _a2;
      return { type: "bar", name: i.name, itemStyle: { color: i.color }, data: (_a2 = i.values) == null ? void 0 : _a2.map((c) => c.val * i.factor), stack: "one" };
    }) };
  }
  getTimeStart() {
    let t;
    return this.state.rxData.timeWidget ? t = this.timeStart : this.state.rxData["start-oid"] ? t = this.state.values[`${this.state.rxData["start-oid"]}.val`] : t = this.props.context.timeStart, t = t || 0, t;
  }
  getTimeInterval() {
    let t;
    return this.state.rxData.timeWidget ? t = this.timeInterval : this.state.rxData["start-oid"] && this.state.rxData["interval-oid"] ? t = this.state.values[`${this.state.rxData["interval-oid"]}.val`] : t = this.props.context.timeInterval, t = t || "day", t;
  }
  renderWidgetBody(t) {
    super.renderWidgetBody(t);
    let e;
    this.refCardContent.current ? e = this.refCardContent.current.offsetHeight : setTimeout(() => this.forceUpdate(), 50);
    const a = v("div", { ref: this.refCardContent, style: C.cardContent, children: e && v(I, { option: this.getOption(), theme: this.props.themeType === "dark" ? "dark" : "", style: { height: `${e}px`, width: "100%" }, opts: { renderer: "svg" } }) });
    return this.state.rxData.noCard || t.widget.usedInWidget ? a : this.wrapContent(a, null, { textAlign: "center" });
  }
}
export {
  y as default
};
