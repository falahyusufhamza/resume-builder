import React, { useContext } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';

let SummaryForm = (props) => {
    const themeContext = useContext(ThemeContext)
    const {submitHandler,summary, setSummary,setActiveBreadCrumb} = props

    const formInput = {backgroundColor : Theme[themeContext.theme].lightColor, height : 100,alignContent : 'baseline',padding : 0}
    const formLabel = {color : Theme[themeContext.theme].lightColor}

  return <Form onSubmit={(event) => submitHandler(event)}>
      <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10}}>
            <Card.Header style={{color : Theme[themeContext.theme].lightColor}} as="h5">Add a summary</Card.Header>
<Form.Row>
<Form.Group as={Col} controlId="formGridFirstName">
<Form.Label style={formLabel} >Summary</Form.Label>
<Form.Control style={formInput}required value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Summary" />
</Form.Group>
</Form.Row>





<Form.Row>
          <Form.Group as={Col}>
        
        <Button onClick={() => setActiveBreadCrumb('Skills')}  style={{background :Theme[themeContext.theme].primaryLight,width : '100%'}}>
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


export default SummaryForm;
