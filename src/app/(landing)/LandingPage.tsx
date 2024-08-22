import React from "react";
import Activations from "./activations/Activations";
import Header from "./header/Header";

const LandingPage = () => {
  return (
    <div className="hero flex flex-col gap-[3rem] w-full m-auto xl:max-w-[80%] px-[1.3rem] ">
      <Header />
      <Activations/>
    </div>
  );
};

export default LandingPage;
