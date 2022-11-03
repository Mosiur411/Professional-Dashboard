import React from 'react';
import { MdOutlineNotificationsNone } from "react-icons/md";

const Notification = () => {
    return (
        <div className=' relative text-base-100'>
            <MdOutlineNotificationsNone className=' text-[22px]' />
            <div className=' absolute -top-3 -right-3 flex items-center text-white font-semibold justify-center h-5 w-5 rounded-full bg-red-500 text-xs'>
                <p className='mt-[-1px]'>4</p>
            </div>
        </div>
    );
};

export default Notification;