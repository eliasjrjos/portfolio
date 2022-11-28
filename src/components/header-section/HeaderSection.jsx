import React from 'react';

import { HeaderSectionContainer,
        HeaderSectionMask,
        HeaderSectionImgStyle,
        HeaderSectionContent } from './HeaderSection.style';

const HeaderSection = ({ title, subTitle, imageFileName, imageFileExtention, imageAlt }) => {
    const imageSrc = require(`../../assets/${imageFileName}.${imageFileExtention}`);
    return(
        <HeaderSectionContainer>
            <HeaderSectionMask>
                <HeaderSectionImgStyle src={imageSrc} alt={imageAlt} />
            </HeaderSectionMask>
            <HeaderSectionContent>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </HeaderSectionContent>
        </HeaderSectionContainer>
    )
};

export default HeaderSection;