import React from 'react';
import './ContactPage.css';  // Make sure to create a CSS file for styling

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Feel free to reach out to us for any inquiries or support.</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form action="your-server-side-script" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Enter subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Our Contact Info</h3>
          <p><strong>Phone:</strong> (254) 724-680-981</p>
          <p><strong>Email:</strong> info@budgetbindersbymadge.com</p>
          <p><strong>Address:</strong> Sawa Mall,Shop G22, Moi Avenue, Nairobi, Kenya</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Google Map */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
