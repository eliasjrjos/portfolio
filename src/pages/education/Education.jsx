import React from 'react';

import HeaderSection from '../../components/header-section/HeaderSection';
import UniversityCard from '../../components/university-card/UniversityCard';
import EducationCard from '../../components/education-card/EducationCard';

import { EducationData } from '../../data/education-card/EducationData';

import { EducationCardContainer, UniversityCardContainer } from './Education.style';

const Education = () => {

    return(
        <>
            <HeaderSection 
                title={'Education'}
                subTitle={'education'}
                imageFileName={'stage2'}
                imageFileExtention={'jpg'}
                imageAlt={'education'}
            />
            <EducationCardContainer>
                {
                    EducationData.map((obj, idx) => {
                        return(
                            <EducationCard 
                                key={idx}
                                degreeName={obj.degreeName}
                                degreeUniversity={obj.degreeUniversity}
                                collageName={obj.collageName}
                                sectionName={obj.sectionName}
                                graduationRate={obj.graduationRate}
                                graduationDate={obj.graduationDate}
                                degreeSDate={obj.degreeSDate}
                                degreeEDate={obj.degreeEDate}
                                degreeImageFileName={obj.degreeImageFileName}
                                degreeImageFileExtention={obj.degreeImageFileExtention}
                                degreeImageAlt={obj.degreeImageAlt}
                            />
                        )
                    })
                }
            </EducationCardContainer>
            <UniversityCardContainer>
                <UniversityCard 
                    universityName={'Aleppo'}
                    collageName={'Informatics'}
                    collageWebUrl={'www.aleppo.com'}
                    universityIconFileName={'icon1'}
                    universityIconFileExtention={'jpg'}
                />
                <UniversityCard 
                    universityName={'Aleppo'}
                    collageName={'Informatics'}
                    collageWebUrl={'www.aleppo.com'}
                    universityIconFileName={'icon1'}
                    universityIconFileExtention={'jpg'}
                />
                <UniversityCard 
                    universityName={'HIBA'}
                    collageName={'MBA'}
                    collageWebUrl={'www.hiba.edu.sy'}
                    universityIconFileName={'icon1'}
                    universityIconFileExtention={'png'}
                />
                <UniversityCard 
                    universityName={'HIBA'}
                    collageName={'MBA'}
                    collageWebUrl={'www.hiba.edu.sy'}
                    universityIconFileName={'icon1'}
                    universityIconFileExtention={'png'}
                />
            </UniversityCardContainer>
        </>
    )
};

export default Education;