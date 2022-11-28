import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import { ContactFormContainer } from './ContactForm.style';

const ContactForm = () => {

    const handleClick = (e) => {
        console.log(e);
    }

    return(
        <ContactFormContainer>
            <form>
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Subject</label>
                <input type="text" />
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here." />
                <CustomButton onClick={(e) => handleClick(e)}>Submit</CustomButton>
            </form>
        </ContactFormContainer>
    )
};

export default ContactForm;

