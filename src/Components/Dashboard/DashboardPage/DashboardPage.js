import React from 'react';
import Analytics from './Analytics/Analytics';
import Navbar from './Navbar/Navbar';

const DashboardPage = ({ dark, setDark }) => {
    return (
        <div className=' mx-10 w-full mt-6'>
            <Navbar dark={dark} setDark={setDark}></Navbar>
            <div className=' mt-8'>
                <Analytics></Analytics>
            </div>
        </div>
    );
};

export default DashboardPage;