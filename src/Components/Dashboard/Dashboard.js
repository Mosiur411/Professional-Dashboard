import React, { useEffect, useState } from 'react';
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardPage from './DashboardPage/DashboardPage';


const Dashboard = () => {
    const [dark, setDark] = useState(
        JSON.parse(localStorage.getItem('dark'))
    );
    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(dark));
        setDark(dark);
    }, [dark]);


    return (
        <div data-theme={`${dark ? 'myDark' : 'myLight'}`} className=' flex bg-white'>
            <div className=' h-screen'>
                <DashboardNav></DashboardNav>
            </div>
            <DashboardPage className='bg-primary' setDark={setDark} dark={dark}></DashboardPage>
        </div>
    );
};

export default Dashboard;