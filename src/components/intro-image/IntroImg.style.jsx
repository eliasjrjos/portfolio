import styled from 'styled-components';
import { devices } from '../../globals/media-queries';

export const IntroImgContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const IntroImgMask = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.8;
    }
`;

export const IntroImgStyle = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
`;

export const IntroImgContent = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;

    h1 {
        font-size: 3rem;
        padding: 0.6rem 0 1.5rem;
        @media screen and ${devices.laptop} {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.4rem;
        font-weight: 200;
        text-transform: uppercase;
        @media ${devices.laptop} {
            font-size: 1.2rem;
        }
    }
`;