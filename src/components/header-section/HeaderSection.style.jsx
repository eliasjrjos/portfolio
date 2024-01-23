import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const HeaderSectionContainer = styled.div`
    width: 100%;
`;

export const HeaderSectionMask = styled.div`
    width: 100%;
    height: 100%;
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


export const HeaderSectionImgStyle = styled.img`
    width: 100%;
    height: 65vh;
    background-size: cover;
    background-position: center top;
    object-fit: cover;
`;

export const HeaderSectionContent = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;

    h1 {
        font-size: 3rem;
        padding: 0.6rem 0 1.5rem;
        @media ${devices.laptop} {
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