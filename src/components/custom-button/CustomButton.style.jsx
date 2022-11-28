import styled, { css } from "styled-components";

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
    padding: 0 35px 0 35px;
    margin: 1rem 0.2rem;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;

    ${getButtonStyle}
`;