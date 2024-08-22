"use client";

import React, { useState } from "react";
import "./_activations.css";
import ActivationSingle from "./single/ActivationSingle";
import ActivationFederated from "./federated/ActivationFederated";

const Activations = () => {
  const [active, setActive] = useState("single");
  const [view, setView] = useState("box");

  const handleActive = (type: string) => {
    setActive(type);
  };

  const handleActiveView = (type: string) => {
    setView(type);
  };

  return (
    <div className=" relative w-full flex min-h-[40rem] flex-col gap-[2rem] text-[#010101] dark:text-[#fefefe]">
      <div className="flex justify-between flex-col items-center md:flex-row w-full gap-4">
        <div className="flex gap-4">
          <button
            className={`${
              active === "single" ? "bg-[#DDDDDD] text-black" : "bg-[#00000000]"
            } font-semibold w-[10rem] h-[3.2rem] flex justify-center items-center shadow-sm border border-[#d6d6d6fe] dark:border-[#525252fe] rounded-xl transition-all duration-300 `}
            onClick={() => handleActive("single")}
          >
            Single
          </button>
          <button
            className={`${
              active === "federated"
                ? "bg-[#DDDDDD] text-black"
                : "bg-[#00000000]"
            } font-semibold  w-[10rem] h-[3.2rem] flex justify-center items-center border shadow-sm border-[#d6d6d6fe] dark:border-[#525252fe] rounded-xl transition-all duration-300`}
            onClick={() => handleActive("federated")}
          >
            Federated
          </button>
        </div>

        <div className=" gap-4 mt-2 md:mt-0 hidden md:flex">
          <img
            src="/assets/icons/viewCard.svg"
            className={`flex dark:hidden  ${
              view === "box"
                ? "bg-[#d6d6d6] dark:bg-[#747474] text-black"
                : "bg-[#00000000]"
            } font-semibold w-[3rem] h-[3rem] cursor-pointer px-2 py-3  justify-center items-center shadow-sm border border-[#d6d6d6fe] dark:border-[#525252fe] rounded-xl transition-all duration-300 `}
            onClick={() => handleActiveView("box")}
          />
          <img
            src="/assets/icons/viewCardLight.svg"
            className={`hidden dark:flex  ${
              view === "box" ? "bg-[#747474]  text-black" : "bg-[#00000000]"
            } font-semibold w-[3rem] h-[3rem] cursor-pointer px-2 py-3  justify-center items-center shadow-sm border border-[#d6d6d6fe] dark:border-[#525252fe] rounded-xl transition-all duration-300 `}
            onClick={() => handleActiveView("box")}
          />
          <img
            src="/assets/icons/viewList.svg"
            className={`flex dark:hidden   ${
              view === "list"
                ? "bg-[#d6d6d6] dark:bg-[#747474] text-black"
                : "bg-[#00000000]"
            } font-semibold w-[3rem] h-[3rem] cursor-pointer px-2 py-3  justify-center items-center border shadow-sm border-[#d6d6d6fe] dark:border-[#525252fe] rounded-xl transition-all duration-300`}
            onClick={() => handleActiveView("list")}
          />
          <img
            src="/assets/icons/viewListLight.svg"
            className={`hidden dark:flex  ${
              view === "list" ? "bg-[#747474] text-black" : "bg-[#00000000]"
            } font-semibold w-[3rem] h-[3rem] cursor-pointer px-2 py-3  justify-center items-center shadow-sm border border-[#d6d6d6fe] dark:border-[#525252fe] rounded-xl transition-all duration-300 `}
            onClick={() => handleActiveView("list")}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4  pb-[4rem] ">
        <h3 className="font-semibold text-[24px] relative">All Categories</h3>
        {active === "single" ? (
          <ActivationSingle view={view} />
        ) : (
          <ActivationFederated view={view} />
        )}
      </div>
    </div>
  );
};

export default Activations;
