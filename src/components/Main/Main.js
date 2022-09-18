import React from "react";

import Loader from "../Loader";
import { useGetAllCountriesQuery } from "../../services/countriesApi";
import {
  CountriesList,
  CountryItem,
  CountryImage,
  CountryDetails,
  CountryName,
  CountryItemDetail,
} from "./style";

const Main = () => {
  const { data, isFetching } = useGetAllCountriesQuery();

  console.log(data);

  if (isFetching) return <Loader />;

  return (
    <CountriesList>
      {data.map((country) => (
        <CountryItem key={country?.numericCode} to={`/${country?.name}`}>
          <CountryImage src={country?.flag} />
          <CountryDetails>
            <CountryName>{country?.name}</CountryName>
            <CountryItemDetail>
              Poplulation:{" "}
              <span style={{ fontWeight: 300 }}>{country?.population}</span>
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
