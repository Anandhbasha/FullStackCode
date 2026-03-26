import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)



  const addCount = ()=>{
    setCount(++count)
    console.log(count);    
  }
  const printValue = (e)=>{
    console.log(e.target.value);
    
  }
  const users = [
  { id: 1, name: "Arun", age: 22, city: "Chennai" },
  { id: 2, name: "Bala", age: 24, city: "Coimbatore" },
  { id: 3, name: "Charan", age: 21, city: "Madurai" },
  { id: 4, name: "Dinesh", age: 23, city: "Salem" },
  { id: 5, name: "Ezhil", age: 25, city: "Trichy" },
  { id: 6, name: "Farhan", age: 22, city: "Chennai" },
  { id: 7, name: "Gokul", age: 24, city: "Erode" },
  { id: 8, name: "Hari", age: 23, city: "Vellore" },
  { id: 9, name: "Imran", age: 26, city: "Tirunelveli" },
  { id: 10, name: "Jagan", age: 21, city: "Thoothukudi" },

  { id: 11, name: "Karthik", age: 22, city: "Chennai" },
  { id: 12, name: "Lokesh", age: 24, city: "Madurai" },
  { id: 13, name: "Mani", age: 23, city: "Salem" },
  { id: 14, name: "Naveen", age: 25, city: "Trichy" },
  { id: 15, name: "Omkar", age: 22, city: "Coimbatore" },
  { id: 16, name: "Praveen", age: 24, city: "Erode" },
  { id: 17, name: "Qadir", age: 23, city: "Vellore" },
  { id: 18, name: "Ramesh", age: 26, city: "Chennai" },
  { id: 19, name: "Sathish", age: 21, city: "Madurai" },
  { id: 20, name: "Tamil", age: 22, city: "Salem" },

  { id: 21, name: "Uday", age: 24, city: "Trichy" },
  { id: 22, name: "Vignesh", age: 23, city: "Coimbatore" },
  { id: 23, name: "Wasim", age: 25, city: "Erode" },
  { id: 24, name: "Xavier", age: 22, city: "Vellore" },
  { id: 25, name: "Yogesh", age: 24, city: "Chennai" },
  { id: 26, name: "Zakir", age: 23, city: "Madurai" },
  { id: 27, name: "Ajay", age: 21, city: "Salem" },
  { id: 28, name: "Bharath", age: 26, city: "Trichy" },
  { id: 29, name: "Chetan", age: 22, city: "Coimbatore" },
  { id: 30, name: "Deepak", age: 24, city: "Erode" },

  { id: 31, name: "Elango", age: 23, city: "Vellore" },
  { id: 32, name: "Faisal", age: 25, city: "Chennai" },
  { id: 33, name: "Ganesh", age: 22, city: "Madurai" },
  { id: 34, name: "Hemanth", age: 24, city: "Salem" },
  { id: 35, name: "Irfan", age: 23, city: "Trichy" },
  { id: 36, name: "Jeeva", age: 21, city: "Coimbatore" },
  { id: 37, name: "Kiran", age: 26, city: "Erode" },
  { id: 38, name: "Logan", age: 22, city: "Vellore" },
  { id: 39, name: "Madhan", age: 24, city: "Chennai" },
  { id: 40, name: "Nithin", age: 23, city: "Madurai" },

  { id: 41, name: "Prakash", age: 25, city: "Salem" },
  { id: 42, name: "Rahul", age: 22, city: "Trichy" },
  { id: 43, name: "Suresh", age: 24, city: "Coimbatore" },
  { id: 44, name: "Tharun", age: 23, city: "Erode" },
  { id: 45, name: "Vasanth", age: 21, city: "Vellore" },
  { id: 46, name: "Aravind", age: 26, city: "Chennai" },
  { id: 47, name: "Balaji", age: 22, city: "Madurai" },
  { id: 48, name: "Chandru", age: 24, city: "Salem" },
  { id: 49, name: "Dharani", age: 23, city: "Trichy" },
  { id: 50, name: "Eswar", age: 25, city: "Coimbatore" }
];
const newLine = users.slice(0,1)

let newValue =Object.keys(newLine[0]) 
console.log(newValue);


  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={addCount}>Add</button>
      <input type='text' onChange={printValue}></input>
      <table>
        <thead>
          {newValue.map((item)=>(
            <th>{item}</th>
          ))}
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App