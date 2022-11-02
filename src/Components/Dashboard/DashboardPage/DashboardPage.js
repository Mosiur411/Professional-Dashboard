import React from 'react';
import Navbar from './Navbar/Navbar';

const DashboardPage = ({ dark, setDark }) => {
    return (
        <div className=' mx-10 w-full mt-6'>
            <Navbar dark={dark} setDark={setDark}></Navbar>
            <h1 >Page </h1>
        </div>
    );
};

export default DashboardPage;