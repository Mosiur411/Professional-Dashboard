import React from 'react';
import { BsCalendar2Plus, BsChatText, BsCardChecklist } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {
    return (
        <div className=' h-16 w-full px-5 flex justify-between items-center bg-white shadow-lg shadow-slate-300 rounded-lg'>
            <div className=' flex gap-5'>
                <BsCalendar2Plus className=' text-lg text-gray-600 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
                <BsChatText className=' text-lg text-gray-600 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
                <MdOutlineMail className=' text-xl text-gray-600 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
                <BsCardChecklist className=' text-xl text-gray-600 cursor-pointer hover:text-[#7366ff] hover:scale-105 transition-all duration-150 ease-in-out' />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Navbar;