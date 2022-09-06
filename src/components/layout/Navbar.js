import React from 'react';
import portrait from '../../img/portrait.jpg';
import { withRouter, Link } from 'react-router-dom';

const Navbar = ({ location }) => {
  return (
    <nav>
      {location.pathname === '/' ? (
        <img src={portrait} alt='Robinson Souza' className='portrait' />
      ) : (
        <div className='name'>Rob Souza</div>
      )}
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/stack'>Stack</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
