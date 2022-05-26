import React from 'react';
import axiosPrivate from '../../API/axiosPrivate';
import useAllOrders from '../../Hooks/useAllOrders';
import Loading from '../Shared/Loading';

const ManageAllOrders = ({ setCancelOrder }) => {
    const { orders, isLoading } = useAllOrders();
    if (isLoading) {
        <Loading></Loading>
    }

    const handleShip = (id) => {
        axiosPrivate.put(`http://localhost:5000/shipped/${id}`)

    }

    return (
        <div>
            <div>
                <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>My Orders</h3>
                <div>
                    <div class="overflow-x-auto">
                        <table class="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Client</th>
                                    <th>Product</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Total Price</th>
                                    <th>Quantity</th>
                                    <th className='text-center'>Action</th>
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
                                                // <label onClick={() => setCancelOrder(order._id)} for="delete-confirmation" class="btn btn-xs btn-error ml-2">Cancel Order</label>
                                            }

                                            {(order.paid) && <div className='font-semibold'>
                                                <p><span className='text-green-600'>Paid</span></p>
                                                <p>Transaction id</p>
                                                <p className='text-orange-500'>{order.transactionId}</p>
                                            </div>}
                                        </td>
                                        <td><p className='text-blue-700 font-bold'>{order?.status}</p></td>
                                        <td className='text-center'>
                                            {(order.paid)
                                                ?
                                                <button onClick={() => handleShip(order._id)} className='btn btn-xs'>Ship Order</button>
                                                :
                                                <label onClick={() => setCancelOrder(order._id)} for="delete-confirmation-admin" class="btn btn-xs btn-error ml-2">Cancel Order</label>
                                            }
                                        </td>
                                        <td>{order.totalPrice}</td>
                                        <td>{order.quantity}</td>
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