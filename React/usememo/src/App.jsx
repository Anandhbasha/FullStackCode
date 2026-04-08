// import React, { useEffect, useMemo, useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)
//   const [number,setNumber] = useState(0)
//   const square = useMemo(()=>{
//     return count*count
//   },[count])
//   useEffect(()=>{
//     console.log("Useeffect");    
//   },[number])
//   return (
//     <div className='App'>
//       <h2>NumberSquare:{square}</h2>
//       <p>{count}</p>
//       <button onClick={()=>setCount((prev)=>++prev)}>AddCount</button>
//       <button onClick={()=>setNumber((prev)=>++prev)}>AddNumber</button>
//     </div>
//   )
// }

// export default App

import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null)
  const focusInput = ()=>{
    if(inputRef.current){
      inputRef.current.focus()
      console.log(inputRef.current.value);
      
    }
    console.log();
    console.log("hello");
    
    
  }
  return (
    <div className='App'>
        <input type='text' ref={inputRef}></input>
        <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default App