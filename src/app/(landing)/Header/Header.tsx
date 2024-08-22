"use client";

import React from "react";
import "./_header.css";
import FilterHeader from "./Filters/FilterHeader";

const Header = () => {
  return (
    <div className="header relative w-full flex flex-col gap-[2rem] text-[#010101] dark:text-[#fefefe]">
      <div className="flex md:flex-row flex-col justify-between gap-3 w-full h-full mt-[4rem]">
        <div className="flex gap-3  w-full h-full flex-col lg:max-w-[60%]  ">
          <h1 className="text-[39px] 2xl:text-[50px] font-bold leading-[130%]">
            Brainstems Model Shares Portal
          </h1>
          <p className="text-[16px] xl:text-[19px] font-[500]  lg:max-w-[80%]">
            Join the Brainstems Steward Program and participate in our Model
            Shares initiative. Contribute to Pathway Activations with your
            $STEMS.
          </p>
        </div>

        <div className="flex gap-3 md:mt-0 mt-6  h-full flex-col shadow-sm border border-[#e4e4e4] dark:border-[#4e4e4e83] bg-[#EFB8FF20] dark:bg-[#8670d4] w-[20rem] xl:w-[25rem] p-4 rounded-xl rounded-br-none">
          <p className="text-[16px] xl:text-[19px] font-[500]">
            Don’t know how to identify the elements in the cards?
          </p>
          <strong className="underline font-bold cursor-pointer">
            Learn more here
          </strong>
        </div>
      </div>
      <FilterHeader />
    </div>
  );
};

export default Header;
