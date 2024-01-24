import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const SkillsContainer = styled.div`

`;

export const SkillCardContainer = styled.div`
    width: 100%;
    padding: 6rem 1rem;
    background: #000;
    max-width: 1024px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;

    @media ${devices.tablet} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.mobile} {  
        max-width: 90%;
        padding: 2rem 0.6rem;
        margin: auto;
        grid-template-columns: 1fr;
    }
`;