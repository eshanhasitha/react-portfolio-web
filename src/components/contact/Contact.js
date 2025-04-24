import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_mqoizyo', 'template_0kqtisg', formData, '6NecPVryJmWwNIsuh')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Thank you! Your message has been sent.');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Oops! Something went wrong.');
      });
  };

  return (
    <div className='cont-right'>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="subject" value="New Submission from Portfolio" />

        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Write your message here</label>
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Enter your message"
          style={{ width: '339px', height: '2217px' }}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-submit">Submit now</button>
      </form>
    </div>
  );
}

export default Contact
