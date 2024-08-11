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
<<<<<<< HEAD
import { PiArrowRight } from 'react-icons/pi'


=======
import { PiArrowRight, PiPaperPlane, PiX } from 'react-icons/pi'
import {FunGet} from 'funuicss/js/Fun'
import Axios from 'axios'
import Alert from 'funuicss/ui/alert/Alert'
import Loader from '@/ui/Loader'
import Modal from 'funuicss/ui/modal/Modal'
import Preview from '../preview/page'
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866

export default function Form() {
    const [page, setpage] = useState(1)
    const [total_pages, settotal_pages] = useState(2)
<<<<<<< HEAD
=======
    const [data_rate, setdata_rate] = useState(null)
    const [loading, setloading] = useState(false)
    const [status, setstatus] = useState('')
    const [message, setmessage] = useState('')
    const [modal, setmodal] = useState(false)
    const [data, setdata] = useState('')
    const [participated_in_hackaton, setparticipated_in_hackaton] = useState('No')

    useEffect(() => {
      setTimeout(() => {
        setstatus(false)
      }, 4000);
    
      return () => {
        clearTimeout()
      }
    }, [status])
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
    

    const confirmation = () => {
        setloading(true)
        Axios.post('https://id-card-pvj6.onrender.com/register' , data)
        .then(() => {
          setloading(false)
          setstatus('success')
          setmessage('Form submitted successfully!')
          setTimeout(() => {
            window.location.assign('/success')
          }, 4000);
        })
        .catch(err => {
          setloading(false)
          setstatus('warning')
          setmessage(JSON.stringify(err.message))
                })  
    }
    const Submit = () => {
        if(page < total_pages){
            setpage(page + 1)
        }else{

            // submit the data
            let team_name,
            university,
            field_of_study,
            level_of_study,
            lead_full_name,
            lead_email,
            lead_phone_number,
            lead_age,
            lead_gender,
            member_1_name,
            member_1_education_level,
            member_1_gender,
            member_2_name,
            member_2_education_level,
            member_2_gender,
            member_3_name,
            member_3_education_level,
            member_3_gender,
            member_4_name,
            member_4_education_level,
            member_4_gender,
            member_5_name,
            member_5_education_level,
            member_5_gender,
            proficiency_r,
            proficiency_python,
            proficiency_javascript,
            proficiency_other,
            proficiency_sas,
            proficiency_spss,
            proficiency_stata,
            proficiency_excel,
            proficiency_julia,
            visualization_experience,
            previous_hackathon,
            previous_experience,
            expectations,
            campus_availability,
            national_availability,
            time_constraints 

            team_name = FunGet.val('#team_name')
            university = FunGet.val('#university')
            field_of_study = FunGet.val('#field_of_study')
            level_of_study = FunGet.val('#level_of_study')
            lead_full_name = FunGet.val('#lead_full_name')
            lead_email = FunGet.val('#lead_email')
            lead_phone_number = FunGet.val('#lead_phone_number')
            lead_age = FunGet.val('#lead_age')
            lead_gender = FunGet.val('#lead_gender')
            member_1_name = FunGet.val('#member_1_name')
            member_1_education_level = FunGet.val('#member_1_education_level')
            member_1_gender = FunGet.val('#member_1_gender')
            member_2_name = FunGet.val('#member_2_name')
            member_2_education_level = FunGet.val('#member_2_education_level')
            member_2_gender = FunGet.val('#member_2_gender')
            member_3_name = FunGet.val('#member_3_name')
            member_3_education_level = FunGet.val('#member_3_education_level')
            member_3_gender = FunGet.val('#member_3_gender')
            member_4_name = FunGet.val('#member_4_name')
            member_4_education_level = FunGet.val('#member_4_education_level')
            member_4_gender = FunGet.val('#member_4_gender')
            member_5_name = FunGet.val('#member_5_name')
            member_5_education_level = FunGet.val('#member_5_education_level')
            member_5_gender = FunGet.val('#member_5_gender')
            proficiency_r = FunGet.val('#proficiency_r')
            proficiency_python = FunGet.val('#proficiency_python')
            proficiency_javascript = FunGet.val('#proficiency_javascript')
            proficiency_other = FunGet.val('#proficiency_other')
            proficiency_sas = FunGet.val('#proficiency_sas')
            proficiency_spss = FunGet.val('#proficiency_spss')
            proficiency_stata = FunGet.val('#proficiency_stata')
            proficiency_excel = FunGet.val('#proficiency_excel')
            proficiency_julia = FunGet.val('#proficiency_julia')
            visualization_experience = data_rate
            previous_hackathon = FunGet.val('#previous_hackathon')
            previous_experience = participated_in_hackaton == 'Yes' ? FunGet.val('#previous_experience') : ''
            expectations = participated_in_hackaton == 'Yes' ?  FunGet.val('#expectations')  : ''
            campus_availability = participated_in_hackaton == 'Yes' ?  FunGet.val('#campus_availability')  : 'No'
            national_availability = participated_in_hackaton == 'Yes' ?  FunGet.val('#national_availability')  : 'No'
            time_constraints = participated_in_hackaton == 'Yes' ?  FunGet.val('#time_constraints')  : 'No'
            // send data to server
            
        let doc = {
            team_name,
            university,
            field_of_study,
            level_of_study,
            lead_full_name,
            lead_email,
            lead_phone_number,
            lead_age,
            lead_gender,
            member_1_name,
            member_1_education_level,
            member_1_gender,
            member_2_name,
            member_2_education_level,
            member_2_gender,
            member_3_name,
            member_3_education_level,
            member_3_gender,
            member_4_name,
            member_4_education_level,
            member_4_gender,
            member_5_name,
            member_5_education_level,
            member_5_gender,
            proficiency_r,
            proficiency_python,
            proficiency_javascript,
            proficiency_other,
            proficiency_sas,
            proficiency_spss,
            proficiency_stata,
            proficiency_excel,
            proficiency_julia,
            visualization_experience,
            previous_hackathon,
            previous_experience,
            expectations,
            campus_availability,
            national_availability,
            time_constraints 
        }

        console.log(doc)
        if( 

            team_name  &&
            university  &&
            field_of_study  &&
            level_of_study  &&
            lead_full_name  &&
            lead_email  &&
            lead_phone_number  &&
            lead_age  &&
            lead_gender  &&
            member_1_name  &&
            member_1_education_level  &&
            member_1_gender  &&
            member_2_name  &&
            member_2_education_level  &&
            member_2_gender  &&
            member_3_name  &&
            member_3_education_level  &&
            member_3_gender  &&
            member_4_name  &&
            member_4_education_level  &&
            member_4_gender  &&
            member_5_name  &&
            member_5_education_level  &&
            member_5_gender  &&
            proficiency_r  &&
            proficiency_python  &&
            proficiency_javascript  &&
            proficiency_other  &&
            proficiency_sas  &&
            proficiency_spss  &&
            proficiency_stata  &&
            proficiency_excel  &&
            proficiency_julia  &&
            visualization_experience  &&
            previous_hackathon 
        ){
          setdata(doc) 
          setmodal(true)

        }else{
            setstatus('warning')
            setmessage('Please fill in all required fields!')
        }
                
                
                }
    }
  return (
    <div className="container">
        <Modal
        open={modal}
        maxWidth={'800px'}
        title={<TextUi heading='h4' text='Review' />}
        funcss='card'
        footer={<RowFlexUi gap={2} justify="flex-end">
              <UiButton bold text="No, Don't Submit" color='s'  onClick={() => setmodal(false)} endIcon={<PiX />}/>
              <UiButton bold text="Yes Submit" bg='p' raised onClick={confirmation} endIcon={<PiPaperPlane />}/>
        </RowFlexUi>}
        body={<>
        <div className="height-400-max fit">
        <Preview data={data} />
        </div>
        </>}
        />


        {
            loading && <Loader />
        }
        {
            status && <Alert type={status} message={message} fixed='top-middle' animation='SlideDown' standard/>
        }
        <div className='width-600-max fit center padding-top-50'>
       <RowFlexUi gap={2} justify='space-between'>
        <div>
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
        </div>
        <img src="/hackathon.png" width={'150px'} alt="" />
       </RowFlexUi>
        <SectionUI gap={2} >
        <RowFlexUi gap={3} justify='space-between'>
        <TextUi heading='h6' text='2024 GSS HACKATHON REGISTERATION' color='dark200'/>
        <TextUi 
        heading={'h6'}
        color='p'
        bold
        text={<span>
            {page} / {total_pages}
        </span>}
        />
        </RowFlexUi>
        </SectionUI>
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
<<<<<<< HEAD
                <QWrapper q="1">
                <TextUi 
                text={`Full name of team lead`}
=======
                <QWrapper q="">
                <TextUi 
                text={`Team Name`}
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='team_name'/>
                </SectionUI>
                </QWrapper>
                <QWrapper q="1">
                <TextUi 
                text={`Full name of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
                <InputUi label={'Select Answer'} id='lead_full_name'/>
                </SectionUI>
                <SectionUI>
                    <div className="error-message" id='error-lead_full_name'></div>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='2'>
                <TextUi 
                text={`Email address  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='lead_email' />
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='3'>
                <TextUi 
                text={`Phone number  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='lead_phone_number'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='4'>
                <TextUi 
                text={`Age  of team lead`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi type='number'/>
=======
                <InputUi type='number' id='lead_age'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='5'>
                <TextUi 
<<<<<<< HEAD
                text={`Gender  of team lead`}
=======
                text={`Gender  of team leader`}
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi select options={[
=======
                <InputUi id='lead_gender' select options={[
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
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
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id="university" />
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='7'>
                <TextUi 
                text={`Field of study`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='field_of_study'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='8'>
                <TextUi 
                text={`What level are you currently in `}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi select options={[
=======
                <InputUi id='level_of_study' select options={[
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
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
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='member_1_name'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='10'>
                <TextUi 
                text={`Name of team member 2`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='member_2_name'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>
                
                <QWrapper q='11'>
                <TextUi 
                text={`Name of team member 3`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='member_3_name'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='12'>
                <TextUi 
                text={`Name of team member 4`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='member_4_name'/>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='13'>
                <TextUi 
                text={`Name of team member 5`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='member_5_name' />
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>


                <QWrapper q='14'>
                <TextUi 
                text={'Education level of team members'}
                heading='h6'
                funcss='question'
                />
                        <SectionUI gap={1}>
<<<<<<< HEAD
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
=======
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi label={"Member 1"} id='member_1_education_level' select options={[
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
                     <InputUi label={"Member 2"} id='member_2_education_level' select options={[
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
                     <InputUi label={"Member 3"} id='member_3_education_level' select options={[
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
                     <InputUi label={"Member 4"} id='member_4_education_level' select options={[
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
                     <InputUi label={"Member 5"} id='member_5_education_level' select options={[
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
                text={'Gender of team members'}
                heading='h6'
                funcss='question'
                />
                  <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi id='member_1_gender' label={"Member 1"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 2"} id='member_2_gender' select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 3"} id='member_3_gender' select options={[
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
                     <InputUi label={"Member 4"} id='member_4_gender' select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'MALE' , 'value':'MALE'} ,
                    {'text':'FEMALE' , 'value':'FEMALE'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi label={"Member 5"} id='member_5_gender' select options={[
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
                     <InputUi id='proficiency_r' label={"R"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi id='proficiency_python' label={"PYTHON"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi id='proficiency_javascript' label={"JAVASCRIPT"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
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
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi label={'Select Answer'} id='proficiency_other' />
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
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
                     <InputUi id='proficiency_sas' label={"SAS"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi id='proficiency_spss' label={"SPSS"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi id='proficiency_stata' label={"STATA"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
                ]} />
                     </div>
                    </RowFlexUi>
                </SectionUI>
                <SectionUI gap={1}>
                    <RowFlexUi gap={1}>
                     <div className="col">
                     <InputUi id='proficiency_excel' label={"EXCEL"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
                ]} />
                     </div>
                     <div className="col">
                     <InputUi id='proficiency_julia' label={"JULIA"} select options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Interest' , 'value':'Interest'} ,
                    {'text':'Beginner' , 'value':'Beginner'} ,
                    {'text':'Intermediate' , 'value':'Intermediate'} ,
                    {'text':'Advanced' , 'value':'Advanced'} ,
                    {'text':'Power User' , 'value':'Power User'} ,
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
                    <CircleUi onClick={ ()  => setdata_rate(1)} size={2} bg={ data_rate == 1 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        1
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(2)}  size={2} bg={ data_rate == 2 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        2
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(3)}  size={2} bg={ data_rate == 3 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        3
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(4)}  size={2} bg={ data_rate == 4 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        4
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(5)}  size={2} bg={ data_rate == 5 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        5
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(6)}  size={2} bg={ data_rate == 6 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        6
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(7)}  size={2} bg={ data_rate == 7 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        7
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(8)}  size={2} bg={ data_rate == 8 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        8
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(9)}  size={2} bg={ data_rate == 9 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
                        9
                    </CircleUi>
                    <CircleUi  onClick={ ()  => setdata_rate(10)}  size={2} bg={ data_rate == 10 ? 'primary' : 'dark900'} funcss='hover-primary pointer text-dark'>
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
<<<<<<< HEAD
                <InputUi select options={[
=======
                <InputUi onChange={(e) => setparticipated_in_hackaton(e.target.value)} id='previous_hackathon' select options={[
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':'Yes'} ,
                    {'text':'No' , 'value':'No'} ,
                ]}/>
                </SectionUI>
                </QWrapper>
                
<<<<<<< HEAD
                <QWrapper q='21'>
=======
               {
                participated_in_hackaton == 'Yes' &&
                <>
                 <QWrapper q='21'>
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                <TextUi 
                text={`Please describe your previous experience and achievements`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi id='previous_experience' multiline rows={5} label={'Select Answer'} />
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q='22'>
                <TextUi 
                text={`What are your expectations for this hackathon`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
=======
                <InputUi
                id='expectations'
                 multiline rows={5} label={'Select Answer'} />
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
                </SectionUI>
                </QWrapper>

                <QWrapper q={'23'}>
                <TextUi 
                text={`Are you available for the campus hackathon within the month of September?`}
                heading='h6'
                funcss='question'
                />
                <SectionUI gap={1}>
<<<<<<< HEAD
                <InputUi select options={[
=======
                <InputUi id='campus_availability' select options={[
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
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
<<<<<<< HEAD
                <InputUi select options={[
=======
                <InputUi id='national_availability' select options={[
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866
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
<<<<<<< HEAD
                <InputUi label={'Select Answer'} />
                </SectionUI>
                </QWrapper>
=======
                <InputUi label={'Select Answer'} id='time_constraints' />
                </SectionUI>
                </QWrapper>
                </>
               }
>>>>>>> c74acfa28a48c0e38c76b83991b1b557a8038866

                </div>
        }

        <SectionUI gap={2} >
            <UiButton bold text={page == total_pages ? "Submit" : 'Next'} bg='s' raised onClick={Submit} endIcon={<PiArrowRight />}/>
        </SectionUI>
    </div>
    </div>
  )
}
