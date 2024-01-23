import React from 'react';
import { size } from '../../globals/media-queries';

import { CardContainer, IconStyle, BarLine, UniversityNameStyle, CollageNameStyle, CollageDetails } from './UniversityCard.style';
import { FaLink } from 'react-icons/fa';

const UniversityCard = ({ universityName, collageName, sectionName, universityIconFileName,
    universityIconFileExtention, universityIconAlt, universityWebUrl, collageWebUrl }) => {

    const iconFile = require(`../../assets/${universityIconFileName}.${universityIconFileExtention}`);

    const [width, setWidth] = React.useState();

    React.useEffect(() => {
        setWidth(window.screen.width);
        return () => {
            return;
        };
    }, [])

    return (
        <CardContainer>
            <UniversityNameStyle>
                <IconStyle src={iconFile} />
            </UniversityNameStyle>
            <BarLine />
            <CollageNameStyle>{collageName}</CollageNameStyle>
            <CollageDetails>
                <FaLink size={width <= parseInt(size.mobile) ? 10 : 20} style={{ color: '#eee', marginRight: '1rem' }} />
                <p>{collageWebUrl}</p>
            </CollageDetails>
        </CardContainer>
    )
};

export default UniversityCard;