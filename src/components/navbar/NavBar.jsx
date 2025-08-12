import React from 'react'
import Modal from '../modal/Modal';
import { Document, Page } from 'react-pdf';

import CustomButton from '../custom-button/CustomButton';

import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaAddressCard } from 'react-icons/fa';
import { NavHeader, NavBarMenu, NavBarListItem, NavHamburger, NavLogo, ModalFooter } from './NavBar.style'

const NavBar = props => {

    const [navHamburgerClick, setNavHamburgerClick] = React.useState(false);
    const [scrollActive, setScrollActive] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    const handleNavHamburgerClick = () => {
        setNavHamburgerClick(!navHamburgerClick);
    }

    const handleScrollChange = () => {
        if (window.scrollY > 100)
            setScrollActive(true)
        else
            setScrollActive(false)
    }

    const handleProfileClick = () => {
        setActive(true);
    }

    const handleCloseModal = () => {
        setPageNumber(1);
        setActive(false);
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );


    window.addEventListener("scroll", handleScrollChange);


    return (
        <NavHeader isScrollActive={scrollActive}>
            <NavLogo>
                <NavLink to={'/'}>Elias PORTFOLIO</NavLink>
                <FaAddressCard size={20} style={{ color: "#fff" }} onClick={handleProfileClick} />
            </NavLogo>
            <NavBarMenu active={navHamburgerClick}>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/about'}>About</NavLink>
                </NavBarListItem>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/projects'}>Projects</NavLink>
                </NavBarListItem>
                <NavBarListItem onClick={handleNavHamburgerClick}>
                    <NavLink to={'/skills'}>Skills</NavLink>
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
                    navHamburgerClick ? (<FaTimes size={20} style={{ color: "#fff" }} />)
                        :
                        (<FaBars size={20} style={{ color: "#fff" }} />)
                }

            </NavHamburger>
            <Modal
                active={active}
                hideModal={handleCloseModal}
                title={'CV'}
                footer={<ModalFooter>
                    <div>
                        <CustomButton onClick={goToPrevPage}>Prev</CustomButton>
                        <CustomButton onClick={goToNextPage}>Next</CustomButton>
                    </div>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </ModalFooter>}
            >
                <div>
                    <Document options={{ workerSrc: "pdf.worker.js" }}
                        file={`CV.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page canvasBackground={'#dde8e8'} pageNumber={pageNumber} />
                    </Document>
                </div>
            </Modal>
        </NavHeader>
    )
}

NavBar.propTypes = {

}

export default NavBar
