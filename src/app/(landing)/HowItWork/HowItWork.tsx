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
];

const cardData2: CardData[] = [
  {
    title: "Make Your Prediction",
    description: ` `,
  },
];

const cardData3: CardData[] = [
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
    className="bg-[#0901188c] backdrop-blur-[10px] border border-[#272727] rounded-xl shadow-xl md:p-8 p-4 py-[2rem] flex justify-between items-center flex-col gap-2 text-center w-full flex-1"
  >
    <h3
      className={` ${title.className} title_card md:text-[1.8rem] text-[1.3rem] font-bold mb-2 text-[#ececec] tracking-[1px] `}
    >
      {titleCard}
    </h3>
    <p className="text-[.95rem] md:text-[18px] text-[#f1f1f1]">{description}</p>
  </motion.div>
);

const CardStep: React.FC<{
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
    className="  py-[2rem] flex justify-between items-center flex-col gap-2 text-center  w-full relative "
  >
    <h3
      className={` ${title.className} title_card md:text-[1.8rem] text-[1.3rem] font-bold mb-[2.5rem] text-[#ececec] tracking-[1px] `}
    >
      {titleCard}
    </h3>
    <div className=" w-full ">
      <div className="text-[.95rem] md:text-[18px] text-[#f1f1f1]">
        {titleCard !== "Make Your Prediction" ? (
          description
        ) : (
          <div className="flex justify-between items-start gap-4 w-full h-full flex-col lg:flex-row  ">
            <div className=" flex gap-3 flex-col justify-start items-start w-full bg-[#0901188c] backdrop-blur-[10px] border border-[#272727] rounded-xl shadow-xl md:p-8 p-4 py-[2rem]  lg:min-h-[22rem] xl:min-h-[25rem] 2xl:min-h-[24rem] 3xl:min-h-[19rem]">
              <span
                className={` ${title.className} title_card md:text-[1.4rem] text-[1.1rem] text-start font-bold mb-2 text-[#ececec] tracking-[1px] `}
              >
                Step 1: Connecting with a Wallet on the Y-List
              </span>
              <ul className="flex gap-3 flex-col justify-between items-start w-full text-start text-[.95rem] md:text-[18px] text-[#f1f1f1]">
                <li>
                  Try to Connect: Attempt to connect using a wallet. If the
                  wallet is not on the Y-list, you will receive a message
                  stating that connection is not possible.
                </li>
                <li>
                  Switch Wallets: Disconnect and then reconnect using a wallet
                  that is on the Y-list. You should now be able to connect
                  successfully.
                </li>
              </ul>
            </div>

            <div className=" flex gap-3 flex-col  justify-start items-start w-full  bg-[#0901188c] backdrop-blur-[10px] border border-[#272727] rounded-xl shadow-xl md:p-8 p-4 py-[2rem] lg:min-h-[22rem] xl:min-h-[25rem] 2xl:min-h-[24rem] 3xl:min-h-[19rem] text-center">
              <span
                className={` ${title.className} title_card md:text-[1.4rem] text-[1.1rem] text-start font-bold mb-2 text-[#ececec] tracking-[1px] `}
              >
                Step 2: Interacting with Predictions
              </span>
              <ul className="flex gap-3 flex-col h-full justify-between items-start w-full text-start text-[.95rem] md:text-[18px] text-[#f1f1f1]">
                <li>
                  Receive and Respond to Predictions: After connecting, you will
                  receive a prediction. You can choose to either accept or
                  reject it.
                </li>
                <li>
                  Handle Rejected Predictions: If you reject a prediction, a new
                  one will be provided. You can repeat this process without
                  limit. Once you accept a prediction, it will be registered,
                  and you will receive a message indicating that no further
                  predictions can be obtained until the next day.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const HowItWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg_how w-full flex justify-center lg:justify-start items-center flex-col relative overflow-hidden px-[1rem] lg:px-[8rem] xl:px-[11rem] mb-[4rem] lg:mb-[12rem] gap-[2rem] mt-[4rem] "
    >
      <h3
        className={`${title.className} titleAbout text-[27px] sm:text-[35px] md:text-[2.8rem] font-[700] md:tracking-[-.5px] leading-[120%] md:leading-[120%] w-full md:w-[80%] text-center mb-6 `}
      >
        How It Works
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-[1rem] w-full"
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

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1  gap-6 px-[1rem] w-full"
      >
        {cardData2.map((data, index) => (
          <CardStep
            key={index}
            titleCard={data.title}
            description={data.description}
            index={index}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1  gap-6 px-[1rem] w-full "
      >
        {cardData3.map((data, index) => (
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
