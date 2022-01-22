import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';

const App = () => {
  return (
     <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/Portfolio" component={Portfolio} />
       <Route exact path="/About" component={About} />
       <Redirect to="/" />
     </Switch>
     </>
  );
}

export default App;
