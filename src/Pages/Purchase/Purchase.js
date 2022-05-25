import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import useError from '../../Hooks/useError';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: part, isLoading } = useQuery(['part', id], () =>
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
    )

    const handleError = useError();

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const booking = {
            email: user.email,
            name: user.displayName,
            phone: data.phone,
            address: data.address,
            quantity: data.quantity,
            productName: part.name,
            productId: part._id,
        }

        axiosPrivate.post('http://localhost:5000/booking', booking)
            .then(res => {
                if (res.data?.result?.insertedId) {
                    toast.success('Product Booking Successful');
                    navigate('/dashboard/myOrders')
                }
            })
            .catch(error => {
                handleError(error);
            })

        reset();
    }


    return (
        <div className='container mx-auto mt-14 p-5'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                {/* display data */}
                <div className='flex justify-center md:justify-end'>
                    <div className='rounded-xl shadow-xl relative border-2 border-gray-200 max-w-sm'>
                        <div className='p-3'>
                            <div className='overflow-hidden bg-gray-100 rounded-lg'>
                                <img className='hover:scale-110 ease-linear duration-300' src={part.img} alt="part" />
                            </div>
                            <div>
                                <h3 className='text-xl mb-2 font-semibold text-secondary mt-3'>{part.name}</h3>
                                <p><span className='font-semibold'>Description:</span> {part.description}</p>
                                <p className='mt-1'><span className='font-semibold'>Available Stock:</span> {part.availableQuantity} Pieces</p>
                                <p className='mt-1'><span className='font-semibold'>Minimum Order Quantity:</span> {part.minimumOrder} Pieces</p>
                                <p className='mt-1 text-lg font-semibold'>Price Per Unit: <span className='text-orange-600'>{part.price} tk</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Purchase Form */}
                <div className='flex justify-center md:justify-start items-center'>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                            <input type="text" disabled value={user?.displayName} className="input" />
                            <input type="email" disabled value={user?.email} className="input" />

                            <div>
                                <label className="label">
                                    <span className="label-text">Order Quantity</span>
                                </label>
                                <input type="number" autoComplete='off' placeholder="Order Quantity" defaultValue={part.minimumOrder} className="input input-bordered w-full"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Order Quantity Required'
                                        },
                                        max: {
                                            value: part.availableQuantity,
                                            message: `You can order maximum ${part.availableQuantity} pieces`,
                                        },
                                        min: {
                                            value: part.minimumOrder,
                                            message: `You have to order minimum ${part.minimumOrder} pieces`
                                        }
                                    })}
                                />
                                {errors.quantity?.type === 'required' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.quantity.message}
                                    </p>}
                                {errors.quantity?.type === 'max' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.quantity.message}
                                    </p>}
                                {errors.quantity?.type === 'min' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.quantity.message}
                                    </p>}
                            </div>

                            <div>
                                <input type="text" autoComplete='off' placeholder="Your Phone Number" className="input input-bordered w-full"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone number required'
                                        }
                                    })}
                                />
                                {errors.phone?.type === 'required' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.phone.message}
                                    </p>}
                            </div>
                            <div>
                                <textarea placeholder='Write your address please' className="textarea textarea-bordered w-full max-w-xs" cols="30" rows="5"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Please Provide Your Address'
                                        }
                                    })} />
                                {errors.address?.type === 'required' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.address.message}
                                    </p>}
                            </div>
                            <input className='btn w-full rounded-full bg-neutral' type="submit" value='Place Order' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;