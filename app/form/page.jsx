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


const data = [
    {
        'question':'Full name of team lead',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Email address  of team lead',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Phone number  of team lead',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Gender  of team lead',
        'options':['male','female', 'Non-Binary', 'Prefer not to say'],
        'answer':null
    }
    ,
    {
        'question':'Name of University /Insitution',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Field of study',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'What level are you currently in ',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Name of team member 1',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Name of team member 2',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Name of team member 3',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Name of team member 4',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Name of team member 5',
        'options':null,
        'answer':null
    }

    ,
    {
        'question':'Proficiency in Programming languages across team members',
        'options': null,
        'answer':null
    },
    ,
    {
        'question':'Other programming languages',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Other data analysis tools and proficiency( Interest, Beginner, Intermediate, Advanced, Power User)',
        'options':null,
        'answer':null
    }
    ,
    {
        'question':'Rate your experience with data visualisation tools',
        'options':null,
        'answer':null
    } ,
    {
        'question':'Have you participated in a hackathon before?',
        'options':['Yes', 'No'],
        'answer':null
    },
]

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
                <QWrapper>
                <TextUi 
                text={data[0].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[1].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[2].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[3].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]}/>
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[4].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[5].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[6].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
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

                <QWrapper>
                <TextUi 
                text={data[7].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[8].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>
                
                <QWrapper>
                <TextUi 
                text={data[9].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[10].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[11].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>


                <QWrapper>
                <TextUi 
                text={data[12].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
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

{/*                 
                <QWrapper>
                <TextUi 
                text={data[13].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper> */}

                <QWrapper>
                <TextUi 
                text={data[14].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>

                <QWrapper>
                <TextUi 
                text={data[15].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
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
                <SectionUI>
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

                <QWrapper>
                <TextUi 
                text={data[16].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
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

                <QWrapper>
                <TextUi 
                text={data[17].question}
                heading='h6'
                funcss='question'
                />
                <SectionUI>
                <InputUi select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':'Yes'} ,
                    {'text':'No' , 'value':'No'} ,
                ]}/>
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
