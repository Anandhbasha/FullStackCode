import React, { useReducer, useState } from 'react'

const App = () => {
  const reducer = (state,action)=>{
    switch(action.type){
      case "add":
        return {...state,count:state.count+1}
      case "minus":
        return {...state,count:state.count-1}
      case "bgChange":
        return {...state,bg:state.bg==="dark"?"light":"dark"}
    }
  }
  const[state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return (
    <div className='App'>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"add"})}>AddCount</button>
      <button onClick={()=>dispatch({type:"minus"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"bgChange"})}>{state.bg}</button>
    </div>
  )
}

export default App