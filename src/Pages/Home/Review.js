import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({ review }) => {
    const { name, ratting, comment } = review;
    return (
        <div className='p-3 rounded-lg shadow-xl border-2'>
            <h3 className='text-secondary text-xl my-2 font-semibold'>{name}</h3>
            <p className='leading-7 text-gray-700 mb-2'>{comment}</p>
            <div>
                Ratting: {
                    [...Array(ratting)].map((e, index) =>
                        <span key={index}>
                            <StarIcon className='w-5 h-5 inline text-orange-500'></StarIcon>
                        </span>
                    )
                }
            </div>
        </div >
    );
};

export default Review;