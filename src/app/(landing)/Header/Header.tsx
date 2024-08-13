"use client";

import React from "react";
import "./_header.css";
import Link from "next/link";
import Button from "@/app/ui/Button/Button";
import { motion } from "framer-motion";
import fontTitle from 'next/font/local'

const title = fontTitle({ src: '../../../../public/assets/fonts/ClashDisplayBold.woff' })
 

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const Header = () => {
  return (
    <div className="header relative w-full min-h-[100vh] top-[-5rem] bg-[#00082F] flex justify-center items-center flex-col ">
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-2 justify-center items-center top-[-7rem] relative text-center px-4"
      >
        <motion.h1
          variants={itemVariants}
          className={` ${title.className} titleHead text-[35px] sm:text-[40px] md:text-[69px] font-[900] tracking-[-.5px] sm:tracking-[-1px] leading-[120%] `}
        >
          Unlock the Power of JedAi
        </motion.h1>
        <motion.span
          variants={itemVariants}
          className="text-[18px] md:text-[24px]"
        >
          Experience the Future of AI with Early Access
        </motion.span>

        <motion.div className=" relative top-[2rem]"   variants={itemVariants}>
          <Link href={"/whitelist"}>
            <Button title="Join Whitelist" className="px-[3rem]" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
