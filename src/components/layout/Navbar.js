import React from 'react';
import portrait from '../../img/portrait.jpg';

const Navbar = () => {
  const currentPage = window.location.pathname;
  return (
    <nav>
      {currentPage === '/' ? (
        <img src={portrait} alt='' className='portrait' />
      ) : (
        <div className='name'>Rob Souza</div>
      )}
      <div className='navbar'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/learning'>Learning</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
