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

`;

export const CardImgStyle = styled.img`
    width: 100%;
    height: 200px;

    @media ${devices.tablet} { 
        height: 120px;
    }
    
    @media ${devices.mobile} { 
        height: 100px;
    }
`;

export const CardDetails = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardHint = styled.div`
    height: 80%;
    padding: 10px;

    h4 {
        height: 25%;
        font-size: 1rem;
        padding: 0.5rem;
    }

    p {
        height: 85%;
        padding: 10px 0;
        overflow-x: hidden;

        &:hover {
            background-color: #4c4f82;
        }
    }

    @media ${devices.tablet} {  
        h4 {
            height: 15%;
            font-size: 0.7rem;
            padding: 3px;
        }
    
        p {
            height: 85%;
            padding: 5px 2px;
            font-size: 0.75rem;
            overflow-x: hidden;
    
            &:hover {
                background-color: #4c4f82;
            }
        }
    }

    @media ${devices.mobile} {  
        h4 {
            font-size: 0.7rem;
            padding: 0.5rem;
        }
    
        p {
            padding: 2px 0;
            font-size: 0.75rem;
            overflow-x: hidden;
    
            &:hover {
                background-color: #4c4f82;
            }
        }
    }
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    justify-algin: center;
    padding: 0.02rem 0;
    height: 20%;

    @media ${devices.tablet} {  
        max-width: 90%;
        margin: auto;
        padding: 0.4rem 0;
    }

    @media ${devices.mobile} {  
        max-width: 90%;
        margin: auto;
        padding: 0.25rem 0;
    }

`;

export const CardModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;