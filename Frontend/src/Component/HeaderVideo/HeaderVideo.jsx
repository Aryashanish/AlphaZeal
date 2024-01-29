// eslint-disable-next-line no-unused-vars
import React from 'react'

export const HeaderVideo = () => {
  return (
    <div className="video-container">
        <video autoPlay loop muted controls={false} className="w-full h-full">
          <source
            src="https://moonbase.nyc3.cdn.digitaloceanspaces.com/ADMILK/Hero.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}
