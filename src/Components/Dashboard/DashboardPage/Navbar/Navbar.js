import React from 'react';
import { BsCalendar2Plus, BsChatText, BsCardChecklist } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Avatar from './Avatar/Avatar';
import MakeDark from './MakeDark/MakeDark';
import Notification from './Notification/Notification';
import Search from './Search/Search';

const Navbar = ({ dark, setDark }) => {
    return (
        <div className=' relative h-16 w-full px-5 flex justify-between items-center bg-primary shadow-[0_0_24px_0_rgba(0,0,0,0.2)] rounded-lg'>
            <div className=' flex gap-5'>
                <BsCalendar2Plus className=' text-lg text-base-100 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
                <BsChatText className=' text-lg text-base-100 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
                <MdOutlineMail className=' text-xl text-base-100 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
                <BsCardChecklist className=' text-xl text-base-100 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
            </div>
            <div className=' flex items-center gap-5'>
                <Search></Search>
                <Notification></Notification>
                <MakeDark dark={dark} setDark={setDark}></MakeDark>
                <Avatar></Avatar>
            </div>
        </div>
    );
};

export default Navbar;