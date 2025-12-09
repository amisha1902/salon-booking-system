import { useState } from 'react';
import './App.css';
// Import BrowserRouter as Router in index.js/main.jsx, not here.
import { Route, Routes, useLocation } from 'react-router-dom'; 

import HomePage from './pages/customer/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SalonList from './pages/customer/SalonList/SalonList';
import SalonDetails from './pages/customer/SalonDetailPage/SalonDetailPage';
import ProfilePage from './pages/customer/Profile/ProfilePage';
import LoginPage from './pages/auth/Login/LoginPage';
import SignupPage from './pages/auth/Signup/SignupPage';
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/customer/Home/HomePage'
import Register from './pages/auth/Register/Register'
import CartPage from './pages/customer/Cart/CartPage';
import AdminDashboard from './pages/owner/AdminDashboard';
import RegisterSalon from './pages/owner/RegisterSalon';
import Login from './pages/auth/Login/Login';

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/salonList' element={<SalonList />} />
        <Route path="/salon/:id" element={<SalonDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route 
            path='/cart' 
            element={<CartPage />} />
          <Route
            path='/admin_dashboard'
            element={<AdminDashboard/>}
          />

          <Route
            path='/register_salon'
            element={<RegisterSalon/>}
          />
      </Routes>
     
      
      {!isAuthRoute && <Footer />}
    </>
  );
}

export default App;
