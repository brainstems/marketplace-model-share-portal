"use client";

import React from "react";
import { motion } from "framer-motion";
import fontTitle from "next/font/local";

const title = fontTitle({
  src: "../../../../public/assets/fonts/ClashDisplayBold.woff",
});

interface CardData {
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    title: "Join the Whitelist",
    description:
      "To get started, sign up to join our exclusive whitelist. This gives you access to the upcoming football prediction events. With limited spots available, make sure to secure your place early!",
  },
  {
    title: "Select a Match",
    description:
      "Once you're on the whitelist, you'll be invited to participate in predictions for select matches from top European football leagues. We’ll notify you when it’s time to make your prediction.",
  },
  {
    title: "Make Your Prediction",
    description:
      "Predict the winner, watch the match with your friends or family and at the end of the game, see how you fared against the predictive power of JedAI.",
  },

  {
    title: "Claim Your Rewards",
    description:
      "If your predictions are correct, you’ll be rewarded with $STEMS tokens. These rewards will be airdropped directly to your wallet, providing real value for your football expertise.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
    },
  }),
};

const Card: React.FC<{
  titleCard: string;
  description: string;
  index: number;
}> = ({ titleCard, description, index }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    custom={index}
    viewport={{ once: true }}
    className="bg-[#0901188c] backdrop-blur-[10px] border border-[#272727] rounded-xl shadow-xl md:p-8 p-4 py-[2rem] flex justify-center items-center flex-col gap-2 text-center"
  >
    <h3
      className={` ${title.className} title_card md:text-[1.7rem] text-[1.3rem] font-bold mb-2 text-[#ececec] tracking-[1px] `}
    >
      {titleCard}
    </h3>
    <p className="text-[.95rem] md:text-[1rem] text-[#f1f1f1]">{description}</p>
  </motion.div>
);

const HowItWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg_how w-full flex justify-center lg:justify-start items-center flex-col relative overflow-hidden px-[1rem] lg:px-[8rem] xl:px-[11rem] mb-[4rem] gap-[2rem] mt-4"
    >
      <h3
        className={`${title.className} titleAbout text-[27px] sm:text-[35px] md:text-[2.8rem] font-[700] md:tracking-[-.5px] leading-[120%] md:leading-[120%] w-full md:w-[80%] text-center `}
      >
        How It Works
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-[1rem]"
      >
        {cardData.map((data, index) => (
          <Card
            key={index}
            titleCard={data.title}
            description={data.description}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HowItWork;
