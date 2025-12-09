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
      </Routes>
      
      {!isAuthRoute && <Footer />}
    </>
  );
}

export default App;
