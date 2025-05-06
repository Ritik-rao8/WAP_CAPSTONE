import React from 'react'
import Navbar from '../components/Navbar'
import './AboutStyle.css'

export default function AboutPage() {

  const teamMembers = [
    {
      name: "ABC",
      position: "CEO & Founder",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "ABC founded NextMart in 2015 with a vision to create an accessible online shopping experience for everyone."
    },
    {
      name: "DEF",
      position: "CTO",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "DEF oversees all technical aspects of NextMart, ensuring a seamless shopping experience for our customers."
    },
    {
      name: "GHI",
      position: "Head of Operations",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "GHI manages our day-to-day operations, from inventory management to order fulfillment."
    },
    {
      name: "JKL",
      position: "Marketing Director",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "JKL leads our marketing efforts, helping us connect with customers and share our story."
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
            <img
              
              alt="Our store"
              src="./logoo.jpg"
              className="story-image"
            />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              ShopNow was founded in 2015 with a simple mission: to make quality products accessible to everyone.
              What started as a small online store has grown into a trusted e-commerce platform serving thousands of customers worldwide.
            </p>
            <p>
              Our journey began when our founder, Sarah Johnson, noticed a gap in the market for affordable yet high-quality products.
              She believed that everyone deserves access to great products without breaking the bank.
            </p>
            <p>
              Today, we offer a curated selection of products across multiple categories, all vetted for quality and value.
              We're proud of how far we've come, but we're even more excited about where we're going.
            </p>
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

    </div>
  )
}
