import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import axiosPrivate from '../../API/axiosPrivate';
import useError from '../../Hooks/useError';

const stripePromise = loadStripe('pk_test_51L1ZJ4A4Qye3rHidjC8HhO9zJZ0lGadBMT5OsZPrbrRDJhJWTGXnHMWBciEWCEMRtJ5BIuPJPjISg01nPybANkYE009MLMz9y0');

const Payment = () => {
    const { id } = useParams();

    const handleError = useError();

    const { data: booking, isLoading } = useQuery(['bookingData', id], async () => {
        try {
            return await axiosPrivate.get(`http://localhost:5000/booking/${id}`)
        }
        catch (error) {
            handleError(error)
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl md:text-4xl text-center text-secondary font-semibold my-5'>Payment</h2>

            <div class="card max-w-xl bg-base-100 shadow-xl my-5 mx-auto">
                <div class="card-body">
                    <h3 className='text-2xl text-secondary font-semibold'>Hello, {booking.data.name}</h3>
                    <h2 className='text-3xl'>Please, Pay for The <span className='text-orange-700'>{booking.data.productName} Booking</span></h2>
                    <p className='text-lg'>Quantity: <span className='text-orange-700'>{booking.data.quantity} pieces</span></p>
                    <p>Payment Amount:
                        <span className='text-orange-700'> ${booking.data.totalPrice}</span></p>
                </div>
            </div>
            <div class="card max-w-xl bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking.data} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;