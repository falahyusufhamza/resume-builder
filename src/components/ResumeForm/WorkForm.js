import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Form } from 'react-bootstrap';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';

let WorkForm = (props) => {
    const themeContext = useContext(ThemeContext)
    const {submitHandler,data, setData, setActiveBreadCrumb} = props
    const [error, setError] = useState(false)

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
            console.log(item.company.trim(),item.designation.trim());
            if(item.company.trim() === ''  || item.designation.trim() ===  ''){
                flag = true;
                setError('Fill all mandatory fields!')
            }
        })
        if(!flag){
            submitHandler(event);
        }
    }

    useEffect(() => {
        setError(false)
    },[])

    const formInput = {backgroundColor : Theme[themeContext.theme].lightColor}
    const formLabel = {color : Theme[themeContext.theme].lightColor}

        const addField = () => {
            let arr = [...data];
            console.log(arr);
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
    
  return <Fragment><Form onSubmit={(event) => onBeforeSubmit(event)} >
      {error && <Alert variant={'danger'}>
        {error}
  </Alert>}
      <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10, height : '500px',overflowY : 'auto'}}>
            <Card.Header style={{color : Theme[themeContext.theme].lightColor}} as="h5">Enter your details</Card.Header>
            {data.map(item => {
                return <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10}} key={item.id}>
                    { data.findIndex(x => x.id === item.id) !== 0 && <Card.Header> <Button onClick={() => setData(prevState => {
                        let arr = prevState.filter(x => x.id !== item.id)
                        console.log(arr)
                        return arr
                    })} variant="danger">X</Button> </Card.Header>}
        
        <Form.Row>
            
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >Company <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.company} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], company: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } placeholder="Company" />
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >Designation <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.designation} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], designation: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } 
        placeholder="Designation" />
        </Form.Group>
        
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >From <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.fromDate} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], fromDate: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } type='month' placeholder="From" />
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Label style={formLabel} >To <span style={{color :'red'}} >*</span></Form.Label>
        <Form.Control style={formInput}required value={data[data.findIndex(x => x.id === item.id)]?.toDate} onChange={(event) => setData((prevState) => {
            let index = prevState.findIndex(x => x.id === item.id);
            return [
                ...prevState.slice(0, index),
          { ...prevState[index], toDate: event.target.value },
          ...prevState.slice(index + 1),
            ]
        }) } type='month' placeholder="To" />
        </Form.Group>
        
        
        </Form.Row>
                </Card>
            })}
        <Button onClick={addField} >Add new field</Button>
        <Form.Row style={{marginTop : 5 }}>
        <Form.Group as={Col}>
        
        <Button onClick={() => setActiveBreadCrumb('Education')}  style={{background :Theme[themeContext.theme].primaryLight,width : '100%'}}>
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
</Fragment>

}


export default WorkForm;
