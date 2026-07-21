import { a as h, b as v, _ as a } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CFKObsBr.js";
import { o as p } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C7HYJM3r.js";
import { g as l, h as s } from "./Utils-CEFQvMQb.js";
import { p as d, m as c, $ as u } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_material__loadShare__.js-D3v0E93H.js";
import { aj as T, ag as _ } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__.js-CyCVg1DT.js";
import { G as m } from "./Generic-BqkVmzeM.js";
import "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-CJko9B86.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_system__loadShare__.js-kkmvo9tR.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-CcT-evVu.js";
const o = { nowButton: { marginRight: 20 }, contentContainer: { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, content: { display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }, periodName: { flexShrink: 0 } };
class f extends m {
  refTimeSelector = p.createRef();
  eventHandlers = [];
  timerInform;
  lastEvent;
  static getWidgetInfo() {
    return { id: "tplEnergy2IntervalSelector", visSet: "vis-2-widgets-energy", visWidgetLabel: "interval_selector", visName: "Interval selector", visAttrs: [{ name: "common", fields: [{ name: "noCard", label: "without_card", type: "checkbox" }, { name: "widgetTitle", label: "name", hidden: "!!data.noCard" }, { name: "timeStart-oid", type: "id", label: "time_start_oid" }, { name: "timeInterval-oid", type: "id", label: "time_interval_oid" }] }], visDefaultStyle: { width: 320, height: 60, position: "relative" }, visPrev: "widgets/vis-2-widgets-energy/img/prev_interval_selector.png" };
  }
  async propertiesUpdate() {
    if (this.state.rxData.oid && this.state.rxData.oid !== "nothing_selected") {
      const i = await this.props.context.socket.getObject(this.state.rxData.oid);
      this.setState({ object: i });
    }
    const e = this.refTimeSelector.current;
    e && !e._addEventHandler && (e._addEventHandler = (i) => {
      this.eventHandlers.includes(i) || (this.eventHandlers.push(i), this.informSubscribers());
    }, e._removeEventHandler = (i) => {
      const r = this.eventHandlers.indexOf(i);
      r !== -1 && this.eventHandlers.splice(r, 1);
    });
  }
  componentDidMount() {
    super.componentDidMount(), this.propertiesUpdate();
  }
  componentWillUnmount() {
    this.eventHandlers.forEach((i) => i("unmount"));
    const e = this.refTimeSelector.current;
    e && (e._addEventHandler = null, e._removeEventHandler = null), super.componentWillUnmount();
  }
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  getWidgetInfo() {
    return f.getWidgetInfo();
  }
  getTimeStart() {
    return this.state.rxData["timeStart-oid"] ? this.state.values[`${this.state.rxData["timeStart-oid"]}.val`] : this.props.context.timeStart;
  }
  setTimeStart = (e) => {
    this.state.rxData["timeStart-oid"] ? this.props.context.setValue(this.state.rxData["timeStart-oid"], e) : (this.props.context.setTimeStart(e), this.informSubscribers(e));
  };
  getTimeInterval() {
    return this.state.rxData["timeInterval-oid"] ? this.state.values[`${this.state.rxData["timeInterval-oid"]}.val`] : this.props.context.timeInterval;
  }
  informSubscribers(e, i) {
    this.timerInform && clearTimeout(this.timerInform), this.timerInform = setTimeout(() => {
      const r = { interval: i ?? this.getTimeInterval(), start: e ?? this.getTimeStart() }, n = JSON.stringify(r);
      n !== this.lastEvent && (this.lastEvent = n, this.eventHandlers.forEach((t) => {
        try {
          t("update", r);
        } catch (g) {
          console.warn(g);
        }
      }));
    }, 100);
  }
  onStateUpdated(e, i) {
    e === this.state.rxData["timeInterval-oid"] ? this.informSubscribers(null, i.val) : e === this.state.rxData["timeStart-oid"] && this.informSubscribers(i.val);
  }
  setTimeInterval = (e) => {
    this.state.rxData["timeInterval-oid"] ? this.props.context.setValue(this.state.rxData["timeInterval-oid"], e) : (this.props.context.setTimeInterval(e), this.informSubscribers(null, e));
  };
  renderWidgetBody(e) {
    super.renderWidgetBody(e);
    let i = "";
    const r = l(this.getTimeStart(), this.getTimeInterval());
    this.getTimeInterval() === "day" ? i = s(r.from).format("DD.MM.YYYY") : this.getTimeInterval() === "week" ? i = h(v, { children: [s(new Date(r.from)).format("DD.MM"), " ", "\u2014", " ", s(r.to).format("DD.MM")] }) : this.getTimeInterval() === "month" ? i = s(new Date(r.from)).format("MM.YYYY") : this.getTimeInterval() === "year" && (i = s(new Date(r.from)).format("YYYY"));
    const n = a("div", { style: o.contentContainer, className: "time-selector", ref: this.refTimeSelector, children: h("div", { style: o.content, children: [a("span", { style: o.periodName, children: i }), a(d, { onClick: () => {
      const t = new Date(r.from);
      this.getTimeInterval() === "day" ? t.setDate(t.getDate() - 1) : this.getTimeInterval() === "week" ? t.setDate(t.getDate() - 7) : this.getTimeInterval() === "month" ? t.setMonth(t.getMonth() - 1) : this.getTimeInterval() === "year" && t.setFullYear(t.getFullYear() - 1), this.setTimeStart(t.getTime());
    }, children: a(T, {}) }), a(d, { disabled: !this.getTimeStart(), onClick: () => {
      const t = new Date(r.from);
      this.getTimeInterval() === "day" ? t.setDate(t.getDate() + 1) : this.getTimeInterval() === "week" ? t.setDate(t.getDate() + 7) : this.getTimeInterval() === "month" ? t.setMonth(t.getMonth() + 1) : this.getTimeInterval() === "year" && t.setFullYear(t.getFullYear() + 1), this.setTimeStart(l(t, this.getTimeInterval()).from.getTime() >= l(null, this.getTimeInterval()).from.getTime() ? null : t.getTime());
    }, children: a(_, {}) }), a(c, { variant: "contained", color: "grey", disabled: !this.getTimeStart(), onClick: () => this.setTimeStart(0), style: o.nowButton, children: m.t("now") }), a(u, { children: ["day", "week", "month", "year"].map((t) => a(c, { variant: "contained", color: t === this.getTimeInterval() ? "primary" : "grey", onClick: () => {
      t !== this.getTimeInterval() && (this.setTimeInterval(t), this.setTimeStart(0));
    }, children: m.t(`${t}`) }, t)) })] }) });
    return this.state.rxData.noCard || e.widget.usedInWidget ? n : this.wrapContent(n, null, { textAlign: "center", padding: 0, height: "100%" });
  }
}
export {
  f as default
};
