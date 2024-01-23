import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const EducationCardContainer = styled.div`
    width: 100%;
    padding: 1.2rem 1rem;
    background: #000;
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    @media ${devices.tablet} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        padding: 0.6rem 0.3rem;
    }

    @media ${devices.mobile} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
        grid-gap: 12px;
        padding: 0.5rem 0.2rem;
    }
`;

export const UniversityCardContainer = styled.div`
    width: 100%;
    padding: 1.2rem 1rem;
    background: #000;
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    @media ${devices.tablet} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }

    @media ${devices.mobile} {  
        max-width: 90%;
        padding: 2rem 0.6rem;
        margin: auto;
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`;