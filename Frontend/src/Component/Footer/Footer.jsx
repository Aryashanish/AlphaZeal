// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    const paragraphs = [
        "alphaZeal , It's for you",
        "Genetecally Modify (in the best way)",
        "100% Row , Unpestuarized Creative",
      ];
    
      const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, [paragraphs.length]);
    
  return (
    <>
      <div className="p-4 bg-black text-white">
        <hr className="border-dashed border-1 border-gray-400 my-8"></hr>
        <div className="footer-section flex justify-start">
          <div className="flex flex-col mx-5">
            <Link
              to={"/"}
              className="text-5xl font-bold text-transform: uppercase hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to={"/"}
              className="text-5xl font-bold text-transform: uppercase my-1 hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="text-5xl font-bold text-transform: uppercase hover:text-gray-400"
            >
              Work
            </Link>
            <Link
              to={"/"}
              className="text-5xl font-bold text-transform: uppercase my-1 hover:text-gray-400"
            >
              Contact
            </Link>
          </div>
          
          <div className="mx-5">
            <p className="text-gray-400">SOCIALS</p>
            <div className="flex flex-col">
              <Link
                to={"https://www.linkedin.com/company/alpha-zeal-media-pvt-ltd/"}
                className="f-link border-solid border-2 border-white rounded-xl px-2 w-full hover:bg-white hover:text-black"
              >
                LINKDLN &#8594;
              </Link>
              <Link
                to={"https://www.instagram.com/alpha.zeal.media?igsh=eGN4YzR2eGl5YzRp"}
                className="f-link border-solid border-2 border-white rounded-xl px-2 my-1 hover:bg-white hover:text-black"
              >
                INSTAGRAM &#8594;
              </Link>
              <Link
                to={"/work"}
                className="f-link border-solid border-2 border-white rounded-xl px-2 hover:bg-white hover:text-black"
              >
                TWITTER &#8594;
              </Link>
            </div>
            <p className="text-gray-400">CONTACTS</p>
            <div className="flex flex-col">
              <Link
                to={"/work"}
                className="f-link border-solid border-2 border-white rounded-xl px-2 hover:bg-white hover:text-black"
              >
                HI@ALPHAZEAL.CO &#8594;
              </Link>
              <Link
                to={"/work"}
                className="f-link border-solid border-2 border-white rounded-xl px-2 my-1 hover:bg-white hover:text-black"
              >
                WHATSAPP &#8594;
              </Link>
            </div>
          </div>
          <div className="f-text w-full transition-all duration-1000 ease-in-out">
            <p className="text-white text-center mx-8 text-5xl ">{paragraphs[currentParagraphIndex]}</p>
          </div>
        </div>
        <div className="mt-2">
            <p className="text-center text-gray-400">@2024 ALPHAZEAL LLC. ALL RIGHTS RESERVED</p> 
        </div>
      </div>
    </>
  );
};
