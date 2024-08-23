import React from "react";

const TechnicalAspects = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[2rem] w-full h-full md:mt-[4rem]">
        <div className="flex flex-col gap-2   py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50]">
          <img
            src="/assets/icons/brain.svg"
            alt="brain"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">Base Models</strong>
          <span>
            Unprecedented data access enables operator level predictive models
            for 3.5 million food outlets
          </span>
        </div>
        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed 2md:border-r-0 dark:border-[#fefefe50]">
          <img
            src="/assets/icons/userGroup.svg"
            alt="user Group"
            className="w-[2rem] h-[2rem]"
          />
          <strong>2 Intelligent Activators</strong>
          <span>Focused on data scraping and trend analysis</span>
        </div>
        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50] lg:border-r-0">
          <img
            src="/assets/icons/tasks.svg"
            alt="tasks"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">Tasks & Capabilities</strong>
          <span>
            Data analysis, prediction modeling, and recommendation generation.
          </span>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed 2md:border-r-0 dark:border-[#fefefe50]">
          <img
            src="/assets/icons/userSpeak.svg"
            alt="user Speak"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">3 Large Language Models</strong>
          <span>For analyzing customer reviews and feedback</span>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50]">
          <img
            src="/assets/icons/tuning.svg"
            alt="tuning"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">Fine-tuning</strong>
          <span>On Retail and E-Commerce terminology</span>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed 2md:border-r-0 dark:border-[#fefefe50] lg:border-r-0">
          <img
            src="/assets/icons/network.svg"
            alt="network"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">4 AI Predictive Models</strong>
          <span>Based on ML and deep-learning</span>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50]">
          <img
            src="/assets/icons/chart.svg"
            alt="chart"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">5 Analytic Types</strong>
          <span>
            Predictive, descriptive, diagnostic, prescriptive and exploratory
          </span>
        </div>
        <div className="flex flex-col gap-2 border-t py-6 md:border-r md:border-t-0 px-3 md:py-2 border-dashed 2md:border-r-0 dark:border-[#fefefe50]">
          <img
            src="/assets/icons/chart2.svg"
            alt="chart"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">10 Data Sources</strong>
          <span>From market trends, sales history and customer feedback.</span>
        </div>
        <div className="flex flex-col gap-2 border-t py-6 md:border-r lg:border-r-0 md:border-t-0 px-3 md:py-2 border-dashed dark:border-[#fefefe50]">
          <img
            src="/assets/icons/linesColumns.svg"
            alt="lines"
            className="w-[2rem] h-[2rem]"
          />
          <strong className="text-[16px]">Other Data</strong>
          <span>
            Public databases, surveys, customer interaction platforms and sales
            portals
          </span>
        </div>
      </div>

      <div className="flex gap-4 w-full relative cursor-pointer justify-end items-center mt-[3rem] hover:underline">
        <strong className="text-[18x]">Smart Contract Verification </strong>
        <img
          src="/assets/icons/arrowRightxs.svg"
          alt="arrow"
          className="block dark:hidden"
        />
        <img
          src="/assets/icons/arrowRightxsWhite.svg"
          alt="arrow"
          className="hidden dark:block"
        />
      </div>
    </div>
  );
};

export default TechnicalAspects;
