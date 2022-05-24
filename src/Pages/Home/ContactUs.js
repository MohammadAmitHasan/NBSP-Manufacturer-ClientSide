import React from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../Images/contactUs.jpg'

const ContactUs = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <div className='container mx-auto mt-14 p-5' id='contact-us'>
            <div className='text-3xl md:text-4xl font-semibold text-center'>
                <h2 className='text-primary mb-2'>Make Relationships</h2>
                <h2 className='text-neutral'>With Us</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
                <div className='flex justify-center items-center md:justify-end'>
                    <div>
                        <img src={contact} alt="Contact Us" />
                    </div>
                </div>

                <div className='flex justify-center lg:justify-start items-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-3 mt-5 form-control w-full max-w-xs">

                            <div>
                                <input type="text" autoComplete='off' placeholder="Your name" className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name required'
                                        }
                                    })}
                                />
                                {errors.name?.type === 'required' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.name.message}
                                    </p>}
                            </div>


                            <div>
                                <input type="email" autoComplete='off' placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Provide a valid email'
                                        },
                                        required: {
                                            value: true,
                                            message: 'Email required'
                                        }
                                    })}
                                />
                                {errors.email?.type === 'required' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.email.message}
                                    </p>}
                                {errors.email?.type === 'pattern' &&
                                    <p className='text-red-500 mt-1 rounded-lg'>
                                        {errors.email.message}
                                    </p>}
                            </div>
                            <textarea name="" placeholder='Write your comment please' className="textarea textarea-bordered w-full max-w-xs" cols="30" rows="5"></textarea>

                            <input className='btn w-full rounded-full bg-neutral' type="submit" value='Send to Us' />
                        </div>


                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;