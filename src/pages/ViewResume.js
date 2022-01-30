import React, { useContext, useEffect, useRef } from 'react';
import ViewResumeComponent from '../components/ViewResume/ViewResumeComponent';
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';
import {useReactToPrint} from 'react-to-print'
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import PrintResume from '../components/PrintResume';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ViewResume() {
  const userState = useSelector(state => state.userReducer)
  useEffect(() => {
    if(userState.personal.firstName === ''){
      history.replace('/build-resume')
    }
  },[userState])
  const history = useHistory();
    const themeContext = useContext(ThemeContext);
    const componentRef = useRef();
    // const handleWindowPrint = (event) => {
    //     event.preventDefault();
    //     window.print();
    // }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle : "@page { size: A4 }"
  });
  return <div style={{width : '100%',paddingTop : '10px',display : 'flex',justifyContent : 'center',backgroundColor : Theme[themeContext.theme].bgColor,overflowX : 'clip'}}>
      <span>
      <ButtonGroup>
      <Button onClick={handlePrint}>Print</Button>
      <Button onClick={() => history.replace('/build-resume')}>Edit</Button>
</ButtonGroup>
      </span>
        <ViewResumeComponent componentRef={componentRef}/>
        <div></div>
      </div>
}

export default ViewResume;
