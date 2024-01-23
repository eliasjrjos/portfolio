import React from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderSection from '../../components/header-section/HeaderSection';
import SkillCard from '../../components/skill-card/SkillCard';

import { SkillsContainer, SkillCardContainer } from './Skills.style.jsx';

import SkillData from '../../data/skill-card/SkillData';

const Skills = () => {
    const navigate =useNavigate();

    const handleCardViewClick = () => {
        navigate("/");
    }

    const handleCardSourceClick = () => {
        navigate("/");
    }

    return(
        <SkillsContainer>
            <HeaderSection 
                title={'Skills'}
                subTitle={'skills'}
                imageFileName={'stage3'}
                imageFileExtention={'jpg'}
                imageAlt={'skills'}
            />
            <SkillCardContainer>
            {
                SkillData.map((obj, idx) => {
                    return(
                        <SkillCard
                            key={idx}
                            cardTitle={obj.title}
                            cardAbstract={obj.abstract}
                            cardImageFileName={obj.imageFileName}
                            cardImageFileExtention={obj.imageFileExtention}
                            cardImageAlt={obj.imageAlt}
                            cardViewFunc={handleCardViewClick}
                            cardSourceFunc={handleCardSourceClick}
                        />
                    )
                })
            }
            </SkillCardContainer>
        </SkillsContainer>
    )
};

export default Skills;