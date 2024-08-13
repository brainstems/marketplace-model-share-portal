import React from "react";
import Header from "./Header/Header";
import Cards from "../ui/Cards/Cards";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bg_convert w-full bg-[#00082F] ">
        <div className="w-full">
          <div className="w-full flex justify-center lg:justify-start items-center relative overflow-hidden px-[2rem] lg:px-[8rem] xl:px-[11rem]">
            <h3 className="textPredictive  tracking-[1px] text-[1.5rem] sm:text-[2rem] font-bold mb-[2rem]">
              Predictive Event Selections
            </h3>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
