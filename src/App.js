import './App.css';
import {Redirect, Route} from 'react-router-dom'
import ResumeForm from './pages/ResumeForm/ResumeForm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { useContext, useState } from 'react';
import ThemeContext from './theme/ThemeContext';
import Theme from './theme/theme';


function App() {
  const themeContext = useContext(ThemeContext)
  const [theme ,setTheme] = useState('default');
  return (
    <div style={{height : '100vh', width : '100vw'}}>
      <ThemeContext.Provider value={{theme,setTheme}}>
      <Header/>
      <div style={{paddingLeft : 5,paddingRight : 5,height : '90%',backgroundColor : Theme[themeContext.theme].lightColor}}>
      <Route
          exact
          path="/build-resume"
          component={ResumeForm}
        />
        <Route
          exact
          path={'/'}
          render={() => <Redirect to='/build-resume' />}
        />
      </div>
      
      {/* <Footer/>     */}
      </ThemeContext.Provider>
        
    </div>
  );
}

export default App;
