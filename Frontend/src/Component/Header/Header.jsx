// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// import "./Header.css"

export const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      <div className="navbar flex justify-between p-2 text-white sticky top-0 bg-opacity-100">
        <div className="h-logo-link flex">
          <div className="header-logo mx-4">
            <Link to="/">
              <img src="/Image/AZ_Logo.png" alt="Logo" 
                className="w-10 h-6"
              />
            </Link>
          </div>
        
          <div className="header-link">
            <NavLink
              to={"/work"}
              className=" mx-1 border-solid border-2 border-white-100 rounded-xl px-2 text-transform: uppercase hover:bg-white hover:text-black"
            >Work</NavLink>
            <NavLink
              to={"/about"}
              className=" mx-1 border-solid border-2 border-white-100 rounded-xl px-2 text-transform: uppercase hover:bg-white hover:text-black"
            >About</NavLink>
            <NavLink
              to={"/contact"}
              className=" mx-1 border-solid border-2 border-white-100 rounded-xl px-2 text-transform: uppercase hover:bg-white hover:text-black"
            >Contact
            </NavLink>
          </div>
        </div>

        <div className="h-social flex">
          <Link
            to={"https://www.instagram.com/alpha.zeal.media?igsh=eGN4YzR2eGl5YzRp"}
            className="header-link mx-1 border-dotted border-2 border-gray-600 rounded-xl px-2 text-gray-600 hover:bg-white hover:text-black"
          >IG</Link>
          <Link
            to={"https://www.linkedin.com/company/alpha-zeal-media-pvt-ltd/"}
            className="header-link mx-1 border-dotted border-2 border-gray-600 rounded-xl px-2 text-gray-600 hover:bg-white hover:text-black"
          >LI</Link>
          <Link
            to={"#"}
            className="header-link mx-1 border-dotted border-2 border-gray-600 rounded-xl px-2 text-gray-600 hover:bg-white hover:text-black"
          >VIMEO</Link>
          <div className="h-time mx-5">{formattedTime} - India @2024</div>
        </div>
      </div>
    </>
  );
};
