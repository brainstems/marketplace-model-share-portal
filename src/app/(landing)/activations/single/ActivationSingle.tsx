import Link from "next/link";
import React from "react";

interface Props {
  view: string;
}

const ActivationSingle = ({ view }: Props) => {
  const cardData = [
    {
      title: "Player Engagement and Satisfaction ",
      type: "Single",
      running: true,
      subtitle:
        "Player Engagement and Satisfaction Metrics using Gamer Profile:  Leveraging advanced deep-learning algorithms and predictive analytics, this AI model aggregates and analyzes data from multiple gaming platforms to create a comprehensive Global Gamer Profile. This profile includes player activities, preferences, and behaviors to offer insights that enhance personalized player experiences and boost satisfaction. ",
      tags: ["Gaming", "Engagement", "Gamer experience"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      deployments: 150,
      price: "1000 $STEMS",
      id: 1,
    },
    {
      title: "Optimizing Product Mix for Sales",
      type: "Single",
      running: true,
      subtitle:
        "Enhance sales by optimizing product mix based on performance data and trends.",
      tags: ["Places", "Sells", "Real Estate", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      availableShares: 300,
      deployments: 350,
      price: "600 $STEMS",
      id: 2,
    },
    {
      title: "Prioritizing Customers for Optimal Return from my Sales Team",
      type: "Single",
      running: true,
      subtitle:
        "Focus on high-value customers to maximize returns with targeted sales strategies.",
      tags: ["Sales", "Team", "Customer", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      reservePrice: "400 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 3,
    },
    {
      title: "Identifying Where to Sell My Seasonal or Holiday Product (s)",
      type: "Single",
      running: true,
      subtitle:
        "Determine the best sales channels for seasonal or holiday products using data insights.",
      tags: ["Sales", "Team", "Customer", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      reservePrice: "1200 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 4,
    },
    {
      title: "Smart Inventory Optimization",
      type: "Single",
      running: true,
      subtitle:
        "Optimize inventory with AI to maintain optimal stock levels and reduce excess.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "1500 $STEMS",
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 5,
    },
    {
      title: "Advanced Supply Chain Analysis",
      type: "Single",
      running: true,
      subtitle:
        "Analyze and enhance your supply chain for better efficiency and cost savings.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "100 $STEMS",
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 6,
    },
    {
      title: "Innovative Recipe Management",
      type: "Single",
      running: true,
      subtitle:
        "Manage recipes creatively with tools to improve and streamline culinary processes.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "400 $STEMS",
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 7,
    },
    {
      title: "Comprehensive Quality Assurance",
      type: "Single",
      running: true,
      subtitle:
        "Ensure product quality with in-depth analysis and management solutions.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "800 $STEMS",
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 8,
    },
    {
      title: "Strategic Purchase Planning",
      type: "Single",
      running: true,
      subtitle:
        "Plan purchases strategically with AI to optimize spending and inventory levels.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "1700 $STEMS",
      neurons: 4,
      expectedOutcomes: "+$200.000",
      pricePerShare: "4.5 $STEMS",
      availableShares: 200,
      deployments: 150,
      price: "1000 $STEMS",
      id: 9,
    },
  ];

  return (
    <div
      className={`boxCards pr-2 relative max-h-[50rem] overflow-hidden overflow-y-scroll pb-[2rem] px-1 ${
        view === "box"
          ? "grid grid-cols-1 2sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4"
          : "flex flex-col gap-8"
      }`}
    >
      {cardData.map((card, index) => (
        <Link href={`/activations/single/${card.id}`} key={index}>
          <div
            key={index}
            className={`card shadow-md border dark:border-[#353535] rounded-xl w-full relative  ${
              view === "box"
                ? `flex flex-col px-4 py-5 h-[23rem]  lg:min-w-[21rem] justify-between xl:min-w-[20rem] bg-[#fefefe] dark:bg-[#181818] `
                : `boxCards flex items-center justify-between overflow-x-scroll 3xl:overflow-x-hidden overflow-hidden  p-4 bg-[#fefefe] dark:bg-[#181818] w-full ${
                    card.running ? "h-[12rem]" : "h-[9rem]"
                  } `
            }`}
          >
            <div
              className={`${
                view === "box"
                  ? "flex flex-col gap-2  "
                  : "flex flex-col min-w-[17rem] md:min-w-[25rem] w-full pr-4 pt-3  "
              }   `}
            >
              <span className="font-semibold text-[20px] min-h-[4rem]  realtive">{card.title}</span>
              <p
                className={`text-sm mb-4 text-[#141414] dark:text-[#d6d6d6] w-full h-full ${
                  view === "list" ? " descriptionCardList" : "descriptionCard "
                } `}
              >
                {card.subtitle}
              </p>
              {card.running && (
                <div className="flex  items-center mb-4 gap-[1rem]">
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      card.running
                        ? "bg-[#E6D2FF] dark:bg-[#c7bcf0] text-[#141414] dark:text-[#141414]"
                        : "bg-[#9E005920] dark:bg-[#FDD5D5]  text-[#050505]"
                    }`}
                  >
                    {card.type}
                  </span>

                  <span className="bg-gray-200 dark:bg-[#fefefee3] font-semibold text-sm text-gray-700 px-3 py-1 h-[1.7rem] rounded-full">
                    Running
                  </span>
                </div>
              )}
            </div>

            <div
              className={`flex gap-2 mb-4 ${
                view === "list" &&
                "flex gap-2 gap-y-0 border-l border-r border-[#e0e0e0] dark:border-[#323232] px-[2rem] h-[5rem] min-w-[20rem] justify-center items-center flex-wrap mb-0 "
              }`}
            >
              {card.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-[#fefefee3] font-semibold text-sm text-gray-700 px-3 py-1 rounded-lg truncate"
                >
                  {tag}
                </span>
              ))}
              {card.tags.length > 3 && (
                <span className="bg-gray-200 dark:bg-[#fefefee3] font-semibold text-sm text-gray-700 px-3 py-1 rounded-lg">
                  +{card.tags.length - 3}
                </span>
              )}
            </div>

            {card.running ? (
              <div
                className={` flex justify-between relative text-sm mb-2 items-start w-full pt-4 ${
                  view !== "list"
                    ? " border-t h-[4rem]  dark:border-[#353535]"
                    : " min-w-[30rem] md:min-w-[40rem]"
                }   `}
              >
                <div className="flex flex-col min-w-[6rem] justify-between items-center text-center w-full text-[17px] font-semibold ">
                  {card.availableShares}
                  <span className="text-[14px] font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Available Shares
                  </span>
                </div>
                <div className="flex flex-col min-w-[6rem] justify-between items-center text-center w-full text-[17px] font-semibold">
                  {card.deployments}
                  <span className="text-[14px] font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Deployments
                  </span>
                </div>
                <div className="flex flex-col min-w-[7rem] justify-between items-center text-center w-full text-[16px] font-semibold">
                  {card.price}
                  <span className="text-[14px] px-4 font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Minimum Stake
                  </span>
                </div>
              </div>
            ) : (
              <div
                className={`flex  text-sm mb-2 w-full h-[4rem] ${
                  view !== "list"
                    ? "border-t dark:border-[#353535]  justify-between items-center"
                    : "px-[2rem] justify-end items-center min-w-[25rem] md:min-w-[40rem]"
                } `}
              >
                {!card.running && (
                  <div className="flex w-full gap-4 pt-4">
                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded-full ${
                        card.running
                          ? "bg-[#E6D2FF] dark:bg-[#c7bcf0] text-[#141414] dark:text-[#141414]"
                          : "bg-[#9E005920] dark:bg-[#FDD5D5]  text-[#050505]"
                      }`}
                    >
                      {card.type}
                    </span>

                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded-full  bg-[#33B46920] dark:bg-[#d5fddc]  text-[#050505] `}
                    >
                      Proposal
                    </span>
                  </div>
                )}

                <div className="flex flex-col justify-between items-center text-center w-full text-[17px] font-semibold pt-4">
                  {card.reservePrice}
                  <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Minimum Stake
                  </span>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ActivationSingle;
