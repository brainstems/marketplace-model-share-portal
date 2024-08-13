import React from "react";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import About from "./About/About";
import HowItWork from "./HowItWork/HowItWork";

const LandingPage = () => {
  return (
    <div className="hero flex flex-col gap-[3rem]">
      <Header />
      <About />
      <div className="bg_convert w-full bg-[#00082F]">
        <Cards />
      </div>
      <HowItWork />
    </div>
  );
};

export default LandingPage;
