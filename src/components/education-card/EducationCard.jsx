import React from 'react';
import Modal from '../modal/Modal';
import { Document, Page } from 'react-pdf';

import { AnimatePresence, motion } from 'framer-motion';

import CustomButton from '../custom-button/CustomButton';

import { CardContainer, EducationModalFooter, EducationActions, BarLine, ImageStyle, EducationDetails, CollageNameStyle, SectionNameStyle } from './EducationCard.style';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './EducationCard.style.css';

const EducationCard = ({ degreeName, degreeUniversity, collageName, sectionName,
    graduationRate, graduationDate, degreeSDate, degreeEDate,
    degreeImageFileName, degreeImageFileExtention, degreeCertificateFileName,
    degreeCertificateFileExtention, degreeImageAlt }) => {

    const [active, setActive] = React.useState(false);
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);
    const cardImageFile = require(`../../assets/${degreeImageFileName}.${degreeImageFileExtention}`)


    const handleCardViewClick = () => {
        console.log('View Certificate File');
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
        <AnimatePresence initial={false}>
            <CardContainer>
                <motion.h1 whileTap={{ scale: 1.3 }}>{degreeName}</motion.h1>
                <BarLine as={motion.span} whileTap={{ scale: 1.5 }} animate={{ scale: 3.5 }} />
                <p>{degreeUniversity}</p>
                <CollageNameStyle>{collageName}</CollageNameStyle>
                <SectionNameStyle>{sectionName}</SectionNameStyle>
                <h4>{`${degreeSDate} - ${degreeEDate}`}</h4>
                <ImageStyle src={cardImageFile} />
                <EducationDetails as={motion.div} whileTap={{ scale: 1.5 }} animate={{ scale: 1 }}>
                    <h4>{`Graduation Date`}
                    </h4>
                    <h3>{graduationDate}</h3>
                    <h4>{'Rate'}
                    </h4>
                    <h3>{graduationRate}</h3>
                </EducationDetails>
                <EducationActions>
                    <CustomButton onClick={() => handleCardViewClick()}>View Certificate</CustomButton>
                </EducationActions>
                <Modal
                    active={active}
                    hideModal={handleCloseModal}
                    title={degreeName}
                    footer={<EducationModalFooter>
                        <div>
                            <CustomButton onClick={goToPrevPage}>Prev</CustomButton>
                            <CustomButton onClick={goToNextPage}>Next</CustomButton>
                        </div>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </EducationModalFooter>}
                >
                    <div>
                        <Document options={{ workerSrc: "pdf.worker.js" }}
                            file={`${degreeCertificateFileName}.${degreeCertificateFileExtention}`} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page canvasBackground={'#dde8e8'} pageNumber={pageNumber} />
                        </Document>
                    </div>
                </Modal>
            </CardContainer>
        </AnimatePresence>
    )
};

export default EducationCard;