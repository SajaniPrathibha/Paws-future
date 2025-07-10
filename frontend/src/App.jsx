
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Info from './pages/Info'
import Donate from './pages/Donate'

function App() {
  

  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<Info/>} />
      <Route path="/donate" element={<Donate/>} /> {/* Add this route */}
      </Routes>
  )
}

export default App
