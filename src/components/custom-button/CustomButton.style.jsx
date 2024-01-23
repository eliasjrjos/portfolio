import styled, { css } from "styled-components";
import { devices } from '../../globals/media-queries';

const invertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const googleSignInButtonStyle = css`
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const buttonStyle = css`
    background-color: #eade2399;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid #eade2399;
        }

    @media ${devices.tablet} {  
        font-size: 0.8rem;
        min-width: 35px;
        height: 30px;
        color: black;
        font-size: 10px;
        letter-spacing: 0.3px;
        line-height: 30px;
        padding: 0 20px 0 20px;
        margin: 0.7rem 0.025rem;
    }

    @media ${devices.mobile} {  
        font-size: 0.5rem;
        min-width: 15px;
        height: 25px;
        color: black;
        font-size: 8px;
        letter-spacing: 0.2px;
        line-height: 20px;
        padding: 0 10px 0 10px;
    }
`;

const getButtonStyle = props => {
    return props.inverted ? invertedButtonStyle : buttonStyle;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 30px 0 30px;
    margin: 1rem 0.125rem;
    font-size: 10px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;

    ${getButtonStyle}
`;