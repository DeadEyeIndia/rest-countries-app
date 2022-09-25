import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../screenSize";

export const Country = styled.div`
  margin: 80px 80px 0 80px;
  display: flex;
  flex-direction: column;

  @media screen and ${device.tablet} {
    margin: 60px 40px 0 40px;
  }

  @media screen and ${device.mobileL} {
    margin: 40px 20px 0 20px;
  }
`;

export const BackLinkButton = styled(Link)`
  width: 126px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.element};
  border-radius: 4px;
  text-decoration: none;
  transition: text-decoration 0.5s ease-in-out;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.18);

  @media screen and ${device.tablet} {
    margin-bottom: 85px;
  }

  @media screen and ${device.mobileL} {
    margin-bottom: 100px;
  }

  span {
    padding-left: 12px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const CountryInfo = styled.div`
  width: 100%;
  height: 401px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 90px;

  @media screen and ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }

  @media screen and ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and ${device.mobileL} {
    height: auto;
  }
`;

export const CountryInfoImage = styled.img`
  width: 100%;
  height: 401px;
  object-fit: cover;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  @media screen and ${device.mobileL} {
    height: 300px;
  }
`;

export const CountryInfoRemaining = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

export const CountryInfoName = styled.h1`
  font-weight: 800;
  margin-bottom: 35px;
`;

export const CountryInfoInnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;

  @media screen and ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CountryInfoLeft = styled.div``;

export const CountryInfoRight = styled.div`
  @media screen and ${device.mobileL} {
    margin-top: 30px;
  }
`;

export const CountryInfoSpanPara = styled.p`
  margin-bottom: 15px;
`;

export const CountryInfoSpanBold = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const CountryInfoSpanLight = styled.span`
  font-size: 16px;
`;

export const CountryInfoBordersList = styled.div`
  margin-top: 20px 0 0 0;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and ${device.tablet} {
    margin-bottom: 60px;
  }
`;

export const NoBorderCountry = styled(Link)`
  padding: 10px 5px;
  margin: 0 10px;
  margin: 5px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.15);
  text-decoration: none;
  transition: text-decoraton 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CountryInfoBorder = styled(Link)`
  padding: 10px 5px;
  margin: 5px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.15);
  text-decoration: none;
  transition: text-decoraton 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
