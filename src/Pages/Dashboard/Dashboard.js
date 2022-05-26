import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import Loading from '../Shared/Loading';
import CancelOrderModal from '../Dashboard/CancelOrderModal'
import CancelOrderModalAdmin from './CancelOrderModalAdmin';

const Dashboard = ({ cancelOrder, setCancelOrder }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading || loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <CancelOrderModal
                cancelOrder={cancelOrder}
                setCancelOrder={setCancelOrder}
            ></CancelOrderModal>
            {
                admin && <CancelOrderModalAdmin
                    setCancelOrder={setCancelOrder}
                    cancelOrder={cancelOrder}
                ></CancelOrderModalAdmin>
            }


            <h1 className='text-3xl md:text-4xl text-primary text-center font-semibold'>Dashboard</h1>

            <div class="drawer drawer-mobile">
                <input id="dashboard-menu" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-3">
                    {/* <!-- Page content here --> */}
                    <label for="dashboard-menu" tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-menu" class="drawer-overlay"></label>
                    <ul class="p-4 overflow-y-auto w-60 border-r-2 text-base-content bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><CustomLink to={'/dashboard'}>My Profile</CustomLink></li>
                        {
                            admin ?
                                <>
                                    <li><CustomLink to={'/dashboard/manageOrders'}>Manage All Orders</CustomLink></li>
                                    <li><CustomLink to={'/dashboard/addProduct'}>Add A Product</CustomLink></li>
                                    <li><CustomLink to={'/dashboard/makeAdmin'}>Make Admin</CustomLink></li>
                                    <li><CustomLink to={'/dashboard/manageProducts'}>Manage Products</CustomLink></li>
                                </>
                                :
                                <>
                                    <li><CustomLink to={'/dashboard/myOrders'}>My Orders</CustomLink></li>
                                    <li><CustomLink to={'/dashboard/addReview'}>Add A Review</CustomLink></li>
                                </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;