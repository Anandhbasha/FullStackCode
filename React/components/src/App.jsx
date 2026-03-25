import Button from "./Button"

// const App = ()=>{
//   const value = ["Click","Login","Logout","Save","Edit","Delete"]
//     return (
//       <div>
//         {value.map((item)=>(
//           <Button value = {item}/>
//         ))}       
//       </div>
//     )
// }

const App = ()=>{
  const value = ["Click","Login","Logout","Save","Edit","Delete"]
    return (
      <div>
        {value.map((item)=>(
          <Button x = {item}/>
        ))}       
      </div>
    )
}

// x=Click

export default App

// first must be a captial letter
// components name is function name
// export
// return
// one can return only one element ath the time 