import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #eee;
    color: #eee;
    text-align: center;
    padding: 1rem;

    &:hover {
        background-color: #545454;
    }

    h4 {
        padding: 0.5rem;
    }

    h3 {
        font-weight: 900;
        padding: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        padding: 10px 0;
    }

    @media ${devices.tablet} {
        padding: 0.2rem;

        h1 {
            font-size: 2rem;
        }

        h4 {
            padding: 0.2rem;
        }
    
        h3 {
            font-weight: 500;
            padding: 0.3rem;
        }
    
        p {
            font-size: 1rem;
            padding: 8px 0;
        }
    }

    @media ${devices.mobile} {
        padding: 0rem;

        h1 {
            font-size: 1.3rem;
        }

        h4 {
            padding: 0.2rem;
        }
    
        h3 {
            font-weight: 400;
            padding: 0.1rem;
        }
    
        p {
            font-size: 0.8rem;
            padding: 6px 0;
        }
    }
`;