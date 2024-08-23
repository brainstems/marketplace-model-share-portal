import React from "react";
import FilterBy from "./components/FilterBy/FilterBy";
import SortBy from "./components/SortBy/SortBy";
import Search from "./components/Search/Search";

const FilterHeader = () => {
  return (
    <div className="flex gap-4 w-full flex-col lg:flex-row">
      <div className="w-full flex flex-col md:flex-row">
      <FilterBy />
      <SortBy />
      </div>

      <Search />
    </div>
  );
};

export default FilterHeader;
