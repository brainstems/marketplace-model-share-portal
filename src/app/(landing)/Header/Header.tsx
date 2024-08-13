import CarouselHero from "@/app/ui/CarouselHero/CarouselHero";
import React from "react";
import "./_header.css";
import Link from "next/link";
import Button from "@/app/ui/Button/Button";

const Header = () => {
  return (
    <div className="header relative w-full min-h-[100vh] top-[-5rem] bg-[#00082F] flex justify-center items-center flex-col">
      <div className="flex flex-col gap-2 justify-center items-center top-[-7rem] relative text-center px-4 ">
        <h1 className=" text-[35px] sm:text-[40px]  md:text-[64px] font-[900] tracking-[-.5px] sm:tracking-[-1px] md:tracking-[-2px] leading-[120%] ">
          Unlock the Power of JedAi
        </h1>
        <span className="text-[18px] md:text-[24px]">
          Experience the Future of AI with Early Access
        </span>
      </div>
      <Link href={"/whitelist"}>
        <Button title="Join Whitelist" className=" top-[-3rem]  px-[3rem]" />
      </Link>
    </div>
  );
};

export default Header;
