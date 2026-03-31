import React from 'react'
import SideBar from './SideBar'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shorts from './Pages/Shorts'
import Subscription from './Pages/Subscription'
import Playlist from './Playlist'
import Watchlater from './Watchlater'
import LikedVideos from './LikedVideos'
import YourVideos from './YourVideos'
import Downloads from './Downloads'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className='heroSection'>
        <div className='App'>
        <SideBar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='/watchlater' element={<Watchlater/>}/>
        <Route path='/Liked' element={<LikedVideos/>}/>
        <Route path='/yours' element={<YourVideos/>}/>
        <Route path='/downloads' element={<Downloads/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App