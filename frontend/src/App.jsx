
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/customer/Home/HomePage'
import BookingPage from './pages/customer/BookingForm/BookingPage'
import ProfilePage from './pages/customer/Profile/ProfilePage'

function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route 
          path='/'
            element={<HomePage/>}
          />
           <Route path='/book-Appointment'
           element={<BookingPage/>}
           />
           <Route 
           path='/profile-page'
           element={<ProfilePage/>}
           />
        </Routes>
      </div>
      
    </>
  )
}

export default App
