import styled, { css } from 'styled-components';
import { devices } from '../../globals/media-queries';

import { motion } from 'framer-motion';

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #eee;
    color: #eee;
    text-align: center;
    padding: 1rem;

    &:hover {
        background-color: #545454;
    }

    h4 {
        padding: 0.5rem;
    }

    h3 {
        font-weight: 900;
        padding: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        padding: 10px 0;
    }

    @media ${devices.tablet} {
        padding: 0.2rem;

        h1 {
            font-size: 2rem;
        }

        h4 {
            padding: 0.2rem;
        }
    
        h3 {
            font-weight: 500;
            padding: 0.3rem;
        }
    
        p {
            font-size: 1rem;
            padding: 8px 0;
        }
    }

    @media ${devices.mobile} {
        padding: 0rem;

        h1 {
            font-size: 1.3rem;
        }

        h4 {
            padding: 0.2rem;
        }
    
        h3 {
            font-weight: 400;
            padding: 0.1rem;
        }
    
        p {
            font-size: 0.8rem;
            padding: 6px 0;
        }
    }
`;

export const EducationActions = styled.div`

`;

export const EducationModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;

export const BarLine = styled(motion.span) `
    border-bottom: 1px solid #eee;
    width: 10%;
    margin: 1.5rem auto;
    display: block;
`;

export const ImageStyle = styled.img`
    width: 180px;
    height: 180px;
    padding: 0.2rem;
`;

export const EducationDetails = styled(motion.div) `
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
        line-height: 30px;
    }

    h3 {
        line-height: 30px;
        color: #eade2399;
    }

    @media ${devices.tablet} {
        h4 {
            line-height: 25px;
            font-size: 2rem;
        }
    
        h3 {
            line-height: 25px;
            color: #eade2399;
            font-size: 2.2rem;
        }
    }

    @media ${devices.mobile} {
        h4 {
            line-height: 20px;
            font-size: 1rem;
        }
    
        h3 {
            line-height: 20px;
            color: #eade2399;
            font-size: 1.5rem;
        }
    }
`;

export const CollageNameStyle = styled.div`
    font-size: 3rem;
    font-weight: 600;
    padding: 1rem 0;

    @media ${devices.tablet} {
        font-size: 2rem;
        font-weight: 500;
        padding: 1rem 0;
    }

    @media ${devices.mobile} {
        font-size: 1.5rem;
        font-weight: 400;
        padding: 1rem 0;
    }
`;

export const SectionNameStyle = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 0;

    @media ${devices.tablet} {
        font-size: 1.7rem;
        font-weight: 500;
        padding: 1rem 0;
    }

    @media ${devices.mobile} {
        font-size: 1.2rem;
        font-weight: 400;
        padding: 1rem 0;
    }
`;