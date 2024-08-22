import Link from "next/link";
import React from "react";

interface Props {
  view: string;
}

const ActivationSingle = ({ view }: Props) => {
  const cardData = [
    {
      title: "Optimizing Product Mix for Sales",
      type: "Single",
      running: true,
      subtitle:
        "Our drink distribution process is designed for efficiency and customer satisfaction. We maintain a well-organized inventory and use advanced logistics to deliver quality beverages to your doorstep, all while keeping sustainability in mind.",
      tags: ["Places", "Sells", "Real Estate", "More"],
      availableShares: 900,
      deployments: 150,
      price: "0.5 USDC",
      id: 1,
    },
    {
      title: "Prioritizing Customers for Optimal Return from my Sales Team",
      type: "Single",
      running: false,
      subtitle:
        "Our drink distribution process is designed for efficiency and customer satisfaction. We maintain a well-organized inventory and use advanced logistics to deliver quality beverages to your doorstep, all while keeping sustainability in mind.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "2.5 USDC",
      id: 2,
    },
    {
      title: "Prioritizing Customers for Optimal Return from my Sales Team",
      type: "Single",
      running: false,
      subtitle:
        "Our drink distribution process is designed for efficiency and customer satisfaction. We maintain a well-organized inventory and use advanced logistics to deliver quality beverages to your doorstep, all while keeping sustainability in mind.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "2.5 USDC",
      id: 3,
    },
    {
      title: "Prioritizing Customers for Optimal Return from my Sales Team",
      type: "Single",
      running: false,
      subtitle:
        "Our drink distribution process is designed for efficiency and customer satisfaction. We maintain a well-organized inventory and use advanced logistics to deliver quality beverages to your doorstep, all while keeping sustainability in mind.",
      tags: ["Sales", "Team", "Customer", "More"],
      reservePrice: "2.5 USDC",
      id: 4,
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
                ? "flex flex-col px-4 py-5 h-[16rem] lg:min-w-[21rem] justify-between xl:min-w-[20rem] bg-[#fefefe] dark:bg-[#181818]"
                : "boxCards flex items-center justify-between overflow-x-scroll 3xl:overflow-x-hidden overflow-hidden h-[8rem] p-4 bg-[#fefefe] dark:bg-[#181818] w-full"
            }`}
          >
            <div
              className={`${
                view === "box"
                  ? "flex flex-col gap-2  "
                  : "flex flex-col-reverse min-w-[17rem] md:min-w-[25rem] w-full  "
              }   `}
            >
              <div className="font-semibold text-[14px] md:text-lg mb-2 leading-[130%]">
                {card.title}
              </div>
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
                className={` flex justify-between text-sm mb-2 items-start w-full pt-4 ${
                  view !== "list"
                    ? " border-t h-[4rem]  dark:border-[#353535]"
                    : " min-w-[30rem] md:min-w-[40rem]"
                }   `}
              >
                <div className="flex flex-col justify-between items-center text-center w-full text-[17px] font-semibold ">
                  {card.availableShares}
                  <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Available Shares
                  </span>
                </div>
                <div className="flex flex-col justify-between items-center text-center w-full text-[17px] font-semibold">
                  {card.deployments}
                  <span className="text-[15px] font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Deployments
                  </span>
                </div>
                <div className="flex flex-col justify-between items-center text-center w-full text-[17px] font-semibold">
                  {card.price}
                  <span className="text-[15px] px-4 font-normal text-[#818181] dark:text-[#c5c5c5]">
                    Starting Price
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
                    Reserve Price
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
