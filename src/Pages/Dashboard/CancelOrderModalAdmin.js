import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import useAllOrders from '../../Hooks/useAllOrders';

const CancelOrderModalAdmin = ({ cancelOrder, setCancelOrder }) => {
    const [user] = useAuthState(auth);
    const { refetch } = useAllOrders();
    const handleCancel = async () => {
        console.log(cancelOrder)
        await axiosPrivate.delete(`https://nasah-bicycle.herokuapp.com/booking/${cancelOrder}?client=${user.email}`)
            .then(data => {
                console.log(data.data)
                if (data?.data?.deletedCount > 0) {
                    refetch();
                    toast.success('Order canceled successfully')
                }
            })
    }

    return (
        <div>
            {/* Modal */}
            <input type="checkbox" id="delete-confirmation-admin" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-red-600">Are you sure to cancel the order.?</h3>
                    <p className="py-4">Once you cancel the order, it can't be undone.</p>
                    <div className="modal-action">
                        <label onClick={handleCancel} for="delete-confirmation-admin" className="btn btn-error">Yes, Cancel</label>
                        <label for="delete-confirmation-admin" className="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModalAdmin;