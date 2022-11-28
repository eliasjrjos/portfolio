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
        font-size: 4rem;
        padding: 10px 0;
    }
`;

export const BarLine = styled.span`
    border-bottom: 1px solid #eee;
    width: 10%;
    margin: 1.5rem auto;
    display: block;
`;

export const ImageStyle = styled.img`
    width: 180px;
    height: 180px;
    padding: 0.2rem;
`;

export const EducationDetails = styled.div`
    display: flex;
    justify-content: center;

    h4 {
        line-height: 30px;
    }

    h3 {
        line-height: 30px;
        color: #eade2399;
    }
`;

export const CollageNameStyle = styled.div`
    font-size: 3rem;
    font-weight: 600;
    padding: 1rem 0;
`;

export const SectionNameStyle = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 0;
`;