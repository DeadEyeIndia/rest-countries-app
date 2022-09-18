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
  CountruInfoLeft,
  CountryInfoRight,
  CountryInfoSpanBold,
  CountryInfoSpanLight,
  CountryInfoSpanPara,
} from "./styles";

const CountriesDetailsPage = () => {
  const { name } = useParams();

  const { data, isFetching } = useGetCountryDetailsQuery(name);

  console.log(data);

  if (isFetching) return <Loader />;
  return (
    <Country>
      <BackLinkButton to={`/`}>
        <FontAwesomeIcon icon={solid("arrow-left")} />
        <span>Back</span>
      </BackLinkButton>

      <CountryInfo>
        <CountryInfoImage src={data[0]?.flags?.svg} />
        <CountryInfoRemaining>
          <CountryInfoName>{data[0]?.name}</CountryInfoName>
          <CountryInfoInnerGrid>
            <CountruInfoLeft>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Native Name:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.nativeName}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Population:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {millify(data[0]?.population)}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Region:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.region}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Sub Region:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.subregion}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Capital:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.capital}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
            </CountruInfoLeft>
            <CountryInfoRight>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Top Level Domain:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.topLevelDomain[0]}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Currencies:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.currencies[0]?.name}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
              <CountryInfoSpanPara>
                <CountryInfoSpanBold>Languages:</CountryInfoSpanBold>
                <CountryInfoSpanLight>
                  {"  "}
                  {data[0]?.languages?.map((language) => (
                    <span>{language.name}, </span>
                  ))}
                </CountryInfoSpanLight>
              </CountryInfoSpanPara>
            </CountryInfoRight>
          </CountryInfoInnerGrid>
        </CountryInfoRemaining>
      </CountryInfo>
    </Country>
  );
};

export default CountriesDetailsPage;
