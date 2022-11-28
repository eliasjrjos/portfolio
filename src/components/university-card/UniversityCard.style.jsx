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

export const UniversityNameStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 4rem;
        font-weight: 500;
        padding: 0 1rem;
    }
`;

export const CollageNameStyle = styled.div`
    font-size: 4rem;
    font-weight: 600;
    padding: 1rem 0;
`;

export const IconStyle = styled.img`
    width: 80px;
    height: 80px;
    padding: 0.2rem;
`;

export const CollageDetails = styled.div`
    display: flex;
    justify-content: center;

    p {
        line-height: 30px;
    }
`;