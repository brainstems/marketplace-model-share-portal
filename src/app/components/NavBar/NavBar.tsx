import Link from "next/link";

interface Props {
  className?: string;
  login?: boolean;
}

const NavBar = ({ className, login }: Props) => {
  return (
    <div
      className={`w-full relative bg-[#0000000]  z-[99999] h-[4rem] flex justify-between items-center px-[1rem] md:px-[4rem] py-[3rem]  ${className}`}
    >
       <Link href={'/'}>
        <div className=" flex justify-center items-center w-full h-full flex-col gap-2 top-0 left-0 absolute">
          <img
            src="/assets/image/logo.svg"
            alt="logo"
          />
        </div>
      </Link>
      
    </div>
  );
};

export default NavBar;


/* 
"use client";

import Button from "@/app/ui/Button/Button";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  login?: boolean;
}

const NavBar = ({ className, login }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={`w-full relative bg-[#0000000] z-[99999] h-[4rem] flex justify-between items-center px-[1rem] md:px-[4rem] py-[3rem]  ${className}`}
    >
      <Link href={"https://jedai-app.brainstems.ai/"} target="_blank" rel="noopener noreferrer">
        <img src="/assets/image/logo.svg" alt="logo" />
      </Link>

      <Link href={"/whitelist"}>
        <Button
          title="Whitelist"
          className="px-[2.5rem] py-[.6rem] !text-[1rem]"
        />
      </Link>
    </motion.div>
  );
};

export default NavBar;

*/