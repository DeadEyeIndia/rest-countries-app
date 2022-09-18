import React, { useState } from "react";

import Search from "../Filters/Search";
import DropDown from "../Filters/DropDown";
import Main from "../Main/Main";
import { FilterOptions } from "../../styles";

const Homepage = ({ theme }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  return (
    <>
      <FilterOptions>
        <Search theme={theme} />
        <DropDown
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </FilterOptions>
      <Main />
    </>
  );
};

export default Homepage;
