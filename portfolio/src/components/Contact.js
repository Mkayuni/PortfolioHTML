import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form id="contact-form" action="https://getform.io/f/PdRZW0dG?redirect=index.htm#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Connect</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
