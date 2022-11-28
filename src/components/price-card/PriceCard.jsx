import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import { CardContainer, PriceStyle, BarLine, CardDetails } from './PriceCard.style';

const PriceCard = ({ cardName, cardPrice, cardDetails, clickFunc }) => {

    return(
        <CardContainer>
            <h4>{cardName}</h4>
            <BarLine />
            <PriceStyle>$ {cardPrice}</PriceStyle>
            <CardDetails>
                <p>{cardDetails && cardDetails.duration}</p>
                <p>{cardDetails && cardDetails.pages}</p>
                <p>{cardDetails && cardDetails.features}</p>
                <p>{cardDetails && cardDetails.design}</p>
            </CardDetails>
            <CustomButton onClick={clickFunc}>Purchase NOW</CustomButton>
        </CardContainer>
    )
};

export default PriceCard;