import React from 'react';
import useParts from '../../Hooks/useParts';
import Part from './Part';

const Parts = () => {
    const partsData = useParts(6);

    return (
        <div className='my-20'>
            <h2 className='text-3xl md:text-4xl text-center container mx-auto font-semibold text-primary'>Bicycle Parts</h2>
            <div className='mx-auto h-0.5 bg-gray-600 w-52 mt-2'></div>
            <div className='mx-auto h-0.5 bg-gray-600 w-48 mt-0.5'></div>
            <div className='mx-auto h-0.5 bg-gray-600 w-44 mt-0.5'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    partsData.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;