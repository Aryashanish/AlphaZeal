// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./header.css"

export const HeaderVideo = () => {
  return (
    <div className="responsive-video">
        <video autoPlay loop muted controls={false} className='w-full h-full m-auto'>
          <source
            src  = "/assets/website_video_1080p.mp4"
            type ="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}


