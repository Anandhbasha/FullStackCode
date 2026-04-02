import React from 'react'
import './Videos.css'
const Videos = () => {
  return (
    <div className='Videos'>
        <div className='videoBox'>
          <iframe width="300" height="315" src="https://www.youtube.com/embed/Aze7zTyIRtk?si=VhL8SrmjA3lN5FqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='thumbnails'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, labore aliquam, harum nam eligendi non quo consectetur eum est debitis saepe laudantium modi alias sed sit, nesciunt aut! Error, at.</p>
        </div>
    </div>
  )
}

export default Videos