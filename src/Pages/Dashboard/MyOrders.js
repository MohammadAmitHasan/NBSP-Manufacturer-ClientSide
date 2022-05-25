import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: orders, isLoading } = useQuery('myOrder', async () => {
        try {
            return await axiosPrivate.get(`http://localhost:5000/myOrders?client=${user.email}`)
        }
        catch (error) {
            console.log(error.message);
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login')
                toast('Please, Login again')
            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>My Orders</h3>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

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
                                        {(!order.paid) && <Link className='btn btn-xs btn-secondary text-white' to={`/dashboard/payment/${order._id}`}>Pay Now</Link>}
                                    </td>
                                    <td>{order?.status}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;