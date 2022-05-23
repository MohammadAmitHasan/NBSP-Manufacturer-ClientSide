import React from 'react';

const Part = ({ part }) => {
    const { availableQuantity, description, img, minimumOrder, name, price, _id } = part;
    return (
        <div className='rounded-xl shadow-xl p-2'>
            <div className='border-2 rounded-xl overflow-hidden'>
                <img className='hover:scale-110 ease-linear duration-300' src={img} alt="part" />
            </div>
            <div className='p-4'>
                <h3 className='text-xl mb-2 font-semibold text-secondary'>{name}</h3>
                <p><span className='font-semibold'>Description:</span> {description}</p>
                <p className='mt-1'><span className='font-semibold'>Available Stock:</span> {availableQuantity} Pieces</p>
                <p className='mt-1'><span className='font-semibold'>Minimum Order Quantity:</span> {minimumOrder} Pieces</p>
                <p className='mt-1 text-lg font-semibold'>Price Per Unit: <span className='text-orange-600'>{price} tk</span></p>
                <button className='btn btn-full rounded-full mt-5'>Order Now</button>
            </div>
        </div>
    );
};

export default Part;