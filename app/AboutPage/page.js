import React from 'react'
import Navbar from '../components/Navbar'
import './AboutStyle.css'
import Footer from '../components/Footer';

export default function AboutPage() {

  const teamMembers = [
    {
      name: "Ritik",
      position: "CEO & Founder",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Satvik",
      position: "CTO",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Nakul",
      position: "Head of Operations",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Aaryan",
      position: "Marketing Director",
      image: "https://wallpapers.com/images/hd/ironman-hd-ekw7ctu41xabxh04.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
