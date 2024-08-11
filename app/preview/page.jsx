'use client'
import QWrapper from '@/components/QWrapper'
import UiButton from '@/ui/button'
import CircleUi from '@/ui/Circle'
import InputUi from '@/ui/input'
import RowFlexUi from '@/ui/RowFlex'
import SectionUI from '@/ui/section'
import TextUi from '@/ui/Text'
import React, { useState, useEffect} from 'react'
import { PiArrowRight } from 'react-icons/pi'


export default function Preview({data}) {
if(data){
    return (
        <div className="container">
          
            <div className='width-600-max fit center padding-top-50'>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Team Name" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.team_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Team Leader" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.lead_full_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Leader Email" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.lead_email }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Leader contact" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.lead_phone_number }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Leader Email" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.lead_age }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Leader Gender" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.lead_gender }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               </div>
    
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="University / Institution" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.university }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Field of study" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.field_of_study }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Current Level" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.level_of_study }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Member 1" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_1_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Gender" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_1_gender }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Education Level" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_1_education_level }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Member 2" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_2_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Gender" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_2_gender }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Education Level" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_2_education_level }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Member 3" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_3_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Gender" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_3_gender }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Education Level" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_3_education_level }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Member 4" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_4_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Gender" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_4_gender }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Education Level" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_4_education_level }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Member 5" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_5_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Gender" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_5_gender }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Education Level" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.member_5_education_level }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                <SectionUI>
                    <TextUi
                    text={`Proficiency in Programming languages across team members`}
                    heading='h6'
                    />
                </SectionUI>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="R" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_r }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Python" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_python }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="JavaScript" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_javascript }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Proficiency in Programming languages across team members`}
                    heading='h6'
                    />
                </SectionUI>
                <TextUi 
                        text={ data.proficiency_other }
                        bold 
                        uppercase 
                        block
                        />
               </div>
     
     
               <div className='border padding-20 margin-bottom-40 round-edge'>
                <SectionUI>
                    <TextUi
                    text={`Other data analysis tools and proficiency( Interest, Beginner, Intermediate, Advanced, Power User)`}
                    heading='h6'
                    />
                </SectionUI>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="SAS" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_sas }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="SPSS" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_spss }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="STATA" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_stata }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="EXCEL" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_excel }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="JULIA" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.proficiency_julia }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
           
               </div>
    
    
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Rate your experience with data visualisation tools`}
                    heading='h6'
                    />
                </SectionUI>
                <TextUi 
                heading="h3"
                        text={ data.visualization_experience }
                        bold 
                        uppercase 
                        block
                        />
               </div>
    
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Have you participated in a hackathon before?`}
                    heading='h6'
                    />
                </SectionUI>
                <TextUi 
                heading="h3"
                        text={ data.previous_hackathon }
                        bold 
                        uppercase 
                        block
                        />
               </div>
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Please describe your previous experience and achievements`}
                    heading='h6'
                    />
                </SectionUI>
               <div className="dark900 text-dark200 padding-20 round-edge">
               <TextUi article
                        text={ data.previous_experience }
                        />
               </div>
               </div>
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`What are your expectations for this hackathon`}
                    heading='h6'
                    />
                </SectionUI>
               <div className="dark900 text-dark200 padding-20 round-edge">
               <TextUi article
                        text={ data.expectations }
                        />
               </div>
               </div>
    
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Are you available for the campus hackathon within the month of September?`}
                    heading='h6'
                    />
                </SectionUI>
                <TextUi 
                heading="h3"
                        text={ data.campus_availability }
                        bold 
                        uppercase 
                        block
                        />
               </div>
    
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Are you available for the national hackathon within the month of October?`}
                    heading='h6'
                    />
                </SectionUI>
                <TextUi 
                heading="h3"
                        text={ data.national_availability }
                        bold 
                        uppercase 
                        block
                        />
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
                    <SectionUI>
                    <TextUi
                    text={`Any specific time constraints?`}
                    heading='h6'
                    />
                </SectionUI>
                <TextUi 
                heading="h3"
                        text={ data.time_constraints }
                        bold 
                        uppercase 
                        block
                        />
               </div>
    
                    <div>
     
                    
    
                    </div>
    
        </div>
        </div>
      )
}else{
    return <></>
}
}
