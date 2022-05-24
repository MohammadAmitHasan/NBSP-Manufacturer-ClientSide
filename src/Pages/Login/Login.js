import React, { useEffect, useState } from 'react';
import { useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading';
import googleLogo from '../../Images/Icons/google-logo.png'
import gitLogo from '../../Images/Icons/github--v1.png'
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [isRegistration, setIsRegistration] = useState(false);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        createUserWithEmailAndPassword,
        rUser,
        rLoading,
        rError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        if (isRegistration) {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name });
        }
        else {
            await signInWithEmailAndPassword(data.email, data.password)
        }
    }

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const [token] = useToken(user || rUser || gUser || gitUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let loginError;
    if (error || gError || updateError || rError || gitError) {
        loginError = <p className='bg-red-500 text-white text-center py-3 px-2 rounded-lg'>
            {error?.message}{gError?.message}{gitError?.message}{updateError?.message}
        </p>
    }

    if (loading || gLoading || updating || rLoading || gitLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 shadow-2xl border-2">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center text-primary">
                        {
                            isRegistration ? 'Sign Up' : 'Login'
                        }
                    </h2>


                    <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">

                            {
                                isRegistration && <>
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'User Name required'
                                            }
                                        })}
                                    />
                                    {errors.email?.type === 'required' &&
                                        <p className='text-red-500 mt-1 rounded-lg'>
                                            {errors.email.message}
                                        </p>}
                                </>
                            }

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
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


                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 character or longer'
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' &&
                                <p className='text-red-500 mt-1 rounded-lg'>
                                    {errors.password.message}
                                </p>}
                            {errors.password?.type === 'minLength' &&
                                <p className='text-red-500 mt-1 rounded-lg'>
                                    {errors.password.message}
                                </p>}
                        </div>

                        {loginError}
                        <input className='btn w-full rounded-full bg-neutral' type="submit" value={`${isRegistration ? 'Sign Up' : 'Login'}`} />

                        <p className='text-center'>
                            {
                                isRegistration ?
                                    <>Already Have an Account.?<span onClick={() => setIsRegistration(false)} className='text-secondary font-semibold cursor-pointer'> Login</span> </>
                                    :
                                    <>New to NBSP.?<span onClick={() => setIsRegistration(true)} className='text-secondary font-semibold cursor-pointer'> Create new Account</span> </>
                            }
                        </p>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full rounded-full">
                        <span className='mr-1 -mt-0.5'><img alt='google logo' src={googleLogo} /></span>
                        Continue With Google
                    </button>
                    <button onClick={() => signInWithGithub()} className="btn btn-outline w-full rounded-full">
                        <span className='mr-1 -mt-0.5'>
                            <img alt='github logo' src={gitLogo} />
                        </span>
                        Continue With Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;