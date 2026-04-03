import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PassingValue } from '../App'

const Navabar = () => {
  const {count} = useContext(PassingValue)
  return (
    <div className='Navabar' style={{height:"10vh",display:"flex",alignItems:"center"}}>
        <Link to='/'>AllProducts</Link>
        <Link to='/mens'>Mens</Link>
        <Link to='/womens'>Womens</Link>
        <Link to='/kids'>Kids</Link>
        <p>{count}</p>
    </div>
  )
}

export default Navabar