import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.a`
  color: ${({ theme }) => theme.text};
`;
