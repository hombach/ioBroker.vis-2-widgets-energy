class s extends window.visRxWidget {
  getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
  static getI18nPrefix() {
    return "vis_2_widgets_energy_";
  }
}
export {
  s as G
};
