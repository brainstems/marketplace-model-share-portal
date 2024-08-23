import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/app/ui/select";

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("LowToHigh");

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const FilterOptions: Record<string, string> = {
    LowToHigh: "Price: Low to high",
    highToLow: "Price: High to low",
    relevant: "Most relevant",
    Alphabetical: "Alphabetical",
  };

  return (
    <div className="flex flex-col gap-4 p-2 rounded-xl w-full sm:max-w-[23rem] relative z-[90] ">
      <span className="font-bold text-[1.1rem]">Sort by</span>
      <Select
        value={selectedOption}
        onValueChange={(value) => {
          setSelectedOption(value);
        }}
      >
        <SelectTrigger
          className=" w-full sm:w-[25rem] lg:w-[20rem] flex h-[3.5rem]   items-center justify-between rounded-xl ring-2 ring-[#dfdfdf] dark:ring-[#242424] shadow-sm px-3 py-3 text-md placeholder:text-gray-500 focus:!outline-none bg-white dark:bg-[#202020] text-[#101010] dark:text-[#fefefe] z-[100] relative cursor-pointer border-none !outline-none"
          aria-label="Price: Low to high"
          onClick={handleOpenChange}
        >
          <SelectValue>
            {FilterOptions[selectedOption] || "Price: Low to high"}
          </SelectValue>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 opacity-50" />
          ) : (
            <ChevronDown className="h-4 w-4 opacity-50" />
          )}
        </SelectTrigger>
        {isOpen && (
          <SelectContent className="rounded-xl">
            {Object.entries(FilterOptions).map(([value, label]) => (
              <SelectItem
                key={value}
                value={value}
                className="rounded-lg text-[15px]"
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>
    </div>
  );
};

export default SortBy;
