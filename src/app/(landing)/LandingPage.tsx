import React from "react";
import Header from "./header/Header";
import Activations from "./activations/Activations";

const LandingPage = () => {
  return (
    <div className="hero flex flex-col gap-[3rem] w-full px-[1.3rem] min-h-[100vh]">
      <Header />
      <Activations/>
    </div>
  );
};

export default LandingPage;
