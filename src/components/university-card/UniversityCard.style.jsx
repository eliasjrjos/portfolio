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
        // padding: 10px 0;
    }

    @media ${devices.tablet} {

    }

    @media ${devices.mobile} {

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
        font-size: 3rem;
        font-weight: 500;
        padding: 0 1rem;
    }

    @media ${devices.tablet} {
        h1 {
            font-size: 1.5rem;
            font-weight: 250;
            padding: 0 1rem;
        }
    }

    @media ${devices.mobile} {
        h1 {
            font-size: 0.8rem;
            font-weight: 200;
            padding: 0 1rem;
        }
    }
`;

export const CollageNameStyle = styled.div`
    font-size: 4rem;
    font-weight: 600;
    padding: 1rem 0;

    @media ${devices.tablet} {
        font-size: 2rem;
        font-weight: 350;
    }

    @media ${devices.mobile} {
        font-size: 1.2rem;
        font-weight: 250;
    }
`;

export const IconStyle = styled.img`
    width: 250px;
    height: 150px;
    padding: 0.1rem;

    @media ${devices.tablet} {
        width: 100px;
        height: 100px;
    }

    @media ${devices.mobile} {
        width: 60px;
        height: 60px;
    }
`;

export const CollageDetails = styled.div`
    display: flex;
    justify-content: center;

    p {
        font-size: 1rem;
        // line-height: 30px;
    }

    @media ${devices.tablet} {
        p {
            font-size: 0.9rem;
            // line-height: 25px;
        }
    }

    @media ${devices.mobile} {
        p {
            font-size: 0.8rem;
            // line-height: 20px;
        }
    }
`;