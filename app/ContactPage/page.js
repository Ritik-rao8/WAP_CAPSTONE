"use client"
import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import './ContactStyle.css'
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic
  };
  return (
    <div className='contact-wrapper'> 
      <Navbar />
      

      <section className="contact-section">
        <div className="contact-container">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="description">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className='contact-form-conatiner'>
        <div className='contact-form-section'>
          <div className="card">
            <h2 className="card-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>


        <div className="info-section">
          <div className="card">
            <h2 className="card-title">Contact Information</h2>
            <div className="info-group">
              <div className="info-item">
                <MapPin className="icon" />
                <div>
                  <h3>Our Location</h3>
                  <p>123 Commerce Street<br />Shopping City, SC 12345<br />United States</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="icon" />
                <div>
                  <h3>Phone</h3>
                  <p>Toll-free: (800) 123-4567<br />Fax: (800) 123-4568</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>support@nextmart.com<br />sales@nextmart.com</p>
                </div>
              </div>

              <div className="info-item">
                <MessageSquare className="icon" />
                <div>
                  <h3>Live Chat</h3>
                  <p>Our live chat is available<br />24/7 for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>


          
        </div>

          


        
      </section>

        


    </div>
  )
}
