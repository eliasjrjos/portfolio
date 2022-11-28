import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm';
import HeaderSection from '../../components/header-section/HeaderSection';

const Contact = () => {

    return(
        <>
            <HeaderSection 
                title={'Contact'}
                subTitle={'contact'}
                imageFileName={'stage2'}
                imageFileExtention={'jpg'}
                imageAlt={'contact'}
            />
            <ContactForm />
        </>
    )
};

export default Contact;