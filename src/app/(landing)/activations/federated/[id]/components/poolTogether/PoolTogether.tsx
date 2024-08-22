"use client";
import React, { useState } from "react";
import Signal from "./components/Signal";
import Unsignal from "./components/Unsignal";

const PoolTogether = () => {
  const [active, setActive] = useState("signal");

  const handleActive = (type: string) => {
    setActive(type);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div className="flex gap-4  relative py-2 px-2 ">
        <button
          className={`${
            active === "signal" ? " text-[#fefefe] shadow-sm  border-b-2 border-b-[#9357ec]  " : "  border-b-2 border-b-transparent "
          } font-semibold  flex   transition-all duration-300 text-[18px] leading-[2rem] `}
          onClick={() => handleActive("signal")}
        >
          Signal
        </button>
        <button
          className={`${
            active === "unsignal" ? " text-[#fefefe] shadow-sm border-b-2 border-b-[#9357ec] " : "  border-b-2 border-b-transparent "
          } font-semibold  flex transition-all duration-300 text-[18px] leading-[2rem] `}
          onClick={() => handleActive("unsignal")}
        >
          Unsignal
        </button>
      </div>

      <div className="w-full pb-[4rem] ">
        {active === "signal" ? <Signal /> : <Unsignal />}
      </div>
    </div>
  );
};

export default PoolTogether;
