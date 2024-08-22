import React from "react";
import FilterBy from "./components/FilterBy/FilterBy";
import SortBy from "./components/SortBy/SortBy";
import Search from "./components/Search/Search";

const FilterHeader = () => {
  return (
    <div className="flex gap-4 w-full flex-col lg:flex-row">
      <FilterBy />
      <SortBy />
      <Search />
    </div>
  );
};

export default FilterHeader;
