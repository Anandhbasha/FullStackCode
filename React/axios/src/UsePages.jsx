import React, { useEffect, useState } from 'react'

const UsePages = () => {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Hello");        
    },[count])
  return (
    <div className='UsePages'>
        <button onClick={()=>setCount(++count)}>Add</button>
    </div>
  )
}

export default UsePages