import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/customer/Home/HomePage'
import Register from './pages/auth/Register/Register'
import CartPage from './pages/customer/Cart/CartPage';
import AdminDashboard from './pages/owner/AdminDashboard';
import RegisterSalon from './pages/owner/RegisterSalon';
import Login from './pages/auth/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route 
          path='/'
            element={<HomePage/>}
          />
          <Route
            path='/login'
            element={<Login/>}
          />
          <Route
            path='/register'
            element={<Register/>}
          />
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
      </div>
      
    </>
  )
}

export default App
