import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import useError from '../../Hooks/useError';
import useParts from '../../Hooks/useParts';

const DeleteParts = ({ deleteProduct, setDeleteProduct }) => {

    const { refetch } = useParts();

    const handleError = useError();

    const handleDelete = async () => {
        try {
            await axiosPrivate.delete(`https://nasah-bicycle.herokuapp.com/part/${deleteProduct}`)
                .then(data => {
                    if (data.data.deletedCount) {
                        refetch();
                        toast.success('Deleted Successfully');
                    }
                })
        }
        catch (error) {
            handleError(error)
        }
    }

    return (
        <div>
            {/* Modal */}
            <input type="checkbox" id="part-delete-confirmation" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-red-600">Are you sure to Delete.?</h3>
                    <p className="py-4">Once you delete the product, it can't be undone.</p>
                    <div className="modal-action">
                        <label onClick={handleDelete} for="part-delete-confirmation" className="btn btn-error">Delete</label>
                        <label for="part-delete-confirmation" className="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteParts;