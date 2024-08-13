"use client";

import React from "react";
import { motion } from "framer-motion";
import "./_about.css";

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
        className="titleAbout text-[27px] sm:text-[35px] md:text-[2.8rem] font-[700] md:tracking-[-.5px] leading-[120%] md:leading-[120%] w-full md:w-[80%] text-center"
      >
        Do you want to see how you measure up against advanced AI?
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="text-[#f3f3f3] md:text-[17px] text-[16px] w-full md:w-[85%] lg:w-[75%] md:text-center md:leading-[160%] pl-[.8rem] md:pl-auto"
      >
        Engage in weekly prediction events for top European football leagues,
        compare your predictions with JedAI's AI-driven insights, and compete
        for a chance to win $STEMS tokens! With real-time updates and
        multi-league coverage, JedAI Football offers a thrilling and rewarding
        experience for football enthusiasts across Europe. Get started by
        joining our exclusive whitelist to participate in upcoming prediction
        events. Once you're in, select your matches, make your predictions, and
        see how they stack up against JedAI! With each correct prediction, you
        earn $STEMS tokens, adding real value to your football expertise. Don't
        miss out—secure your spot today and put your football knowledge to the
        test!
      </motion.p>
    </motion.div>
  );
};

export default About;
