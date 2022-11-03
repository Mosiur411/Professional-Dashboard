import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { ImSearch } from "react-icons/im";
const Search = () => {
    const [search, setSearch] = useState(false)
    return (
        <div>
            <div className={` absolute top-0 left-0 h-full w-full z-30 rounded-lg ${search ? 'block' : 'hidden'}`}>
                <div className=' w-full h-full relative'>
                    <div className='w-full h-full flex items-center'>
                        <div>
                            <ImSearch onClick={() => setSearch(false)} className=' cursor-pointer text-base-100 text-xl absolute left-5 top-6' />
                        </div>
                        <input type="text" className=' bg-primary h-full w-full rounded-lg px-5 pl-14 text-base-100 ' placeholder='Search anythink about the page' />
                        <MdClose onClick={() => setSearch(false)} className=' cursor-pointer text-base-100 text-3xl absolute right-5 top-5' />
                    </div>
                </div>
            </div>
            <ImSearch onClick={() => setSearch(true)} className='text-base-100 text-lg cursor-pointer' />
        </div>
    );
};

export default Search;