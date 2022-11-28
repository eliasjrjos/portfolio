import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import { CardContainer, WorkImgStyle, CardDetails, CardFooter } from './WorkCard.style';

const WorkCard = ({ cardTitle, cardAbstract, cardImageFileName, 
    cardImageFileExtention, cardImageAlt, cardViewFunc, cardSourceFunc }) => {

    const imageFile = require(`../../assets/${cardImageFileName}.${cardImageFileExtention}`);

    return(
        <CardContainer>
            <WorkImgStyle src={imageFile} alt={cardImageAlt} />
            <h1>{cardTitle}</h1>
            <CardDetails>
                <p>{cardAbstract}</p>
                <CardFooter>
                    <CustomButton onClick={cardViewFunc}>View</CustomButton>
                    <CustomButton onClick={cardSourceFunc}>Source</CustomButton>
                </CardFooter>
            </CardDetails>
        </CardContainer>
    )
};

export default WorkCard;