import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import handleError from '../../Hooks/useError'
import Loading from '../Shared/Loading';

const ProfileUpdate = () => {
    const navigate = useNavigate();
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const userData = {
            education: e.target.education.value || education,
            phone: e.target.phone.value || phone,
            linkedin: e.target.linkedin.value || linkedin,
            address: e.target.address.value || address,
        }
        try {
            await axiosPrivate.put(`http://localhost:5000/user/${user.email}`, userData)
                .then(data => {
                    if (data?.data?.result?.modifiedCount > 0) {
                        toast.success('Profile update successful')
                        e.target.reset();
                        navigate('/dashboard')
                    }
                })
        }
        catch (error) {
            handleError(error);
        }

    }
    return (
        <div className='container mx-auto'>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>Update Profile</h3>
            <div>
                <form onSubmit={handleUpdate} className='max-w-xs grid grid-cols-1 gap-3 p-5 shadow-xl rounded-xl'>
                    <input name='education' type="text" placeholder="Education" class="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered w-full " />
                    <input name='linkedin' type="text" placeholder="Linkedin" class="input input-bordered w-full " />
                    <textarea name='address' type="text" placeholder="Location" class="textarea textarea-bordered w-full " />
                    <input type="submit" className='btn btn-md' />
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;