import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #eee;
    color: #eee;
    text-align: center;

    &:hover {
        background-color: #141414;
    }

    h4 {
        font-size: 2.4rem;
        padding: 1rem;
    }

    p {
        padding: 10px 0;
    }
`;

export const BarLine = styled.span`
    border-bottom: 1px solid #eee;
    width: 10%;
    margin: 1.5rem auto;
    display: block;
`;

export const PriceStyle = styled.div`
    font-size: 4rem;
    font-weight: 600;
    padding: 1rem 0;
`;

export const CardDetails = styled.div`

`;

export const CardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0.5rem 0;
`;