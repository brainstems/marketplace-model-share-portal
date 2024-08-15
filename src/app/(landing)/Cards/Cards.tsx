"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { IntlProvider, FormattedDate, FormattedTime } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_cards.css";
import fontTitle from "next/font/local";

const title = fontTitle({
  src: "../../../../public/assets/fonts/ClashDisplayBold.woff",
});

// Utility function to convert Spain time (UTC+2) to local time
const convertToLocalTime = (dateStr: string, timeStr: string): Date => {
  const [day, month] = dateStr.split(" ");
  const [hour, minute] = timeStr.split(":").map(Number);

  // Create a date object in Spain time (UTC+2)
  const date = new Date(`${month} ${day}, 2024 ${hour}:${minute}:00 GMT+0200`); // Spain time

  // Get the user's local time zone offset
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = new Date(
    date.toLocaleString("en-US", { timeZone: localTimeZone })
  );

  return localDate;
};

interface CardProps {
  title: string;
  className: string;
  date: string;
  time: string;
}

const Card: React.FC<CardProps> = ({ title, className, date, time }) => {
  const localTime = convertToLocalTime(date, time);

  console.log(localTime);

  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
      }}
      className={` overflow-hidden ${className}`}
    >
      <div className=" absolute top-[1.4rem] right-[1.6rem]">
        <p className="font-bold text-[#fefefe] text-[1.1rem] backdrop-blur-[10px]">
           {date}
        </p>
      </div>
      <div className=" absolute bottom-[8.5rem] md:bottom-[6.5rem] w-[10rem] right-[-4rem] border border-[#797979] rounded-xl px-4 py-2 bg-[#00000049] backdrop-blur-[10px] border-r-0">
        <p className="text-[.9rem] font-semibold uppercase">
          <FormattedTime value={localTime} hour="2-digit" minute="2-digit" />
        </p>
      </div>

      <div className="text">
        <h1>{title}</h1>
      </div>
    </motion.div>
  );
};

const Cards: React.FC = () => {
  const [locale, setLocale] = useState<string>("en-US"); // Default locale

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setLocale(navigator.language);
    }
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    speed: 1500,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    centerMode: false,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1685,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardsData: CardProps[] = [
    {
      title: "Las Palmas vs Sevilla",
      className: "card card-1",
      date: "Fri, Aug 16",
      time: "21:30",
    },
    {
      title: "Milan vs Torino",
      className: "card card-2",
      date: "Sat, Aug 17",
      time: "20:45",
    },
    {
      title: "Man City vs Chelsea",
      className: "card card-3",
      date: "Sun, Aug 18",
      time: "17:30",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <IntlProvider locale={locale}>
      <div className="flex flex-col w-full">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex justify-center lg:justify-center items-center relative overflow-hidden px-[2rem] lg:px-[8rem] xl:px-[11rem]  mb-[3rem] "
        >
          <h3
            className={`${title.className} textPredictive text-[27px] sm:text-[35px] md:text-[2.8rem] font-[700] md:tracking-[-.5px] leading-[120%] md:leading-[120%] w-full md:w-[80%] text-center `}
          >
            Predictive Event Selections
          </h3>
        </motion.div>
        <Slider
          {...settings}
          className="max-h-[70rem] lg:max-h-[50rem] relative overflow-hidden p-[1rem] lg:!px-[7rem] xl:!px-[10rem]"
        >
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Slider>
      </div>
    </IntlProvider>
  );
};

export default Cards;
