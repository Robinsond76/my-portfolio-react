import React, { Fragment } from 'react';
import Zoom from 'react-medium-image-zoom';

//images
import user_homepage from '../../../img/jobtme/user_homepage.png';
import user_timestamps from '../../../img/jobtme/user_timestamps.png';
import user_jobsite from '../../../img/jobtme/user_jobsite.png';
import dashboard from '../../../img/jobtme/dashboard.png';
import dashboard_employees from '../../../img/jobtme/dashboard_employees.png';
import jobsites from '../../../img/jobtme/jobsites.png';
import jobsite_history from '../../../img/jobtme/jobsite_history.png';
import timestamps from '../../../img/jobtme/timestamps.png';
import jobsites_visited from '../../../img/jobtme/jobsites_visited.png';
import employees from '../../../img/jobtme/employees.png';
import employee_history from '../../../img/jobtme/employee_history.png';
import add_timestamp from '../../../img/jobtme/add_timestamp.png';
import delete_timestamp from '../../../img/jobtme/delete_timestamp.png';
import payroll from '../../../img/jobtme/payroll.png';
import payroll_details from '../../../img/jobtme/payroll_details.png';
import managers from '../../../img/jobtme/managers.png';
import make_manager from '../../../img/jobtme/make_manager.png';
import revoke_manager from '../../../img/jobtme/revoke_manager.png';

const JobTMETour = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <h1 className='header'>JobTME Guided Tour</h1>

      <ol>
        <li>
          <p>
            Navigate to the app
            <a
              className='link'
              href='https://jobtme.AzureWebsites.net'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
            . You may wish to open another screen and keep it side-by-side if
            you are following along. Login with the following credentials:
          </p>

          <p className='jobTME-credentials'>
            Email: Tom@test.com <br />
            Password: Pa$$w0rd
          </p>
          <p>
            Once logged in, you will see the homepage for the employee. Here is
            where you clock-in to a jobsite. Clock-in to any jobsite by
            searching for 'I', selecting an option, and clicking on 'Clock-In'.
          </p>
          <Zoom>
            <div className='jobTME-img'>
              <img alt='login page' src={user_homepage} width='300' />
            </div>
          </Zoom>
          <p>
            If you are on a desktop browser, the option to view your past
            timestamps will be available. Click on the 'Timestamps' button to
            see the User Timestamps view. (When on mobile, access to the
            'Timestamps' view is removed for the employee.)
          </p>
          <Zoom>
            <div className='jobTME-img'>
              <img alt='user timestamps' src={user_timestamps} width='300' />
            </div>
          </Zoom>
          <p>
            Within the timestamps view, you can see Tom's past timestamps in
            descending order. You will not see active timestamps until it has
            been clocked out. By clicking on a jobsite moniker, the timestamps
            are filtered for that jobsite. All timestamps can be filtered by
            date.
          </p>
          <Zoom>
            <div className='jobTME-img'>
              <img alt='user timestamps' src={user_jobsite} width='300' />
            </div>
          </Zoom>
          <p>
            Return to the homepage by clicking on the title 'JobTME' in the
            navbar. Stay clocked-in and log out.
          </p>
        </li>

        <li>
          <p>Login with the following credentials:</p>
          <p className='jobTME-credentials'>
            email: Rich@test.com <br />
            password: Pa$$w0rd
          </p>

          <p>
            As a manager, you will be pushed to the dashboard. Here you should
            see the jobsite that you clocked into as Tom. All active jobsites
            would be displayed here. Just below the dashboard title you should
            see the 'Employees' tab. Click on it to see all currently clocked-in
            employees. You should see Tom's active timestamp. In the case an
            employee ever needs to be clocked-out of a jobsite, you can do so in
            this view. In the table under the 'manage' title, click on the red
            stopwatch. Confirm that you would like to clock out Tom.
          </p>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='dashboard' src={dashboard} width='300' />
            </div>
          </Zoom>
          <Zoom>
            <div className='jobTME-img'>
              <img
                alt='dashboard showing employees'
                src={dashboard_employees}
                width='300'
              />
            </div>
          </Zoom>
          <p>
            In the 'Jobsites' view, you will see a list of all the jobsites in
            the app. Use the search bar to locate the jobsite you clocked into
            as Tom. Click on the moniker when you locate it. Here you will see
            all timestamps for that jobsite including Tom's latest timestamp. In
            this view, you can edit or delete a jobsite. If you'd like to test
            the functionality, please add a jobsite first before deleting it.
            You can also click on any employee to filter timestamps for that
            user. You may use the date filter in any view to further refine
            results.
          </p>
          <p>
            Note: Hover over a question mark in any view to understand more
            about the page you're looking at.
          </p>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='jobsites view' src={jobsites} width='300' />
            </div>
          </Zoom>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='jobsite history' src={jobsite_history} width='300' />
            </div>
          </Zoom>

          <p>
            Click on the 'Timestamps' view in the navbar. Here you can see all
            the timestamps in the system. Under the jobsite's tab, you can see
            all the jobsites visited. Use the date filter to see what jobsites
            were visited between two dates.
          </p>
          <Zoom>
            <div className='jobTME-img'>
              <img alt='all timestamps view' src={timestamps} width='300' />
            </div>
          </Zoom>

          <Zoom>
            <div className='jobTME-img'>
              <img
                alt='all jobsites visited'
                src={jobsites_visited}
                width='300'
              />
            </div>
          </Zoom>
          <p>
            Click on the 'Employees' view. Here you'll see all the employees in
            the app. Feel free to add an employee of your own. Click on any
            employee. You can edit and delete the employee here and view all of
            their timestamps.
          </p>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='all employees in system' src={employees} width='300' />
            </div>
          </Zoom>
          <Zoom>
            <div className='jobTME-img'>
              <img
                alt='an employees history'
                src={employee_history}
                width='300'
              />
            </div>
          </Zoom>
          <p>
            You can also add a timestamp in case an employee forgot to clock in.
            Under the 'manage' column, you have the option to edit and delete
            any timestamp. Note that this is only possible as a manager or
            admin.
          </p>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='adding a timestamp' src={add_timestamp} width='300' />
            </div>
          </Zoom>

          <Zoom>
            <div className='jobTME-img'>
              <img
                alt='deleting a timestamp'
                src={delete_timestamp}
                width='300'
              />
            </div>
          </Zoom>
          <p>
            Go back to the 'Employees' view. Click on Payroll. Here you will see
            the total hours worked by all employees within the last 7 days. The
            date filter can be changed accordingly. If you click on an employee,
            a breakdown of the total hours between jobsites is visible.
          </p>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='payroll view' src={payroll} width='300' />
            </div>
          </Zoom>

          <Zoom>
            <div className='jobTME-img'>
              <img alt='payroll details' src={payroll_details} width='300' />
            </div>
          </Zoom>
        </li>
        <li>
          Log out and Login again with the following credentials:
          <p className='jobTME-credentials'>
            email: admin@admin <br />
            password: Pa$$w0rd
          </p>
          <p>Note there is no '.com' for the admin.</p>
          <p>
            You will notice a new view in the navbar. Click on 'Managers'. Here
            you can see all the employees who have been appointed as a manager.
            You can edit a manager's info or revoke their privileges. Go ahead
            and do so with any manager you see listed.
          </p>
          <Zoom>
            <div className='jobTME-img'>
              <img alt='managers view' src={managers} width='300' />
            </div>
          </Zoom>
          <Zoom>
            <div className='jobTME-img'>
              <img
                alt='revoke manager privileges'
                src={revoke_manager}
                width='300'
              />
            </div>
          </Zoom>
          <p>
            Click on the 'Employees' view in the navbar. Choose any employee.
            You should see a new button called 'Make Manager'. Make any new
            employee a manager to replace the previous one.
          </p>
          <Zoom>
            <div className='jobTME-img'>
              <img alt='make employee manager' src={make_manager} width='300' />
            </div>
          </Zoom>
        </li>
      </ol>
      <p>
        This concludes the guided tour. Check out the app on a mobile screen
        through the browser. I hope you enjoyed it and thank you for your
        interest!
      </p>
    </Fragment>
  );
};

export default JobTMETour;
