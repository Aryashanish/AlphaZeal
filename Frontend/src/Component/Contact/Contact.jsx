// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useInView } from "react-intersection-observer";
import "./Contact.css"; // Import the CSS file for styling
import axios from "axios";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [flag, setFlag] = useState(false);
  const [err, setErr] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [inquiry, setinquiry] = useState("");

  async function handleInquiry(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(inquiry);

    const data = {
      name: name,
      email: email,
      inquiry: inquiry,
    };

    axios.post("http://localhost:8000/contact", data)
      .then((result) => {
        console.log(" enquiry submit Sucessful" , result);
        setFlag(true);
        setErr(false);
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
        setFlag(false);
      })
  }

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-black text-white p-2 w-full h-full">
      <Header />
      <div className="">
        <h1
          className={`c-main-text text-center font-extrabold text-8xl text-transform:uppercase ${
            inView ? "animate-slideInLeft" : ""
          }`}
          ref={ref}
        >
          Lets Make Something Great Together
        </h1>
      </div>
      <div className={`c-form-text flex ${showText ? "animated" : ""}`}>
        <div className="c-text p-2 w-1/2">
          <span className=" text-gray-400 text-transform:uppercase">
            WORK WITH US
          </span>
          <br />
          <p className="text-xl my-2">
            Excited about new projects? We are eagerly listening and thrilled to
            dive in! Tell us about your company and project ideas and what
            youre hoping to achieve, and lets turn it into reality!
          </p>
          <br />
          <span className=" text-gray-400 text-transform:uppercase">
            New Talent Opportunities
          </span>
          <br />
          <p className="text-xl my-2">
            Eager to discuss upcoming projects! Wanna work together? Drop us an
            email, Tell us about your company and reveal the details of your
            project. Looking forward to hearing from you soon!
          </p>
        </div>
        <div className="c-form w-1/2">
          <h1 className="text-2xl text-center">
            {flag ? 'Your Data is Submited , Contact Soon' : ''}
            {err ? 'Something Went Wrong , Try Again' : ''}
            {flag || err ? '' : 'Fill the Details'}
          </h1>
          <form onSubmit={handleInquiry} className="my-4">
            <input
              type="text"
              placeholder="NAME"
              onChange={(e) => setname(e.target.value)}
              name="name"
              className="my-6 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <input
              type="text"
              placeholder="EMAIL ID"
              onChange={(e) => setemail(e.target.value)}
              name="email"
              className="my-6 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <input
              type="text"
              placeholder="INQUIRY"
              onChange={(e) => setinquiry(e.target.value)}
              name="inquiry"
              className="my-6 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <button
              type="submit"
              className="bg-white w-full rounded-lg p-1 my-6 text-black text-2xl font-bold hover:bg-slate-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="video-container p-2">
        <video autoPlay loop muted controls={false} className="w-full mt-5">
          <source
            src="https://assets-global.website-files.com/62d57921074baa1ce7275405/63067ab06029bc256f22c321_ContactSequence-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};
