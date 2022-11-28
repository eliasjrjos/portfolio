import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import IntroImgFile from '../../assets/intro.jpg';
import { IntroImgContainer, IntroImgMask, IntroImgStyle, IntroImgContent } from './IntroImg.style';

const IntroImg = () => {
    const navigate = useNavigate();
    
    const handleClickButton = (path) => {
        navigate(`/${path}`);
    }

    return(
        <IntroImgContainer>
            <IntroImgMask>
                <IntroImgStyle src={IntroImgFile} alt={"Intro"} />
            </IntroImgMask>
            <IntroImgContent>
                <p>HI, I'M A FREELANCER.</p>
                <h1>FULLSTACK Developer.</h1>
                <div>
                    <CustomButton onClick={() => handleClickButton("projects")}>Projects</CustomButton>
                    <CustomButton onClick={() => handleClickButton("contact")}>Contact</CustomButton>
                </div>
            </IntroImgContent>
        </IntroImgContainer>
    )
};

export default IntroImg;

