import React from "react";

import { useGetCountryNameQuery } from "../../services/countriesApi";

import { CountryInfoBorder } from "./styles";

const Borders = ({ border }) => {
  const { data: borderName } = useGetCountryNameQuery(border);

  return (
    <CountryInfoBorder to={`/${borderName?.name}`}>
      {borderName?.name}
    </CountryInfoBorder>
  );
};

export default Borders;
