import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login'
import Footer from './components/Footer'
import Otp from './components/Otp'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
    // <Admin/>
  )
}

export default App
