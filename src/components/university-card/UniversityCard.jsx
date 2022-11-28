import React from 'react';

import { CardContainer, IconStyle, BarLine, UniversityNameStyle, CollageNameStyle, CollageDetails } from './UniversityCard.style';
import { FaLink } from 'react-icons/fa';

const UniversityCard = ({ universityName, collageName, sectionName, universityIconFileName, 
        universityIconFileExtention, universityIconAlt, universityWebUrl, collageWebUrl }) => {

    const iconFile = require(`../../assets/${universityIconFileName}.${universityIconFileExtention}`);

    return(
        <CardContainer>
            <UniversityNameStyle>
                <IconStyle src={iconFile}/>
                <h1>{universityName}</h1>
            </UniversityNameStyle>
            <BarLine />
            <CollageNameStyle>{collageName}</CollageNameStyle>
            <CollageDetails>
                    <FaLink size={30} style={{color: '#eee', marginRight: '1.5rem'}} />
                    <p>{collageWebUrl}</p>
            </CollageDetails>
        </CardContainer>
    )
};

export default UniversityCard;