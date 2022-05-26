import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../Hooks/useParts';
import LineStyle from '../Shared/LineStyle';
import Loading from '../Shared/Loading';
import Part from '../Shared/Part';

const Parts = () => {
    const { parts, isLoading } = useParts(6);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-20 container mx-auto p-3'>
            <h2 className='text-3xl md:text-4xl text-center font-semibold text-primary'>Bicycle Parts</h2>
            <LineStyle></LineStyle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
            <div className='text-right mt-8'>
                <Link className='btn btn-primary' to='/allParts'>Show All
                    <ArrowNarrowRightIcon className='w-5 h-5 ml-1'></ArrowNarrowRightIcon>
                </Link>
            </div>

        </div>
    );
};

export default Parts;