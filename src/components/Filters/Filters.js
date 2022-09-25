import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { selectedFilterId } from "../../services/filterSlice";
import {
  Form,
  SearchSymbol,
  InputSubmit,
  FilterOptions,
  DropDownContainer,
  DropDownSelect,
} from "./styles";

const Filters = ({ theme, searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();
  const options = [
    {
      label: "Filter by Region",
      value: "",
      hidden: true,
      selected: true,
      disabled: true,
    },
    { label: "Africa", value: "africa" },
    { label: "Americas", value: "americas" },
    { label: "Asia", value: "asia" },
    { label: "Europe", value: "europe" },
    { label: "Oceania", value: "oceania" },
  ];

  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FilterOptions>
      <Form onSubmit={searchSubmitHandler}>
        <SearchSymbol>
          <FontAwesomeIcon
            icon={solid("search")}
            size="lg"
            color={theme === "light" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)"}
          />
        </SearchSymbol>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for a country..."
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <InputSubmit type="submit" />
      </Form>

      <DropDownContainer>
        <DropDownSelect
          onChange={(e) => dispatch(selectedFilterId(e.target.value))}
        >
          {options.map(({ label, value, hidden, selected, disabled }) => (
            <option
              key={value}
              value={value}
              hidden={hidden}
              selected={selected}
              disabled={disabled}
            >
              {label}
            </option>
          ))}
        </DropDownSelect>
      </DropDownContainer>
    </FilterOptions>
  );
};

export default Filters;
