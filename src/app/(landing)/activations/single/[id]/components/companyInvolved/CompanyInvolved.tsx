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
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        <AccordionItem
          value="item-1"
          className="border bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e0e0e0] dark:border-[#3f3f3f] rounded-xl py-2 px-4"
        >
          <AccordionTrigger className="text-[16px] font-bold dark:font-semibold gap-2 ">
            Select deployment
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CompanyInvolved;
