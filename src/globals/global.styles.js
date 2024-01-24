import { createGlobalStyle } from 'styled-components';
import { devices } from './media-queries';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 60px;

        @media ${devices.tablet} {
            padding: 15px;
        }

        @media ${devices.mobile} {
            padding: 10px;
        }
    }

    h1, h4, p, a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
        @media ${devices.tablet} {
            font-size: 1rem;
        }
        @media ${devices.mobile} {
            font-size: 0.8rem;
        }
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Outfit', sans-serif;
    }

    body {
        background: #000
    }
`;