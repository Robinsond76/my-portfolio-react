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

//build container

//build body of each four links: About // How I'm learning // Projects // Contact
