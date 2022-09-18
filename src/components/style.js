import styled from "styled-components";

export const SpinDiv = styled.div`
  width: 100vw;
  height: 70vh;
  display: grid;
  place-items: center;
  max-width: 100%;
`;

export const SpinWheel = styled.div`
  width: 10vmax;
  height: 10vmax;
  border-bottom: 5px solid ${(theme) => theme.spin};
  border-radius: 50%;
  animation: spinWheel 800ms linear infinite;
`;
