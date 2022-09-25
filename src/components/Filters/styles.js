import styled from "styled-components";

import { device } from "../../screenSize";

export const FilterOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px !important;

  @media screen and ${device.tablet} {
    flex-direction: row !important;
    margin-top: 48px !important;
  }

  @media screen and ${device.mobileL} {
    flex-direction: column !important;
    margin-top: 30px !important;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 480px !important;
  margin-left: 80px;
  height: 56px;
  background-color: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.18);

  @media screen and ${device.tablet} {
    width: 400px !important;
    margin-left: 40px;
  }

  @media screen and ${device.mobileL} {
    width: 390px !important;
    margin-left: 0;
  }

  @media screen and ${device.mobile} {
    width: 340px !important;
  }
`;

export const SearchSymbol = styled.div`
  margin: 0 24px 0 32px;
`;

export const InputSubmit = styled.input`
  display: none;
`;

export const DropDownContainer = styled.div`
  position: relative;
  width: 200px;
  padding: 0;
  margin-right: 80px;
  background-color: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.18);
  overflow: hidden;
`;

export const DropDownSelect = styled.select`
  width: 100%;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.element};
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  padding: 20px 0;

  &:hover {
    cursor: pointer;
  }
`;
