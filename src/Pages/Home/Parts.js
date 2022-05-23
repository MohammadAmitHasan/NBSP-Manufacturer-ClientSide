import React from 'react';
import useParts from '../../Hooks/useParts';
import Part from '../Shared/Part';

const Parts = () => {
    const partsData = useParts(6);

    return (
        <div className='my-20 container mx-auto'>
            <h2 className='text-3xl md:text-4xl text-center font-semibold text-primary'>Bicycle Parts</h2>
            <div className='mx-auto h-0.5 bg-gray-600 w-52 mt-2'></div>
            <div className='mx-auto h-0.5 bg-gray-600 w-44 mt-0.5'></div>
            <div className='mx-auto h-0.5 bg-gray-600 w-36 mt-0.5'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5'>
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