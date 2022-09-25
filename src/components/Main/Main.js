import React from "react";

import {
  CountriesList,
  CountryItem,
  CountryImage,
  CountryDetails,
  CountryName,
  CountryItemDetail,
} from "./style";

const Main = ({ countries }) => {
  return (
    <CountriesList>
      {countries?.map((country) => (
        <CountryItem key={country?.numericCode} to={`/${country?.name}`}>
          <CountryImage src={country?.flag} />
          <CountryDetails>
            <CountryName>
              {country?.name?.length > 40
                ? country?.altSpellings[country?.altSpellings?.length - 1]
                : country?.name}
            </CountryName>
            <CountryItemDetail>
              Poplulation:{" "}
              <span style={{ fontWeight: 300 }}>
                {country?.population?.toLocaleString("en-US")}
              </span>
            </CountryItemDetail>
            <CountryItemDetail>
              Region: <span style={{ fontWeight: 300 }}>{country?.region}</span>
            </CountryItemDetail>
            <CountryItemDetail>
              Capital:{" "}
              <span style={{ fontWeight: 300 }}>
                {country?.capital === undefined
                  ? "NO CAPITAL"
                  : `${country?.capital}`}
              </span>
            </CountryItemDetail>
          </CountryDetails>
        </CountryItem>
      ))}
    </CountriesList>
  );
};

export default Main;
