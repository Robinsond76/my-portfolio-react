import React from 'react';
import Skills from '../sections/Skills';

const Learning = () => {
  return (
    <>
      <div className='header'>
        <h1>Tech Stack</h1>
        <h2>.NET | Typescript | Angular | React</h2>
      </div>
        <p>
            At my current job I work with React and .NET (razor pages and APIs) to both maintain
            our core e-commerce website and to create tools used by teams internally.
        </p>
        
        <p>
            C# is my preferred programming language and it's my ambition to eventually have a strong
            proficiency in the full environment of .NET. As for front-end frameworks, Although
            I am more skilled with React, I prefer Angular and continue to improve my skill with it. 
        </p>

      <Skills />
    </>
  );
};

export default Learning;
