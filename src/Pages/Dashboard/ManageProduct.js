import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import useParts from '../../Hooks/useParts';
import Loading from '../Shared/Loading';

const ManageProduct = ({ setDeleteProduct }) => {

    const { parts, isLoading } = useParts();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>Manage Products</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Available</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parts?.map((part, index) => <tr key={part._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={part.img} className='w-10' alt="Part" /></td>
                                    <td>{part.name}</td>
                                    <td>{part.availableQuantity} Pieces</td>
                                    <td>${part.price}</td>
                                    <td>
                                        <label onClick={() => setDeleteProduct(part._id)} for="part-delete-confirmation">
                                            <TrashIcon className='w-10 h-10 p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-full'></TrashIcon>
                                        </label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;