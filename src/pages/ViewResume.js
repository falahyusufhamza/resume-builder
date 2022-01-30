import React, { useContext, useRef } from 'react';
import ViewResumeComponent from '../components/ViewResume/ViewResumeComponent';
import Theme from '../theme/theme';
import ThemeContext from '../theme/ThemeContext';
import {useReactToPrint} from 'react-to-print'

function ViewResume() {
    const themeContext = useContext(ThemeContext);
    const componentRef = useRef();
    const handleWindowPrint = (event) => {
        event.preventDefault();
        window.print();
    }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  return <div style={{width : '100%',paddingTop : '1in',display : 'flex',justifyContent : 'center',backgroundColor : Theme[themeContext.theme].bgColor}}>
      
      
      {/* <Button onClick={handlePrint}>Print</Button> */}
        <ViewResumeComponent componentRef={componentRef}/>
      </div>
}

export default ViewResume;
