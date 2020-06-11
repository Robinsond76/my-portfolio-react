import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='header'>
        <h1>Contact Me</h1>
        <h2>Contact Form</h2>
      </div>
      <div className='form-wrap'>
        <form method='POST' data-netlify='true' data-netlify-recaptcha='true'>
          <div className='text-fields'>
            <input type='hidden' name='form-name' value='contact' />
            <input
              type='text'
              className='text-input name-input'
              placeholder='Name'
              name='name'
            />
            <input
              type='text'
              className='text-input subject-input'
              placeholder='Subject'
              name='subject'
            />
            <input
              type='email'
              className='text-input email-input'
              placeholder='Email Address'
              name='email'
            />
            <textarea
              className='contact-message message-input'
              placeholder='Enter Message'
              name='message'
            ></textarea>
            <div>
              <div data-netlify-recaptcha='true'></div>
            </div>
          </div>
          <button type='submit' className='btn-dark'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
