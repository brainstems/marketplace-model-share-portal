import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/app/ui/breadcrumb";

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
         <h2 className="md:text-[31px] text-[27px] font-bold leading-[130%]  max-w-[30rem]">
          {route}
        </h2>
        <div className="sm:px-6 px-3 py-2 flex gap-4 text-[14px] lg:text-[20px] text-[#141414] dark:text-[#141414] bg-[#E6D2FF] border rounded-full font-semibold leading-[130%]">
            Federated Deployment
          </div>
      </div>

      <div className="flex flex-row w-full h-full flex-wrap gap-2 justify-start items-center">
        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Gaming
        </div>

        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Engagement
        </div>

        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Global experience
        </div>

      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[18px] font-semibold leading-[130%]">
          Description
        </span>
        <p className="text-[16px]  leading-[130%]">
          Player Engagement and Satisfaction Metrics using Gamer Profile:  Leveraging advanced deep-learning algorithms and predictive analytics, this AI model aggregates and analyzes data from multiple gaming platforms to create a comprehensive Global Gamer Profile. This profile includes player activities, preferences, and behaviors to offer insights that enhance personalized player experiences and boost satisfaction. 
        </p>
      </div>
    </div>
  );
};

export default HeaderDetail;
