import React from 'react';
import error from '../../Images/404.webp'

const PageNotFound = () => {
    return (
        <div className='container mx-auto p-3'>
            <img className='w-100 sm:w-3/4 md:w-1/2 mx-auto' src={error} alt="" />
            <h2 className='text-2xl md:text-4xl text-center text-red-500'>Sorry.! Page Not Found</h2>
        </div>
    );
};

export default PageNotFound;