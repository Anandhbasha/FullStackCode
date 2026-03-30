import React from 'react'
import { Link } from 'react-router-dom'
//npm i react-router-dom
const SideBar = () => {
  return (
    <div className='SideBar'>
        <Link to='/'>Home</Link>
        <Link to="/shorts">Shorts</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/history">History</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/watchlater">Watch later</Link>
        <Link to="/Liked">Liked videos</Link>
        <Link to="/yours">Your videos</Link>
        <Link to="/downloads">Downloads</Link>
    </div>
  )
}

export default SideBar