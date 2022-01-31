import React, { useContext, useEffect, useRef } from 'react';
import ViewResumeComponent from '../components/ViewResume/ViewResumeComponent';
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';
import {useReactToPrint} from 'react-to-print'
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import PrintResume from '../components/PrintResume';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {userActions} from '../store/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

function ViewResume() {
  const userState = useSelector(state => state.userReducer)
  const templateState = useSelector(state => state.templateReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    if(userState.personal.firstName === ''){
      history.replace('/build-resume')
    }
  },[userState])
  const history = useHistory();
    const themeContext = useContext(ThemeContext);
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle : "@page { size: A4 }"
  });

  const clearData = () => {
    dispatch(userActions.clearState())
    history.replace('/build-resume');
  }


  return <div style={{width : '100%',paddingTop : '10px',display : 'flex',justifyContent : 'center',backgroundColor : Theme[themeContext.theme].bgColor,overflowX : 'clip'}}>
      <span>
      <ButtonGroup>
      <Button onClick={clearData}><FontAwesomeIcon icon={faTrash} /></Button>
      <Button onClick={handlePrint}><FontAwesomeIcon icon={faPrint} /></Button>
      <Button onClick={() => history.replace('/build-resume')}><FontAwesomeIcon icon={faEdit} /></Button></ButtonGroup>
      </span>
        <ViewResumeComponent template={templateState} componentRef={componentRef}/>
      </div>
}

export default ViewResume;
