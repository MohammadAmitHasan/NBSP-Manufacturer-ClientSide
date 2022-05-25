import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading || loading) {
        return <Loading></Loading>
    }
    console.log(admin);

    return (
        <div>
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
                    <ul class="menu p-4 overflow-y-auto w-52 border-r-2 text-base-content bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Profile</Link></li>
                        {
                            admin ?
                                <>
                                    <li><Link to={'/dashboard/manageOrders'}>Manage All Orders</Link></li>
                                    <li><Link to={'/dashboard/addProduct'}>Add A Product</Link></li>
                                    <li><Link to={'/dashboard/makeAdmin'}>Make Admin</Link></li>
                                    <li><Link to={'/dashboard/manageProducts'}>Manage Products</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to={'/dashboard/myOrders'}>My Orders</Link></li>
                                    <li><Link to={'/dashboard/addReview'}>Add A Review</Link></li>
                                </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;