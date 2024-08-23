import Link from "next/link";
import React from "react";

interface Props {
  view: string;
}

const ActivationFederated = ({ view }: Props) => {
  const cardData = [
    {
      title: "Player Eng. and Satisfaction ",
      type: "Federated",
      subtitle:
        "Player Engagement and Satisfaction Metrics using Gamer Profile:  Leveraging advanced deep-learning algorithms and predictive analytics, this AI model aggregates and analyzes data from multiple gaming platforms to create a comprehensive Global Gamer Profile. This profile includes player activities, preferences, and behaviors to offer insights that enhance personalized player experiences and boost satisfaction. ",
      tags: ["Gaming", "Engagement", "Gamer experience"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 1,
    },
    {
      title: "In-Game Economy and Rewards System",
      type: "Federated",
      subtitle:
        "Optimize virtual currency and reward distribution to enhance player engagement and retention.",
      tags: ["Gaming", "Engagement", "Gamer experience"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 1,
    },
    {
      title: "Seamless Onboarding and User Experience",
      type: "Federated",
      subtitle:
        "Streamline user onboarding and enhance overall experience for smooth, engaging interactions.",
      tags: ["Gaming", "Engagement", "Gamer experience"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 1,
    },
    {
      title: "Find whitespaces",
      type: "Federated",
      subtitle:
        "Identifies whitespace issues in data and records within the food & beverage sector, ensuring accuracy and operational efficiency.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 2,
    },
    {
      title: "Distributions of drinks",
      type: "Federated",
      subtitle:
        "Our drink distribution process is designed for efficiency and customer satisfaction. We maintain a well-organized inventory and use advanced logistics to deliver quality beverages to your doorstep, all while keeping sustainability in mind.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 3,
    },
    {
      title: "Precision Demand Forecasting",
      type: "Federated",
      subtitle:
        "Forecast demand with high accuracy to align supply with market needs.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 4,
    },
    {
      title: "Dynamic Menu Planning",
      type: "Federated",
      subtitle:
        "Plan dynamic menus based on real-time data and trends for better customer engagement.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 5,
    },
    {
      title: "Efficient Stock Replenishment",
      type: "Federated",
      subtitle:
        "Replenish stock efficiently with AI-driven insights to prevent shortages and overstock.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 6,
    },
    {
      title: "Seamless Order Coordination",
      type: "Federated",
      subtitle:
        "Coordinate orders seamlessly to improve fulfillment and operational efficiency.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 7,
    },
    {
      title: "Real-Time Ingredient Tracking",
      type: "Federated",
      subtitle:
        "Track ingredients in real-time to ensure freshness and reduce waste.",
      tags: ["Food service", "ACME+8", "Delivery", "More"],
      neurons: 4,
      expectedOutcomes: "+$200.000",
      availableShares: 200,
      pricePerShare: "4.5 $STEMS",
      id: 8,
    },
  ];

  return (
    <div
      className={`boxCards pr-2 relative max-h-[50rem] overflow-hidden overflow-y-scroll pb-[2rem] px-1 ${
        view === "box"
          ? "grid grid-cols-1 2sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
          : "flex flex-col gap-8"
      }`}
    >
      {cardData.map((card, index) => (
        <Link href={`/activations/federated/${card.id}`} key={index}>
          <div
            key={index}
            className={`card border shadow-md dark:border-[#353535] rounded-xl w-full relative ${
              view === "box"
                ? "flex flex-col px-4 py-5 h-[19rem]  lg:min-w-[20rem] bg-[#fefefe] dark:bg-[#181818]"
                : "boxCards flex items-center justify-between overflow-x-scroll 3xl:overflow-x-hidden overflow-hidden h-[11rem] p-4 bg-[#fefefe] dark:bg-[#181818] w-full"
            }`}
          >
            {view === "list" ? (
              <>
                <div className="flex items-center justify-between gap-4 ">
                  <div className="flex flex-col w-[25rem]  mt-4 h-full justify-between gap-2 ">
                    <div className="flex gap-2 h-full ">
                      <span className="bg-[#E6D2FF] dark:bg-[#c7bcf0] text-sm font-semibold text-[#141414] dark:text-[#141414] px-2 py-1 rounded-full">
                        {card.type}
                      </span>
                    </div>
                    <span className="font-semibold text-[16px]">
                      {card.title}
                    </span>
                    <p className="text-sm mb-4 text-[#141414] dark:text-[#d6d6d6] descriptionCardList w-full h-full ">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="flex gap-2 gap-y-0 border-l border-r  border-[#e0e0e0] dark:border-[#323232] px-8 h-[8rem] w-[17rem] justify-center items-center flex-wrap ">
                    {card.tags.slice(0, 3).map((tag: any, i: any) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-[#fefefee3] font-semibold text-sm text-gray-700 px-3 py-1 h-[1.7rem] rounded-lg overflow-hidden truncate"
                      >
                        {tag}
                      </span>
                    ))}
                    {card.tags.length > 3 && (
                      <span className="bg-gray-200  dark:bg-[#fefefee3] font-semibold text-sm text-gray-700 px-3 py-1  h-[1.7rem] rounded-lg">
                        +{card.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8 min-w-[28rem] ">
                  <div className="text-center">
                    <span className="font-semibold text-[18px]">
                      {card.availableShares}
                    </span>
                    <span className="block text-sm text-[#818181] dark:text-[#c5c5c5]">
                      Minimum Stake
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-[18px]">
                      {card.neurons}
                    </span>
                    <span className="block text-sm text-[#818181] dark:text-[#c5c5c5]">
                      Deployments
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-[18px]">
                      {card.pricePerShare}
                    </span>
                    <span className="block text-sm text-[#818181] dark:text-[#c5c5c5]">
                      Starting Price
                    </span>
                  </div>
                </div>
                <div className="text-[18px] font-bold h-full border-l min-w-[12rem] border-[#e0e0e0] dark:border-[#323232] px-[1.5rem] 3xl:px-[4rem] flex justify-center items-center pt-[1rem] flex-col text-center">
                  {card.pricePerShare}
                  <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5] leading-[130%]">
                    Per share
                  </span>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-between h-full">
                <div className="font-semibold text-xl mb-2">{card.title}</div>
                <div className="flex justify-between gap-2 w-full flex-nowrap ">
                  <span className="bg-[#E6D2FF] dark:bg-[#c7bcf0] text-sm font-semibold text-[#141414] dark:text-[#141414] px-2 flex justify-center items-center w-[6rem] h-[1.8rem] py-1 rounded-full">
                    {card.type}
                  </span>
                  <p className="text-sm mb-4 text-[#141414] dark:text-[#d6d6d6]  descriptionCard">
                    {card.subtitle}
                  </p>
                </div>
                <div className="flex gap-2 mb-4">
                  {card.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 font-semibold text-sm text-gray-700 h-[1.7rem] px-3 py-1 rounded-lg truncate"
                    >
                      {tag}
                    </span>
                  ))}
                  {card.tags.length > 3 && (
                    <span className="bg-gray-200 font-semibold text-sm text-gray-700 h-[1.7rem] px-2 py-1 rounded-lg">
                      +{card.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between text-sm mb-2 items-start w-full">
                  <div className="flex flex-col justify-between  gap-[.4rem] items-center text-center w-full text-[17px] font-semibold">
                    {card.neurons}
                    <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5] leading-[130%]">
                      Companies Involved
                    </span>
                  </div>
                  <div className="flex flex-col justify-between  gap-[.4rem] items-center text-center w-full text-[17px] font-semibold">
                    {card.expectedOutcomes}
                    <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5] leading-[130%]">
                      Expected Outcomes
                    </span>
                  </div>
                  <div className="flex flex-col justify-between gap-[.4rem] items-center text-center w-full text-[17px] font-semibold">
                    {card.availableShares}
                    <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5] leading-[130%]">
                      Minimum Stake
                    </span>
                  </div>
                </div>
                {/* <div className="text-[17px] font-bold border-t dark:border-[#353535] flex justify-center items-center pt-[1rem] flex-col">
                  {card.pricePerShare}
                  <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5] leading-[130%]">
                    Per share
                  </span>
                </div> */}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ActivationFederated;
