import React from 'react'
import SideBar from './SideBar'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shorts from './Pages/Shorts'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <SideBar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App