import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const FooterContainer = styled.div`
    width: 100%;
    padding: 6rem 0;
    background-color: rgba(19, 19, 19, 0.8);
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px

    h4 {
        font-size: 1.2rem;
        padding-botton: 0.7rem;
    }

    p {
        font-size: 1.2rem;
    }

    @media ${devices.tablet} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: repeat(2, 1fr);
        padding: 6rem 0;
        max-width: ${devices.tablet};
        grid-gap: 30px

        h4 {
            font-size: 0.8rem;
            padding-botton: 0.4rem;
        }
    
        p {
            font-size: 0.8rem;
        }
    }

    @media ${devices.mobile} {  
        max-width: 90%;
        margin: auto;
        grid-template-columns: 1fr;
        padding: 3rem 0;
        max-width: ${devices.mobile};
        grid-gap: 20px

        h4 {
            font-size: 0.8rem;
            padding-botton: 0.2rem;
        }
    
        p {
            font-size: 0.8rem;
        }
    }
`;

export const FooterLeftSection = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const FooterRightSection = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h4 {
        font-size: 0.8rem;
        padding-botton: 0.2rem;
    }

    p {
        font-size: 0.8rem;
    }
`;

export const AddressStyle = styled.div`
    display: flex;
    margin-bottom: 0.8rem;

    p {
        line-height: 30px;
        margin-left: 0.5rem;
    }
`;

export const PhoneStyle = styled.div`
    h4 {
        font-size: 1.4rem;
    }
`;

export const MailStyle = styled.div`
    h4 {
        font-size: 1.4rem;
    }
`;

export const SocialStyle = styled.div`
    margin-top: 1rem;
`;