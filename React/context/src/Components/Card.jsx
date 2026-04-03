import React, { useContext } from 'react'
import { PassingValue } from '../App'

const Card = ({productName,productPrice,productDesrc,image}) => {
  const {setCount} = useContext(PassingValue)
  return (
    <div className='Card'>
        <div className='cartImage'>
            <img src={image}></img>
        </div>
        <div className='cartBtm'>
            <h3>{productName}</h3>
            <h3>{productPrice}</h3>
            <h3>{productDesrc}</h3>
        </div>
        <button onClick={()=>setCount((prev)=>++prev)}>Add To Cart</button>
    </div>
  )
}

export default Card