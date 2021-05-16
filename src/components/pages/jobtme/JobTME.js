import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const JobTME = () => {
  return (
    <Fragment>
      <div className='jobTME'>
        <div className='header'>
          <h1>
            Job<span style={{ color: 'teal' }}>TME</span>
          </h1>
          <h2>Job Time Management Engine</h2>
        </div>
        <p>
          If you're short on time, skip to the
          <Link to='/jobTME/tour' className='link'>
            Guided Tour
          </Link>
          section for a quick look through the app, but I encourage you to read
          more about the app below. Thank you for stopping by!
        </p>

        <h3>The Problem</h3>
        <p>
          JobTME was created based on a real life problem I had noticed at my
          previous job. The company manufactured products for commercial kitchen
          ventilation systems but a large source of income was the installation
          of these products. Therefore, the installation team was scattered
          everyday at different jobsites and more often than not, a jobsite
          would require days of work.
        </p>
        <p>
          Because the team members would often go directly to the jobsite from
          home and vice versa, they had no central location for clocking-in and
          were required to write down their daily hours. It was then a weekly
          problem for the installation manager to chase after these time-logs
          when he remembered to do payroll, which was frequently last minute.
          This also meant there was no real record of jobsite work history.
        </p>

        <h3>The App</h3>
        <p>
          This app permits managers to create a database of jobsites allowing
          employees to remotely clock-in and easily manage their time worked. It
          also enables a useful collection of data that makes it possible for
          managers to:
        </p>

        <ul className='jobTME-app-list'>
          <li>
            See who is currently clocked in and what time they began working
          </li>
          <li>See what jobsites are currently clocked into</li>
          <li>See the history of visits and time spent at a jobsite</li>
          <li>See a summary of all who visited a jobsite and filter by date</li>
          <li>Determine jobsites visited in a particular timeframe</li>
          <li>Determine who worked in a particular timeframe</li>
          <li>
            Assist with payroll by determining total hours worked per employee
            in a timeframe
          </li>
          <li>
            Further break down the total hours worked per employee per location
          </li>
        </ul>

        <h3>The Stack</h3>
        <p>
          The api was created with Asp.Net Core and Sql Server and the front-end
          built with React.
        </p>

        <h3>Mobile Ready</h3>
        <p>The app has been optimized for use on mobile devices.</p>

        <h3>Functionality</h3>
        <p>
          There are three levels of access: user/employee, manager and admin.
        </p>

        <h4>Employee</h4>
        <p>
          The employee has the ability to search for a jobsite to clock-in and
          clock-out and has access to one view through the navbar:{' '}
        </p>
        <ul className='jobTME-functionality-list'>
          <li>
            User Timestamps: See all owned timestamps and filter by date and
            jobsite. The navbar shows only one available option (any attempt at
            other tools would be blocked by the api). Registration is only
            possible by a manager.
          </li>
        </ul>

        <h4>Manager</h4>
        <p>The manager has access to 4 different views through the navbar:</p>
        <ul className='jobTME-functionality-list'>
          <li>
            Dashboard: See what jobsites are currently clocked into and what
            employees are clocked-in. The view also allows clocking out an
            employee who may have forgotten to do so.
          </li>
          <li>
            Jobsites : See the details of all available jobsites, mainly moniker
            and address. Clicking on a particular jobsite allows you to see the
            history of timestamps for that location including a summary of
            everyone who clocked-in at the jobsite. You can then filter the
            timestamps by employee and date.
          </li>
          <li>
            Timestamps : See all timestamps in the system, ordered by most
            recent. Also allows seeing what jobsites were visited within a
            timeframe.
          </li>
          <li>
            Employees : Manage all employees in the system. Allows creating,
            editing and deleting an employee. Can access the Payroll view that
            sums up the amount of hours worked per employee within a given
            timeframe.
          </li>
        </ul>

        <h4>Admin</h4>
        <p>The admin has all the above views plus one:</p>
        <ul className='jobTME-functionality-list'>
          <li>
            Managers : Edit or revoke manager access to employees. A new option
            is available in the 'Employee' view to make an employee a manager.
          </li>
        </ul>

        <h3>Validation</h3>
        <p>
          Careful attention was paid to data validation throughout the app.
          Below is a summary:
        </p>
        <ul className='jobTME-validation-list'>
          <li>
            Logging in: Error message displays 'Incorrect username or password'
            when it is true. Submit button is disabled until all fields have
            data.
          </li>
          <li>
            Jobsite Creation : All fields are required except 'Address2' and
            'Address3' and the submit button is disabled until all required
            fields have data. Due to the nature of international addresses,
            validation here is limited. Restaurant names can also often be the
            same, having only different addresses (i.e. Pizza Hut). In these
            cases, the moniker (a short job Id) was the only factor used to
            diferentiate between jobsites. Therefore, a moniker cannot match
            another that is already in the database. A proper error message
            displays when a match is found.
          </li>
          <li>
            Employee Registration: Username and email must be unique. Username
            cannot have a space in it. Passwords be at least 8 characters in
            length, have at least 1 uppercase letter, 1 lowercase letter, 1
            number and 1 symbol. Proper error messages displayed for all cases.
            All fields required. Submit button is disabled until all fields have
            data.
          </li>
          <li>
            Editing Employee : Username and email must be unique. Proper error
            messages displayed.
          </li>
          <li>
            Adding a Timestamp : All fields required. Must search for a jobsite
            using the job search bar. Using the calendar to select date and time
            is recommended. An improper date is not accepted but no error
            message is displayed. Clocked-In date cannot be before Clocked-Out
            date and Clocked-In date cannot be in the future. Proper error
            messages displayed for these cases.
          </li>
          <li>
            Editing a Timestamp : Same as above, but only changing the date and
            time is allowed. The jobsite is locked once a timestamp is created.
          </li>
        </ul>
        <p>
          If you haven't done so yet, check out the
          <Link to='/jobTME/tour' className='link'>
            Guided Tour
          </Link>
          .
        </p>
      </div>
    </Fragment>
  );
};

export default JobTME;
