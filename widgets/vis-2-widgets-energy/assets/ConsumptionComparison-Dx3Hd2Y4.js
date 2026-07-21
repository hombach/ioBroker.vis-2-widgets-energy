import { _ as r } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CFKObsBr.js";
import { o as h } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js-C7HYJM3r.js";
import { q as c } from "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_material__loadShare__.js-D3v0E93H.js";
import { E as p } from "./index-BIwAPpOA.js";
import { G as o } from "./Generic-BqkVmzeM.js";
import "./__virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react__loadShare__.js_commonjs-proxy-BuG6-OD8.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__prop_mf_2_types__loadShare__.js-CJko9B86.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare___mf_0_mui_mf_1_system__loadShare__.js-kkmvo9tR.js";
import "./_virtual_mf___mfe_internal__vis2energyWidgets__mf_owner__1__loadShare__react_mf_2_dom__loadShare__.js-CcT-evVu.js";
const u = { cardContent: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden", "& .vis-2-widgets-energy-chart": { width: "100%", "&>div": { borderRadius: 5 } } } };
class l extends o {
  refCardContent = h.createRef();
  static getWidgetInfo() {
    return { id: "tplEnergy2ConsumptionComparison", visSet: "vis-2-widgets-energy", visWidgetLabel: "consumption_comparison", visName: "Consumption comparison", visAttrs: [{ name: "common", fields: [{ name: "noCard", label: "without_card", type: "checkbox" }, { name: "type", label: "type", type: "select", options: [{ value: "bar", label: "bar" }, { value: "pie", label: "pie" }], default: "bar" }, { name: "innerRadius", label: "inner_radius", type: "slider", min: 0, max: 80, hidden: 'data.type !== "pie"' }, { name: "innerTitle", label: "inner_title", type: "text", hidden: 'data.type !== "pie"' }, { name: "inner_oid", label: "inner_oid", type: "id", hidden: 'data.type !== "pie"', onChange: async (i, s, a, e) => {
      var _a;
      const t = s[i.name] ? await e.getObject(s[i.name]) : null;
      ((_a = t == null ? void 0 : t.common) == null ? void 0 : _a.unit) && (s.innerUnit = t.common.unit, a(s));
    } }, { name: "innerUnit", label: "inner_unit", type: "text", hidden: 'data.type !== "pie" || !data.inner_oid' }, { name: "legend", label: "legend", type: "checkbox", hidden: 'data.type !== "pie"' }, { name: "legendHeight", label: "legend_height", type: "slider", min: 5, max: 30, default: 10, hidden: 'data.type !== "pie" || !data.legend' }, { name: "hideLabels", label: "hide_Labels", type: "checkbox", hidden: 'data.type !== "pie"' }, { name: "precision", label: "precision", type: "slider", min: 0, max: 5, default: 0, hidden: 'data.type !== "pie" || !!data.hideLabels' }, { name: "widgetTitle", label: "name", hidden: "!!data.noCard" }, { name: "devicesCount", type: "number", label: "devices_count", min: 2, default: 2 }] }, { name: "devices", label: "level", indexFrom: 1, indexTo: "devicesCount", fields: [{ name: "oid", type: "id", label: "oid", onChange: async (i, s, a, e) => {
      const t = s[i.name] ? await e.getObject(s[i.name]) : null;
      (t == null ? void 0 : t.common) && (s[`color${i.index}`] = t.common.color !== void 0 ? t.common.color : null, s[`name${i.index}`] = o.getText(t.common.name), a(s));
    } }, { name: "name", label: "name" }, { name: "color", type: "color", label: "color" }, { name: "unit", label: "unit" }, { name: "factor", label: "factor", type: "select", noTranslation: true, options: [{ value: 1, label: "1" }, { value: 10, label: "10" }, { value: 100, label: "100" }, { value: 1e3, label: "1000" }, { value: 0.1, label: "0.1" }, { value: 0.01, label: "0.01" }, { value: 1e-3, label: "0.001" }], default: 1 }] }], visDefaultStyle: { width: 320, height: 182, position: "relative" }, visPrev: "widgets/vis-2-widgets-energy/img/prev_consumption_comparison.png" };
  }
  async propertiesUpdate() {
    var _a;
    const i = [], s = [];
    for (let e = 1; e <= this.state.rxData.devicesCount; e++) !this.state.rxData[`unit${e}`] && this.state.rxData[`oid${e}`] && this.state.rxData[`oid${e}`] !== "nothing_selected" && s.push(this.state.rxData[`oid${e}`]);
    const a = s.length ? await this.props.context.socket.getObjectsById(s) : {};
    for (let e = 1; e <= this.state.rxData.devicesCount; e++) if (this.state.rxData[`unit${e}`]) i[e] = this.state.rxData[`unit${e}`];
    else {
      const t = a[this.state.rxData[`oid${e}`]];
      ((_a = t == null ? void 0 : t.common) == null ? void 0 : _a.unit) && (i[e] = t.common.unit, i[e] === "kW" ? i[e] = "kWh" : i[e] === "W" && (i[e] = "Wh"));
    }
    JSON.stringify(i) !== JSON.stringify(this.state.units) && this.setState({ units: i });
  }
  componentDidMount() {
    super.componentDidMount(), this.propertiesUpdate();
  }
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  getWidgetInfo() {
    return l.getWidgetInfo();
  }
  getBarOption() {
    const i = [];
    for (let a = 1; a <= this.state.rxData.devicesCount; a++) {
      let e = this.state.values[`${this.state.rxData[`oid${a}`]}.val`] || 0;
      this.state.rxData[`factor${a}`] && this.state.rxData[`factor${a}`] !== 1 ? e *= this.state.rxData[`factor${a}`] : this.state.units && this.state.units[a] === "Wh" && (e /= 1e3), e = Math.round(e * 100) / 100, i.push({ name: this.state.rxData[`name${a}`] || "", value: e, color: this.state.rxData[`color${a}`] || void 0 });
    }
    i.reverse();
    const s = this.state.units && this.state.units.find((a) => a) || null;
    return { tooltip: { formatter: (a) => `${a.name}: ${a.data.value}${this.state.units && this.state.units[a.dataIndex + 1] ? ` ${this.state.units[a.dataIndex + 1]}` : ""}` }, title: { show: false }, legend: { show: false }, backgroundColor: "transparent", grid: { containLabel: true, left: 10, top: 5, right: 50, bottom: 10 }, xAxis: { type: "value", name: s ? o.t(s) : o.t("kwh") }, yAxis: { type: "category", data: i.map((a) => a.name) }, series: [{ type: "bar", data: i.map((a) => ({ value: a.value, itemStyle: { color: a.color } })) }] };
  }
  getPieOption() {
    const i = [];
    for (let t = 1; t <= this.state.rxData.devicesCount; t++) {
      let n = this.state.values[`${this.state.rxData[`oid${t}`]}.val`] || 0;
      this.state.rxData[`factor${t}`] = parseFloat(this.state.rxData[`factor${t}`]) || 1, this.state.rxData[`factor${t}`] && this.state.rxData[`factor${t}`] !== 1 ? n *= this.state.rxData[`factor${t}`] : this.state.units && this.state.units[t] === "Wh" && (n /= 1e3), n = Math.round(n * 100) / 100, i.push({ name: this.state.rxData[`name${t}`] || "", value: n, itemStyle: { color: this.state.rxData[`color${t}`] || void 0 } });
    }
    let s = "";
    this.state.rxData.innerTitle && (s = this.state.rxData.innerTitle);
    let a;
    if (this.state.rxData.inner_oid) {
      let t = this.state.values[`${this.state.rxData.inner_oid}.val`] || 0;
      t = Math.round(t * 100) / 100, a = t + (this.state.rxData.innerUnit || "");
    }
    i.reverse();
    const e = { show: true, text: [s, a].filter((t) => t).join(`
`), rich: { text: { fontSize: 10 }, value: { fontSize: 20 } }, left: "center", top: "center", textStyle: { color: this.props.context.themeType === "dark" ? "#c7c7c7" : "#3d3d3d" } };
    return { tooltip: { trigger: "item", formatter: (t) => `${t.name}: ${t.data.value}${this.state.units && this.state.units[t.dataIndex + 1] ? ` ${this.state.units[t.dataIndex + 1]}` : ""}` }, title: e, backgroundColor: "transparent", grid: { left: 10, top: 0, right: 10, bottom: 0 }, xAxis: { show: false }, yAxis: { show: false }, legend: { show: this.state.rxData.legend, bottom: 0, left: "center", formatter: (t) => {
      const n = i.findIndex((d) => d.name === t);
      return `${t}: ${i[n].value}${this.state.units && this.state.units[n + 1] ? ` ${this.state.units[n + 1]}` : ""}`;
    }, textStyle: { color: this.props.context.themeType === "dark" ? "#fff" : "#000" } }, series: [{ type: "pie", radius: [`${parseFloat(this.state.rxData.innerRadius) || 0}%`, this.state.rxData.legend ? `${100 - (this.state.rxData.legendHeight || 0)}%` : "100%"], data: i, percentPrecision: this.state.rxData.precision || 0, label: { show: !this.state.rxData.hideLabels, position: "inside", formatter: "{d}%" } }] };
  }
  renderWidgetBody(i) {
    super.renderWidgetBody(i);
    let s;
    this.refCardContent.current ? s = this.refCardContent.current.offsetHeight : setTimeout(() => this.forceUpdate(), 50);
    const a = this.state.rxData.type === "pie" ? this.getPieOption() : this.getBarOption(), e = r(c, { ref: this.refCardContent, sx: u.cardContent, children: s && r(p, { option: a, theme: this.props.themeType === "dark" ? "dark" : "", className: "vis-2-widgets-energy-chart", opts: { renderer: "svg" }, style: { height: s } }) });
    return this.state.rxData.noCard || i.widget.usedInWidget ? e : this.wrapContent(e, null, { textAlign: "center" });
  }
}
export {
  l as default
};
