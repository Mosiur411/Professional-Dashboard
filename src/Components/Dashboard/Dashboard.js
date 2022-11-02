import React, { useState } from 'react';
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardPage from './DashboardPage/DashboardPage';

const Dashboard = () => {
    const [dark, setDark] = useState(false);
    return (
        <div data-theme={`${dark ? 'Dark' : 'Light'}`} className=' flex bg-white'>
            <div className=' h-screen'>
                <DashboardNav></DashboardNav>
            </div>
            <DashboardPage className='bg-primary' setDark={setDark} dark={dark}></DashboardPage>
        </div>
    );
};

export default Dashboard;