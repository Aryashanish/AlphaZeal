// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Service } from "../Service/Service";
import { Featured } from "../Featured/Featured";
import { Content } from "../Contents/Content";
import { HeaderVideo } from "../HeaderVideo/HeaderVideo";
import "./Home.css";
import { WorkWithUs } from "../WorkWithUs/WorkWithUs";
import { Footer } from "../Footer/Footer";

const LandingPage = () => (
  <div className="landing-page">
    <img src="/Image/AZ_Logo.png" alt="not found"></img>
  </div>
);

const Mainpage = () => (
  <div className="main">
    <Header />
    <div className="content-wrapper">
      <HeaderVideo />
      <div className="scrollable-content">
        <Content />
        <Featured />
        <Service />
        <WorkWithUs />
        <Footer />
      </div>
    </div>
  </div>
);

export const Home = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMainPage(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`transition-container ${showMainPage ? 'show-main' : 'show-landing'}`}>
      <LandingPage />
      <Mainpage />
    </div>
  );
};
