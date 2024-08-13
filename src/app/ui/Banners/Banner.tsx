"use client";

import React from "react";
import "./_banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full h-[100%] rounded-xl relative flex justify-center items-center flex-col ">
      <div className="w-full h-[100%]  rounded-xl relative flex justify-center items-center">
        <motion.div
          initial={{ filter: "grayscale(100%)", opacity: 0.6 }}
          whileInView={{ filter: "grayscale(0%)", opacity: 0.8 }}
          viewport={{ once: false }}
          transition={{
            delay: 1,
            duration: 0.3,
            trasition: "ease-in-out",
          }}
          className="flex justify-center items-center flex-col py-[1rem] px-[1rem]  lg:py-[2rem] lg:px-[4rem]  relative banner_img"
        >
          <img
            src="/assets/image/Banners/img1.webp"
            alt="banner"
            className=" h-[30rem] lg:h-[100%] rounded-[30px] w-full lg:w-[80vw] object-cover "
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] gap-[1rem] flex justify-center items-center flex-col text-img ">
          <span className="text-[1.5rem] lg:text-[3rem] font-bold w-[85vw] 2sm:w-[35rem] lg:w-[100%] text-center leading-[130%]">
            Unlocking new value in your business
          </span>
          <span className="text-[1rem] lg:text-[1.3rem] font-medium text-center">
            Tap New Opportunities with Intelligence Enabled Actions
          </span>
        </div>
      </div>

      <div className="w-full h-[100%]  rounded-xl relative flex justify-center items-center">
        <motion.div
          initial={{ filter: "grayscale(100%)", opacity: 0.6 }}
          whileInView={{ filter: "grayscale(0%)", opacity: 0.8 }}
          viewport={{ once: false }}
          transition={{
            delay: 1,
            duration: 0.3,
            trasition: "ease-in-out",
          }}
          className="flex justify-center items-center flex-col py-[1rem] px-[1rem]  lg:py-[2rem] lg:px-[4rem]  relative banner_img"
        >
          <img
            src="/assets/image/Banners/img2.webp"
            alt="banner"
            className=" h-[30rem] lg:h-[100%] rounded-[30px] w-full lg:w-[80vw] object-cover "
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] gap-[1rem] flex justify-center items-center flex-col text-img ">
          <span className="text-[1.5rem] lg:text-[3rem] font-bold w-[85vw] 2sm:w-[35rem] lg:w-[100%] text-center leading-[130%]">
            Intelligent Actions; Not Insights
          </span>
          <span className="text-[1rem] lg:text-[1.3rem] font-medium text-center">
            Every action delivers growth and profit
          </span>
        </div>
      </div>

      <div className="w-full h-[100%]  rounded-xl relative flex justify-center items-center">
        <motion.div
          initial={{ filter: "grayscale(100%)", opacity: 0.6 }}
          whileInView={{ filter: "grayscale(0%)", opacity: 0.8 }}
          viewport={{ once: false }}
          transition={{
            delay: 1,
            duration: 0.3,
            trasition: "ease-in-out",
          }}
          className="flex justify-center items-center flex-col py-[1rem] px-[1rem]  lg:py-[2rem] lg:px-[4rem]  relative banner_img"
        >
          <img
            src="/assets/image/Banners/img3.webp"
            alt="banner"
            className=" h-[30rem] lg:h-[100%] rounded-[30px] w-full lg:w-[80vw] object-cover "
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] gap-[1rem] flex justify-center items-center flex-col text-img ">
          <span className="text-[1.5rem] lg:text-[3rem] font-bold w-[85vw] 2sm:w-[35rem] lg:w-[100%] text-center leading-[130%]">
            Finding Every Opportunity
          </span>
          <span className="text-[1rem] lg:text-[1.3rem] font-medium text-center">
            Transforming market potential into profitable growth
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
