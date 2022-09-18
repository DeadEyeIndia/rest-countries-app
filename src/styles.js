import styled from "styled-components";

import { device } from "./screenSize";

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
