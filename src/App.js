import React from 'react'
import Datap from './components/Datap'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './components/About'
const App = () => {
  return (
    <div>
      <div>

        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/About' element={<About/>}/>

        <Route path='/images' element={<Datap/>}/>

        </Routes>

        </BrowserRouter>
      </div>
    </div>
  )
}

export default App