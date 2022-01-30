import React, { useContext } from 'react';
import {Navbar} from 'react-bootstrap'
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';

function Footer() {
  const themeContext = useContext(ThemeContext)
  return <div style={{bottom : 0, left : 0,position : 'fixed',width :'100%', backgroundColor : Theme[themeContext.theme].primary}}>
  <Navbar>
<Navbar.Brand style={{fontSize : 15,color : Theme[themeContext.theme].lightColor}}>
Powered By Mohammed Falah Solutions 2022
</Navbar.Brand>
</Navbar>
</div>;
}

export default Footer;
