import './App.css';
import {Redirect, Route} from 'react-router-dom'
import ResumeForm from './pages/ResumeForm/ResumeForm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { useContext, useState } from 'react';
import ThemeContext from './theme/ThemeContext';
import Theme from './theme/theme';
import ViewResume from './pages/ViewResume';
import PrintResume from './components/PrintResume';
import Templates from './pages/Templates';


function App() {
  const themeContext = useContext(ThemeContext)
  const [theme ,setTheme] = useState('dark');
  return (
    <div style={{height : '100vh', width : '100vw'}}>
      
      <ThemeContext.Provider value={{theme,setTheme}}>
      <Header/>
      <div style={{height : '100vh',paddingTop : '10vh',width : '100%',backgroundColor : Theme[themeContext.theme].bgColor}}>
      <Route
          exact
          path="/build-resume"
          component={ResumeForm}
        />
        <Route
          exact
          path={'/view-resume'}
          component={ViewResume}
        />
        <Route
          exact
          path={'/templates'}
          component={Templates}
        />
        <Route
          exact
          path={'/'}
          render={() => <Redirect to='/build-resume' />}
        />
        
      </div>
            </ThemeContext.Provider>
     
        
    </div>
  );
}

export default App;
