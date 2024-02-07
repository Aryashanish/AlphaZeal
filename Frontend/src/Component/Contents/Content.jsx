// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import "./Content.css"

export const Content = () => {
  return (
    <div className="content mt-4">
      <div className="text-container">
        <h1 className="content-heading">Content for brands that is powerful, evocative, and unforgettable.</h1>
        <p className="content-text">At Alpha Zeal Media, we are more than just ad creators; we are your brands storytellers. With a dash of pixels and a touch of sound, we bring your brands story to life. We team up with the coolest brands out there to whip up unique content that keeps audiences coming back for more. Our mission? To break the mold and turn your brand into the internet next big thing. Our crew of creative minds and strategic thinkers blend the latest technology with real human insights to craft experiences that do more than grab attention—they spark imagination. If you are looking to step away from the usual and elevate your brands story to unforgettable heights, you have come to the right place.</p>
       
        <div className="button-container" style={{ paddingLeft: '1rem'}}>
          <Link to={"/about"} className="button-custom-arrow" style={{color: 'black', backgroundColor: 'white'}}>
            Read Me
          </Link>
          <Link to={"/work"} className="button-custom-arrow" style={{color: 'black', backgroundColor: 'white'}}>
            View Our Work
          </Link>
        </div>
        <break></break>
      </div> 
      <div className="image-container">
        <img src="/assets/panther_images/2.png" alt="Brand Storytelling Panther" />
      </div>  
    </div>
  );
};
