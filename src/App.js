
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './Main/Main';
import React from "react";
import Nav from './Nav/Nav.js';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component = {Main}/>
            <Route path="/About" component = {About}/>
            <Route path="/Contact" component = {Contact}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
