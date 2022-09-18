import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Form, SearchSymbol, InputSubmit } from "./styles";

const Search = ({ theme }) => {
  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={searchSubmitHandler}>
      <SearchSymbol>
        <FontAwesomeIcon
          icon={solid("search")}
          size="lg"
          color={theme === "light" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)"}
        />
      </SearchSymbol>
      <input type="text" placeholder="Search for a country..." />
      <InputSubmit type="submit" />
    </Form>
  );
};

export default Search;
