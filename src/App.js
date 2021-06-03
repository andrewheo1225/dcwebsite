import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';

import BusinessHours from './components/pages/BusinessHours';
import Gallery from './components/pages/Gallery';
import Trailer from './components/pages/Trailer';
import AboutUs from './components/pages/AboutUs';
import TermsofService from './components/pages/TermsOfService';
import PrivacyPolicy from './components/pages/PrivacyPolicy';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/aboutus' component = {AboutUs}/>
    
        <Route path='/businesshours' component = {BusinessHours}/>
       
        <Route path ='/gallery' component = {Gallery}/>
        <Route path ='/trailer' component = {Trailer}/>
      
        <Route path ='/termsofservice' component = {TermsofService}/>
        <Route path ='/privacypolicy' component = {PrivacyPolicy}/>


      </Switch>
      </Router>
    </>
  );
}

export default App;
