import React, { useContext } from 'react'
import Card from '../Components/Card'
import { PassingValue } from '../App'

const Mens = () => {
  const {all} = useContext(PassingValue)
  const mensProd = all.filter((item)=>item.prodCat==="Mens")
  return (
    <div className='Mens'>
        {mensProd.map((item)=>(
          <Card {...item}/>
        ))}
    </div>
  )
}

export default Mens