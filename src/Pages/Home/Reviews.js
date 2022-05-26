import React from 'react';
import { useQuery } from 'react-query';
import LineStyle from '../Shared/LineStyle';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('https://nasah-bicycle.herokuapp.com/reviews')
            .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-20 container mx-auto min-h-[50vh] p-5'>
            <h1 className='text-primary text-3xl md:text-4xl font-semibold text-center'>Client Reviews</h1>
            <LineStyle></LineStyle>
            <div className='mt-5 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;