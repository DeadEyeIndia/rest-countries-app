import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import {
  DropDownContainer,
  DropDownButton,
  DropDownIcon,
  DropDownContent,
  DropDownItem,
} from "./styles";

const DropDown = ({ selectedFilter, setSelectedFilter }) => {
  const options = [
    { label: "Africa", value: "africa" },
    { label: "America", value: "america" },
    { label: "Asia", value: "asia" },
    { label: "Europe", value: "europe" },
    { label: "Oceania", value: "oceania" },
  ];

  // const [value, setValue] = useState(null);
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <>
      <DropDownContainer>
        <DropDownButton onClick={(e) => setIsFilterActive(!isFilterActive)}>
          {selectedFilter !== "" ? `${selectedFilter}` : "Filter by Region"}
          <DropDownIcon>
            <FontAwesomeIcon icon={solid("chevron-down")} />
          </DropDownIcon>
        </DropDownButton>

        {isFilterActive && (
          <DropDownContent>
            {options.map((option, idx) => (
              <DropDownItem
                key={idx}
                onClick={(e) => {
                  setSelectedFilter(option.label);
                  setIsFilterActive(false);
                }}
              >
                {option.label}
              </DropDownItem>
            ))}
          </DropDownContent>
        )}
      </DropDownContainer>
    </>
  );
};

export default DropDown;
