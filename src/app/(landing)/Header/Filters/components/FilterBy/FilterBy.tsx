import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/app/ui/select";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FilterBy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("all");

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const marketNames: Record<string, string> = {
    all: "All categories",
  };

  return (
    <div className="flex flex-col gap-4 p-2 rounded-xl relative  z-[100] w-full sm:w-[26rem] md:w-[20rem] ">
      <span className="font-bold text-[1.1rem]">Personalize your search</span>
      <div
        className="flex h-[3.5rem] w-full items-center justify-between rounded-xl ring-2 ring-[#dfdfdf] dark:ring-[#242424]  shadow-sm px-3 py-3 text-sm  placeholder:text-gray-500 focus:outline-none  bg-white dark:bg-[#202020] text-[#101010] dark:text-[#fefefe] z-[100] relative cursor-pointer "
        onClick={handleOpenChange}
      >
        <span className="font-medium text-[1.1rem]">Filter by</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 opacity-50" />
        ) : (
          <ChevronDown className="h-4 w-4 opacity-50" />
        )}
      </div>
      {isOpen && (
        <div className=" w-full md:w-[25rem] xl:w-[96%]  min-h-[31rem] border dark:border-[#242424] rounded-xl shadow-xl p-4 absolute top-[7rem] bg-[#ffffff] dark:bg-[#242424] z-[10]  transition-all duration-300 fade-in-0 animate-in overflow-hidden">
          <Select
            value={selectedOption}
            onValueChange={(value) => {
              setSelectedOption(value);
            }}
          >
            <SelectTrigger
              className="w-full min-h-[3rem] border-2 dark:border-[#242424] rounded-xl shadow-sm p-4  z-[10]  transition-all duration-300 fade-in-0 animate-in text-[16px] bg-white dark:bg-[#3d3d3d] text-[#101010] dark:text-[#fefefe]"
              aria-label="All categories"
            >
              <SelectValue>
                {marketNames[selectedOption] || "All categories"}
              </SelectValue>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 opacity-50" />
              ) : (
                <ChevronDown className="h-4 w-4 opacity-50" />
              )}
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {Object.entries(marketNames).map(([value, label]) => (
                <SelectItem
                  key={value}
                  value={value}
                  className="rounded-lg text-[15px]"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex flex-col gap-4 px-2 mt-4">
            <span className="text-[16px] font-semibold leading-[130%]">
              Stages
            </span>

            <div className="grid grid-cols-2 gap-4">
              <button className="text-[16px] font-semibold leading-[130%] px-2 py-2 border-2 border-[#d6d6d6] dark:border-[#575757] rounded-full focus:border-[#653BA5] focus:dark:focus:border-[#653BA5]">
                Proposal
              </button>
              <button className="text-[16px] font-semibold leading-[130%] px-2 py-2 border-2 border-[#d6d6d6] dark:border-[#575757] rounded-full focus:border-[#653BA5] focus:dark:focus:border-[#653BA5]">
                Marketing
              </button>
              <button className="text-[16px] font-semibold leading-[130%] px-2 py-2 border-2 border-[#d6d6d6] dark:border-[#575757] rounded-full focus:border-[#653BA5] ">
                Running
              </button>
              <button className="text-[16px] font-semibold leading-[130%] px-2 py-2 border-2 border-[#d6d6d6] dark:border-[#575757] rounded-full focus:border-[#653BA5] focus:dark:focus:border-[#653BA5]">
                Closed
              </button>
            </div>

            <div className="flex flex-col gap-4 px-2 mt-4">
              <span className="text-[18px] font-semibold leading-[130%]">
                Price per share
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 relative">
                  <span>Min</span>
                  <input
                    type="number"
                    defaultValue={0.01}
                    className="text-[16px] font-semibold leading-[130%] px-2 py-2 border-2 border-[#d6d6d6] dark:border-[#5a5a5a] rounded-xl focus:border-[#653BA5] relative pr-[3rem] z-[1] bg-transparent"
                  />

                  <span className="absolute top-[2.6rem] right-3 text-[14px] font-medium text-[#858484] !z-[9999] ">
                    $STEMS
                  </span>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <span>Max</span>
                  <input
                    type="number"
                    defaultValue={0.5}
                    className="text-[16px] font-semibold leading-[130%] px-2 py-2 border-2 border-[#d6d6d6] dark:border-[#5a5a5a] rounded-xl focus:border-[#653BA5] relative pr-[3rem] z-[1] bg-transparent"
                  />

<span className="absolute top-[2.6rem] right-3 text-[14px] font-medium text-[#858484] !z-[9999] ">
                    $STEMS
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex justify-center items-center w-full flex-col gap-3 mt-4">
              <div
                className="w-full px-2 h-[3.5rem] rounded-xl bg-[#653BA5] text-[18px] font-semibold text-[#efefef] flex justify-center items-center tracking-wide cursor-pointer"
                onClick={handleOpenChange}
              >
                Apply now
              </div>

              <strong
                className="cursor-pointer font-[500] text-[17px] text-[#222222] dark:text-[#efefef]"
                onClick={handleOpenChange}
              >
                Reset all filters
              </strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBy;
