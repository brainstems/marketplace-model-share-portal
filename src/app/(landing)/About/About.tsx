"use client";

import React from "react";
import { motion } from "framer-motion";
import "./_about.css";
import fontTitle from "next/font/local";

const title = fontTitle({
  src: "../../../../public/assets/fonts/ClashDisplayBold.woff",
});

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

const About = () => {
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex justify-center lg:justify-start items-center flex-col relative overflow-hidden px-[1.5rem] lg:px-[8rem] xl:px-[11rem] mb-[4rem] gap-[2rem]"
    >
      <motion.h3
        variants={itemVariants}
        className={`${title.className} titleAbout text-[27px] sm:text-[35px] md:text-[2.8rem] font-[700] md:tracking-[-.5px] leading-[120%] md:leading-[120%] w-full md:w-[80%] text-center `}
      >
        Predict The Future with JedAI
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="text-[#f3f3f3] md:text-[17px] text-[16px] w-full md:w-[85%] lg:w-[75%] md:text-center md:leading-[160%] pl-[.8rem] md:pl-auto"
      >
        To celebrate the launch of the Sports Brainstem. We invite you to engage
        in weekly prediction events for top global football leagues, and compete
        for a chance to win $STEMS tokens! JedAI Football offers a thrilling and
        rewarding experience for football enthusiasts around the world. Get
        started by joining our exclusive whitelist to participate in upcoming
        prediction events. Once you&apos;re in, select your matches, and make your
        predictions. With each correct prediction, you earn $STEMS tokens,
        adding real value to your football expertise.
      </motion.p>
    </motion.div>
  );
};

export default About;
