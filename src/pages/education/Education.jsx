import React from 'react';

import HeaderSection from '../../components/header-section/HeaderSection';
import UniversityCard from '../../components/university-card/UniversityCard';
import EducationCard from '../../components/education-card/EducationCard';

import { EducationData } from '../../data/education-card/EducationData';

import { EducationCardContainer, UniversityCardContainer } from './Education.style';

const Education = () => {

    return (
        <>
            <HeaderSection
                title={'Education'}
                subTitle={'education'}
                imageFileName={'graduation3'}
                imageFileExtention={'jfif'}
                imageAlt={'education'}
            />
            <EducationCardContainer>
                {
                    EducationData.map((obj, idx) => {
                        return (
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
                                degreeCertificateFileName={obj.degreeCertificateFileName}
                                degreeCertificateFileExtention={obj.degreeCertificateFileExtention}
                            />
                        )
                    })
                }
            </EducationCardContainer>
            <UniversityCardContainer>
                <UniversityCard
                    universityName={'HIBA'}
                    collageName={'HIBA'}
                    collageWebUrl={'www.hiba.edu.sy'}
                    universityIconFileName={'hiba'}
                    universityIconFileExtention={'png'}
                />
                <UniversityCard
                    universityName={'Aleppo'}
                    collageName={'Informatics'}
                    collageWebUrl={'www.alepuniv.edu.sy'}
                    universityIconFileName={'alepuniv'}
                    universityIconFileExtention={'jpg'}
                />
            </UniversityCardContainer>
        </>
    )
};

export default Education;