import React from 'react';
import { size } from '../../globals/media-queries';

import { FaHome, FaMobile, FaWhatsapp, FaMailBulk, FaFacebook, FaLinkedin } from 'react-icons/fa';

import {
    FooterContainer,
    FooterLeftSection,
    FooterRightSection,
    AddressStyle,
    PhoneStyle,
    MailStyle,
    SocialStyle
} from './FooterSection.style';

const FooterSection = () => {
    const [width, setWidth] = React.useState();

    React.useEffect(() => {
        setWidth(window.screen.width);
        return () => {
            return;
        };
    }, [])

    return (
        <FooterContainer>
            <FooterLeftSection>
                <AddressStyle>
                    <FaHome size={20} style={{ color: '#fff', marginRight: '1.5rem' }} />
                    <p>Mühlhäuser Straße 54</p>
                    <p>-</p>
                    <p>48155 Münster</p>
                </AddressStyle>
                <PhoneStyle>
                    <h4>
                        <FaMobile size={width <= parseInt(size.mobile) ? 15 : 20} style={{ color: '#fff', marginRight: '1.5rem' }} />
                        +491601575501
                    </h4>
                    <h4>
                        <FaWhatsapp size={width <= parseInt(size.mobile) ? 15 : 20} style={{ color: '#fff', marginRight: '1.5rem' }} />
                        +491601575501
                    </h4>
                </PhoneStyle>
                <MailStyle>
                    <h4>
                        <FaMailBulk size={width <= parseInt(size.mobile) ? 15 : 20} style={{ color: '#fff', marginRight: '1.5rem' }} />
                        jrjoselias@gmail.com
                    </h4>
                </MailStyle>
            </FooterLeftSection>
            <FooterRightSection>
                <h4>About my work...</h4>
                <p>I develope many web application since eight years.</p>
                <SocialStyle>
                    <FaFacebook size={width <= parseInt(size.mobile) ? 20 : 30} style={{ color: '#fff', marginRight: '1rem' }} />
                    <FaWhatsapp size={width <= parseInt(size.mobile) ? 20 : 30} style={{ color: '#fff', marginRight: '1rem' }} />
                    <FaLinkedin size={width <= parseInt(size.mobile) ? 20 : 30} style={{ color: '#fff', marginRight: '1rem' }} />
                </SocialStyle>
            </FooterRightSection>
        </FooterContainer>
    )
};

export default FooterSection;