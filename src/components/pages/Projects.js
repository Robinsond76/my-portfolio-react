import React from 'react';

const Projects = () => {
  return (
    <>
      <div className='header'>
        <h1>Projects</h1>
        <h2>A Perpetual Work in Progress</h2>
      </div>
      <p>
        You can check my Github activity
        <a className='link' href='https://www.github.com/robinsond7691'>
          here
        </a>
        .
      </p>
      <div className='projects'>
        <span>
          <a className='project-link' href='/'>
            Robsouza.dev
          </a>
        </span>
        <p>
          This website was built using React.js with custom CSS. It's also been
          rewritten using Express - see the code below:{' '}
          <a
            className='code-link'
            href='https://github.com/Robinsond7691/my-portfolio-react'
          >
            React
          </a>
          |
          <a
            className='code-link'
            href='https://github.com/Robinsond7691/my-portfolio-express'
          >
            Express
          </a>
        </p>
      </div>
    </>
  );
};

export default Projects;
