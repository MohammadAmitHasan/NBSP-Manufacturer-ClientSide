import React from 'react';
import bg from '../../Images/colorful-abstract-textured-background-design.jpg'
import world from '../../Images/Icons/icons8-europe-96.png'
import share from '../../Images/Icons/icons8-revenue-64.png'
import customer from '../../Images/Icons/icons8-people-80.png'
import growth from '../../Images/Icons/icons8-growth-64.png'

const BSummary = () => {
    return (
        <div className='w-full min-h-[80vh] relative mt-20'>
            <div className='h-full w-full top-0 absolute' style={{
                background: `url(${bg})`,
                backgroundSize: 'cover',
                opacity: 0.2,
            }}></div>
            <div className='absolute w-full p-10'>
                <h1 className='text-secondary text-3xl md:text-4xl font-semibold text-center'>Millions Trust Our Products</h1>

                <div className='mt-10 container mx-auto'>
                    <div class="flex justify-center flex-wrap max-w-5xl mx-auto">

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-300 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={world} alt="World wide production " />
                            </div>
                            <div class="stat-title">Production Countries</div>
                            <div class="stat-value text-blue-700">65</div>
                            <div class="stat-desc">13% more than last year</div>
                        </div>

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-300 my-5 mx-3 w-72'>
                            <div class="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-10 h-10 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div class="stat-title">Total Feedbacks</div>
                            <div class="stat-value text-primary">22.6K</div>
                            <div class="stat-desc">21% more than last year</div>
                        </div>



                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-300 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={share} alt="Market share" />
                            </div>
                            <div class="stat-title">Market Share</div>
                            <div class="stat-value text-sky-600">34%</div>
                            <div class="stat-desc">11% more than last year</div>
                        </div>

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-300 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={customer} alt="Market share" />
                            </div>
                            <div class="stat-title">Customer</div>
                            <div class="stat-value text-secondary">43.3K+</div>
                            <div class="stat-desc">16% more than last year</div>
                        </div>

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-300 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={growth} alt="Market share" />
                            </div>
                            <div class="stat-title">Company Growth</div>
                            <div class="stat-value text-neutral">16%</div>
                            <div class="stat-desc">1% more than last year</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSummary;