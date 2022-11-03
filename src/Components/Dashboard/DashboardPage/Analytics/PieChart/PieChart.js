import React from 'react';
import ReactEcharts from "echarts-for-react";
import shape from '../../../../../assect/image/Shape1.png'
import shape2 from '../../../../../assect/image/Shape2.png'
const PieChart = () => {

    const getOption = () => ({
        title: {
            text: 'Customized Pie',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#f59e0b',
                fontWeight: 500
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'Chart',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: 'Students' },
                    { value: 310, name: 'Reviews' },
                    { value: 274, name: 'Purchase' },
                    { value: 235, name: 'Active' },
                    { value: 400, name: 'Users' }
                ].sort(function (a, b) { return a.value - b.value }),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'red',
                            fontWeight: 600
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'red'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'transparent'
                    }
                },
                animationType: 'scale',
                animationEasing: 'elastic',
                animationDelay: function (idx) {
                    return Math.random() * 10;
                }


            }
        ]
    });

    return (
        <div className='bg-primary overflow-hidden shadow-[0_0_16px_0_rgba(0,0,0,0.2)] h-60 lg:w-1/2 lg:mt-0 mt-10 w-full rounded-lg  text-base-100 relative transition-all duration-300 ease-in-out'>
            <div className=' bg-transparent text-base-100 transition-all duration-300 ease-in-out '>
                <ReactEcharts
                    option={getOption()}
                    style={{ height: "280px", width: "100%", background: "transparent", transparency: 'none', opacity: '1', transition: 'all', transform: 'transition' }}
                />
            </div>
            <img className=' absolute top-0 -left-20 opacity-50 w-60 z-50 ' src={shape} alt="shape" />
            <img className=' absolute top-0 -right-20 opacity-50 w-60 z-50 ' src={shape2} alt="shape" />
        </div>
    );
};

export default PieChart;