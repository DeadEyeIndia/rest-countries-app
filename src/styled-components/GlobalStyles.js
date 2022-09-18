import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

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
