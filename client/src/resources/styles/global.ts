import { createGlobalStyle } from "styled-components";
import { background, white } from "./variables";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        overflow-x: hidden;
        scroll-behavior: smooth;
        background: ${background};
    }

    p,
    h6,
    h5,
    h4,
    h3,
    h2,
    h1 {
        color: ${white};
        font-family: 'Open Sans', sans-serif;
    }

    h4 {
        font-weight: 600;
        font-size: 34px;
    }

    .section {
        width: 100%;
        margin-top: 5rem;
    }
`;
