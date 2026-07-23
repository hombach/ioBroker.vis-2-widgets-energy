import { _ as u } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CFKObsBr.js";
import { o as D } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C7HYJM3r.js";
import { E as I } from "./index-BIwAPpOA.js";
import { g as v, h } from "./Utils-CEFQvMQb.js";
import { I as S } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_iobroker_mf_1_adapter_mf_2_react_mf_2_v5__loadShare__.js-BdPsfiJc.js";
import { G as w } from "./Generic-BqkVmzeM.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_material__loadShare__.js-D3v0E93H.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__.js-CyCVg1DT.js";
import "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_system__loadShare__.js-kkmvo9tR.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-CJko9B86.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-CcT-evVu.js";
const C = { cardContent: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden" } };
class x extends w {
  refCardContent = D.createRef();
  timeSelectorRegistered = false;
  timeSelectorRegisterInterval = null;
  readTimer = null;
  chartUpdateInterval = null;
  timeStart;
  timeInterval;
  lastUpdate;
  static getWidgetInfo() {
    return { id: "tplEnergy2Consumption", visSet: "vis-2-widgets-energy", visWidgetLabel: "consumption", visName: "Consumption", visAttrs: [{ name: "common", fields: [{ name: "noCard", label: "without_card", type: "checkbox" }, { name: "widgetTitle", label: "name", hidden: "!!data.noCard" }, { name: "devicesCount", type: "number", label: "devices_count", default: 1 }, { name: "timeWidget", type: "widget", label: "time_widget", tpl: "tplEnergy2IntervalSelector" }, { name: "start-oid", type: "id", hidden: (t) => !!t.timeWidget, label: "start_oid", tooltip: "start_oid_tooltip" }, { name: "interval-oid", type: "id", hidden: (t) => !t["start-oid"] || !!t.timeWidget, label: "interval_oid", tooltip: "start_oid_tooltip" }] }, { name: "aggregation", label: "aggregation", fields: [{ name: "aggregate", label: "aggregate", type: "select", noTranslation: true, options: ["minmax", "max", "min", "average", "total", "count", "percentile", "quantile", "integral", "none"], default: "max" }, { name: "difference", label: "difference", type: "checkbox", tooltip: "difference_tooltip", hidden: (t) => t.aggregate !== "max" && t.aggregate !== "min" && t.aggregate !== "average" && t.aggregate !== "none" && t.aggregate !== "integral" }, { name: "percentile", default: 50, type: "number", label: "percentile", hidden: (t) => t.aggregate !== "percentile" }, { name: "quantile", default: 0.5, type: "number", label: "quantile", hidden: (t) => t.aggregate !== "quantile" }, { name: "integralUnit", default: 60, type: "number", label: "integral_unit", hidden: (t) => t.aggregate !== "integral" }, { name: "integralInterpolation", default: "none", type: "select", options: ["linear", "none"], label: "integral_interpolation", hidden: (t) => t.aggregate !== "integral" }] }, { name: "devices", label: "Value", indexFrom: 1, indexTo: "devicesCount", fields: [{ name: "oid", type: "hid", label: "oid", onChange: async (t, e, r, i) => {
      const a = await i.getObject(e[t.name]);
      a && a.common && (e[`color${t.index}`] = a.common.color !== void 0 ? a.common.color : null, e[`name${t.index}`] = a.common.name && typeof a.common.name == "object" ? a.common.name[S.getLanguage()] : a.common.name, r(e));
    } }, { name: "name", label: "name" }, { name: "color", type: "color", label: "color" }, { name: "unit", label: "unit" }] }], visDefaultStyle: { width: 320, height: 182, position: "relative" }, visPrev: "widgets/vis-2-widgets-energy/img/prev_consumption.png" };
  }
  getTimeWidget(t) {
    const e = window.document.getElementById(t || this.state.rxData.timeWidget), r = e && e.querySelector(".time-selector");
    return r && r._addEventHandler ? r : null;
  }
  getHistory(t, e) {
    return e.timeout ? new Promise((r) => {
      let i = setTimeout(() => {
        i && (clearTimeout(i), i = null, r([]));
      }, e.timeout);
      this.props.context.socket.getHistory(t, e).then((a) => {
        i ? (clearTimeout(i), i = null, r(a)) : console.warn(`Too late answer for ${t}`);
      });
    }) : this.props.context.socket.getHistory(t, e);
  }
  _readCharts() {
    var _a, _b;
    const t = this.getTimeInterval(), e = v(this.getTimeStart(), t), r = { year: { count: 12, format: "MMM" }, month: { count: new Date(e.from.getFullYear(), e.from.getMonth(), 0).getDate(), format: "DD" }, week: { count: 7, format: "ddd" }, day: { count: 24, format: "HH" } }, i = r[t].count, a = new Array(i).fill(0).map((m, d) => new Date(e.from.getTime() + (e.to.getTime() - e.from.getTime()) / i * d + 1));
    this.state.rxData.difference && (t === "year" ? e.from = new Date(e.from.getFullYear(), e.from.getMonth() - 1, 1) : t === "month" ? e.from = new Date(e.from.getFullYear(), e.from.getMonth(), e.from.getDate() - 1) : t === "week" ? e.from = new Date(e.from.getFullYear(), e.from.getMonth(), e.from.getDate() - 1) : t === "day" && (e.from = new Date(e.from.getFullYear(), e.from.getMonth(), e.from.getDate(), e.from.getHours() - 1)));
    const y = { instance: ((_b = (_a = this.props.context.systemConfig) == null ? void 0 : _a.common) == null ? void 0 : _b.defaultHistory) || "history.0", start: e.from.getTime(), end: e.to.getTime(), count: this.state.rxData.difference ? i + 1 : i, from: false, ack: false, q: false, addID: false, aggregate: this.state.rxData.aggregate || "total", percentile: this.state.rxData.percentile, quantile: this.state.rxData.quantile, integralUnit: this.state.rxData.integralUnit, integralInterpolation: this.state.rxData.integralInterpolation, timeout: 1e4 };
    this.setState({ loading: true }, async () => {
      if (e.from !== e.to) {
        const m = { loading: false }, d = r[this.getTimeInterval()].format;
        for (let l = 1; l <= this.state.rxData.devicesCount; l++) if (this.state.rxData[`oid${l}`] && this.state.rxData[`oid${l}`] !== "nothing_selected") {
          const g = (await this.getHistory(this.state.rxData[`oid${l}`], y)).sort((s, o) => s.ts > o.ts ? 1 : -1).filter((s) => s && s.val !== void 0 && s.val !== null);
          if (g.forEach((s) => {
            s.tsF = h(s.ts).format(d), s.tsS = h(s.ts).format("YYYY-MM-DD HH:mm:ss");
          }), this.state.rxData.difference) {
            let s = g.findLast((n) => n.ts < a[0].getTime()) || null;
            const o = [];
            m[`history${l}`] = o;
            for (let n = 0; n < a.length - 1; n++) {
              const c = a[n].getTime(), T = a[n + 1].getTime(), f = g.find((p) => p.ts >= c && p.ts < T);
              f ? (s !== null ? o.push({ ts: a[n].getTime(), val: f.val - s.val }) : o.push({ ts: a[n].getTime(), val: 0 }), s = f) : o.push({ ts: a[n].getTime(), val: 0 });
            }
          } else m[`history${l}`] = a.map((s) => {
            const o = h(s).format(d);
            return g.findLast((c) => c.tsF === o) || { ts: s.getTime(), val: 0 };
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
    super.componentDidUpdate && super.componentDidUpdate(t, e), this.state.rxData.timeWidget && this.props.context.views[this.props.view].widgets[this.state.rxData.timeWidget] && (this.timeSelectorRegistered && this.state.rxData.timeWidget !== this.timeSelectorRegistered && ((_a = this.getTimeWidget(this.timeSelectorRegistered)) == null ? void 0 : _a._removeEventHandler(this.onTimeFromWidgetChanged), this.timeSelectorRegistered = null, this.timeSelectorRegisterInterval && clearInterval(this.timeSelectorRegisterInterval), this.timeSelectorRegisterInterval = null), this.registerTimeSelector()), this.props.context.timeStart !== t.context.timeStart ? this.readCharts() : this.props.context.timeInterval !== t.context.timeInterval && this.readCharts(), !this.getTimeStart() && !this.chartUpdateInterval && (this.chartUpdateInterval = setInterval(() => this.readCharts(), 1e3 * 60 * 10)), this.getTimeStart() && this.chartUpdateInterval && (clearInterval(this.chartUpdateInterval), this.chartUpdateInterval = null);
  }
  componentWillUnmount() {
    var _a;
    this.timeSelectorRegisterInterval && clearInterval(this.timeSelectorRegisterInterval), this.timeSelectorRegisterInterval = null, this.readTimer && clearTimeout(this.readTimer), this.readTimer = null, this.chartUpdateInterval && clearInterval(this.chartUpdateInterval), this.chartUpdateInterval = null, this.timeSelectorRegistered && ((_a = this.getTimeWidget(this.timeSelectorRegistered)) == null ? void 0 : _a._removeEventHandler(this.onTimeFromWidgetChanged), this.timeSelectorRegistered = false), super.componentWillUnmount && super.componentWillUnmount();
  }
  onTimeFromWidgetChanged = (t, e) => {
    if (t === "unmount") {
      if (this.timeSelectorRegistered) {
        const r = window.document.getElementById(this.state.rxData.timeWidget);
        if (r) {
          const i = r.querySelector(".time-selector");
          i && (i._removeEventHandler(this.onTimeChange), this.timeSelectorRegistered = false);
        }
      }
      this.registerTimeSelector();
    } else t === "update" && (this.timeStart !== e.start || this.timeInterval !== e.interval) && (this.timeStart = e.start, this.timeInterval = e.interval, setTimeout(() => this.readCharts(), 0));
  };
  onStateUpdated() {
    v(this.getTimeStart(), this.getTimeInterval()).to.getTime() >= Date.now() && (!this.lastUpdate || Date.now() - this.lastUpdate > 6e4) && (this.lastUpdate = Date.now(), this.readCharts());
  }
  onRxDataChanged() {
    this.readCharts();
  }
  getWidgetInfo() {
    return x.getWidgetInfo();
  }
  getOption() {
    var _a, _b;
    const t = [];
    for (let i = 1; i <= this.state.rxData.devicesCount; i++) t.push({ name: this.state.rxData[`name${i}`] || "", value: this.state.values[`${this.state.rxData[`oid${i}`]}.val`] || "", values: this.state[`history${i}`] || [], color: this.state.rxData[`color${i}`] || "" });
    const e = { year: "MMM", month: "DD.MM", week: "ddd", day: "HH:00" }, r = { color: this.props.context.themeType === "dark" ? "#ddd" : "#222" };
    return { backgroundColor: "transparent", tooltip: {}, legend: { data: t.map((i) => ({ name: i.name, textStyle: r })) }, toolbox: { feature: { magicType: { type: ["stack"] }, dataView: {} } }, grid: { containLabel: true, left: 10, top: 40, right: 10, bottom: 10 }, yAxis: {}, xAxis: { type: "category", data: (_b = (_a = t == null ? void 0 : t[0]) == null ? void 0 : _a.values) == null ? void 0 : _b.map((i) => h(i.ts).format(e[this.getTimeInterval()])) }, series: t.map((i) => {
      var _a2;
      return { type: "bar", name: i.name, itemStyle: { color: i.color }, data: (_a2 = i.values) == null ? void 0 : _a2.map((a) => a.val), stack: "one" };
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
    const r = u("div", { ref: this.refCardContent, style: C.cardContent, children: e && u(I, { option: this.getOption(), theme: this.props.themeType === "dark" ? "dark" : "", style: { height: `${e}px`, width: "100%" }, opts: { renderer: "svg" } }) });
    return this.state.rxData.noCard || t.widget.usedInWidget ? r : this.wrapContent(r, null, { textAlign: "center" });
  }
}
export {
  x as default
};
