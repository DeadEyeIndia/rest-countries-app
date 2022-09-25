import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Loader from "../Loader";
import Borders from "./Borders";
import { useGetCountryDetailsQuery } from "../../services/countriesApi";
import {
  Country,
  BackLinkButton,
  CountryInfo,
  CountryInfoImage,
  CountryInfoRemaining,
  CountryInfoName,
  CountryInfoInnerGrid,
  CountryInfoLeft,
  CountryInfoRight,
  CountryInfoSpanBold,
  CountryInfoSpanLight,
  CountryInfoSpanPara,
  CountryInfoBordersList,
  NoBorderCountry,
} from "./styles";

const CountriesDetailsPage = () => {
  const { name } = useParams();

  const { data, isFetching } = useGetCountryDetailsQuery(name);

  let country;

  if (data?.length === 1) {
    country = data;
  } else if (data?.length > 1) {
    country = data?.filter((d) => d?.name === name);
  }

  // console.log(country);

  if (isFetching) return <Loader />;
  return (
    <Country>
      <BackLinkButton to={`/`}>
        <FontAwesomeIcon icon={solid("arrow-left")} />
        <span>Back</span>
      </BackLinkButton>

      <CountryInfo>
        <CountryInfoImage src={country[0]?.flags?.svg} />
        <CountryInfoRemaining>
          <CountryInfoName>{country[0]?.name}</CountryInfoName>
          <CountryInfoInnerGrid>
            <CountryInfoLeft>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Native Name:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.nativeName}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Population:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.population?.toLocaleString("en-US")}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Region:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.region}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Sub Region:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.subregion}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Capital:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.capital === undefined
                    ? "NO CAPITAL"
                    : `${country[0]?.capital}`}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
            </CountryInfoLeft>
            <CountryInfoRight>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Top Level Domain:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.topLevelDomain[0]}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Currencies:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.currencies === undefined ? (
                    <>No currency</>
                  ) : (
                    <>{country[0]?.currencies[0]?.name}</>
                  )}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Languages:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country[0]?.languages?.map((language, idx) => (
                    <span key={idx}>{language.name}, </span>
                  ))}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
            </CountryInfoRight>
          </CountryInfoInnerGrid>
          <CountryInfoBordersList>
            Border Countries:{" "}
            {country[0]?.borders === undefined ? (
              <NoBorderCountry to="/">No Countries</NoBorderCountry>
            ) : (
              <>
                {country[0]?.borders?.map((border, idx) => (
                  <Borders border={border} key={idx} />
                ))}
              </>
            )}
          </CountryInfoBordersList>
        </CountryInfoRemaining>
      </CountryInfo>
    </Country>
  );
};

export default CountriesDetailsPage;
