import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import Modal from '../modal/Modal';

import { CardContainer, CardImgStyle, CardDetails, CardFooter } from './SkillCard.style.jsx';

const SkillCard = ({ cardTitle, cardAbstract, cardImageFileName,
    cardImageFileExtention, cardImageAlt, cardViewFunc, cardSourceFunc }) => {

    const [active, setActive] = React.useState(false);
    const cardImageFile = require(`../../assets/${cardImageFileName}.${cardImageFileExtention}`);

    return (
        <CardContainer>
            <CardImgStyle src={cardImageFile} alt={cardImageAlt} />
            <h4>{cardTitle}</h4>
            <CardDetails>
                <p>{cardAbstract}</p>
                <CardFooter>
                    <CustomButton onClick={() => setActive(true)}>View</CustomButton>
                    <CustomButton onClick={cardSourceFunc}>Source</CustomButton>
                </CardFooter>
            </CardDetails>
            <Modal
                active={active}
                hideModal={() => setActive(false)}
                title={cardTitle}
            >
                {cardAbstract}
            </Modal>
        </CardContainer>
    )
};

export default SkillCard;