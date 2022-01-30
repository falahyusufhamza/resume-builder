import React, { useContext } from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';

function Header() {
  const history = useHistory();
    const themeContext = useContext(ThemeContext);
  return <Navbar style={{backgroundColor : Theme[themeContext.theme].primary,height : '10vh',width : '100%',zIndex : 100,position : 'fixed', top : 0,left : 0 }} expand="lg">
  <Navbar.Brand style={{color : Theme[themeContext.theme].lightColor}}>Resume Builder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{zIndex : 100}} className="mr-auto">
      <Nav.Link style={{color : Theme[themeContext.theme].lightColor}} onClick={() => history.replace('/build-resume')}>Build Resume</Nav.Link>
      <Nav.Link style={{color : Theme[themeContext.theme].lightColor}} onClick={() => history.replace("/templates")}>Templates</Nav.Link>
    </Nav>
    <Form inline>
      <Button style={{color : Theme[themeContext.theme].lightColor,backgroundColor : Theme[themeContext.theme].secondary,borderColor : Theme[themeContext.theme].lightColor}}   onClick={() =>  themeContext.setTheme( themeContext.theme === 'default' ? 'dark' : 'default' )}>Switch Theme</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
}

export default Header;
