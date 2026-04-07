import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const dropDown =[5,10,25,50] 
  const [datas,setDatas] = useState([])
  const [option,setOption] = useState(5)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        if(!res){
          throw Error("Unable to connect API")
        }
        setDatas(res.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData()
    console.log(datas);
    
  },[])

  
  const handleOption = (e)=>{
    setOption(Number(e.target.value))
  }
  return (
    <div className='App'>
      <select onChange={handleOption} value={option}>
        {dropDown.map((item)=>(
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <table>
        <thead>
          {
            datas.length>0 &&
          Object.keys(datas[0]).map((x)=>(
            <th key={x}>{x}</th>
          ))}
        </thead>
        <tbody>
          {datas.slice(0,option).map((item)=>(
            <tr key={item.id}>
            {Object.values(item).map((val)=>(
              <td>{typeof val === "object" ? JSON.stringify(val) : val}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App