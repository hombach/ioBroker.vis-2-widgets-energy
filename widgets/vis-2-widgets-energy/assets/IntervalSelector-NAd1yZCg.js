import { a as h, b as g, _ as n } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CXPcvUgs.js";
import { o as p } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C1tKYn4A.js";
import { g as l, h as s } from "./Utils-CEFQvMQb.js";
import { p as d, m as f, $ as u } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_material__loadShare__.js-3MHKpXP4.js";
import { aj as T, ag as I } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__.js-bDbg5xfN.js";
import { G as m } from "./Generic-BqkVmzeM.js";
import "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BrPVjzm9.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-Cb-nZPEP.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_system__loadShare__.js-CjaCWDnD.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-Dx-_d36B.js";
const o = { nowButton: { marginRight: 20 }, contentContainer: { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, content: { display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }, periodName: { flexShrink: 0 } };
class c extends m {
  refTimeSelector = p.createRef();
  eventHandlers = [];
  timerInform;
  lastEvent;
  static getWidgetInfo() {
    return { id: "tplEnergy2IntervalSelector", visSet: "vis-2-widgets-energy", visWidgetLabel: "interval_selector", visName: "Interval selector", visAttrs: [{ name: "common", fields: [{ name: "noCard", label: "without_card", type: "checkbox" }, { name: "widgetTitle", label: "name", hidden: "!!data.noCard" }, { name: "timeStart-oid", type: "id", label: "time_start_oid" }, { name: "timeInterval-oid", type: "id", label: "time_interval_oid" }] }], visDefaultStyle: { width: 320, height: 60, position: "relative" }, visPrev: "widgets/vis-2-widgets-energy/img/prev_interval_selector.png" };
  }
  propertiesUpdate() {
    const t = this.refTimeSelector.current;
    t && !t._addEventHandler && (t._addEventHandler = (i) => {
      this.eventHandlers.includes(i) || (this.eventHandlers.push(i), this.informSubscribers());
    }, t._removeEventHandler = (i) => {
      const r = this.eventHandlers.indexOf(i);
      r !== -1 && this.eventHandlers.splice(r, 1);
    });
  }
  componentDidMount() {
    super.componentDidMount(), this.propertiesUpdate();
  }
  componentWillUnmount() {
    this.eventHandlers.forEach((i) => i("unmount"));
    const t = this.refTimeSelector.current;
    t && (t._addEventHandler = null, t._removeEventHandler = null), super.componentWillUnmount();
  }
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  getWidgetInfo() {
    return c.getWidgetInfo();
  }
  getTimeStart() {
    return this.state.rxData["timeStart-oid"] ? this.state.values[`${this.state.rxData["timeStart-oid"]}.val`] : this.props.context.timeStart;
  }
  setTimeStart = (t) => {
    this.state.rxData["timeStart-oid"] ? this.props.context.setValue(this.state.rxData["timeStart-oid"], t) : (this.props.context.setTimeStart(t), this.informSubscribers(t));
  };
  getTimeInterval() {
    return this.state.rxData["timeInterval-oid"] ? this.state.values[`${this.state.rxData["timeInterval-oid"]}.val`] : this.props.context.timeInterval;
  }
  informSubscribers(t, i) {
    this.timerInform && clearTimeout(this.timerInform), this.timerInform = setTimeout(() => {
      const r = { interval: i ?? this.getTimeInterval(), start: t ?? this.getTimeStart() }, a = JSON.stringify(r);
      a !== this.lastEvent && (this.lastEvent = a, this.eventHandlers.forEach((e) => {
        try {
          e("update", r);
        } catch (v) {
          console.warn(v);
        }
      }));
    }, 100);
  }
  onStateUpdated(t, i) {
    t === this.state.rxData["timeInterval-oid"] ? this.informSubscribers(null, i.val) : t === this.state.rxData["timeStart-oid"] && this.informSubscribers(i.val);
  }
  setTimeInterval = (t) => {
    this.state.rxData["timeInterval-oid"] ? this.props.context.setValue(this.state.rxData["timeInterval-oid"], t) : (this.props.context.setTimeInterval(t), this.informSubscribers(null, t));
  };
  renderWidgetBody(t) {
    super.renderWidgetBody(t);
    let i = "";
    const r = l(this.getTimeStart(), this.getTimeInterval());
    this.getTimeInterval() === "day" ? i = s(r.from).format("DD.MM.YYYY") : this.getTimeInterval() === "week" ? i = h(g, { children: [s(new Date(r.from)).format("DD.MM"), " \u2014 ", s(r.to).format("DD.MM")] }) : this.getTimeInterval() === "month" ? i = s(new Date(r.from)).format("MM.YYYY") : this.getTimeInterval() === "year" && (i = s(new Date(r.from)).format("YYYY"));
    const a = n("div", { style: o.contentContainer, className: "time-selector", ref: this.refTimeSelector, children: h("div", { style: o.content, children: [n("span", { style: o.periodName, children: i }), n(d, { onClick: () => {
      const e = new Date(r.from);
      this.getTimeInterval() === "day" ? e.setDate(e.getDate() - 1) : this.getTimeInterval() === "week" ? e.setDate(e.getDate() - 7) : this.getTimeInterval() === "month" ? e.setMonth(e.getMonth() - 1) : this.getTimeInterval() === "year" && e.setFullYear(e.getFullYear() - 1), this.setTimeStart(e.getTime());
    }, children: n(T, {}) }), n(d, { disabled: !this.getTimeStart(), onClick: () => {
      const e = new Date(r.from);
      this.getTimeInterval() === "day" ? e.setDate(e.getDate() + 1) : this.getTimeInterval() === "week" ? e.setDate(e.getDate() + 7) : this.getTimeInterval() === "month" ? e.setMonth(e.getMonth() + 1) : this.getTimeInterval() === "year" && e.setFullYear(e.getFullYear() + 1), this.setTimeStart(l(e, this.getTimeInterval()).from.getTime() >= l(null, this.getTimeInterval()).from.getTime() ? null : e.getTime());
    }, children: n(I, {}) }), n(f, { variant: "contained", color: "grey", disabled: !this.getTimeStart(), onClick: () => this.setTimeStart(0), style: o.nowButton, children: m.t("now") }), n(u, { children: ["day", "week", "month", "year"].map((e) => n(f, { variant: "contained", color: e === this.getTimeInterval() ? "primary" : "grey", onClick: () => {
      e !== this.getTimeInterval() && (this.setTimeInterval(e), this.setTimeStart(0));
    }, children: m.t(`${e}`) }, e)) })] }) });
    return this.state.rxData.noCard || t.widget.usedInWidget ? a : this.wrapContent(a, null, { textAlign: "center", padding: 0, height: "100%" });
  }
}
export {
  c as default
};
