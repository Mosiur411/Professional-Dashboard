import React from 'react';

import Congratulations from './Congratulations/Congratulations';
import Linechart from './Linechart/Linechart';
import PieChart from './PieChart/PieChart';
import ReChartBar from './ReChartBar/ReChartBar';

const Analytics = () => {

    return (
        <div>
            <div className=' '>
                <div className=' lg:flex items-center gap-8'>
                    <Congratulations></Congratulations>
                    <PieChart></PieChart>
                </div>
                <div className='lg:flex items-center justify-between w-full mt-8 '>
                    <ReChartBar></ReChartBar>
                    <Linechart></Linechart>
                </div>
            </div>
        </div>
    );
};

export default Analytics;