"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ContactStyle.css";
import Footer from "../components/Footer";
// import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

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
                      {/* <Icon icon="lucide:check-circle" /> */}
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  )}
                  <form>
                  {/* <form onSubmit={handleSubmit}> */}
                    <div className="form-grid">
                      <input
                        type="text"
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        // onChange={handleChange}
                        placeholder="Enter your full name"
                        isRequired
                      />
                      <input
                        type="email"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        // onChange={handleChange}
                        placeholder="Enter your email address"
                        isRequired
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        // onChange={handleChange}
                        placeholder="What is this regarding?"
                        isRequired
                      />
                    </div>
                    <div className="form-field">
                      <textarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        // onChange={handleChange}
                        placeholder="Type your message here..."
                        minRows={4}
                        isRequired
                      />
                    </div>
                    <button 
                      type="submit" 
                      color="primary" 
                      className="submit-button"
                      // isLoading={isSubmitting}
                    >
                      {/* {isSubmitting ? 'Sending...' : 'Send Message'} */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map-section */}
      <section class="map-section">
        <div class="map-container">
          <div class="map-placeholder">
          
            <div class="map-content">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.1503215831754!2d77.0875463761463!3d28.98291626808207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db15c164f0a91%3A0xcab7be79bc1b3bac!2sNewton%20School%20of%20Technology%2C%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1746383558536!5m2!1sen!2sin" width="100%" height="100%"
            />
            </div>
          </div>
        </div>
      </section>

      <Footer />





    </div>
  );
}
