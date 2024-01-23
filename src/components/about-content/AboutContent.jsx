import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { Document, Page } from 'react-pdf';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CustomButton from '../custom-button/CustomButton';

import { AboutContentContainer, AboutInfo, AboutImagesContainer, ImgStackTop, ImgStackBottom, ImgStyle } from './AboutContent.style';

import { AboutData } from '../../data/about-section/AboutData';
import AboutCard from '../about-card/AboutCard';

const AboutContent = () => {
    const navigate = useNavigate();
    const [active, setActive] = React.useState(false);
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    const imageStackTopFile = require('../../assets/stage1.jpg');
    const imageStackBottomFile = require('../../assets/stage2.jpg');

    const handleClick = () => {
        navigate('/contact');
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
        <AboutContentContainer>
            <AboutInfo>
                <h1>Who Am I?</h1>
                <p>
                    I am a person who continues to learn new technologies
                    and keep abreast of developments in programming tools.
                </p>

                <VerticalTimeline>
                    {
                        AboutData && AboutData.map((itm, idx) => (
                            <AboutCard
                                key={idx}
                                id={itm.id}
                                date={itm.date}
                                icon={itm.icon}
                                title={itm.title}
                                subTitle={itm.subTitle}
                                description={itm.description}
                                experianceCertificateFileName={itm.experianceCertificateFileName}
                                experianceCertificateFileExtention={itm.experianceCertificateFileExtention}
                            />
                            // <VerticalTimelineElement
                            //     key={idx}
                            //     className="vertical-timeline-element--work"
                            //     contentStyle={{ background: 'rgb(19, 19, 19)', color: '#fff' }}
                            //     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            //     date={itm.date}
                            //     iconStyle={{ background: 'rgb(30, 80, 120)', color: '#fff', marginRight: '5rem' }}
                            //     icon={itm.icon}
                            // >
                            //     <h3 className="vertical-timeline-element-title">{itm.title}</h3>
                            //     <h4 className="vertical-timeline-element-subtitle">{itm.subTitle}</h4>
                            //     <p>{itm.description}</p>
                            //     <CustomButton onClick={handleViewExperianceLetter}>
                            //         View
                            //     </CustomButton>
                            // </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </AboutInfo>
            <AboutImagesContainer>
                <ImgStackTop>
                    <ImgStyle src={imageStackTopFile} />
                </ImgStackTop>
                <ImgStackBottom>
                    <ImgStyle src={imageStackBottomFile} />
                </ImgStackBottom>
            </AboutImagesContainer>
            <Modal
                active={active}
                hideModal={handleCloseModal}
                title={"Experiance"}
                footer={
                    <>
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
                        file={`Elias.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page canvasBackground={'#dde8e8'} pageNumber={pageNumber} />
                    </Document>
                </div>
            </Modal>
        </AboutContentContainer>
    )
};

export default AboutContent;