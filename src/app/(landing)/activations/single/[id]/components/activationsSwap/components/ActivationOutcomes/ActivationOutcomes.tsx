import React from "react";

const ActivationOutcomes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[2rem] w-full h-full md:mt-[4rem]">
      <div className="flex flex-col gap-2   py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50]">
        <strong className="text-[16px]">USD 15 billion</strong>
        <strong className="text-[16px]">Size of Market</strong>
        <span>
          With expansion capabilities across numerous industries possessing a
          product portfolio. 
        </span>
      </div>
      <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50]">
        <strong className="text-[16px]">USD 2 billion</strong>
        <strong>Projected yearly revenue</strong>
        <span>
          In Year 1, scaling to USD 10 million by Year 3 with market penetration
          and expansion. 
        </span>
      </div>
      <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50] lg:border-r-0">
        <strong className="text-[16px]">USD 500,000</strong>
        <strong className="text-[16px]">
          Projected payments to token holders (per year)
        </strong>
        <span>This will be distributed among token stakers annually. </span>
      </div>
    </div>
  );
};

export default ActivationOutcomes;
