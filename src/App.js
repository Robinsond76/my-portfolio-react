import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
      </div>
    </>
  );
};

export default App;

//build container

//build body of each four links: About // How I'm learning // Projects // Contact
