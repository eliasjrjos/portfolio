import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const CardContainer = styled.div`
    background-color: #1a1919;
    padding: 1.2rem 1rem;
    height: 500px;
    
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
    display: flex;
    justify-content: space-between;
    justify-algin: center;
    padding: 0.5rem 0;
`;