import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice'
const Button = () => {
    const counts = useSelector((state)=>state.counts.count)
    const dispatch = useDispatch()
  return (
    <div className='Button'>
        <p>{counts}</p>
        <button onClick={()=>dispatch(increment(1))}>Increment</button>
        <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Button