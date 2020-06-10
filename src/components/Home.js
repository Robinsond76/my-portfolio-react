import React from 'react';
import portrait from '../img/portrait.jpg';

const Home = () => {
  return (
    <div>
      <div id='home-header'>
        <h1>Robinson Souza</h1>
        <img src={portrait} alt='' className='portrait' />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero labore
        ad ab ducimus culpa voluptatibus itaque nam deleniti nobis id. Natus
        quidem qui sint quae? Rerum in perferendis provident saepe!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nulla
        nihil accusamus dolorum, cum harum eligendi soluta iure enim optio
        sequi. Similique soluta expedita sequi quod commodi ex enim animi.
      </p>
    </div>
  );
};

export default Home;
