import React, { useContext } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';

let PersonalForm = (props) => {
    const themeContext = useContext(ThemeContext)
    const {submitHandler,data, setData} = props

    const formInput = {backgroundColor : Theme[themeContext.theme].lightColor}
    const formLabel = {color : Theme[themeContext.theme].lightColor}

  return <Form onSubmit={(event) => submitHandler(event)}>
      <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10}}>
            <Card.Header style={{color : Theme[themeContext.theme].lightColor}} as="h5">Enter your details</Card.Header>
<Form.Row>
<Form.Group as={Col} controlId="formGridFirstName">
<Form.Label style={formLabel} >First Name</Form.Label>
<Form.Control maxLength={20} style={formInput}required value={data.firstName} onChange={(event) => setData({
    ...data,
    firstName : event.target.value
}) } placeholder="First Name" />
</Form.Group>

<Form.Group as={Col} controlId="formGridLastName">
<Form.Label style={formLabel}>Last Name</Form.Label>
<Form.Control maxLength={20} style={formInput}value={data.lastName} onChange={(event) => setData({
    ...data,
    lastName : event.target.value
}) } required placeholder="Last Name" />
</Form.Group>
</Form.Row>

<Form.Row>

<Form.Group as={Col} controlId="formGridEmail">
<Form.Label style={formLabel}>Email</Form.Label>
<Form.Control style={formInput}type='email' value={data.email} onChange={(event) => setData({
    ...data,
    email : event.target.value
}) } placeholder="Email" />
</Form.Group>

<Form.Group as={Col} controlId="formGridPhone">
<Form.Label style={formLabel}>Phone Number</Form.Label>
<Form.Control maxLength={10}  style={formInput}type='number' value={data.phoneNo} onChange={(event) => setData({
    ...data,
    phoneNo : event.target.value
}) } placeholder="Phone Number" />
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} controlId="formGridCountry">
<Form.Label style={formLabel} >Country</Form.Label>
<Form.Control value={data.country} onChange={(event) => setData({
    ...data,
    country : event.target.value
}) } placeholder='Country' style={formInput}/>
</Form.Group>

<Form.Group as={Col} controlId="formGridState">
<Form.Label style={formLabel}>State</Form.Label>
<Form.Control style={formInput} value={data.state} placeholder='State' onChange={(event) => setData({
    ...data,
    state : event.target.value
}) }/>
</Form.Group>

</Form.Row>

<Button style={{background :Theme[themeContext.theme].secondary}} type="submit">
Next
</Button>

</Card>
</Form>

}


export default PersonalForm;
