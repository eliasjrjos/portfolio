import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const CardContainer = styled.div`
    background-color: #1a1919;
    padding: 1.2rem 1rem;
    height: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    &:hover {
        background-color: #545454;
    }

    h4 {
        font-size: 1.2rem;
        padding: 1rem;
    }

    p {
        padding: 10px 0;
        overflow-x: hidden;

        &:hover {
            background-color: #4c4f82;
        }
    }

    @media ${devices.tablet} { 
        h4 {
            font-weight: bold;
            font-size: 1rem;
            padding: 0.8rem;
        }
        p {
            font-size: 0.75rem;
            padding: 8px 0;
            overflow-x: hidden;
        }
    }
    
    @media ${devices.mobile} { 
        h4 {
            font-weight: bold;
            font-size: 0.95rem;
            padding: 0.4rem;
        }
        p {
            font-size: 0.85rem;
            padding: 6px 0;
            overflow-x: hidden;
        }
    }
`;

export const CardImgStyle = styled.img`
    width: 100%;
    height: 200px;
`;

export const CardDetails = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0.5rem 0;
`;