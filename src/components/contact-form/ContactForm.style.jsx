import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

export const ContactFormContainer = styled.div`
    label {
        color: #fff;
        margin-bottom: 0.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 4rem 1rem;
        margin: auto;
        max-width: 600;
    }

    input, textarea {
        margin-bottom: 1rem;
        padding: 10px 18px
        font-size: 1.2rem;
        background-color: rgba(255,255,255,0.1);
        bordercolor: rgba(255,255,255,0.1);
        color: #f4f4f4;
    }
`;