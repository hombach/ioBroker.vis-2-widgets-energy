import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

import ReactEchartsCore from 'echarts-for-react';
import moment from 'moment';

import { I18n } from '@iobroker/adapter-react-v5';

import Generic from './Generic';
import { getFromToTime } from './Utils';

const styles = () => ({
    cardContent: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
    },
});

class Consumption extends Generic {
    constructor(props) {
        super(props);
        this.refCardContent = React.createRef();
        this.timeSelectorRegistered = false;
        this.timeSelectorRegisterInterval = null;
    }

    static getWidgetInfo() {
        return {
            id: 'tplEnergy2Consumption',
            visSet: 'vis-2-widgets-energy',
            visWidgetLabel: 'consumption',  // Label of widget
            visName: 'Consumption',
            visAttrs: [{
                name: 'common',
                fields: [
                    {
                        name: 'name',
                        label: 'name',
                    },
                    {
                        name: 'devicesCount',
                        type: 'number',
                        label: 'devices_count',
                        default: 1,
                    },
                    {
                        name: 'timeWidget',
                        type: 'widget',
                        label: 'time_widget',
                        tpl: 'tplEnergy2IntervalSelector',
                    },
                    {
                        name: 'start-oid',
                        type: 'id',
                        hidden: data => !!data.timeWidget,
                        label: 'start_oid',
                        tooltip: 'start_oid_tooltip',
                    },
                    {
                        name: 'interval-oid',
                        type: 'id',
                        hidden: data => !data['start-oid'] || !!data.timeWidget,
                        label: 'interval_oid',
                        tooltip: 'start_oid_tooltip',
                    },
                ],
            },
            {
                name: 'aggregation',
                label: 'aggregation',
                fields: [
                    {
                        name: 'aggregate',
                        label: 'aggregate',
                        type: 'select',
                        noTranslate: true,
                        options: ['minmax', 'max', 'min', 'average', 'total', 'count', 'percentile', 'quantile', 'integral', 'none'],
                        default: 'total',
                    },
                    {
                        name: 'percentile',
                        default: 50,
                        type: 'number',
                        label: 'percentile',
                        hidden: data => data.aggregate !== 'percentile',
                    },
                    {
                        name: 'quantile',
                        default: 0.5,
                        type: 'number',
                        label: 'quantile',
                        hidden: data => data.aggregate !== 'quantile',
                    },
                    {
                        name: 'integralUnit',
                        default: 60,
                        type: 'number',
                        label: 'integral_unit',
                        hidden: data => data.aggregate !== 'integral',
                    },
                    {
                        name: 'integralInterpolation',
                        default: 'none',
                        type: 'select',
                        options: ['linear', 'none'],
                        label: 'integral_interpolation',
                        hidden: data => data.aggregate !== 'integral',
                    },
                ],
            },
            {
                name: 'devices',
                label: 'level',
                indexFrom: 1,
                indexTo: 'devicesCount',
                fields: [
                    {
                        name: 'oid',
                        type: 'hid',
                        label: 'oid',
                        onChange: async (field, data, changeData, socket) => {
                            const object = await socket.getObject(data[field.name]);
                            if (object && object.common) {
                                data[`color${field.index}`]  = object.common.color !== undefined ? object.common.color : null;
                                data[`name${field.index}`]  = object.common.name && typeof object.common.name === 'object' ? object.common.name[I18n.getLanguage()] : object.common.name;
                                changeData(data);
                            }
                        },
                    },
                    {
                        name: 'name',
                        label: 'name',
                    },
                    {
                        name: 'color',
                        type: 'color',
                        label: 'color',
                    },
                    {
                        name: 'unit',
                        label: 'unit',
                    },
                ],
            }],
            visDefaultStyle: {
                width: 320,
                height: 182,
                position: 'relative',
            },
            visPrev: 'widgets/vis-2-widgets-energy/img/prev_consumption.png',
        };
    }

    getTimeWidget(wid) {
        const el = window.document.getElementById(wid || this.state.rxData.timeWidget);
        const div = el && el.querySelector('.time-selector');
        if (div && div._addEventHandler) {
            return div;
        }

        return null;
    }

    getHistory(id, options) {
        if (options.timeout) {
            return new Promise(resolve => {
                let timeout = setTimeout(() => {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                        resolve([]);
                    }
                }, options.timeout);

                this.props.socket.getHistory(id, options)
                    .then(result => {
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                            resolve(result);
                        } else {
                            console.warn(`Too late answer for ${id}`);
                        }
                    });
            });
        }

        return this.props.socket.getHistory(id, options);
    }

    propertiesUpdate() {
        const interval = getFromToTime(this.getTimeStart(), this.getTimeInterval());

        const types = {
            year: {
                count: 12,
                format: 'MMM',
            },
            month: {
                count: new Date(interval.from.getFullYear(), interval.from.getMonth(), 0).getDate(),
                format: 'DD',
            },
            week: {
                count: 7,
                format: 'ddd',
            },
            day: {
                count: 24,
                format: 'HH',
            },
        };

        const times = new Array(types[this.getTimeInterval()].count).fill(0).map((_, i) => new Date(
            interval.from.getTime() +
            ((interval.to.getTime() - interval.from.getTime()) / types[this.getTimeInterval()].count) * i
            + 1,
        ));

        const options = {
            instance: this.props.systemConfig?.common?.defaultHistory || 'history.0',
            start: interval.from.getTime(),
            end: interval.to.getTime(),
            count: types[this.getTimeInterval()].count,
            from: false,
            ack: false,
            q: false,
            addID: false,
            aggregate: this.state.rxData.aggregate || 'total',
            percentile: this.state.rxData.percentile,
            quantile: this.state.rxData.quantile,
            integralUnit: this.state.rxData.integralUnit,
            integralInterpolation: this.state.rxData.integralInterpolation,
            timeout: 10000,
        };

        this.setState({ loading: true }, async () => {
            if (interval.from !== interval.to) {
                const newState = { loading: false };
                const format = types[this.getTimeInterval()].format;

                for (let i = 1; i <= this.state.rxData.devicesCount; i++) {
                    if (this.state.rxData[`oid${i}`] && this.state.rxData[`oid${i}`] !== 'nothing_selected') {
                        const values = await this.getHistory(this.state.rxData[`oid${i}`], options);
                        const history = values
                            .sort((a, b) => (a.ts > b.ts ? 1 : -1))
                            .filter(item => item && item.val !== undefined && item.val !== null);

                        history.forEach(item => item.tsF = moment(item.ts).format(format));

                        newState[`history${i}`] = times.map(time => {
                            const timeStr = moment(time).format(format);
                            const foundHistory = history.find(item => item.tsF === timeStr);
                            return foundHistory || { ts: time.getTime(), val: 0 };
                        });
                    }
                }
                this.setState(newState);
            }
        });
    }

    registerTimeSelector() {
        if (!this.timeSelectorRegistered && this.state.rxData.timeWidget && this.props.views[this.props.view].widgets[this.state.rxData.timeWidget]) {
            this.timeSelectorRegisterInterval = this.timeSelectorRegisterInterval || setInterval(() => {
                if (!this.timeSelectorRegistered && this.state.rxData.timeWidget) {
                    const el = this.getTimeWidget();

                    if (el) {
                        el._addEventHandler(this.onTimeFromWidgetChanged);
                        this.timeSelectorRegistered = this.state.rxData.timeWidget;
                    }
                }

                // stop interval
                if ((!this.state.rxData.timeWidget || this.timeSelectorRegistered) && this.timeSelectorRegisterInterval) {
                    clearInterval(this.timeSelectorRegisterInterval);
                    this.timeSelectorRegisterInterval = null;
                }
            }, 300);
        }
    }

    getSubscribeState = (id, cb) => this.props.socket.getState(id)
        .then(result => {
            cb(id, result);
            return this.props.socket.subscribeState(id, (resultId, _result) => cb(id, _result));
        });

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (super.componentDidUpdate) {
            super.componentDidUpdate(prevProps, prevState, snapshot);
        }

        if (this.state.rxData.timeWidget && this.props.views[this.props.view].widgets[this.state.rxData.timeWidget]) {
            if (this.timeSelectorRegistered && this.state.rxData.timeWidget !== this.timeSelectorRegistered) {
                this.getTimeWidget(this.timeSelectorRegistered)?._removeEventHandler(this.onTimeFromWidgetChanged);
                this.timeSelectorRegistered = null;
                this.timeSelectorRegisterInterval && clearInterval(this.timeSelectorRegisterInterval);
                this.timeSelectorRegisterInterval = null;
            }
            this.registerTimeSelector();
        }

        if (this.props.timeStart !== prevProps.timeStart) {
            this.propertiesUpdate();
        }
        if (this.props.timeInterval !== prevProps.timeInterval) {
            this.propertiesUpdate();
        }
        if (!this.getTimeStart() && !this.updateInterval) {
            this.updateInterval = setInterval(() => this.propertiesUpdate(), 1000 * 60 * 10);
        }
        if (this.getTimeStart() && this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    componentWillUnmount() {
        this.timeSelectorRegisterInterval && clearInterval(this.timeSelectorRegisterInterval);
        this.timeSelectorRegisterInterval = null;

        this.updateInterval && clearInterval(this.updateInterval);
        this.updateInterval = null;

        // unregister from time selector
        if (this.timeSelectorRegistered) {
            this.getTimeWidget(this.timeSelectorRegistered)?._removeEventHandler(this.onTimeFromWidgetChanged);
            this.timeSelectorRegistered = false;
        }

        if (super.componentWillUnmount) {
            super.componentWillUnmount();
        }
    }

    onTimeFromWidgetChanged = (event, value) => {
        if (event === 'unmount') {
            if (this.timeSelectorRegistered) {
                const el = window.document.getElementById(this.state.rxData.timeWidget);

                if (el) {
                    const div = el.querySelector('.time-selector');
                    if (div) {
                        div._removeEventHandler(this.onTimeChange);
                        this.timeSelectorRegistered = false;
                    }
                }
            }
            this.registerTimeSelector();
        } else if (event === 'update') {
            if (this.timeStart !== value.start || this.timeInterval !== value.interval) {
                this.timeStart = value.start;
                this.timeInterval = value.interval;
                setTimeout(() => this.propertiesUpdate(), 0);
            }
        }
    };

    onStateUpdated() {
        this.propertiesUpdate();
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return Consumption.getWidgetInfo();
    }

    /**
     *
     * @returns {echarts.EChartsOption}
     */
    getOption() {
        const data = [];
        for (let i = 1; i <= this.state.rxData.devicesCount; i++) {
            data.push({
                name: this.state.rxData[`name${i}`] || '',
                value: this.state.values[`${this.state.rxData[`oid${i}`]}.val`] || '',
                values: this.state[`history${i}`] || [],
                color: this.state.rxData[`color${i}`] || '',
            });
        }

        const timeTypes = {
            year: 'MMM',
            month: 'DD.MM',
            week: 'ddd',
            day: 'HH:00',
        };

        return {
            backgroundColor: 'transparent',
            tooltip: {},
            legend: { data: data.map(item => item.name) },
            toolbox: {
                feature: {
                    magicType: {
                        type: ['stack'],
                    },
                    dataView: {},
                },
            },
            grid: {
                containLabel: true,
                left: 10,
                top: 40,
                right: 10,
                bottom: 10,
            },
            yAxis: { },
            xAxis: {
                type: 'category',
                data: data?.[0]?.values?.map(dateValue => moment(dateValue.ts).format(
                    timeTypes[this.getTimeInterval()],
                )),
            },
            series: data.map(item => (
                {
                    type: 'bar',
                    name: item.name,
                    itemStyle: {
                        color: item.color,
                    },
                    data: item.values?.map(dateValue => dateValue.val),
                    stack: 'one',
                }
            )),
        };
    }

    getTimeStart() {
        let result;
        if (this.state.rxData.timeWidget) {
            result = this.timeStart;
        } else if (this.state.rxData['start-oid']) {
            result = this.state.values[`${this.state.rxData['start-oid']}.val`];
        } else {
            result = this.props.timeStart;
        }
        if (!result) {
            result = 0;
        }
        return result;
    }

    getTimeInterval() {
        let result;
        if (this.state.rxData.timeWidget) {
            result = this.timeInterval;
        } else if (this.state.rxData['start-oid'] && this.state.rxData['interval-oid']) {
            result = this.state.values[`${this.state.rxData['interval-oid']}.val`];
        } else {
            result = this.props.timeInterval;
        }
        if (!result) {
            result = 'day';
        }
        return result;
    }

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        let size;
        if (!this.refCardContent.current) {
            setTimeout(() => this.forceUpdate(), 50);
        } else {
            size = this.refCardContent.current.offsetHeight;
        }

        const content = <div
            ref={this.refCardContent}
            className={this.props.classes.cardContent}
        >
            {size && <ReactEchartsCore
                option={this.getOption()}
                theme={this.props.themeType === 'dark' ? 'dark' : ''}
                style={{ height: `${size}px`, width: '100%' }}
                opts={{ renderer: 'svg' }}
            /> }
        </div>;
        return this.wrapContent(content, null, { textAlign: 'center', height: 'calc(100% - 32px)' });
    }
}

Consumption.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default withStyles(styles)(withTheme(Consumption));
