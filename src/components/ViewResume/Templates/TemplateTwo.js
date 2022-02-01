import React, { Fragment } from 'react';
import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import userImage from '../../../assets/user.png'
import styles from './TemplateTwo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
function TemplateTwo(props) {

  const userState = useSelector(state => state.userReducer);
  const {firstName , lastName, email, phoneNo, state, country} = userState.personal;


  return <div ref={props.componentRef} style={{ height :'297mm', width : '210mm',backgroundColor : 'white',borderRadius : 5,padding : 0 }} >
  <Card  style={{width  : '100%', height : '100%'}}>
    <Card.Header style={{width  : '100%', height : '15%',backgroundColor : '#182039',display : 'flex',justifyContent : 'space-between'}}  >
        <div style={{width : '70&'}}> 
            <h2 style={{color :'white',fontWeight : 100}}>{firstName}&nbsp;<span style={{color :'white',fontWeight : 500}} >{lastName}</span></h2>
            <p style={{color : 'white'}}><FontAwesomeIcon icon={faPhone} />&nbsp;{phoneNo}</p>
            <p style={{color : 'white',fontWeight : 100}}><FontAwesomeIcon icon={faMailBulk} />&nbsp;{email}</p>
            {state && <p style={{color : 'white',fontWeight : 100}}><FontAwesomeIcon icon={faHome} />&nbsp;{state},{country}</p>}

        </div>
        <div style={{width : '30%',height : '80%',justifyContent : 'center',backgroundColor : 'white',marginTop : 16,background : 'url(' + userImage + ')',textAlign : 'center',backgroundSize: 'contain',backgroundRepeat : 'no-repeat',backgroundPosition : 'center',}} />

        </Card.Header>
  <Card.Body style={{padding : 0,margin : 0}}>
  <Row style={{height: '100%', width : '100%',padding : 10,margin :0,borderRadius : 5}}>
 
 
  <Col style={{height : '100%',width : '100%'}} sm={12} md={12} xs={12} xl={12} lg={12}  >
  <div style={{height : '15%',width : '100%',marginBottom : 5}}>
    <p className={styles.subHeading} >Summary</p>
    <p>{userState.summary}</p>
  </div>
  <div style={{height : 5,borderBottom : '1px solid black',marginBottom : 20}} ></div>

  <section style={{minheight : '15%',width : '100%',marginBottom : 5}}>
  <p className={styles.subHeading} >Experience</p>
    {userState.work.map(item => <Fragment key={item.id}>
      <ListGroup as="ul">
<ListGroup.Item
  as="li"
  className="d-flex justify-content-between align-items-start"
>
  <div key={item.id} className="ms-2 me-auto">
    <div className="fw-bold" style={{fontWeight : 'bold'}}>{item.designation}</div>
    {item.company}
  </div>
  <Badge variant="primary" pill>
    {item.fromDate} to {item.toDate}
  </Badge>
</ListGroup.Item>

</ListGroup>
    </Fragment> )}
  </section>
  <div style={{minheight : '15%',width : '100%',marginBottom : 5}}>
    <p className={styles.subHeading} >Education</p>
    {userState.education.map(item =><Fragment key={item.id}>
      <ListGroup >
<ListGroup.Item
  key={item.id}
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
  <div style={{width: '100%',height : '15%'}}>
    <p className={styles.subHeading}>Skills</p>
    {userState.skills.map(item => <Fragment key={item.label}>
      <p  >{item.label}</p>
    </Fragment> )}
  </div>
  </Col>

  
  </Row>
  </Card.Body>
  
</Card>
</div>
}

export default TemplateTwo;
