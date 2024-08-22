import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/app/ui/accordion";

const ActivationsDetail = () => {
  return (
    <div className="flex flex-col gap-3 pb-[4rem]">
      <span className="text-[25px] font-semibold leading-[130%] mb-6">
        More details about this Activation
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
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold text-start gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/userCheks.svg"
              alt="user"
              className="w-[2rem] absolute left-9"
            />
            How businesses would use the model?
          </AccordionTrigger>
          <AccordionContent>
           
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold text-start  gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/checkmark.svg"
              alt="check"
              className="w-[2rem] absolute left-9"
            />
            What is the business benefit?
          </AccordionTrigger>
          <AccordionContent>
         
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold text-start gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/asterisk.svg"
              alt="risks"
              className="w-[2rem] absolute left-9"
            />
            Investment Risks
          </AccordionTrigger>
          <AccordionContent>
            
          </AccordionContent>
        </AccordionItem>


        <AccordionItem
          value="item-4"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold text-start gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/link.svg"
              alt="chart"
              className="w-[2rem] absolute left-9"
            />
            External or Third-party Contributions
          </AccordionTrigger>
          <AccordionContent>
           
          </AccordionContent>
        </AccordionItem>


        <AccordionItem
          value="item-5"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold text-start gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/money.svg"
              alt="money"
              className="w-[2rem] absolute left-9"
            />
            Monetization and Cost Structure
          </AccordionTrigger>
          <AccordionContent>
           
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold text-start gap-2 pl-[3rem] ">
            <img
              src="/assets/icons/question.svg"
              alt="chart"
              className="w-[2rem] absolute left-9"
            />
            IPR (Intellectual Property Rights)
          </AccordionTrigger>
          <AccordionContent>
            
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default ActivationsDetail;
