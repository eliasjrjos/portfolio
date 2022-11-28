import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavHeader, NavBarMenu, NavBarListItem, NavHamburger } from './NavBar.style'

const NavBar = props => {

    const [navHamburgerClick, setNavHamburgerClick] = React.useState(false);
    const [scrollActive, setScrollActive] = React.useState(false);

    const handleNavHamburgerClick = () => {
        setNavHamburgerClick(!navHamburgerClick);
    }

    const handleScrollChange = () => {
        if(window.scrollY > 100)
            setScrollActive(true)
        else
            setScrollActive(false)
    }

    
    window.addEventListener("scroll", handleScrollChange);


    return (
        <NavHeader isScrollActive={scrollActive}>
            <NavLink to={'/'}>Logo</NavLink>
            <NavBarMenu active={navHamburgerClick}>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/about'}>About</NavLink>
                </NavBarListItem>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/projects'}>Projects</NavLink>
                </NavBarListItem>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/education'}>Education</NavLink>
                </NavBarListItem>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </NavBarListItem>
            </NavBarMenu>
            <NavHamburger onClick={handleNavHamburgerClick}>
                {
                    navHamburgerClick ? (<FaTimes size={20} style={{color: "#fff"}} />)
                    :
                    (<FaBars size={20} style={{color: "#fff"}} />)
                }
                
            </NavHamburger>
        </NavHeader>
    )
}

NavBar.propTypes = {

}

export default NavBar
