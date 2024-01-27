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
    @media screen and ${devices.tablet} {
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
        padding: 1rem 1rem; 
    }
`;


const scrollActiveColor = css`
    background-color: rgba(0,0,0,0.80);
    transition: 1.5s
`;
const scrollInActiveColor = css`
    background-color: none;
    transition: 1.5s
`;
const getHeaderBgColor = (props) => {
    if (props.isScrollActive)
        return scrollActiveColor;
    else
        return scrollInActiveColor;
}
export const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    position: fixed;
    top: 30px;
    left: 0;
    width: 100%;
    max-width: ${devices.laptop};
    height: 90px;
    z-index: 12;
    ${getHeaderBgColor}
`;

export const NavHamburger = styled.div`
    display: none;
    @media ${devices.tablet}{
        display: initial; 
    }
`;

export const NavLogo = styled.div`
    width: 190px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
    }

    @media ${devices.tablet}{
        width: 150px; 
    }

    @media ${devices.mobile}{
        width: 100px; 
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;
