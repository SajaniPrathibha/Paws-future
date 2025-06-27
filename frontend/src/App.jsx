
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Info from './pages/Info'

function App() {
  

  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<Info/>} /> {/* Add this route */}
      </Routes>
  )
}

export default App
