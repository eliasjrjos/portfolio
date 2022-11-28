import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const AboutContentContainer = styled.div`
    width: 100%;
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
`;

export const AboutInfo = styled.div`
    text-align: center;
    margin: auto;
    paddind: 1rem;
    max-width: 350px

    p {
        margin: 1.2rem 0;
    }
`;

export const AboutImagesContainer = styled.div`
    max-width: 700px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    align-items: center;
    text-align: center;
`;

export const ImgStackTop = styled.div`
    grid-column: 1 / span 7;
    grid-row: 1;
    padding-top: 20%;
    z-index: 6;
`;

export const ImgStackBottom = styled.div`
    grid-column: 5 / -1;
    grid-row: 1;
    z-index: 5;
`;

export const ImgStyle = styled.img`
    max-width: 90%;
    border: 1px solid #333;
`;