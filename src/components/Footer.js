import React from 'react';
import {Navbar} from 'react-bootstrap'

function Footer() {
  return <div style={{bottom : 0, left : 0,position : 'fixed',width :'100%'}}>
  <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Powered By Mohammed Falah Solutions 2022</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
</Navbar.Collapse>
</Navbar>
</div>;
}

export default Footer;
