import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Learning from './components/pages/Learning';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/learning' component={Learning} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;

//Make the website mobile responsive
// Learn why the portrait blurs. I swear I read about this before
//Fill website with content
// Find out the difference between sticky and fixed
// Also mess around with the navbar by using the 'top' and 'left' attribute.
