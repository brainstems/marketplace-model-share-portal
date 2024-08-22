import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex flex-col justify-end gap-4  p-2 rounded-xl  relative  z-[80] w-full">
      <div className="w-full flex justify-between items-center relative ">
        <input
          type="text"
          className="flex h-[3.6rem] w-full items-center placeholder:text-[12px] sm:placeholder:text-[14px] md:placeholder:text-[1rem] justify-between rounded-xl shadow-sm border-2 dark:border-[#242424] px-3 py-3 text-sm  placeholder:text-gray-500  focus:outline-none focus:ring-2  focus:dark:ring-0 focus:ring-[#41414148] bg-white dark:bg-[#202020] text-[#101010] dark:text-[#fefefe] z-[100] relative cursor-pointer  text-[1rem]"
          placeholder="Are you looking something specific? Search here "
        />
        <div className="bg-[#DDDDDD] dark:bg-[#1a1a1a] px-2 py-3 flex justify-center items-center  border dark:border-[#4b4b4b] rounded-xl cursor-pointer w-[3rem] right-1 absolute  z-[999] hover:scale-[0.98] active:scale-[0.94] transition-all duration-300">
          <SearchIcon className="h-[1.3rem] w-[1.3rem] opacity-80  " />
        </div>
      </div>
    </div>
  );
};

export default Search;
