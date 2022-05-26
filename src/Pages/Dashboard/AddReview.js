import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';

const AddReview = () => {
    const [ratting, setRatting] = useState(3);
    const [user] = useAuthState(auth);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axiosPrivate.post('https://nasah-bicycle.herokuapp.com/reviews', {
            comment: e.target.comment.value,
            ratting,
            name: user.displayName,
        })
            .then(data => {
                if (data?.data.insertedId) {
                    e.target.reset();
                    toast.success('Review added successfully')
                }
            })
    }

    return (
        <div>
            <h3 className='text-2xl md:text-3xl text-secondary font-semibold my-5'>Add A Review</h3>
            <form onSubmit={handleSubmit}>
                <textarea className='textarea textarea-bordered' name="comment" cols="30" rows="5" placeholder='Write your review' />

                <div>
                    <p className='my-2'>Provide a Ratting</p>
                    <div className="rating">
                        <input onClick={() => setRatting(1)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={ratting === 1 ? true : false} />
                        <input onClick={() => setRatting(2)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={ratting === 2 ? true : false} />
                        <input onClick={() => setRatting(3)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={ratting === 3 ? true : false} />
                        <input onClick={() => setRatting(4)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={ratting === 4 ? true : false} />
                        <input onClick={() => setRatting(5)} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={ratting === 5 ? true : false} />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-sm mt-2'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;