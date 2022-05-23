import React from 'react';

const Part = ({ part }) => {
    const { availableQuantity, description, img, minimumOrder, name, price, _id } = part;
    return (
        <div className='rounded-xl shadow-xl relative border-2 border-gray-200'>
            <div className='p-3 mb-[75px]'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-110 ease-linear duration-300' src={img} alt="part" />
                </div>
                <div>
                    <h3 className='text-xl mb-2 font-semibold text-secondary'>{name}</h3>
                    <p><span className='font-semibold'>Description:</span> {description}</p>
                    <p className='mt-1'><span className='font-semibold'>Available Stock:</span> {availableQuantity} Pieces</p>
                    <p className='mt-1'><span className='font-semibold'>Minimum Order Quantity:</span> {minimumOrder} Pieces</p>
                    <p className='mt-1 text-lg font-semibold'>Price Per Unit: <span className='text-orange-600'>{price} tk</span></p>
                </div>
            </div>
            <div className='absolute bottom-0 w-full text-center pb-5'>
                <button className='btn w-3/4 rounded-full'>Order Now</button>
            </div>
        </div>
    );
};

export default Part;