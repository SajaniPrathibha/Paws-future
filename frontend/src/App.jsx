
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Info from './pages/Info'
import Donate from './pages/Donate'
import Dogs from './pages/Dogs'
import AdoptionForm from './pages/AdoptionForm'

function App() {
  

  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<Info/>} />
        <Route path="/donate" element={<Donate/>} /> 
        <Route path="/dogs" element={<Dogs/>} />
      <Route path="/adoptionform" element={<AdoptionForm/>} />
      </Routes>
  )
}

export default App
