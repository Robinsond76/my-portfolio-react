import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='header'>
        <h1>Contact Me</h1>
      </div>
      <h2>Contact Form</h2>
      <form method='POST' data-netlify='true' data-netlify-recaptcha='true'>
        <div class='text-fields'>
          <input
            type='text'
            class='text-input name-input'
            placeholder='Name'
            name='name'
          />
          <input
            type='text'
            class='text-input subject-input'
            placeholder='Subject'
            name='subject'
          />
          <input
            type='email'
            class='text-input email-input'
            placeholder='Email Address'
            name='email'
          />
          <input
            type='text'
            class='text-input phone-input'
            placeholder='Phone Number'
            name='phone'
          />
          <textarea
            class='contact-message message-input'
            placeholder='Enter Message'
            name='message'
          ></textarea>
          <div class='my-2'>
            <div data-netlify-recaptcha='true'></div>
          </div>
        </div>
        <button type='submit' class='btn-dark'>
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
