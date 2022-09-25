import styled from "styled-components";

import { device } from "../../screenSize";

export const HeaderContainer = styled.header`
  height: 80px !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.element};
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.18);

  @media screen and ${device.tablet} {
    height: 87px !important;
  }

  @media screen and ${device.mobileL} {
    height: 160px !important;
  }

  @media screen and ${device.mobileL} {
    height: 120px !important;
  }
`;

export const Title = styled.h1`
  font-size: normal !important;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-left: 80px !important;
  user-select: none;

  @media screen and ${device.tablet} {
    margin-left: 40px !important;
  }

  @media screen and ${device.mobileL} {
    font-size: 14px !important;
    margin-left: 20px !important;
  }

  @media screen and ${device.mobile} {
    font-size: 20px !important;
    margin-left: 10px !important;
  }
`;

export const Toggler = styled.div`
  margin-right: 80px !important;
  color: ${({ theme }) => theme.text};
  font-size: normal;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 10px 8px;
  border-radius: 4px;
  border: 1px solid none;

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.border};
  }

  @media screen and ${device.tablet} {
    margin-right: 40px !important;
  }

  @media screen and ${device.mobileL} {
    font-size: 14px !important;
    margin-right: 20px !important;
  }

  @media screen and ${device.mobile} {
    font-size: 12px !important;
    margin-right: 10px !important;
  }
`;

export const HeaderToggler = styled.span`
  margin-right: 11px;
`;
