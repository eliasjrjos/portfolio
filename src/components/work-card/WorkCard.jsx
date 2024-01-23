import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import Modal from '../modal/Modal';
import { Document, Page } from 'react-pdf';

import { CardContainer, CardImgStyle, CardDetails, CardHint, CardFooter, CardModalFooter } from './WorkCard.style';

const WorkCard = ({ cardTitle, cardAbstract, cardImageFileName,
    cardImageFileExtention, cardImageAlt, cardViewFunc, cardSourceFunc }) => {

    const cardImageFile = require(`../../assets/${cardImageFileName}.${cardImageFileExtention}`);
    const [active, setActive] = React.useState(false);
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    const handleCardViewClick = () => {
        setActive(true);
    }

    const handleCloseModal = () => {
        setPageNumber(1);
        setActive(false);
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

    return (
        <CardContainer>
            <CardImgStyle src={cardImageFile} alt={cardImageAlt} />
            <CardDetails>
                <CardHint>
                    <h4>{cardTitle}</h4>
                    <p>{cardAbstract}</p>
                </CardHint>
                <CardFooter>
                    <CustomButton onClick={handleCardViewClick}>View</CustomButton>
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

            {/* <Modal
                active={active}
                hideModal={handleCloseModal}
                title={cardTitle}
                footer={<CardModalFooter>
                    <div>
                        <CustomButton onClick={goToPrevPage}>Prev</CustomButton>
                        <CustomButton onClick={goToNextPage}>Next</CustomButton>
                    </div>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </CardModalFooter>}
            >
                <div>
                    <Document options={{ workerSrc: "pdf.worker.js" }}
                        file={`Elias.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page canvasBackground={'#dde8e8'} pageNumber={pageNumber} />
                    </Document>
                </div>
            </Modal> */}
        </CardContainer>
    )
};

export default WorkCard;