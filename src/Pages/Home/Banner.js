import React from 'react';
import bg from '../../Images/BicycleParts.jpg'
import banner from '../../Images/Parts.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div className='w-full h-full' style={{
                background: `url(${bg})`,
                backgroundSize: 'cover',
                opacity: 0.08,
            }}>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 text-gray-700 p-5  lg:-mt-20">
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={banner} alt='Cycle parts' className='w-full rounded-2xl' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-center'>
                        <h1 class="text-4xl md:text-5xl font-bold text-primary">NASAH Bicycle Spare Parts</h1>
                        <h3 className='text-2xl md:text-3xl font-semibold my-4'><span className='text-secondary'>INCREDIBLE</span> Products</h3>
                        <h3 className='text-2xl md:text-3xl font-semibold'><span className='text-secondary'>UNBEATABLE</span> Price</h3>
                        <div className='w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary my-5'> </div>
                        <p className='text-xl my-4'>No Sacrifices in quality, Simply the best pricing</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;