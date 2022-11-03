import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { BsSuitHeart } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";


const Linechart = () => {


    const data2 = [
        { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
        { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
        { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
        { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
        { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
        { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
        { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
        { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
        { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 },
    ];

    return (
        <div className=' h-80 lg:w-[37%]  w-full lg:mb-0 mb-7  rounded-lg lg:flex items-center p-5 bg-primary shadow-[0_0_16px_0_rgba(0,0,0,0.2)]'>
            <div className="w-full h-full text-center text-base-100">

                <div className=" text-center">
                    <div className=" bg-red-200 w-10 h-10 rounded-full mx-auto flex items-center justify-center">
                        <BsSuitHeart className=' text-lg text-red-800' />
                    </div>
                    <div className="text-4xl my-2 font-semibold">
                        4517.82
                    </div>
                    <div className=" text-sm mb-3">
                        Active Social Profiles
                    </div>
                    <div className=" text-base-100 flex items-center justify-center mb-3">
                        Down by
                        <span className=" text-red-700 flex items-center mx-1.5">
                            <MdArrowDropDown />
                            <span className="pl-1">54.1% </span>
                        </span>
                        from 30 days ago
                    </div>
                </div>
                <div className=" w-full ">
                    <ResponsiveContainer height={100} >
                        <LineChart data={data2}
                            margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                            <Line type="monotone" dataKey="pv" stroke="#d6b5ff" strokeWidth={2} />
                            <Line type="monotone" dataKey="uv" stroke="#a75fff" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Linechart;