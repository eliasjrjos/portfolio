import React from 'react'
import PropTypes from 'prop-types'

import HeaderSection from '../../components/header-section/HeaderSection';
import AboutContent from '../../components/about-content/AboutContent';


const About = props => {
    return (
        <>
            <HeaderSection 
                title={'About'} 
                subTitle={'about'} 
                imageFileName={'cross-platforms'}
                imageFileExtention={'jpg'}
                imageAlt={"about"}
            />
            <AboutContent />
        </>
    )
}

About.propTypes = {

}
export default About
