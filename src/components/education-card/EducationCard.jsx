import React from 'react';

import { CardContainer, BarLine, ImageStyle, EducationDetails, CollageNameStyle, SectionNameStyle } from './EducationCard.style';

const EducationCard = ({ degreeName, degreeUniversity, collageName, sectionName, 
                graduationRate, graduationDate, degreeSDate, degreeEDate,
                degreeImageFileName, degreeImageFileExtention, degreeImageAlt }) => {

    const imageFile = require(`../../assets/${degreeImageFileName}.${degreeImageFileExtention}`)
    
    return(
        <CardContainer>
            <h1>{degreeName}</h1>
            <BarLine />
            <p>{degreeUniversity}</p>
            <CollageNameStyle>{collageName}</CollageNameStyle>
            <SectionNameStyle>{sectionName}</SectionNameStyle>
            <h4>{`${degreeSDate} - ${degreeEDate}`}</h4>
            <ImageStyle src={imageFile} />
            <EducationDetails>
                <h4>{`Graduation Date`}
                </h4>
                <h3>{graduationDate}</h3>
                <h4>{'Rate'}
                </h4>
                <h3>{graduationRate}</h3>
            </EducationDetails>
        </CardContainer>
    )
};

export default EducationCard;