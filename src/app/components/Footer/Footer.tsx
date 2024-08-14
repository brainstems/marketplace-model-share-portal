import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col   px-[1rem] md:px-[4rem] lg:px-[8rem] py-[3rem] pb-[1rem] mb-4 mt-[4rem] ">
      
      <div className="w-full h-[.1rem] bg-[#ffffff28] "></div>
      <span className="mt-[1rem] text-[#ffffffaf] text-[.9rem] text-center">© 2024 Brainstems | All Rights reserved. </span>
    </div>
  );
};

export default Footer;
