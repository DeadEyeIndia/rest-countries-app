import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.element};
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-left: 80px;
`;

export const Toggler = styled.div`
  margin-right: 80px;
  color: ${({ theme }) => theme.text};
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
`;

export const HeaderToggler = styled.span`
  margin-right: 11px;
`;
