import React from 'react';
import { useState } from 'react';
import { ImSun } from "react-icons/im";
import { RiMoonLine } from "react-icons/ri";
const MakeDark = ({ dark, setDark }) => {

    const [sun, setSun] = useState(false)
    return (

        <div className=' mt-1'>
            {
                sun ? <label onChange={() => { setDark(!dark); setSun(!sun) }} className="swap swap-rotate ">
                    <input type="checkbox" />
                    <ImSun className='swap-off text-[21px] text-gray-600' />
                    <RiMoonLine className='swap-on text-[21px] text-gray-200' />
                </label> :
                    <label onChange={() => { setDark(!dark); setSun(!sun) }} className="swap swap-rotate ">
                        <input type="checkbox" />
                        <ImSun className='swap-off text-[21px] text-gray-600' />
                        <RiMoonLine className='swap-on text-[21px] text-gray-200' />
                    </label>
            }
        </div>
    )
};
export default MakeDark;