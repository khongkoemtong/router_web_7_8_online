import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutpage from './pages/Aboutpage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/about' element={<Aboutpage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
