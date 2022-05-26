import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import axiosPrivate from '../../API/axiosPrivate';

const CheckoutForm = ({ booking }) => {
    const { _id, totalPrice, name, email, phone } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    // Stripe backend response
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosPrivate.post('https://nasah-bicycle.herokuapp.com/create-payment-intent', { totalPrice })
            .then((data) => {
                if (data?.data?.clientSecret) {
                    setClientSecret(data.data.clientSecret)
                }
            });
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        error ? setCardError(error?.message) : setCardError('')
        setSuccess('');
        // Payment Confirmation
        const { paymentIntent, error: indentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name,
                        email,
                        phone
                    },
                },
            },
        );

        if (indentError) {
            setCardError(indentError?.message)
        }
        else {
            setSuccess('The payment done successfully')
            setTransactionId(paymentIntent.id)
            setCardError('');
            //store payment on database
            const payment = {
                email,
                bookingId: _id,
                transactionId: paymentIntent.id,
                totalPrice
            }
            axiosPrivate.patch(`https://nasah-bicycle.herokuapp.com/booking/${_id}`, payment)
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-sm btn-success mt-5' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError &&
                <p className='p-2 rounded-lg mx-auto text-red-600'>{cardError}</p>}
            {success && <div className='p-2 rounded-lg mx-auto text-green-600 text-lg'>
                <p>{success}</p>
                <p>Your Transaction id: <span className='text-orange-600 font-semibold'>{transactionId}</span></p>
            </div>}
        </>
    );
};

export default CheckoutForm;