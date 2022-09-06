import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-medium-image-zoom/dist/styles.css';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Learning from './components/pages/Learning';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import './App.css';
import JobTME from './components/pages/jobtme/JobTME';
import JobTMETour from './components/pages/jobtme/JobTMETour';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/stack' component={Learning} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/jobTME' component={JobTME} />
            <Route exact path='/jobTME/tour' component={JobTMETour} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;
