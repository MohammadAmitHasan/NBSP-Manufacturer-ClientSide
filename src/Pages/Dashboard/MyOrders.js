import React from 'react';
import { Link } from 'react-router-dom';
import useMyOrder from '../../Hooks/useMyOrder';
import Loading from '../Shared/Loading';

const MyOrders = ({ setCancelOrder }) => {
    const { orders, isLoading } = useMyOrder();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>My Orders</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.data.map((order, index) => <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                        {
                                            (!order.paid) &&
                                            <>
                                                <Link className='btn btn-xs btn-secondary text-white' to={`/dashboard/payment/${order._id}`}>Pay Now</Link>
                                                <label onClick={() => setCancelOrder(order._id)} for="delete-confirmation" className="btn btn-xs btn-error ml-2">Cancel Order</label>
                                            </>
                                        }

                                        {(order.paid) && <div className='font-semibold'>
                                            <p><span className='text-green-600'>Paid</span></p>
                                            <p>Transaction id: <span className='text-orange-500'>{order.transactionId}</span></p>
                                        </div>}
                                    </td>
                                    <td><p className='text-blue-700 font-bold'>{order?.status}</p></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
};

export default MyOrders;