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
            <input type="checkbox" id="delete-confirmation-admin" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl text-red-600">Are you sure to cancel the order.?</h3>
                    <p class="py-4">Once you cancel the order, it can't be undone.</p>
                    <div class="modal-action">
                        <label onClick={handleCancel} for="delete-confirmation-admin" class="btn btn-error">Yes, Cancel</label>
                        <label for="delete-confirmation-admin" class="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModalAdmin;