import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [datas,setDatas] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get(`http://localhost:4820/stu`)
      setDatas(res.data)
    }
    fetchData()
  },[])
  console.log(datas);
  
  return (
    <div className='App'>
      {datas.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
  </div>

  )
}

export default App