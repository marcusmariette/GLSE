import { createGlobalStyle } from 'styled-components';
import { background, white } from './variables';

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

    h1 {
        font-weight: 600;
        font-size: 80px;
        text-align: center;
        margin: 5% auto;
        padding-top: 8%;
    }

    h2 {
        font-weight: 600;
        font-size: 34px;
        margin: auto 1%;
    }

    h3 {
        font-weight: 600;
        font-size: 30px;
        margin: 1% 0;
    }

    h4 {
        font-weight: 600;
        font-size: 18px;
    }

    h5 {
        font-weight: 400;
        font-size: 17px;
    }

    p {
        font-weight: 400;
        font-size: 15px;
    }

    .section {
        width: 100%;
        margin-top: 5rem;
    }
`;
