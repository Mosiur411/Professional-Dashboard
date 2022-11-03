import React from 'react';
import ReactEcharts from 'echarts-for-react';

const ReChartBar = () => {

    let xAxisData = [];
    let data = [];
    for (let i = 0; i < 50; i++) {
        xAxisData.push(i);
        data.push(Math.ceil((Math.cos(i / 5) * (i / 5) + i / 6) * 5) + 10);
    }


    const getOption = {
        title: {
            text: 'Income/Expense Report',
            left: 'center',
            textStyle: {
                color: '#ccc',
                fontSize: 15,
                fontWeight: 500,
            }
        },
        backgroundColor: 'transparent',
        xAxis: [{
            show: true,
            data: xAxisData,
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            }
        }, {
            show: false,
            data: xAxisData
        }],
        tooltip: {},
        visualMap: {
            show: false,
            min: 0,
            max: 50,
            dimension: 0,
            inRange: {
                color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
            }
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0000001c'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [
            {
                name: 'Simulate Shadow',
                type: 'line',
                data: data,
                z: 2,
                showSymbol: false,
                animationDelay: 0,
                animationEasing: 'linear',
                animationDuration: 1200,
                lineStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                areaStyle: {
                    normal: {
                        color: 'transparent',
                        shadowBlur: 50,
                        shadowColor: 'transparent'
                    }
                }
            }, {
                name: 'Graph',
                type: 'bar',
                data: data,
                xAxisIndex: 1,
                z: 3,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5
                    }
                }
            }],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay: function (idx) {
            return idx * 20;
        },
        animationDelayUpdate: function (idx) {
            return idx * 20;
        }
    };

    return (
        <div className=' bg-primary h-80 pt-2 rounded-lg lg:w-[60%]  w-full lg:mb-0 mb-7 shadow-[0_0_16px_0_rgba(0,0,0,0.2)]'>
            <ReactEcharts
                option={getOption}
                style={{ height: '100%', width: '100%', background: "transparent", transparency: 'none', opacity: '1', transition: 'all', transform: 'transition' }}
            />
        </div>
    );
};

export default ReChartBar;