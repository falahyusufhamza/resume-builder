import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb,Col,  Row } from 'react-bootstrap';
import EducationForm from '../../components/ResumeForm/EducationForm';
import PersonalForm from '../../components/ResumeForm/PersonalForm';
import WorkForm from '../../components/ResumeForm/WorkForm';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';
import {useSelector , useDispatch} from 'react-redux';
import {userActions} from '../../store/store'
import { useHistory } from 'react-router-dom'
import SkillsForm from '../../components/ResumeForm/Skills';
import SummaryForm from '../../components/ResumeForm/SummaryForm';

function ResumeForm(props) {
    const {stage} = props;
    const history = useHistory();
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [error , setError] = useState(false);
    const [activeBreadCrumb , setActiveBreadCrumb] = useState('Personal')
    const themeContext = useContext(ThemeContext);
    const [summary, setSummary] = useState();
    const [tags, setTags] = React.useState(userState.skills.length ? userState.skills : []);
    const [educationData, setEducationData] = useState( userState.education.length ? userState.education :  [
        {
            id : Math.random(),
            institute : '',   
            year : '',
            degree : ''     
        }
    ])
    const [workData, setWorkData]  =useState(userState.work.length ? userState.work : [
        {
            id : Math.random(),
            company : '',   
            from : '',
            to : '',
            designation : ''     
        }
    ])
    const [personalData, setPersonalData] = useState({
            firstName : '',
            lastName : '',
            email : '',
            phoneNo : '',
            country : '',
            state :''
    })

    useEffect(() => {
        stage ? setActiveBreadCrumb(stage) : setActiveBreadCrumb('Personal')
    },[stage])

    useEffect(() => {
        setPersonalData(userState.personal)
        setEducationData(userState.education)
        setSummary(userState.summary)
        setWorkData(userState.work)
        setTags(userState.skills)
    },[userState])

    const personalSubmitHandler = (event) => {
        event.preventDefault();
        if(personalData.firstName.trim() && personalData.lastName.trim() && personalData.phoneNo.trim()){
            setError(false)
            dispatch(userActions.updatePersonalData({
                personal : personalData
            }))
            setActiveBreadCrumb('Education')
        }
        else{
            setError('Fill all mandatory fields!')
        }
    }

    const educationSubmitHandler = (event) => {
        event.preventDefault()
            dispatch(userActions.updateEducationData({
                education : educationData
            }))
            setActiveBreadCrumb('Work')   
    }

    const workSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(userActions.updateWorkData({
            work : workData
        }))
        setActiveBreadCrumb('Skills')
    }

    const skillsSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(userActions.updateSkillsData({
            skills : tags
        }))
        setActiveBreadCrumb('Summary')
    } 

    const summarySubmitHandler = (event) => {
        event.preventDefault()
        dispatch(userActions.updateSummaryData({
            summary : summary
        }))
        setActiveBreadCrumb('Summary')
        history.replace('/view-resume')
    }

    
  return <div style={{height : '100%',width : '100%',margin : 0,padding : 5,backgroundColor : Theme[themeContext.theme].bgColor}}>
     
      <Row style={{width : '100%',justifyContent:  'center'}}>
          <Col sm={12} lg={6} style={{textAlign : 'center'}} >
          <Breadcrumb>
  <Breadcrumb.Item  active={activeBreadCrumb === 'Personal'}>
      <span style={{ color : activeBreadCrumb === 'Personal' ? Theme[themeContext.theme].primary : Theme[themeContext.theme].secondary, fontWeight : activeBreadCrumb === 'Personal' && 500 }}>Personal</span>
  </Breadcrumb.Item>
  <Breadcrumb.Item  active={activeBreadCrumb === 'Education'} >
      <span style={{ color : activeBreadCrumb === 'Education' ? Theme[themeContext.theme].primary: Theme[themeContext.theme].secondary, fontWeight : activeBreadCrumb === 'Education' && 500  }}>Education</span> 
  </Breadcrumb.Item>
  <Breadcrumb.Item  >
     <span  style={{ color : activeBreadCrumb === 'Work'? Theme[themeContext.theme].primary : Theme[themeContext.theme].secondary , fontWeight : activeBreadCrumb === 'Work' && 500  }} >Work</span> 
  </Breadcrumb.Item>
  <Breadcrumb.Item  >
     <span  style={{ color : activeBreadCrumb === 'Skills'? Theme[themeContext.theme].primary : Theme[themeContext.theme].secondary , fontWeight : activeBreadCrumb === 'Skills' && 500  }} >Skills</span> 
  </Breadcrumb.Item>
  <Breadcrumb.Item  >
     <span  style={{ color : activeBreadCrumb === 'Summary'? Theme[themeContext.theme].primary : Theme[themeContext.theme].secondary , fontWeight : activeBreadCrumb === 'Summary' && 500  }} >Summary</span> 
  </Breadcrumb.Item>
</Breadcrumb>

            { activeBreadCrumb === 'Personal' && <PersonalForm  data={personalData} setData={setPersonalData} error={error} submitHandler={personalSubmitHandler} />}
            { activeBreadCrumb === 'Education' && <EducationForm  data={educationData} setData={setEducationData} error={error} submitHandler={educationSubmitHandler} setActiveBreadCrumb={setActiveBreadCrumb}  />}
            { activeBreadCrumb === 'Work' && <WorkForm  data={workData} setData={setWorkData} error={error} submitHandler={workSubmitHandler} setActiveBreadCrumb={setActiveBreadCrumb}  />}
            { activeBreadCrumb === 'Skills' && <SkillsForm  tags={tags} setTags={setTags} error={error} submitHandler={skillsSubmitHandler} setActiveBreadCrumb={setActiveBreadCrumb}  />}
            { activeBreadCrumb === 'Summary' && <SummaryForm  summary={summary} setSummary={setSummary} error={error} submitHandler={summarySubmitHandler} setActiveBreadCrumb={setActiveBreadCrumb}  />}

          </Col>
      </Row>
  </div>;
}

export default ResumeForm;
