import React from 'react';
import { useNavigate } from 'react-router-dom';

import PriceCard from '../../components/price-card/PriceCard';
import WorkCard from '../../components/work-card/WorkCard';
import HeaderSection from '../../components/header-section/HeaderSection';

import WorkData from '../../data/work-card/WorkData';

import { PriceCardDirectory, WorkCardContainer } from './Projects.style';

const Projects = () => {
    const navigate = useNavigate();

    const handlePriceCardClick = () => {
        navigate('/contact');
    }

    const handleWorkCardViewClick = () => {
        navigate("/");
    }

    const handleWorkCardSourceClick = () => {
        navigate("/");
    }

    return (
        <>
            <HeaderSection
                title={'Projects'}
                subTitle={'projects'}
                imageFileName={'stage1'}
                imageFileExtention={'jpg'}
                imageAlt={'projects'}
            />
            <WorkCardContainer>
                {
                    WorkData.map((obj, idx) => {

                        return (
                            <WorkCard
                                key={idx}
                                cardTitle={obj.title}
                                cardAbstract={obj.abstract}
                                cardImageFileName={obj.imageFileName}
                                cardImageFileExtention={obj.imageFileExtention}
                                cardImageAlt={obj.imageAlt}
                                cardViewFunc={handleWorkCardViewClick}
                                cardSourceFunc={handleWorkCardSourceClick}
                            />
                        )
                    })
                }
            </WorkCardContainer>
            <PriceCardDirectory>
                <PriceCard
                    cardName={'Basic'}
                    cardPrice={100}
                    cardDetails={{
                        duration: '- 3 Days -',
                        pages: '- 3 Pages -',
                        features: '- Featured -',
                        design: '- Responsive Design -'
                    }}
                    clickFunc={handlePriceCardClick}
                />
                <PriceCard
                    cardName={'Advanced'}
                    cardPrice={200}
                    cardDetails={{
                        duration: '- 2 Days -',
                        pages: '- 5 Pages -',
                        features: '- Featured -',
                        design: '- Responsive Design -'
                    }}
                    clickFunc={handlePriceCardClick}
                />
                <PriceCard
                    cardName={'Business'}
                    cardPrice={300}
                    cardDetails={{
                        duration: '- 5 Days -',
                        pages: '- 8 Pages -',
                        features: '- Featured -',
                        design: '- Responsive Design -'
                    }}
                    clickFunc={handlePriceCardClick}
                />
            </PriceCardDirectory>
        </>
    )
};

export default Projects;