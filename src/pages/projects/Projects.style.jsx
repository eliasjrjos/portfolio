import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const PriceCardDirectory = styled.div`
    width: 100%;
    padding: 6rem 1rem;
    background: #000;
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;

    @media ${devices.laptop} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
    }
`;

export const WorkCardContainer = styled.div`
    width: 100%;
    padding: 6rem 1rem;
    background: #000;
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;

    @media ${devices.laptop} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
    }
`;
