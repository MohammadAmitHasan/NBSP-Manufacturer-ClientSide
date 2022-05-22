import React from 'react';
import parts from '../../Images/Parts2.png'

const Welcome = () => {
    return (
        <div className='bg-slate-900 container mx-auto p-10 text-white'>
            <h1 className='text-3xl md:text-4xl font-semibold'>Welcome In <span className='text-primary'>NBSP</span></h1>
            <div className='h-0.5 mt-3 w-60 bg-gray-200'></div>
            <div className='h-0.5 my-1 w-52 bg-gray-200'></div>
            <div className='h-0.5 w-44 bg-gray-200'></div>
            <p className='my-5 text-lg'>Bicycle Spare Parts & Accessories Manufacturer</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='lg:col-span-2'>
                    <h3 className='text-3xl text-secondary'>WE AIM TO PROVIDE YOU THE BEST QUALITY PRODUCTS</h3>
                    <p className='mt-3 leading-7 text-gray-200 text-justify'>
                        At NBSP, we are the leading Bicycle Parts manufacturers and traders of quality bicycles Since - 1994. Exports bicycle parts, motorcycle parts and other items worldwide. We take pride in our excellence in service and manufacturing, guaranteeing you complete satisfaction while building strong and long lasting relationships with you as a valuable consumer. Sovereign specialized in manufacturing, supplying and exporting Bicycle parts, Accessories. Worldwide presence in Brazil, Mexico, Argentina and in Italy, Poland Countries like India, Bangladesh and Sri Lanka. .
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='rounded-xl w-full' src={parts} alt="bicycle parts" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;