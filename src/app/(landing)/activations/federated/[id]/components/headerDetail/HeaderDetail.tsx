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
            <BreadcrumbLink href="/">BMS Portal</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">{route}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row w-full gap-6 justify-start items-start md:items-center  mt-[2rem] ">
         <h2 className="md:text-[31px] text-[27px] font-bold leading-[130%]">
          Find whitespaces
        </h2>
        <div className="sm:px-6 px-3 py-2 flex gap-4 text-[14px] lg:text-[20px] text-[#141414] dark:text-[#141414] bg-[#E6D2FF] border rounded-full font-semibold leading-[130%]">
            Federated Deployment
          </div>
      </div>

      <div className="flex flex-row w-full h-full flex-wrap gap-2 justify-start items-center">
        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Food Service
        </div>

        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          ACME+8
        </div>

        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Delivery
        </div>

        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Distribution
        </div>

        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Water
        </div>
        <div className="px-6 py-2 flex gap-4 text-[12px] md:text-[16px] text-[#141414] dark:text-[#141414] bg-[#DDDDDD50]  dark:bg-[#d8d8d8] rounded-full leading-[130%] font-semibold border dark:border-0 truncate">
          Food & Drinks
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[18px] font-semibold leading-[130%]">
          Description
        </span>
        <p className="text-[16px]  leading-[130%]">
          Find Whitespaces Federated deployment allows you to customize the
          influence of other participants based on your specific requirements
          and needs. This Deployment is part of the ACME + 8 Pathway.
        </p>
      </div>
    </div>
  );
};

export default HeaderDetail;
