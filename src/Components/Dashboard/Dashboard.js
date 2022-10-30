import React from 'react';
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardPage from './DashboardNav/DashboardPage/DashboardPage';

const Dashboard = () => {


    return (

        <div className=' flex bg-white'>
            <div className=' h-screen'>
                <DashboardNav></DashboardNav>

            </div>
            <DashboardPage></DashboardPage>
        </div>
    );
};

export default Dashboard;