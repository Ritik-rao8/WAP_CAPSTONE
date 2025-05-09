"use client"
import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import './ContactStyle.css'


export default function ContactPage() {
  return (
    <div className='contact-wrapper'> 
      <Navbar />
      

      <section className="contact-section">
        <div className="contact-container">
          <h1 className="heading">Contact Us</h1>
          <p className="description">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

        


    </div>
  )
}
