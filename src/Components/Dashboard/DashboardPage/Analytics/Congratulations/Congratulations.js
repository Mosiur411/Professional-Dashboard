import React from 'react';
import flower from '../../../../../assect/image/flower1.png'
import flower2 from '../../../../../assect/image/flower2.png'
import gift from '../../../../../assect/image/gift1.png'
const Congratulations = () => {
    return (
        <div className='flex items-center justify-center relative lg:w-1/2 w-full bg-primary rounded-lg h-60 shadow-[0_0_16px_0_rgba(0,0,0,0.2)] p-5 overflow-hidden'>
            <div className=' relative'>
                <img className=' w-24 mx-auto -my-2' src={gift} alt="gift" />
                <h1 className='text-2xl text-base-100 text-center -mt-2'>Congratulations Joy</h1>
                <p className=' mt-1 text-gray-500'>You have done 57.6% more Users today.</p>
            </div>
            <img className=' opacity-60 w-60 absolute top-0 left-0' src={flower} alt="flower" />
            <img className=' -rotate-45 opacity-60 w-60 absolute top-0 -right-4' src={flower2} alt="flower" />
        </div>
    );
};

export default Congratulations;