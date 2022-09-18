import styled from "styled-components";

export const Form = styled.form`
  margin-left: 80px;
  display: flex;
  align-items: center;
  width: 480px;
  height: 56px;
  background-color: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
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
  height: 56px;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
`;

export const DropDownButton = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const DropDownIcon = styled.span``;

export const DropDownContent = styled.div`
  width: 100%;
  position: absolute;
  top: 110%;
  left: 0;
  padding: 12px 18px;
  background: ${({ theme }) => theme.element};
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
`;

export const DropDownItem = styled.div`
  padding: 5px;
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const DropDownSelect = styled.select`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;

  padding: 0 18px;
  color: ${({ theme }) => theme.text};
  background: transparent;
  //   box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
`;

export const Spacing = styled.div`
  width: 18px;
`;

export const DropDownOption = styled.option`
  outline: none;
  border: none;
  width: 100%;
  height: 56px;
  padding: 2px 5px;
  background: ${({ theme }) => theme.background};
`;
