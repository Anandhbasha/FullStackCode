import React from 'react'

const Button = ({values}) => {
  return (
    <div className='Button' >
        <button style={{borderRadius:"10px",
        padding:"5px 8px"
    }}>{values}</button>
    </div>
  )
}

export default Button