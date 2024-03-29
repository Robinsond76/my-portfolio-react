import React from 'react';

const Skills = () => {
  return (
    <div className='skills-section'>
      <h2>Skills</h2>

      <h5>
        C# / .NET<span>:</span>
      </h5>
      <div className='skill-level'>
        <div style={{ width: '70%' }}></div>
      </div>
      <h5>
        Typescript<span>:</span>
      </h5>
      <div className='skill-level'>
        <div style={{ width: '70%' }}></div>
      </div>
        <h5>React:</h5>
        <div className='skill-level'>
            <div style={{ width: '70%' }}></div>
        </div>
        <h5>Angular:</h5>
        <div className='skill-level'>
            <div style={{ width: '50%' }}></div>
        </div>
      <h5>MongoDB / Mongoose:</h5>
      <div className='skill-level'>
        <div style={{ width: '40%' }}></div>
      </div>
      <h5> NodeJS / Express:</h5>
      <div className='skill-level'>
        <div style={{ width: '40%' }}></div>
      </div>
      <h5>HTML:</h5>
      <div className='skill-level'>
        <div style={{ width: '80%' }}></div>
      </div>
      <h5>CSS / SASS:</h5>
      <div className='skill-level'>
        <div style={{ width: '60%' }}></div>
      </div>
    </div>
  );
};

export default Skills;
