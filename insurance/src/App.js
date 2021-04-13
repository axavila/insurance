import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactusPage from './pages/contactus';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/insurance' component={Home} exact />
        <Route path="/contactus" component={ContactusPage} exact />
      </Switch>
      
     
      
    </Router>
    
  );
}

export default App;
