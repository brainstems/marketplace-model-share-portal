"use client";

import React from "react";
import { motion } from "framer-motion";
import Form from "./Form/Form";
import "./_whitelist.css";

 
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Whitelist = () => {
  return (
    <div className="white flex flex-col gap-4 w-full min-h-[100vh] relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative w-full h-full flex justify-center items-center mt-[9rem] px-4"
      >
        <Form />
      </motion.div>
    </div>
  );
};

export default Whitelist;
