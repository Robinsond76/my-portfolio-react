import React from 'react';
import Skills from '../sections/Skills';

const Learning = () => {
  return (
    <>
      <div className='header'>
        <h1>What I'm learning</h1>
        <h2>Web Development</h2>
      </div>
      <p>
        I love to code - Anything that involves the development of software
        interests me. Although I focus on web development, I'm eager to expand
        beyond the browser eventually.
      </p>
      <p>
        My current goal is to develop strong expertise in the core technologies
        used in the MERN Stack, as well as mastery over Javascript. It is my
        objective to have a strong proficiency in the full development of small
        and medium sized web applications.
      </p>
      <p>
        In the future, I plan on learning mobile development starting with React
        Native.
      </p>
      <h3>Learning: Next.Js </h3>
      <p>
        Although I'm focused on improving my current skills, I think it's
        important to constantly be learning something new. Learning Next.Js will
        extend my React skills beyond single page applications.
      </p>
      <p>I'll be updating this page as my skills develop.</p>
      <Skills />
    </>
  );
};

export default Learning;
