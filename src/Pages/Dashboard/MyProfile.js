import { UserIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import handleError from '../../Hooks/useError'
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data, isLoading } = useQuery('userData', async () => {
        try {
            return await axiosPrivate.get(`https://nasah-bicycle.herokuapp.com/user/${user.email}`)
        }
        catch (error) {
            handleError(error);
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto'>
            <div className='max-w-lg'>
                <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>My Profile</h3>
                <div className='shadow-xl rounded-xl p-5'>
                    <div className='grid grid-cols-1 justify-items-center'>
                        <div>
                            {
                                user.photoURL ?
                                    <img src={user.photoURL} alt="user" className='rounded-full w-16 h-16' />
                                    :
                                    <UserIcon className='w-16 h-16 border-2 rounded-full'></UserIcon>
                            }

                        </div>

                        <h4 className='text-2xl md:text-3xl text-purple-800 font-semibold'>{user.displayName}</h4>
                        <h5 className='text-lg text-purple-600 font-semibold'>{user.email}</h5>


                    </div>

                    <div className='mt-8 grid grid-cols-1 gap-2'>
                        <p><span className='font-semibold'>Education: </span>{data?.data.education}</p>
                        <p><span className='font-semibold'>Location: </span>{data?.data.address}</p>
                        <p><span className='font-semibold'>Phone Number: </span>{data?.data.phone}</p>
                        <p><span className='font-semibold'>Linkedin: </span>
                            <a target={'_blank'} rel="noreferrer" href={data?.data.linkedin} className=' text-blue-600'>{data?.data.linkedin}</a>
                        </p>


                    </div>
                    <Link to={'/dashboard/profileUpdate'} className='btn btn-primary btn-sm mt-5'>Update</Link>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;