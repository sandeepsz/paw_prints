import React from "react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="hero h-screen  flex items-center justify-center ">
      <Navbar />
      <HeroContent />
    </section>
  );
};

export default Hero;
