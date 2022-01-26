import './App.css';
import {Redirect, Route} from 'react-router-dom'
import ResumeForm from './pages/ResumeForm/ResumeForm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{height : '100vh', width : '100vw'}}>
      <Header/>
      <div style={{padding : 5,height : '90%',backgroundColor : '#c1c2c1'}}>
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
      
      <Footer/>      
    </div>
  );
}

export default App;
