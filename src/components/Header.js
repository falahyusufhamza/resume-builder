import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'

function Header() {
  return <div style={{height : '64px'}}>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/build-resume">Build Resume</Nav.Link>
      <Nav.Link href="/templates">Templates</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-success">Switch Theme</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>;
}

export default Header;
