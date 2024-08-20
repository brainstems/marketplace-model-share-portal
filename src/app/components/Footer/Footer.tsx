import Tyc from "@/app/(legal)/tyc/page";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col px-[1rem] md:px-[4rem] lg:px-[8rem] py-[3rem] pb-[4rem]  bg-[#ececec] dark:bg-[#0f0f0f]">
      <Link href={'/tyc'} className="mb-3">
        <span>Terms & Conditions</span>
      </Link>
      <div className="w-full h-[.1rem] bg-[#ffffff28] "></div>
      <span className="mt-[1rem] text-[#ffffffaf] text-[.9rem] text-center">© 2024 <Link href={'https://www.brainstems.ai/'} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-bold !text-[#d5c3ff]" >BRAINSTEMS.AI</Link>  COMPANY. </span>
    </div>
  );
};

export default Footer;
