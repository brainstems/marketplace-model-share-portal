/* import Tyc from "@/app/(legal)/tyc/page"; */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col px-[1rem] md:px-[4rem] lg:px-[8rem] py-[1rem] pb-[2rem]  bg-[#ffffff] dark:bg-[#0f0f0f] border-t-2 border-[#e2e2e2] dark:border-[#202020] rounded-xl mt-[4rem]">
     {/*  <Link href={'/tyc'} className="mb-3">
        <span>Terms & Conditions</span>
      </Link> */}
      {/* <div className="w-full h-[.1rem] bg-[#27272728]  dark:bg-[#ffffff28] "></div> */}
      <span className="mt-[1rem] text-[#0c0c0caf] dark:text-[#ffffffaf] text-[.9rem] text-center">© 2024 <Link href={'https://www.brainstems.ai/'} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-bold text-[#0c0c0caf] dark:text-[#d5c3ff]" >BRAINSTEMS.AI</Link>  COMPANY. </span>
    </div>
  );
};

export default Footer;
