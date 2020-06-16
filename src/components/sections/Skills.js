import React from 'react';

const Skills = () => {
  return (
    <div className='skills-section'>
      <h2>Skills</h2>

      <h4>
        Javascript<span>:</span>
      </h4>
      <div className='skill-level'>
        <div style={{ width: '75%' }}></div>
      </div>
      <h5>HTML:</h5>
      <div className='skill-level'>
        <div style={{ width: '90%' }}></div>
      </div>
      <h5>CSS / SASS:</h5>
      <div className='skill-level'>
        <div style={{ width: '65%' }}></div>
      </div>
      <h4>React:</h4>
      <div className='skill-level'>
        <div style={{ width: '80%' }}></div>
      </div>
      <h4>MongoDB / Mongoose:</h4>
      <div className='skill-level'>
        <div style={{ width: '60%' }}></div>
      </div>
      <h4> NodeJS / Express:</h4>
      <div className='skill-level'>
        <div style={{ width: '60%' }}></div>
      </div>
      <h4> Git:</h4>
      <div className='skill-level'>
        <div style={{ width: '30%' }}></div>
      </div>
    </div>
  );
};

export default Skills;
