import React, { useContext } from 'react';
import Theme from '../../theme/theme';
import ThemeContext from '../../theme/ThemeContext';

function ResumeForm() {
    const themeContext = useContext(ThemeContext);
    console.log('inside resumeform');
  return <div style={{height : '100%',width : '100%',margin : 0,padding : 5,borderRadius : 5,backgroundColor : Theme[themeContext.theme].bgColor}}>
     <h1>
         Content
    </h1>
  </div>;
}

export default ResumeForm;
