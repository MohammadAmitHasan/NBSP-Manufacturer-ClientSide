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
            return await axiosPrivate.get(`http://localhost:5000/user/${user.email}`)
        }
        catch (error) {
            handleError(error);
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const { education, address, phone, linkedin } = data.data;

    return (
        <div className='container mx-auto'>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>My Profile</h3>
            <div className='shadow-xl rounded-xl p-5'>
                <div className='flex items-center'>
                    <div>
                        {
                            user.photoURL ?
                                <img src={user.photoURL} alt="user" className='rounded-full w-16 h-16' />
                                :
                                <UserIcon className='w-16 h-16 border-2 rounded-full'></UserIcon>
                        }

                    </div>
                    <div className='ml-3'>
                        <h4 className='text-2xl md:text-3xl text-purple-800 font-semibold mb-2'>Name: {user.displayName}</h4>
                        <h5 className='text-xl text-secondary font-semibold'>Email: {user.email}</h5>
                    </div>

                </div>

                <div className='mt-5'>
                    <p className='text-lg mb-2'><span className='font-semibold'>Education: </span>{education}</p>
                    <p className='text-lg mb-2'><span className='font-semibold'>Location: </span>{address}</p>
                    <p className='text-lg mb-2'><span className='font-semibold'>Phone Number: </span>{phone}</p>
                    <a target={'_blank'} href='linkedin' className='text-lg mb-2 text-blue-600'><span className='font-semibold text-black'>Linkedin: </span>{linkedin}</a>
                </div>
                <Link to={'/dashboard/profileUpdate'} className='btn btn-primary btn-sm mt-5'>Update</Link>
            </div>

        </div>
    );
};

export default MyProfile;