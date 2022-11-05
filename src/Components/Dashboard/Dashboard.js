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

    const [close, setClose] = useState(JSON.parse(localStorage.getItem('close')));


    useEffect(() => {
        localStorage.setItem('close', JSON.stringify(close));
        setClose(close);
    }, [close]);

    console.log(close);

    return (
        <div data-theme={`${dark ? 'myDark' : 'myLight'}`} className=' flex '>
            <div className=' h-screen  fixed top-0 left-0 z-[9999]'>
                <DashboardNav setClose={setClose} close={close}></DashboardNav>
            </div>
            <div className={`b w-full transition-all duration-500 ease-in-out bg-secondary  ${close ? 'pl-20' : 'pl-64 duration-200'}`}>
                <div className=' w-full pr-20'>
                    <DashboardPage setDark={setDark} dark={dark}></DashboardPage>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;