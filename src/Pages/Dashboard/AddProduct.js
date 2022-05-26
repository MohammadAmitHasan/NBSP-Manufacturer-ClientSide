import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import useError from '../../Hooks/useError';

const AddProduct = () => {
    const handleError = useError();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axiosPrivate.post(`https://nasah-bicycle.herokuapp.com/parts`, {
                name: e.target.name.value,
                price: e.target.price.value,
                minimumOrder: e.target.minimumOrder.value,
                availableQuantity: e.target.availableQuantity.value,
                description: e.target.description.value,
                img: e.target.img.value,
            })
                .then(data => {
                    if (data.data.insertedId) {
                        toast.success('Product Added successfully')
                        e.target.reset();
                    }
                })
        }
        catch (error) {
            handleError(error);
        }
    }
    return (
        <div className='container mx-auto p-3'>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>Add a New Product</h3>
            <div>
                <form onSubmit={handleUpdate} className='max-w-xs grid grid-cols-1 gap-3 p-5 shadow-xl rounded-xl'>
                    <input required name='name' type="text" placeholder="Product Name" className="input input-bordered w-full " />
                    <input required name='price' type="number" placeholder="Per Unit Price" className="input input-bordered w-full " />
                    <input required name='minimumOrder' type="number" placeholder="MinimumOrder Quantity" className="input input-bordered w-full " />
                    <input required name='availableQuantity' type="number" placeholder="Available Quantity" className="input input-bordered w-full " />
                    <textarea required name='description' type="text" placeholder="Product Description" className="textarea textarea-bordered w-full " />
                    <input required name='img' type="text" placeholder="Img URL" className="input input-bordered w-full " />
                    <input type="submit" className='btn btn-md' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;