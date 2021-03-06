import React from 'react';
import bg from '../../Images/colorful-abstract-textured-background-design.jpg'
import world from '../../Images/Icons/icons8-europe-96.png'
import share from '../../Images/Icons/icons8-revenue-64.png'
import customer from '../../Images/Icons/icons8-people-80.png'
import growth from '../../Images/Icons/icons8-growth-64.png'
import { HashLink } from 'react-router-hash-link';

const BSummary = () => {

    return (
        <div className='w-full min-h-[80vh] relative mt-20'>
            <div className='h-full w-full top-0 absolute' style={{
                background: `url(${bg})`,
                backgroundSize: 'cover',
                opacity: 0.2,
            }}></div>

            <div className='w-full p-10'>
                <h1 className='text-secondary text-3xl md:text-4xl font-semibold text-center'>Millions Trust Our Products</h1>

                <div className='mt-10 mb-28 container mx-auto'>
                    <div className="flex justify-center flex-wrap max-w-5xl mx-auto">

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-200 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={world} alt="World wide production " />
                            </div>
                            <div className="stat-title font-semibold">Production Countries</div>
                            <div className="stat-value text-blue-700">65</div>
                            <div className="stat-desc">13% more than last year</div>
                        </div>

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-200 my-5 mx-3 w-72'>
                            <div className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title font-semibold">Total Feedbacks</div>
                            <div className="stat-value text-primary">22.6K</div>
                            <div className="stat-desc">21% more than last year</div>
                        </div>



                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-200 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={share} alt="Market share" />
                            </div>
                            <div className="stat-title font-semibold">Market Share</div>
                            <div className="stat-value text-sky-600">34%</div>
                            <div className="stat-desc">11% more than last year</div>
                        </div>

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-200 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={customer} alt="Market share" />
                            </div>
                            <div className="stat-title font-semibold">Customer</div>
                            <div className="stat-value text-secondary">43.3K+</div>
                            <div className="stat-desc">16% more than last year</div>
                        </div>

                        <div className='text-center p-5 rounded-full bg-white border-2 shadow-xl hover:scale-110 ease-linear duration-200 my-5 mx-3 w-72'>
                            <div>
                                <img className='w-10 h-10 mx-auto' src={growth} alt="Market share" />
                            </div>
                            <div className="stat-title font-semibold">Company Growth</div>
                            <div className="stat-value text-neutral">16%</div>
                            <div className="stat-desc">1% more than last year</div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='text-center p-5 mt-10 text-xl text-secondary font-semibold absolute w-full bottom-0 '>
                <p>
                    Want to know more.? Just Contact us...
                </p>

                <HashLink to={'/#contact-us'} className='btn btn-primary mt-5'>Contact Us</HashLink>

            </div>
        </div>
    );
};

export default BSummary;