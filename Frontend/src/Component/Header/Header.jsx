// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <>
      <div className="navbar flex justify-between p-2 text-white sticky top-0 bg-opacity-100">
        <div className="h-logo-link flex">
          <div className="header-logo mx-4">
            <Link to="/">
              <img src="/Image/logo_png.png" alt="Logo" 
                className="w-12 h-12"
              />
            </Link>
          </div>

          <div className="header-link">
            <NavLink
              to={"/work"}
              className="button-custom"
            >Work</NavLink>
            <NavLink
              to={"/about"}
              className="button-custom"
            >About</NavLink>
            <NavLink
              to={"/contact"}
              className="button-custom"
            >Contact
            </NavLink>
          </div>
        </div>

        <div className="h-social flex">
          <div className="header-social">
          <Link
            to={"https://www.instagram.com/alpha.zeal.media?igsh=eGN4YzR2eGl5YzRp"}
            className="button-custom-dashed"
          >Instagram</Link>
          <Link
            to={"https://www.linkedin.com/company/alpha-zeal-media-pvt-ltd/"}
            className="button-custom-dashed"
          >Linkedin</Link>
          <Link
            to={"#"}
            className="button-custom-dashed"
          >PORTFOLIO</Link>
          </div>
          <div className="h-time mx-5 uppercase">{formattedTime} &nbsp;- &nbsp;NEW &nbsp;DELHI, &nbsp;IN &nbsp;(IST) &nbsp;©2024</div>
        </div>
      </div>
    </>
  );
};
