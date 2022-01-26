import React, { useContext } from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';

function Header() {
    const themeContext = useContext(ThemeContext);
  return <div style={{height : '64px'}}>
      <Navbar  style={{backgroundColor : Theme[themeContext.theme].primary }} expand="lg">
  <Navbar.Brand style={{color : Theme[themeContext.theme].lightColor}}>Resume Builder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{color : Theme[themeContext.theme].lightColor}} href="/build-resume">Build Resume</Nav.Link>
      <Nav.Link style={{color : Theme[themeContext.theme].lightColor}} href="/templates">Templates</Nav.Link>
    </Nav>
    <Form inline>
      <Button style={{color : Theme[themeContext.theme].lightColor,backgroundColor : Theme[themeContext.theme].secondary,borderColor : Theme[themeContext.theme].lightColor}}   onClick={() =>  themeContext.setTheme( themeContext.theme === 'default' ? 'dark' : 'default' )} variant="outline-success">Switch Theme</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>;
}

export default Header;
