import React from "react";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import "../styles/pages/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Header/>
      <HeroContent/>
    </div>
  );
}

export default Hero;