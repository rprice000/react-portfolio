import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {

    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
  
    function handleChange(e) {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
          setErrorMessage('');
        }
      }  
      if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
      }
    }
  }

  console.log(formState);
  console.log('errorMessage', errorMessage);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }



    return (
      <section className="contact" id="contact-section">
        <h2>Contact me</h2>
        <div className="form-div">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                id="name-field"
                placeholder="Your Name"
              />
              <span id="name-required">Name is required!</span>
            </div>

            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                id="email-field"
                placeholder="Your Email"
              />
              <span id="email-required">Email is required!</span>
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
                id="message-field"
                placeholder="Your Message"
              />
              <span id="message-required">Message is required!</span>
            </div>

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>

        <div id="dev-info">
          <ul>
            <li>
              Email:{" "}
              <a href="mailto: rtprice21@gmail.com">rtprice21@gmail.com</a>
            </li>
            <li>
              Github:{" "}
              <a href="https://github.com/rprice000/rprice000.git">
                Reagan's GitHub
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/reagan-price-967a25101/">
                Reagan's LinkedIn
              </a>
            </li>
          </ul>

          <address>
            55 Main Street <br />
            Some Town, Ca <br />
            12345
            <br />
            <a href="tel:123.456.7890">123.456.7890</a>
            <br />
          </address>
        </div>
      </section>
    );
}


export default Contact;