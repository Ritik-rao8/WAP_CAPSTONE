import React from 'react'
import Navbar from '../components/Navbar'
import './AboutStyle.css'
import Footer from '../components/Footer';

export default function AboutPage() {

  const teamMembers = [
    {
      name: "Ritik",
      position: "CEO & Founder",
      image: "https://imgs.search.brave.com/mG9gLgo1PQFL0-dx_bHpRnOKkvkkQkxGC96JqsfhQbU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yMy81/MDkvSEQtd2FsbHBh/cGVyLWNhcHRhaW4t/YW1lcmljYS1hbWVy/aWNhLWF2ZW5nZXJz/LWNhcHRhaW4tY2Fw/dGFpbi1yb2dlci1j/YXB0YWluLXJvZ2Vy/cy1oeWRyYS1tYXJ2/ZWwtc2hlaWxkLXN0/ZXZlLXJvZ2VyLXRo/dW1ibmFpbC5qcGc",
      bio: "Ritik founded NextMart in 2025 with a vision to create an accessible online shopping experience for everyone."
    },
    {
      name: "Satvik",
      position: "CTO",
      image: "https://imgs.search.brave.com/PE7_jOKbQ5C57L7m_f0kqwfCCBgeXwKOGo8jJrAIfc0/rs:fit:860:0:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi9CYXRt/YW4tRHAuanBn",
      bio: "Satvik oversees all technical aspects of NextMart, ensuring a seamless shopping experience for our customers."
    },
    {
      name: "Nakul",
      position: "Head of Operations",
      image: "https://imgs.search.brave.com/EU4aesydWd-cTJrYYpDO6TJrgPuFpQ3KWSG4HV1FwIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci85OTMv/MjA3L0hELXdhbGxw/YXBlci10b255LXN0/YXJrLWlyb24tbWFu/LWlyb24tbWFuLXRv/bnktc3RhcmstdGh1/bWJuYWlsLmpwZw",
      bio: "Nakul manages our day-to-day operations, from inventory management to order fulfillment."
    },
    {
      name: "Aaryan",
      position: "Marketing Director",
      image: "https://imgs.search.brave.com/cs6nLpcnBRs9k-pJudWSaG3KlSvU9NnPxweS27aEiYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcGVt/b2ppLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMi9T/cGlkZXJtYW4tRFAt/NC5wbmc",
      bio: "Aaryan leads our marketing efforts, helping us connect with customers and share our story.."
    }
  ];


  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <h1>About NextMart</h1>
        <p>We're on a mission to make quality products accessible to everyone.</p>
      </section>

      <section className="story-section">
        <div className="story-container">
          <div className="story-image-container">
            <img alt="Our store" src="./logoo.jpg" className="story-image"/>
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              At <strong>NextMart</strong>, we believe shopping should be simple, reliable, and enjoyable. 
              Our goal is to create an online destination where quality products, fair prices, and a smooth user experience come together.
            </p>
            <p>
              We curate a wide range of everyday essentials and trending finds across multiple categories, making it easier than ever to discover what you need — or what inspires you — all in one place.
            </p>
            <p>
            From design to delivery, we're committed to providing a platform that values trust, transparency, and convenience. Every product featured on our site is selected with care, ensuring it meets our standards for both quality and value.
            </p>
            <p>
              Whether you're browsing, buying, or just exploring, we’re here to make the experience as seamless and satisfying as possible. Welcome to the future of shopping.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">1M+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  )
}
