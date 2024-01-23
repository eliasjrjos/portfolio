import React from 'react';
import Modal from '../modal/Modal';
import { Document, Page } from 'react-pdf';

import { AnimatePresence, motion } from 'framer-motion';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CustomButton from '../custom-button/CustomButton';


import { CardContainer } from './AboutCard.style';

const AboutCard = ({ id, date, icon, title, subTitle, description, experianceCertificateFileName, experianceCertificateFileExtention }) => {

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
        // <AnimatePresence initial={false}>
        <>
            <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(19, 19, 19)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={date}
                iconStyle={{ background: 'rgb(30, 80, 120)', color: '#fff', marginRight: '5rem' }}
                icon={icon}
            >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
                <p>{description}</p>
                {experianceCertificateFileName && experianceCertificateFileExtention
                    && <CustomButton onClick={handleCardViewClick}>
                        View
                </CustomButton>}
            </VerticalTimelineElement>

            <Modal
                active={active}
                hideModal={handleCloseModal}
                title={subTitle}
                footer={<>
                    <div>
                        <CustomButton onClick={goToPrevPage}>Prev</CustomButton>
                        <CustomButton onClick={goToNextPage}>Next</CustomButton>
                    </div>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </>}
            >
                <div>
                    <Document options={{ workerSrc: "pdf.worker.js" }}
                        file={`${experianceCertificateFileName}.${experianceCertificateFileExtention}`} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page canvasBackground={'#dde8e8'} pageNumber={pageNumber} />
                    </Document>
                </div>
            </Modal>
        </>
        // </AnimatePresence>
    );
};

export default AboutCard;