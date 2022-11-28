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

    @media screen and ${devices.laptop} {
        grid-template-columns: 1fr;
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
`;

export const AddressStyle = styled.div`
    display: flex;
    margin-bottom: 0.8rem;

    p {
        line-height: 30px;
    }
`;

export const PhoneStyle = styled.div`

`;

export const MailStyle = styled.div`

`;

export const SocialStyle = styled.div`
    margin-top: 1rem;
`;