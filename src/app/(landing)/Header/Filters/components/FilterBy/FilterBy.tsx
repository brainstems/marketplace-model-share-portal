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
    all: "Select your market",
    Denver: "Denver",
    Phoenix: "Phoenix",
    SanDiego: "San Diego",
    Portland: "Portland",
  };

  return (
    <div className="flex flex-col gap-4 p-2 rounded-xl min-w-[23rem] relative  ">
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
        <div className="w-[96%]  min-h-[30rem] border dark:border-[#242424] rounded-xl shadow-xl p-4 absolute top-[7rem] bg-[#ffffff] dark:bg-[#242424] z-[10]  transition-all duration-300 fade-in-0 animate-in overflow-hidden">
          <Select
            value={selectedOption}
            onValueChange={(value) => {
              setSelectedOption(value);
            }}
          >
            <SelectTrigger
              className="w-full min-h-[3rem] border dark:border-[#242424] rounded-xl shadow-sm p-4  z-[10]  transition-all duration-300 fade-in-0 animate-in  bg-white dark:bg-[#3d3d3d] text-[#101010] dark:text-[#fefefe]"
              aria-label="All categories"
            >
              <SelectValue>
                {marketNames[selectedOption] || "Select your market"}
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
        </div>
      )}
    </div>
  );
};

export default FilterBy;
