import React, { useContext } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';
import defaultTemplate from '../assets/Default-template.png'
import simpleTemplate from '../assets/Template-two.png'
import { useDispatch, useSelector } from 'react-redux';
import {templateActions} from '../store/store'
import { useHistory } from 'react-router-dom';

function Templates() {
    const userState = useSelector(state => state.userReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const themeContext = useContext(ThemeContext);


    const onSelectTemplate = (template) => {
        dispatch(templateActions.switchTemplate({template : template}))
        if(userState.summary !== ''){
            history.replace('/view-resume')
        }
        else{
            history.replace('/build-resume');
        }
    }


  return <div style={{height : '100%',width : '100%',margin : 0,padding : 5,backgroundColor : Theme[themeContext.theme].bgColor,display : 'flex', justifyContent : 'center'}}>
<Carousel style={{width : 500,paddingLeft : 50,paddingRight : 50 }}>
  <Carousel.Item style={{height : '70%'}}>
    <img
      className="d-block w-100"
      src={defaultTemplate}
      alt="Default Template"
    />
    <Carousel.Caption>
      <h5 style={{color : 'black'}}>Default Template</h5>
      <Button onClick={() => onSelectTemplate('default')}>Select</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={simpleTemplate}
      alt="Template 2"
    />
    <Carousel.Caption>
      <h5 style={{color : 'black'}}>Simple</h5>
      <Button onClick={() => onSelectTemplate('templateTwo')}>Select</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>;
}

export default Templates;
