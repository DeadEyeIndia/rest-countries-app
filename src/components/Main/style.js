import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountriesList = styled.main`
  margin: 48px 80px 0 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: 75px;
`;

export const CountryItem = styled(Link)`
  width: 100%;
  height: 336px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.18);
  text-decoration: none;
`;

export const CountryImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CountryDetails = styled.div`
  padding: 29px 0 44px 25px;
  display: flex;
  flex-direction: column;
`;

export const CountryName = styled.h3`
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  margin-bottom: 22px;
`;

export const CountryItemDetail = styled.div`
  font-weight: 600;
`;
