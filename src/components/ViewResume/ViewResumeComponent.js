import React from 'react';
import { useSelector } from 'react-redux';

import DefaultTemplate from './Templates/DefaultTemplate';
import TemplateTwo from './Templates/TemplateTwo';
function ViewResumeComponent(props) {
  const userState = useSelector(state => state.userReducer);
  if(props.template.template === 'default'){
    return <DefaultTemplate userState={userState} componentRef={props.componentRef} />
  }
  else if(props.template.template === 'templateTwo'){
    console.log('templateTwo');
    return <TemplateTwo userState={userState} componentRef={props.componentRef} />

  }


}

export default ViewResumeComponent;
