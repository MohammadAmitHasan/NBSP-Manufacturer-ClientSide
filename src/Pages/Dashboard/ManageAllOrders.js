import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import useAllOrders from '../../Hooks/useAllOrders';
import useError from '../../Hooks/useError';
import Loading from '../Shared/Loading';

const ManageAllOrders = ({ setCancelOrder }) => {
    const { orders, isLoading, refetch } = useAllOrders();
    const handleError = useError();
    if (isLoading) {
        <Loading></Loading>
    }

    const handleShip = async (id) => {
        try {
            await axiosPrivate.patch(`https://nasah-bicycle.herokuapp.com/shipped/${id}`)
                .then(data => {
                    if (data?.data?.modifiedCount > 0) {
                        toast('Status Changed successfully')
                        refetch();
                    }
                })
        }
        catch (error) {
            handleError(error)
        }
    }

    return (
        <div>
            <div>
                <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>My Orders</h3>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Client</th>
                                    <th>Product</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th className='text-center'>Action</th>
                                    <th>Total Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.data.map((order, index) => <tr key={order._id}>
                                        <th>{index + 1}</th>
                                        <td>{order.email}</td>
                                        <td>{order.productName}</td>
                                        <td>
                                            {
                                                (!order.paid) && <p className='text-red-600 font-semibold'>Unpaid</p>
                                                // <label onClick={() => setCancelOrder(order._id)} for="delete-confirmation" className="btn btn-xs btn-error ml-2">Cancel Order</label>
                                            }

                                            {(order.paid) && <div className='font-semibold'>
                                                <p><span className='text-green-600'>Paid</span></p>
                                                <p>Transaction id</p>
                                                <p className='text-orange-500'>{order.transactionId}</p>
                                            </div>}
                                        </td>
                                        <td><p className='text-blue-700 font-bold'>{order?.status}</p></td>
                                        <td className='text-center'>

                                            {(order.paid && order.status !== 'Shipped') &&
                                                <button onClick={() => handleShip(order._id)} className='btn btn-xs'>Ship Order</button>
                                            }

                                            {(!order.paid) &&
                                                <label onClick={() => setCancelOrder(order._id)} for="delete-confirmation-admin" className="btn btn-xs btn-error ml-2">Cancel Order</label>
                                            }
                                        </td>
                                        <td>${order.totalPrice}</td>
                                        <td>{order.quantity} Pieces</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div >
        </div>
    );
};

export default ManageAllOrders;