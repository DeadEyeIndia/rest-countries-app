import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        font-weight: 300;
        transition: all 0.2s ease;
    }

    input {
        color: ${({ theme }) => theme.input};
        border: none;
        outline: none;
        height: 100%;
        width: 100%;
        font-weight: 600;
        color: ${({ theme }) => theme.input};
        background: transparent;

        ::placeholder {
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 600;
            color: ${({ theme }) => theme.input};
        }
    }

    @keyframes spinWheel {
        to {
            transform: rotateZ(-360deg);
        }
    }
`;
