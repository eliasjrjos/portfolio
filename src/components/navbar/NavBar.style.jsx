import styled, { css } from "styled-components";
import { devices } from '../../globals/media-queries';

const hideNavMenu = css`
    left: -100%;
`;
const showNavMenu = css`
    left: 0;
`;
const getNavMenuStateStyle = (props) => {
    return props.active ? showNavMenu : hideNavMenu;
}
export const NavBarMenu = styled.ul`
    display: flex;
    @media screen and ${devices.laptop} {
        background-color: #000;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: -3;
        transition: 0.3s;
        ${getNavMenuStateStyle}
    }
`;

export const NavBarListItem = styled.li`
    padding: 0 1rem;
    list-style-type: none;
    @media screen and ${devices.laptop} {
        padding: 1rem 0; 
    }
`;


const scrollActiveColor = css`
    background-color: rgba(0,0,0,0.87);
    transition: 1.5s
`;
const scrollInActiveColor = css`
    background-color: none;
    transition: 1.5s
`;
const getHeaderBgColor = (props) => {
    if(props.isScrollActive)
        return scrollActiveColor;
    else
        return scrollInActiveColor;
}
export const NavHeader  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    position: fixed;
    width: 100%;
    height: 90px;
    z-index: 10;
    ${getHeaderBgColor}
`;

export const NavHamburger = styled.div`
    display: none;
    @media screen and ${devices.laptop} {
        display: initial; 
    }
`;
