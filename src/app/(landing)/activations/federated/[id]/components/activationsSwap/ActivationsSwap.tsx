"use client";
import React, { useState } from "react";
import ActivationOutcomes from "./components/ActivationOutcomes/ActivationOutcomes";
import TechnicalAspects from "./components/TechnicalAspects/TechnicalAspects";

const ActivationsSwap = () => {
  const [active, setActive] = useState("ActivationOutcomes");

  const handleActive = (type: string) => {
    setActive(type);
  };

  return (
    <div className=" relative w-full flex flex-col justify-start items-center gap-[2rem] text-[#010101] dark:text-[#fefefe]">
      <div className="flex gap-4 rounded-full justify-center items-center bg-[#EFB8FF50] dark:bg-[#877d97da] py-2 px-2">
        <button
          className={`${
            active === "ActivationOutcomes"
              ? "bg-[#653BA5] text-[#fefefe] shadow-sm "
              : "bg-[#00000000]"
            } font-semibold md:min-w-[13rem] h-[3.2rem] flex justify-center items-center px-2 md:px-5 rounded-full transition-all duration-300 md:text-[1rem] text-[.9rem] leading-[120%]`}
          onClick={() => handleActive("ActivationOutcomes")}
        >
          Activation Outcomes
        </button>
        <button
         className={`${
          active === "TechnicalAspects"
            ? "bg-[#653BA5]  text-[#fefefe] shadow-sm "
            : "bg-[#00000000]"
        } font-semibold md:min-w-[13rem] h-[3.2rem] flex justify-center items-center px-2 md:px-5 rounded-full transition-all duration-300 md:text-[1rem] text-[.9rem] leading-[120%]`}
          onClick={() => handleActive("TechnicalAspects")}
        >
          Technical Aspects
        </button>
      </div>

      <div className="w-full pb-[4rem] ">
        {active === "ActivationOutcomes" ? (
          <ActivationOutcomes />
        ) : (
          <TechnicalAspects />
        )}
      </div>
    </div>
  );
};

export default ActivationsSwap;
