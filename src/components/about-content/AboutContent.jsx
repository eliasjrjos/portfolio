import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';

import { AboutContentContainer, AboutInfo, AboutImagesContainer, ImgStackTop, ImgStackBottom, ImgStyle } from './AboutContent.style';

const AboutContent = () => {
    const navigate = useNavigate();

    const imageStackTopFile = require('../../assets/stage1.jpg');    
    const imageStackBottomFile = require('../../assets/stage2.jpg');

    const handleClick = () => {
        navigate('/contact');
    }

    return(
        <AboutContentContainer>
            <AboutInfo>
                <h1>Who Am I?</h1>
                <p>
                    I'm a fullstack developer.I'm a fullstack developer.I'm a fullstack developer.
                    I'm a fullstack developer.I'm a fullstack developer.I'm a fullstack developer.
                    I'm a fullstack developer.I'm a fullstack developer.I'm a fullstack developer.
                    I'm a fullstack developer.
                </p>
                <CustomButton onClick={handleClick}>Contact</CustomButton>
            </AboutInfo>
            <AboutImagesContainer>
                <ImgStackTop>
                    <ImgStyle src={imageStackTopFile} />
                </ImgStackTop>
                <ImgStackBottom>
                    <ImgStyle src={imageStackBottomFile} />
                </ImgStackBottom>
            </AboutImagesContainer>
        </AboutContentContainer>
    )
};

export default AboutContent;