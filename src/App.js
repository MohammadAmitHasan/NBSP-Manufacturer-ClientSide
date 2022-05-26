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

function App() {
  const [cancelOrder, setCancelOrder] = useState(null);
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
          ></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='profileUpdate' element={<ProfileUpdate></ProfileUpdate>}></Route>
            <Route path='myOrders' element={<MyOrders setCancelOrder={setCancelOrder}></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
          </Route>

        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
