import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Shared/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import Payment from './Pages/Dashboard/payment';
import MyProfile from './Pages/Dashboard/MyProfile';
import { useState } from 'react';
import AllParts from './Pages/AllParts';
import ProfileUpdate from './Pages/Dashboard/ProfileUpdate';
import RequireAdmin from './Pages/Shared/RequireAdmin'
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Footer from './Pages/Shared/Footer';

function App() {
  const [cancelOrder, setCancelOrder] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-16'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/allParts' element={<AllParts></AllParts>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

          <Route path='/purchase/:id' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>}
          ></Route>

          <Route path='/dashboard' element={<RequireAuth><Dashboard
            cancelOrder={cancelOrder}
            setCancelOrder={setCancelOrder}

            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          ></Dashboard></RequireAuth>}>

            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='profileUpdate' element={<ProfileUpdate></ProfileUpdate>}></Route>
            <Route path='myOrders' element={<MyOrders setCancelOrder={setCancelOrder}></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>

            <Route path='makeAdmin' element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }></Route>
            <Route path='addProduct' element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }></Route>

            <Route path='manageOrders' element={
              <RequireAdmin>
                <ManageAllOrders setCancelOrder={setCancelOrder}></ManageAllOrders>
              </RequireAdmin>
            }></Route>

            <Route path='manageProducts' element={
              <RequireAdmin>
                <ManageProduct
                  setDeleteProduct={setDeleteProduct}
                ></ManageProduct>
              </RequireAdmin>
            }></Route>
          </Route>
          
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

        </Routes>

        <Footer></Footer>

      </div>
      <ToastContainer />
    </div >
  );
}

export default App;
