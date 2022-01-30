import React, { Fragment, useContext } from 'react';
import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';
import userImage from '../assets/user.png'
import styles from './PrintResume.module.css'
function PrintResume(props) {
  const themeContext = useContext(ThemeContext);
  const userState = useSelector(state => state.userReducer);
  const {firstName , lastName, email, phoneNo, state, country} = userState.personal;
  return <div ref={props.componentRef} style={{height : '16.27in',width : '100%',backgroundColor : 'white',borderRadius : 5,padding : 0 }} >
    <Card  style={{width  : '100%', height : '100%'}}>
    <Card.Body style={{padding : 0,margin : 0}}>
    <Row style={{height: '100%', width : '100%',padding : 10,margin :0,borderRadius : 5}}>
   
   
    <Col className={styles.left} sm={8} md={8} xs={8} xl={8} lg={8}  >
    <div className={styles.header} style={{height : '15%',width : '100%',}}>
      <h2 style={{color : Theme[themeContext.theme].primary}} className={styles.headerContent}>{firstName}{' '}{lastName}</h2>
    </div>
    <div style={{height : '10%',width : '100%',marginBottom : 5}}>
      <p className={styles.subHeading} >Summary</p>
      <p>{userState.summary}</p>
    </div>
    <div style={{height : 5,borderBottom : '1px solid black',marginBottom : 20}} ></div>

    <div style={{height : '10%',width : '100%',marginBottom : 5}}>
    <p className={styles.subHeading} >Experience</p>
      {userState.work.map(item => <Fragment>
        <ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold" style={{fontWeight : 'bold'}}>{item.designation}</div>
      {item.company}
    </div>
    <Badge variant="primary" pill>
      {item.fromDate} to {item.toDate}
    </Badge>
  </ListGroup.Item>
  
</ListGroup>
      </Fragment> )}
    </div>
    <div style={{height : '10%',width : '100%',marginBottom : 5}}>
      <p className={styles.subHeading} >Education</p>
      {userState.education.map(item =><Fragment>
        <ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold" style={{fontWeight : 'bold'}}>{item.degree}</div>
      {item.institute}
    </div>
    <Badge variant="primary" pill>
    {item.fromDate} to {item.toDate}
    </Badge>
  </ListGroup.Item>
  
</ListGroup>
        
      </Fragment> )}
      
    </div>
    </Col>


    <Col sm={4} md={4} xs={4} xl={4} lg={4} className={styles.right} style={{backgroundColor : Theme[themeContext.theme].primary,borderTopRightRadius : 10}}  >
      <div style={{height : '15%',width : '100%',justifyContent : 'center',backgroundColor : 'white',marginTop : 16,background : 'url(' + userImage + ')',textAlign : 'center',backgroundSize: 'contain',backgroundRepeat : 'no-repeat',backgroundPosition : 'center',
}} />
    <div style={{height : '15%',width: '100%'}} >
      <p className={styles.subHeading}  >
        CONTACT
      </p>
      <p>{phoneNo}</p>
      <p>{email}</p>
      <p>{state && state + ',' }{country}</p>
    </div>
    <div style={{width: '100%'}}>
      <p className={styles.subHeading}>Skills</p>
      {userState.skills.map(item => <Fragment>
        <p >{item.label}</p>
      </Fragment> )}
    </div>
    </Col>
    </Row>
    </Card.Body>
    
  </Card>
  </div>
}

export default PrintResume;
