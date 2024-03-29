import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;

        // Remove side scrollbar
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .NavbarSticky {
        position: sticky !important;
        top: 0;
        left: 0;
        background-color: ${({theme}) => theme.colors.secondary} !important;
        z-index: 999;
    }
`