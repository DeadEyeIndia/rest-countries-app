import styled from "styled-components";
import { Link } from "react-router-dom";

export const Country = styled.div`
  margin: 80px 80px 0 80px;
  display: flex;
  flex-direction: column;
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
  column-gap: 145px;
`;

export const CountryInfoImage = styled.img`
  width: 100%;
  height: 401px;
  object-fit: cover;
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
`;

export const CountruInfoLeft = styled.div``;

export const CountryInfoRight = styled.div``;

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
