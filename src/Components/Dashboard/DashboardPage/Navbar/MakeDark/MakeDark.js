import React from 'react';
import { ImSun } from "react-icons/im";
import { RiMoonLine } from "react-icons/ri";
const MakeDark = ({ dark, setDark }) => {
    return (
        <label onChange={() => { setDark(!dark) }} className="swap swap-rotate ">
            <input type="checkbox" />
            <ImSun className='swap-off text-[21px] text-gray-600' />
            <RiMoonLine className='swap-on text-[21px] text-gray-200' />
        </label>
    );
};
export default MakeDark;