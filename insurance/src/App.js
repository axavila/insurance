import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contactus from './pages/contactus';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contactus' component={Contactus} exact />
      </Switch>
      
     
      
    </Router>
    
  );
}

export default App;
