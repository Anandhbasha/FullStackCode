import React, { useEffect, useState } from 'react'

const App = () => {
  const [bg,setBg] = useState("dark")
  useEffect(()=>{
    console.log("UseEffect is working");    
  },[bg])
  const bgChange = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <div className='App' style={{width:"100vw",height:"100vh",backgroundColor:bg==="dark"?"black":"white"}}>
      <button onClick={bgChange}>{bg}</button>
    </div>
  )
}

export default App