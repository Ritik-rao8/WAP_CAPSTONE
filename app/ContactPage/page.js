"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ContactStyle.css";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();                                                                   
    setIsSubmitting(true);


    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  }
  const contactInfo = [
    {
      title: "Address",
      details: "NH44, Chowk, Bahalgarh, Sonipat, Haryana 131021"
    },
    {
      title: "Phone",
      details: "+91 930XXXXXXXX"
    },
    {
      title: "Email",
      details: "support.nextmart@gmail.com"
    },
    {
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 5PM EST"
    }
  ];

  return (
    <div className="contact-wrapper">
      <Navbar />

      <section className="contact-banner">
        <div className="banner-container">
          <h1 className="banner-heading">Contact Us</h1>
          <p className="banner-description">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-flex">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="custom-card">
                <div className="custom-card-body">
                  <h2 className="form-title">Send Us a Message</h2>

                  {isSubmitted && (
                    <div className="submission-success">
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <input
                        type="text"
                        className="form-grid-item"
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        isrequired="true" 
                      />
                      <input
                        type="email"
                        className="form-grid-item"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        isrequired="true" 
                      />
                    </div>
                    <div className="form-field">
                      <input
                      className="form-field-item form-grid-item"
                        type="text"
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        isrequired="true" 
                      />
                    </div>
                    <div className="form-field">
                      <textarea
                        className="form-field-item form-grid-item"
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        minrows={4}
                        isrequired="true" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      color="primary" 
                      className="submit-button"
                      isloading="false"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="contact-info-wrapper">
              <h2 className="contact-info-title">Contact Information</h2>
              <div className="contact-info-list">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div>
                      <h3 className="info-item-title">{item.title}</h3>
                      <p className="info-item-details">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </section>
      {/* map-section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
          
            <div className="map-content">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.1503215831754!2d77.0875463761463!3d28.98291626808207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db15c164f0a91%3A0xcab7be79bc1b3bac!2sNewton%20School%20of%20Technology%2C%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1746383558536!5m2!1sen!2sin" width="100%" height="100%"
            />
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Subscribe now & get 20% off</h2>
          <p className="newsletter-description">Be the first to know about new arrivals, sales & promos!</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />





    </div>
  );
}
