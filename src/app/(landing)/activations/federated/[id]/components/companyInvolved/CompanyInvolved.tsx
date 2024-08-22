import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/app/ui/accordion";

const CompanyInvolved = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[18px] font-semibold leading-[130%]">
        Companies Involved
      </span>

      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        <AccordionItem
          value="item-1"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold  gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/companies.svg"
              alt="chart"
              className="w-[2rem] absolute left-9"
            />
            Main Beverage Company based on US
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex gap-3 flex-col list-disc list-inside py-[.5rem]">
              <li className="text-[16px] flex gap-4">
                Identifying Where to Sell My Product(s){" "}
                <div className="flex gap-2">
                  <img src="/assets/icons/gear.svg" alt="gear" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Configuration
                  </span>
                </div>
              </li>
              <li className="text-[16px] flex gap-4">
                Prioritizing Customers for Optimal Return from my Sales Team
                <div className="flex gap-2">
                  <img src="/assets/icons/play.svg" alt="play" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Operationalize
                  </span>
                </div>
              </li>
              <li className="text-[16px] flex gap-4">
                Identifying Where to Sell My Seasonal or Holiday Product (s)
                <div className="flex gap-2">
                  <img src="/assets/icons/rocket.svg" alt="rocket" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Deploy
                  </span>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold  gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/companies.svg"
              alt="chart"
              className="w-[2rem] absolute left-9"
            />
            Sparkling Water Company
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex gap-3 flex-col list-disc list-inside py-[.5rem]">
              <li className="text-[16px] flex gap-4">
                Identifying Where to Sell My Product(s){" "}
                <div className="flex gap-2">
                  <img src="/assets/icons/gear.svg" alt="gear" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff] font-semibold">
                    Configuration
                  </span>
                </div>
              </li>
              <li className="text-[16px] flex gap-4">
                Prioritizing Customers for Optimal Return from my Sales Team
                <div className="flex gap-2">
                  <img src="/assets/icons/play.svg" alt="play" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Operationalize
                  </span>
                </div>
              </li>
              <li className="text-[16px] flex gap-4">
                Identifying Where to Sell My Seasonal or Holiday Product (s)
                <div className="flex gap-2">
                  <img src="/assets/icons/rocket.svg" alt="rocket" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Deploy
                  </span>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold  gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/companies.svg"
              alt="chart"
              className="w-[2rem] absolute left-9"
            />
            Top Food & Drinks Delivery Company{" "}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex gap-3 flex-col list-disc list-inside py-[.5rem]">
              <li className="text-[16px] flex gap-4">
                Identifying Where to Sell My Product(s){" "}
                <div className="flex gap-2">
                  <img src="/assets/icons/gear.svg" alt="gear" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff] font-semibold">
                    Configuration
                  </span>
                </div>
              </li>
              <li className="text-[16px] flex gap-4">
                Prioritizing Customers for Optimal Return from my Sales Team
                <div className="flex gap-2">
                  <img src="/assets/icons/play.svg" alt="play" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Operationalize
                  </span>
                </div>
              </li>
              <li className="text-[16px] flex gap-4">
                Identifying Where to Sell My Seasonal or Holiday Product (s)
                <div className="flex gap-2">
                  <img src="/assets/icons/rocket.svg" alt="rocket" />
                  <span className="text-[14px] text-[#39137A] dark:text-[#ad9bff]  font-semibold">
                    Deploy
                  </span>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CompanyInvolved;
