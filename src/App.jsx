import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from './pages/home/Home';
import Orders from './pages/order/orders';
import Cart from './pages/cart/cart';
import Allproduct from './pages/allproduct/Allproduct';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productinfo/ProductInfo';
import Dashboard from './pages/admin/dashboard/Dashboard';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/updateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={
            <Dashboard />
        } />
          <Route path='/allproduct' element={<Allproduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/addproduct' element={<ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>} />
          <Route path='/updateproduct' element={<ProtectedRoute>
            <UpdateProduct />
          </ProtectedRoute>} />
          <Route path='/*' element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

// User protected

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}

// admin protected

// const ProtectedRouteForAdmin = ({ children }) => {
//   const admin = JSON.parse(localStorage.getItem('user'))
//   if (admin.user.email === "testing@gmail") {
//     return children
//   }
//   else {
//     return <Navigate to={'/login'} />
//   }
// }
