import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutpage from './pages/Aboutpage'
import Navbar from './components/Navbar'
import Service from './pages/Service'
import Login from './pages/Login'
import Register from './pages/Register'



function WithNavbar (){
  return(
    <div>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

function WithoutNavbar (){
  return (
    <div>
      <Outlet/>
    </div>
  )
}

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>

        <Route  element={<WithNavbar/>} >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/service' element={<Service/>}/>
 

        </Route>


        <Route element={<WithoutNavbar/>}>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>

        </Route>




      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
