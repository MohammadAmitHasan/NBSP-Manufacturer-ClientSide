import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import useError from '../../Hooks/useError';
import Loading from '../Shared/Loading';


const MakeAdmin = () => {
    const handleError = useError();
    const { data, isLoading, refetch } = useQuery('allUser', async () => {
        try {
            return await axiosPrivate.get(`https://nasah-bicycle.herokuapp.com/allUsers`)
        }
        catch (error) {
            handleError(error);
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = async (email) => {
        try {
            await axiosPrivate.put(`https://nasah-bicycle.herokuapp.com/user/admin/${email}`)
                .then(data => {
                    if (data?.data?.modifiedCount > 0) {
                        toast.success('Successfully made an admin')
                        refetch();
                    }
                })
        }
        catch (error) {
            handleError(error);
        }

    }

    return (
        <div>
            <h2 className='my-2 font-semibold'>No Of Users: {data?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.email}</td>
                                <td>{a.role !== 'admin' && <button onClick={() => makeAdmin(a.email)} className="btn btn-xs">Make Admin</button>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;