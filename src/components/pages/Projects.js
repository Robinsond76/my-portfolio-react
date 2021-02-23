import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <div className='header'>
        <h1>Projects</h1>
        <h2>A Perpetual Work in Progress</h2>
      </div>
      <p>
        You can check my Github activity
        <a
          className='link'
          href='https://www.github.com/robinsond76'
          target='_blank'
          rel='noopener noreferrer'
        >
          here
        </a>
        .
      </p>
      <div className='projects'>
        <span>
          <a
            className='project-link'
            href='https://jobtme.AzureWebsites.net'
            target='_blank'
            rel='noopener noreferrer'
          >
            JobTME
          </a>
        </span>
        <p>
          Job Time Management Engine. A web app built with ASP.Net Core and
          React with lots of functionality including user login. Inspired by a
          real company's problem. Read about it and take a guided tour here:
          <br />
          <a
            className='code-link'
            href='https://github.com/Robinsond76/Payroll'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
          |
          <Link to='/jobTME' className='code-link'>
            About
          </Link>
        </p>
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
            href='https://github.com/Robinsond76/my-portfolio-react'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          |
          <a
            className='code-link'
            href='https://github.com/Robinsond76/my-portfolio-express'
            target='_blank'
            rel='noopener noreferrer'
          >
            Express
          </a>
        </p>
      </div>
    </>
  );
};

export default Projects;
