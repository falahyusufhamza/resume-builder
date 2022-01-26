import React from 'react';
import {Navbar} from 'react-bootstrap'

function Footer() {
  return <div style={{bottom : 0, left : 0,position : 'fixed',width :'100%'}}>
  <Navbar bg="light">
<Navbar.Brand style={{fontSize : 15}}>
Powered By Mohammed Falah Solutions 2022</Navbar.Brand>
</Navbar>
</div>;
}

export default Footer;
