import React from "react";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import About from "./About/About";
import HowItWork from "./HowItWork/HowItWork";

const LandingPage = () => {
  return (
    <div className="hero flex flex-col gap-[2rem]"> 
      <Header />
      <About/>
      <HowItWork/>
      <div className="bg_convert w-full bg-[#00082F] ">
        <div className="w-full">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
