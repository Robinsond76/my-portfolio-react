import React from 'react';
import portrait from '../../img/portrait.jpg';

const Home = () => {
  return (
    <div>
      <div className='header'>
        <h1>Robinson Souza</h1>
        <h2>Full Stack Developer</h2>
        <img className='portrait-media' src={portrait} alt='Robinson Souza' />
      </div>
      <p>
        Hello. I am a software developer currently residing in South
        Florida, USA. I am passionate about web development and spend a lot of
        time improving my skills whenever possible.
      </p>

      <p>Feel free to contact me with any inquiries.</p>
    </div>
  );
};

export default Home;
