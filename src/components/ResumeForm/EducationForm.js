import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Form } from 'react-bootstrap';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';
import styles from './EducationForm.module.css'

let EducationForm = (props) => {
    const themeContext = useContext(ThemeContext)
    const {submitHandler,data, setData, setActiveBreadCrumb} = props


    const formInput = {backgroundColor : Theme[themeContext.theme].lightColor}
    const formLabel = {color : Theme[themeContext.theme].lightColor}
    const [error , setError] = useState(false);

    useEffect(() => {
        setError(false);
    },[])

    const onBeforeSubmit = (event) => {
        event.preventDefault();
        let flag = false;
        data.forEach(item => {
            if( item.fromDate > item.toDate ){
                flag = true;
                setError('From date greater than to date!')
            }
        })
        data.forEach(item => {
            if(item.institute.trim() === ''  || item.degree.trim() === ''){
                flag = true;
                setError('Fill all mandatory fields!')
            }
        })
        if(!flag){
            submitHandler(event);
        }
    }
       const addField = () => {
            let arr = [...data];
           arr.push({
               id : Math.random() ,
               institute : '',   
                year : '',
                degree : '' 
           })
           setData([
               ...arr,

           ])
        }
    
  return <Form onSubmit={(event) => onBeforeSubmit(event)}>
      {error && <Alert variant={'danger'}>
        {error}
  </Alert>}
      <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10, height : '500px',overflowY : 'auto'}}>
            <Card.Header style={{color : Theme[themeContext.theme].lightColor}} as="h5">Enter your details</Card.Header>
            {data.map(item => {
                return <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10}} key={item.id}>
                    { data.findIndex(x => x.id === item.id) !== 0 && <Card.Header style={{textAlign: 'right'}}> <FontAwesomeIcon className={styles.remove} onClick={() => setData(prevState => {
                        let arr = prevState.filter(x => x.id !== item.id)
                        return arr
                    })} icon={faTrash} /></Card.Header>}
            <Form.Row>
            
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >Institute <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control style={formInput}required value={ data[data.findIndex(x => x.id === item.id)]?.institute} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], institute: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } placeholder="Institute" />
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >Degree <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.degree} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], degree: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } 
        placeholder="Degree" />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >From <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control type='month' style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.fromDate} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], fromDate: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } placeholder="From" />
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >To <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control type='month' style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.toDate} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], toDate: event.target.value },
          ...prevState.slice(index + 1),
            ]
            
        }) } placeholder="To" />
        </Form.Group>
        
        </Form.Row>
                </Card>
            })}
        <Button onClick={addField} >Add new field</Button>
        <Form.Row style={{marginTop : 5}}>
        <Form.Group as={Col}>
        
        <Button onClick={() => setActiveBreadCrumb('Personal')}  style={{background :Theme[themeContext.theme].primaryLight,width : '100%'}}>
            Back
        </Button>
        </Form.Group>
        <Form.Group as={Col}>
        <Button  style={{background :Theme[themeContext.theme].secondary, width : '100%'}} type="submit">
        Next
        </Button>
        </Form.Group>
       
        </Form.Row>


</Card>
</Form>

}


export default EducationForm;
