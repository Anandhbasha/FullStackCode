import React from 'react'
import Videos from '../Components/Videos'
import Button from '../Components/Button'

const btnTags = ["All","Music","Cinema","Live","Science fiction","Melodies","Recently Updated","Watched","New to You"]

const Home = () => {
  return (
    <div className='Home' style={{display:"flex",flexWrap:"wrap",gap:"20px",flexDirection:"column",justifyContent:"center",marginTop:"50px"}}>
      <div className='topFixed'>
        <div className='searchbar'>
        <input type='text' placeholder='search' style={{width:"600px",height:"25px",textAlign:"left",borderRadius:"15px",border:"none",padding:"5px 10px"}}></input>
        <div className="rightSide" style={{
          width:"500px"
        }}>
          <button>Create</button>
          <span>
            Notification
          </span>
          <img src='' alt='placeholder'></img>
        </div>
      </div>
      <div className='topBar'>
        {btnTags.map((item)=>(
          <Button  values= {item}/>
        ))}
      </div>
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
      <div className='LengthVideo'>
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  )
}

export default Home