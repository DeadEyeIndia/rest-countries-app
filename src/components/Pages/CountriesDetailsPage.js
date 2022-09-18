import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import millify from "millify";

import { useGetCountryDetailsQuery } from "../../services/countriesApi";
import Loader from "../Loader";
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
  CountryInfoBorder,
} from "./styles";

const CountriesDetailsPage = () => {
  const { name } = useParams();

  const { data, isFetching } = useGetCountryDetailsQuery(name);

  let country;

  if (data?.length === 1) {
    country = data[0];
  } else if (data?.length > 1) {
    country = data[data?.length - 1];
  }

  console.log(data);

  if (isFetching) return <Loader />;
  return (
    <Country>
      <BackLinkButton to={`/`}>
        <FontAwesomeIcon icon={solid("arrow-left")} />
        <span>Back</span>
      </BackLinkButton>

      <CountryInfo>
        <CountryInfoImage src={country?.flags?.svg} />
        <CountryInfoRemaining>
          <CountryInfoName>{country?.name}</CountryInfoName>
          <CountryInfoInnerGrid>
            <CountryInfoLeft>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Native Name:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.nativeName}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Population:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.population?.toLocaleString("en-US")}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Region:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.region}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Sub Region:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.subregion}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Capital:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.capital === undefined
                    ? "NO CAPITAL"
                    : `${country?.capital}`}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
            </CountryInfoLeft>
            <CountryInfoRight>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Top Level Domain:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.topLevelDomain[0]}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Currencies:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.currencies[0]?.name}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Languages:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {country?.languages?.map((language, idx) => (
                    <span key={idx}>{language.name}, </span>
                  ))}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
            </CountryInfoRight>
          </CountryInfoInnerGrid>
          <CountryInfoBordersList>
            Border Countries:{" "}
            {country["borders"] === undefined && (
              <>
                <CountryInfoBorder>NO Countries</CountryInfoBorder>
              </>
            )}
            {country?.borders && (
              <>
                {country?.borders?.map((border, idx) => (
                  <CountryInfoBorder key={idx}>{border}</CountryInfoBorder>
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
