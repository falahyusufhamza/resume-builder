import React, { useContext } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';
import { WithContext as ReactTags }  from 'react-tag-input'



const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

let SkillsForm = (props) => {
    const themeContext = useContext(ThemeContext)
    const {submitHandler,tags, setTags, setActiveBreadCrumb} = props  
    
    const suggestions = [
      {
        id : 'javascript',
        label : 'javascript'
      },
      {
        id : 'ReactJS',
        label : 'ReactJS'
      },
      {
        id : 'PHP',
        label : 'PHP'
      },
      {
        id : 'Angular',
        label : 'Angular'
      },
      {
        id : 'HTML',
        label : 'HTML'
      }
      ,{
        id : 'CSS',
        label : 'CSS'
      }
    ]
      const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
      };
    
      const handleAddition = tag => {
        setTags([...tags, tag]);
      };
    
      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };
    
      const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
      };

  return <Form onSubmit={(event) => submitHandler(event)}>
      <Card style={{backgroundColor : Theme[themeContext.theme].primaryLight, padding : 10}}>
            <Card.Header style={{color : Theme[themeContext.theme].lightColor}} as="h5">Add your Skills</Card.Header>
            <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          placeholder='Add new skill'
          autocomplete
          inputProps={
              {
                  style : {
                      width : '75%',
                      height : '40px',
                      borderRadius : 5,
                      border : '0px',
                      marginTop : 10,
                      marginBottom : 10,
                      backgroundColor : Theme[themeContext.theme].lightColor
                  }
          }}
          labelField='label'
        />
        
          <Form.Row>
          <Form.Group as={Col}>
        
        <Button onClick={() => setActiveBreadCrumb('Work')}  style={{background :Theme[themeContext.theme].primaryLight,width : '100%'}}>
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


export default SkillsForm;
