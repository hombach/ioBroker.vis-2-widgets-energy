import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

import ReactEchartsCore from 'echarts-for-react';
import { I18n } from '@iobroker/adapter-react-v5';
import Generic from './Generic';

const styles = () => ({

});

class ConsumptionComparison extends Generic {
    constructor(props) {
        super(props);
        this.refCardContent = React.createRef();
    }

    static getWidgetInfo() {
        return {
            id: 'tplEnergy2ConsumptionComparison',
            visSet: 'vis-2-widgets-energy',
            visWidgetLabel: 'vis_2_widgets_energy_consumption_comparison',  // Label of widget
            visName: 'Consumption comparison',
            visAttrs: [{
                name: 'common',
                fields: [
                    {
                        name: 'name',
                        label: 'vis_2_widgets_energy_name',
                    },
                    {
                        name: 'devicesCount',
                        type: 'number',
                        label: 'vis_2_widgets_energy_devices_count',
                    },
                ],
            },
            {
                name: 'devices',
                label: 'vis_2_widgets_energy_level',
                indexFrom: 1,
                indexTo: 'devicesCount',
                fields: [
                    {
                        name: 'oid',
                        type: 'id',
                        label: 'vis_2_widgets_energy_oid',
                        onChange: async (field, data, changeData, socket) => {
                            const object = await socket.getObject(data[field.name]);
                            if (object && object.common) {
                                data[`color${field.index}`]  = object.common.color !== undefined ? object.common.color : null;
                                data[`name${field.index}`]  = object.common.name && typeof object.common.name === 'object' ? object.common.name[I18n.lang()] : object.common.name;
                                changeData(data);
                            }
                        },
                    },
                    {
                        name: 'name',
                        label: 'vis_2_widgets_energy_name',
                    },
                    {
                        name: 'color',
                        type: 'color',
                        label: 'vis_2_widgets_energy_color',
                    },
                    {
                        name: 'unit',
                        label: 'vis_2_widgets_energy_unit',
                    },
                ],
            }],
            visDefaultStyle: {
                width: '100%',
                height: 182,
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-energy/img/prev_consumption_comparison.png',
        };
    }

    async propertiesUpdate() {
        let unit = '';
        for (let i = 1; i <= this.state.rxData.devicesCount; i++) {
            try {
                const object = await this.props.socket.getObject(this.state.rxData[`oid${i}`]);
                if (object && object.common && object.common.unit) {
                    unit = object.common.unit;
                    break;
                }
            } catch (e) {
                // ignore
            }
        }
        if (unit === 'kW') {
            unit = 'kWh';
        }
        if (unit === 'W') {
            unit = 'Wh';
        }
        this.setState({ unit });
    }

    componentDidMount() {
        super.componentDidMount();
        this.propertiesUpdate();
    }

    onPropertiesUpdated() {
        super.onPropertiesUpdated();
        this.propertiesUpdate();
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return ConsumptionComparison.getWidgetInfo();
    }

    /**
     *
     * @returns {echarts.EChartsOption}
     */
    getOption() {
        const data = [];
        for (let i = 1; i <= this.state.rxData.devicesCount; i++) {
            data.push({
                name: this.state.rxData[`name${i}`],
                value: this.state.values[`${this.state.rxData[`oid${i}`]}.val`],
                color: this.state.rxData[`color${i}`],
            });
        }

        return {
            tooltip: {},
            grid: { containLabel: true },
            xAxis: { name: I18n.t(this.state.unit) || I18n.t('vis_2_widgets_energy_kwh') },
            yAxis: { type: 'category', data: data.map(item => item.name) },
            series: [
                {
                    type: 'bar',
                    data:
                    data.map(item => ({
                        value: item.value,
                        itemStyle: {
                            color: item.color,
                        },
                    })),
                },
            ],
        };
    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        const content = <ReactEchartsCore
            option={this.getOption()}
            theme={this.props.themeType === 'dark' ? 'dark' : ''}
            style={{ height: '100%', width: '100%' }}
            opts={{ renderer: 'svg' }}
        />;
        return this.wrapContent(content, null, { textAlign: 'center' });
    }
}

ConsumptionComparison.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default withStyles(styles)(withTheme(ConsumptionComparison));