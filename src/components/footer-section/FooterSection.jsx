import React from 'react';

import { FaHome, FaMobile, FaWhatsapp, FaMailBulk, FaFacebook, FaLinkedin } from 'react-icons/fa';

import { FooterContainer,
    FooterLeftSection,
    FooterRightSection,
    AddressStyle,
    PhoneStyle,
    MailStyle,
    SocialStyle } from './FooterSection.style';

const FooterSection = () => {

    return(
        <FooterContainer>
            <FooterLeftSection>
                <AddressStyle>
                    <FaHome size={20} style={{color: '#fff', marginRight: '1.5rem'}} />
                    <p>Jdaydit Artooz</p>
                    <p>Damascus</p>
                </AddressStyle>
                <PhoneStyle>
                    <h4>
                        <FaMobile size={20} style={{color: '#fff', marginRight: '1.5rem'}} />
                        +963938914753
                    </h4>
                    <h4>
                        <FaWhatsapp size={20} style={{color: '#fff', marginRight: '1.5rem'}} />
                        +963938914753
                    </h4>
                </PhoneStyle>
                <MailStyle>
                    <h4>
                        <FaMailBulk size={20} style={{color: '#fff', marginRight: '1.5rem'}} />
                        jrjoselias@gmail.com
                    </h4>
                </MailStyle>
            </FooterLeftSection>
            <FooterRightSection>
                <h4>About my work...</h4>
                <p>I develope many web application since eight years.</p>
                <SocialStyle>
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} />
                    <FaWhatsapp size={30} style={{color: '#fff', marginRight: '1rem'}} />
                    <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}} />
                </SocialStyle>
            </FooterRightSection>
        </FooterContainer>
    )
};

export default FooterSection;