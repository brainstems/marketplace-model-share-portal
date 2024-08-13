"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./_carouselHero.css";

interface CarouselItemProps {
  imgSrc: string;
  subtitle: string;
  description: string;
}

const CarouselHero: React.FC = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1500,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    centerMode: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  const carouselItems: CarouselItemProps[] = [
    {
      imgSrc: "/assets/image/CarouselHeroImgs/img1.webp",
      subtitle:
        "Transform your business’s native intelligence into revenue producing action",
      description:
        "Unlocks new value for manufacturers, distributors and brokers ",
    },
    {
      imgSrc: "/assets/image/CarouselHeroImgs/img2.webp",
      subtitle: "Make every action count toward growth and profit",
      description: "Enhance Workflow and Reduce Operational Costs",
    },
    {
      imgSrc: "/assets/image/CarouselHeroImgs/img5.webp",
      subtitle: "Simplify business complexity with",
      description: "Ask and answer the questions that drive success",
    },
  ];

  return (
    <Slider
      {...settings}
      className="max-h-[70rem] lg:max-h-[50rem] relative overflow-hidden"
    >
      <div className="p-[1rem] relative !outline-none !select-none  ">
        <img
          src={carouselItems[0].imgSrc}
          alt={carouselItems[0].subtitle}
          className="boxslider w-full h-[40rem] lg:h-[100%] lg:max-h-[40rem] 3xl:max-h-[48rem] rounded-[40px] !object-cover outline-none select-none pointer-events-none relative top-0 z-[1]"
        />
        <div className="absolute top-[-2rem] z-[999999] gap-[2rem] w-full h-full flex justify-center items-center flex-col left-[0rem] lg:left-0">
          <div className="flex justify-center items-center flex-col w-full relative mb-[1rem]">
            <span className="text-[1.5rem] leading-[120%]">Introducing</span>
            <img
              src="/assets/image/logoFoodSmarts.svg"
              alt="logo"
              className="w-[250px] lg:w-[450px]"
            />
          </div>
          <div className="flex justify-center items-center flex-col w-full">
            <span className="text-[1.27rem] lg:text-[3rem] font-bold w-[85vw] 2sm:w-[35rem] lg:w-[65rem] text-center leading-[130%] mb-2">
              {carouselItems[0].subtitle}
            </span>
            <span className="text-[1rem] px-[1rem] md:px-0 lg:text-[1.3rem] font-medium text-center">
              {carouselItems[0].description}
            </span>
          </div>
          <button className="buttonCarrousel bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full py-3 px-4 cursor-pointer relative ">
            Schedule a Demo
          </button>
        </div>
      </div>

      <div className="p-[1rem] relative !outline-none !select-none pointer-events-none">
        <img
          src={carouselItems[1].imgSrc}
          alt={carouselItems[1].subtitle}
          className="boxslider w-full h-[40rem] lg:h-[100%] lg:max-h-[40rem] 3xl:max-h-[48rem] rounded-[40px] !object-cover outline-none select-none pointer-events-none relative top-0 z-[1]"
        />
        <div className="absolute top-[-1rem] z-[99999] gap-[2rem] w-full h-full flex justify-center items-center flex-col left-[0rem] lg:left-0">
          <div className="flex justify-start gap-[2rem] items-start flex-col w-full  left-[2rem] sm:left-[4rem] lg:left-[10rem] relative top-[-6rem]">
            <span className="text-[1.27rem] lg:text-[3.4rem] font-bold w-[85vw] 2sm:w-[35rem] lg:w-[50rem] text-start leading-[130%] mb-2">
              {carouselItems[1].subtitle}
            </span>

            <div className="text-[1rem] w-[full] lg:text-[1.3rem] font-medium text-start flex justify-start items-start flex-col gap-6">
              <div className="flex justify-center items-center gap-2 ">
                <span className=" w-[1.5rem] h-[1.5rem]  sm:w-[2rem] sm:h-[2rem] relative border-2 border-[#27D1C3] rounded-full"></span>
                <span className="text-[1rem] w-[full] lg:text-[1.3rem] font-medium text-start">
                  {" "}
                  Know what actions to take now
                </span>
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <span className=" w-[1.5rem] h-[1.5rem]  sm:w-[2rem] sm:h-[2rem] relative border-2 border-[#27D1C3] rounded-full"></span>

                <span className="text-[1rem] w-[full] lg:text-[1.3rem] font-medium text-start">
                  {" "}
                  Empower productivity at every level
                </span>
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <span className=" w-[1.5rem] h-[1.5rem]  sm:w-[2rem] sm:h-[2rem] relative border-2 border-[#27D1C3] rounded-full"></span>

                <span className="text-[1rem] w-[full] lg:text-[1.3rem] font-medium text-start">
                  Unlock unbelievable revenue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[1rem] relative !outline-none !select-none pointer-events-none">
        <img
          src={carouselItems[2].imgSrc}
          alt={carouselItems[2].subtitle}
          className="boxslider w-full h-[40rem] lg:h-[100%] lg:max-h-[40rem] 3xl:max-h-[48rem] rounded-[40px] !object-cover outline-none select-none pointer-events-none relative top-0 z-[1]"
        />
        <div className="absolute top-[-2rem] z-[99999] gap-[2rem] w-full h-full flex justify-center items-center flex-col left-[0rem] lg:left-0">
          <div className="flex justify-center items-center flex-col w-full">
            <span className="text-[1.27rem] lg:text-[3.4rem] font-bold w-[85vw] 2sm:w-[35rem] lg:w-[65rem] text-center leading-[130%] mb-2">
              {carouselItems[2].subtitle}
            </span>
            <img
              src="/assets/image/logoFoodSmarts.svg"
              alt="logo"
              className="w-[250px] lg:w-[450px]"
            />

            <span className="text-[1rem] px-[2rem] md:px-0 lg:text-[1.3rem] mt-[1.3rem] font-medium text-center">
              {carouselItems[2].description}
            </span>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselHero;
