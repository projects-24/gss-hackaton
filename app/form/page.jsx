'use client'
import QWrapper from '@/components/QWrapper'
import UiButton from '@/ui/button'
import CircleUi from '@/ui/Circle'
import InputUi from '@/ui/input'
import RowFlexUi from '@/ui/RowFlex'
import SectionUI from '@/ui/section'
import TextUi from '@/ui/Text'
import Aos from 'aos'
import React, { useState, useEffect} from 'react'
import { PiArrowRight } from 'react-icons/pi'



export default function Form() {
    const [page, setpage] = useState(1)
    const [total_pages, settotal_pages] = useState(2)
    

    const Submit = () => {
        if(page < total_pages){
            setpage(page + 1)
        }else{
            // submit the data
        }
    }
  return (
    <div className="container">
        <div className='width-600-max fit center padding-top-50'>
        <RowFlexUi gap={1} >
            <CircleUi bg='dark900' size={4}>
                <img src='/gss.png' className='width-50'/>
            </CircleUi>
            <CircleUi bg='dark900' size={4}>
            <img src='/gss.png' className='width-50'/>
            </CircleUi>
            <CircleUi bg='dark900' size={4}>
            <img src='/gss.png' className='width-50'/>
            </CircleUi>
        </RowFlexUi>
        <SectionUI gap={1} />
        <TextUi heading='h4' text='2024 GSS HACKATHON REGISTERATION' color='dark200'/>
        <SectionUI gap={2} />
        <TextUi 
        heading={'h1'}
        color='p'
        text={<span>
            {page} / {total_pages}
        </span>}
        />
        <SectionUI />

        {
            page == 1 &&
        <QWrapper>
            <TextUi 
        block
        article 
        text={<>
        <div className="h1 text-bold">👋Hi! </div>
        Would you mind taking <span className="active">10 minutes</span> to complete this form. 
        <p>
        For those applying as a team only the team lead is to fill the form and provide details of other team members.
        </p>
        </>} 
        color='dark200'/>
        </QWrapper>
        }
        {
                page == 2 && 
                <div>
                <QWrapper q="1">
                <TextUi 
                text={`Full name of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='2'>
                <TextUi 
                text={`Email address  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='3'>
                <TextUi 
                text={`Phone number  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='4'>
                <TextUi 
                text={`Age  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi type='number'/>
                </SectionUI>
                </QWrapper>

                <QWrapper q='5'>
                <TextUi 
                text={`Gender  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]}/>
                </SectionUI>
                </QWrapper>

                <QWrapper q='6'>
                <TextUi 
                text={`Name of University /Insitution`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='7'>
                <TextUi 
                text={`Field of study`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='8'>
                <TextUi 
                text={`What level are you currently in `}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'HND' , 'value':'HND'} ,
                    {'text':'Diploma' , 'value':'Diploma'} ,
                    {'text':'Undergraduate level 100' , 'value':'Undergraduate level 100'} ,
                    {'text':'Undergraduate level 200' , 'value':'Undergraduate level 200'} ,
                    {'text':'Undergraduate level 300' , 'value':'Undergraduate level 300'} ,
                    {'text':'Masters' , 'value':'Masters'} ,
                    {'text':'PhD' , 'value':'PhD'} ,
                ]}/>
                </SectionUI>
                </QWrapper>

                <QWrapper q='9'>
                <TextUi 
                text={`Name of team member 1`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='10'>
                <TextUi 
                text={`Name of team member 2`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>
                
                <QWrapper q='11'>
                <TextUi 
                text={`Name of team member 3`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='12'>
                <TextUi 
                text={`Name of team member 4`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='13'>
                <TextUi 
                text={`Name of team member 5`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>


                <QWrapper q='14'>
                <TextUi 
                text={'Education level of team members'}
                heading='h6'
                funcss='question'
                />
                        <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"Member 3"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'HND' , 'value':'HND'} ,
                    {'text':'Diploma' , 'value':'Diploma'} ,
                    {'text':'Undergraduate level 100' , 'value':'Undergraduate level 100'} ,
                    {'text':'Undergraduate level 200' , 'value':'Undergraduate level 200'} ,
                    {'text':'Undergraduate level 300' , 'value':'Undergraduate level 300'} ,
                    {'text':'Masters' , 'value':'Masters'} ,
                    {'text':'PhD' , 'value':'PhD'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 4"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'HND' , 'value':'HND'} ,
                    {'text':'Diploma' , 'value':'Diploma'} ,
                    {'text':'Undergraduate level 100' , 'value':'Undergraduate level 100'} ,
                    {'text':'Undergraduate level 200' , 'value':'Undergraduate level 200'} ,
                    {'text':'Undergraduate level 300' , 'value':'Undergraduate level 300'} ,
                    {'text':'Masters' , 'value':'Masters'} ,
                    {'text':'PhD' , 'value':'PhD'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 5"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'HND' , 'value':'HND'} ,
                    {'text':'Diploma' , 'value':'Diploma'} ,
                    {'text':'Undergraduate level 100' , 'value':'Undergraduate level 100'} ,
                    {'text':'Undergraduate level 200' , 'value':'Undergraduate level 200'} ,
                    {'text':'Undergraduate level 300' , 'value':'Undergraduate level 300'} ,
                    {'text':'Masters' , 'value':'Masters'} ,
                    {'text':'PhD' , 'value':'PhD'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
                <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"Member 1"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'HND' , 'value':'HND'} ,
                    {'text':'Diploma' , 'value':'Diploma'} ,
                    {'text':'Undergraduate level 100' , 'value':'Undergraduate level 100'} ,
                    {'text':'Undergraduate level 200' , 'value':'Undergraduate level 200'} ,
                    {'text':'Undergraduate level 300' , 'value':'Undergraduate level 300'} ,
                    {'text':'Masters' , 'value':'Masters'} ,
                    {'text':'PhD' , 'value':'PhD'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 2"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'HND' , 'value':'HND'} ,
                    {'text':'Diploma' , 'value':'Diploma'} ,
                    {'text':'Undergraduate level 100' , 'value':'Undergraduate level 100'} ,
                    {'text':'Undergraduate level 200' , 'value':'Undergraduate level 200'} ,
                    {'text':'Undergraduate level 300' , 'value':'Undergraduate level 300'} ,
                    {'text':'Masters' , 'value':'Masters'} ,
                    {'text':'PhD' , 'value':'PhD'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
        
                </QWrapper>
                <QWrapper q='15'>
                <TextUi 
                text={'Sex of team members'}
                heading='h6'
                funcss='question'
                />
                  <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"Member 3"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 4"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 5"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
                <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"Member 1"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 2"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
              
                </QWrapper>

                <QWrapper q='16'>
                <TextUi 
                text={`Proficiency in Programming languages across team members`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"R"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"PYTHON"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"JAVASCRIPT"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
                </QWrapper>

                <QWrapper q='17'>
                <TextUi 
                text={`Other programming languages`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='18'>
                <TextUi 
                text={`Other data analysis tools and proficiency( Interest, Beginner, Intermediate, Advanced, Power User)`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                    <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"SAS"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"SPSS"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"STATA"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
                <SectionUI gap={1}>
                    <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"EXCEL"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"JULIA"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Yes'} ,
                    {'text':'Beginner' , 'value':'No'} ,
                    {'text':'Intermediate' , 'value':'No'} ,
                    {'text':'Advanced' , 'value':'No'} ,
                    {'text':'Power User' , 'value':'No'} ,
                ]} />
                     </div>
             
                    </RowFlexUi>
                </SectionUI>
                </QWrapper>

                <QWrapper q='19'>
                <TextUi 
                text={`Rate your experience with data visualisation tools`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <RowFlexUi gap={0.5}>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        1
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        2
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        3
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        4
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        5
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        6
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        7
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        8
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        9
                    </CircleUi>
                    <CircleUi size={1.5} bg={'dark900'} funcss='hover-primary pointer text-dark border'>
                        10
                    </CircleUi>
                </RowFlexUi>
                </SectionUI>
                </QWrapper>

                <QWrapper q={'20'}>
                <TextUi 
                text={`Have you participated in a hackathon before?`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':'Yes'} ,
                    {'text':'No' , 'value':'No'} ,
                ]}/>
                </SectionUI>
                </QWrapper>
                
                <QWrapper q='21'>
                <TextUi 
                text={`Please describe your previous experience and achievements`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q='22'>
                <TextUi 
                text={`What are your expectations for this hackathon`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper q={'23'}>
                <TextUi 
                text={`Are you available for the campus hackathon within the month of September?`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':'Yes'} ,
                    {'text':'No' , 'value':'No'} ,
                ]}/>
                </SectionUI>
                </QWrapper>
                
                <QWrapper q={'24'}>
                <TextUi 
                text={`Are you available for the national hackathon within the month of October?`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':'Yes'} ,
                    {'text':'No' , 'value':'No'} ,
                ]}/>
                </SectionUI>
                </QWrapper>
                
                <QWrapper q='25'>
                <TextUi 
                text={`Any specific time constraints?`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                </div>
        }

        <SectionUI gap={2} >
            <UiButton bold text={page == total_pages ? "Submit" : 'Next'} bg='s' raised onClick={Submit} endIcon={<PiArrowRight />}/>
        </SectionUI>
    </div>
    </div>
  )
}
