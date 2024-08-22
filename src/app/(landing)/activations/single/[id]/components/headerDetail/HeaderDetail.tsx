"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/app/ui/breadcrumb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/app/ui/tooltip";

interface Props {
  route: string;
}

const HeaderDetail = ({ route }: Props) => {
 
 
  return (
    <div className="w-full h-full relative gap-[2rem] flex flex-col">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trading Floor</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">{route}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row w-full gap-6 justify-start items-start md:items-center  md:mt-[2rem] ">
        <h2 className="md:text-[31px] text-[27px] font-bold leading-[130%] max-w-[30rem]" >
          {route}
        </h2>
        <div className=" flex gap-4">
          <div className="sm:px-6 px-3 py-2 flex gap-4 text-[14px] sm:text-[20px] text-[#141414] dark:text-[#141414] bg-[#E6D2FF] border rounded-full font-semibold leading-[130%]">
            Single Deployment
          </div>
          <div className="sm:px-6 px-3 py-2 flex gap-4 justify-center items-center text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50] dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0">
            Running
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-full flex-wrap gap-2 justify-start items-center ">
        <span className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Food Service
        </span>

        <span className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50] relative dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Opportunity Score
        </span>

        <span className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50] dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Sales
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <span className="text-[18px] font-semibold leading-[130%]">
          Description
        </span>
        <p className="text-[16px]  leading-[130%]">
          Find Whitespaces Federated deployment allows you to customize the
          influence of other participants based on your specific requirements
          and needs. This Deployment is part of the ACME + 8 Pathway.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[18px] font-semibold leading-[130%]">
          Deployments of this Activation
        </span>
        <p className="text-[16px]  leading-[130%]">
          The icons inside each deployment represent the specific stage within
          that deployment, so you are able to make informed selections and
          choices.
        </p>
        <p className="text-[16px]  leading-[130%]">
          To learn more about the icons.{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="underline font-[600] cursor-pointer hover:text-[#885dfd] transition-all duration-300">
                  hover here
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <div className="w-full px-1 pr-5 py-4 h-full flex gap-4 flex-col">
                  <div className="flex gap-2 ">
                    <img
                      src="/assets/icons/gear.svg"
                      alt="gear"
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                    <span>Configuration</span>
                  </div>
                  <div className="flex gap-2 ">
                    <img
                      src="/assets/icons/checkmark.svg"
                      alt="checkmark"
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                    <span>Test</span>
                  </div>
                  <div className="flex gap-2 ">
                    <img
                      src="/assets/icons/rocket.svg"
                      alt="rocket"
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                    <span>Deploy</span>
                  </div>
                  <div className="flex gap-2 ">
                    <img
                      src="/assets/icons/play.svg"
                      alt="play"
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                    <span>Operationalize</span>
                  </div>
                  <div className="flex gap-2 ">
                    <img
                      src="/assets/icons/Learn.svg"
                      alt="Learn"
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                    <span>Learn</span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>
    </div>
  );
};

export default HeaderDetail;
