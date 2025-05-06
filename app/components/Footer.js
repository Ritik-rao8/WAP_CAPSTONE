"use client"
import React,{useState} from 'react'
import '../css/footer.css'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-section">
            <div className="footer-logo">

              <h3 className="footer-title">NextMart</h3>
            </div>
            <p className="footer-text">
              Your one-stop shop for all your shopping needs. Quality products at affordable prices.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link href="../HomePage" className="footer-link">Home</Link></li>
              <li><Link href="../ProductPage" className="footer-link">Products</Link></li>
              <li><Link href="../AboutPage" className="footer-link">About Us</Link></li>
              <li><Link href="../ContactPage" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Electronics</a></li>
              <li><a href="#" className="footer-link">Clothing</a></li>
              <li><a href="#" className="footer-link">Jewelry</a></li>
              <li><a href="#" className="footer-link">Home & Kitchen</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <Icon icon="logos:facebook" width={24} height={24} />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-link">
                <Icon icon="logos:twitter" width={24} height={24} />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <Icon icon="logos:instagram-icon" width={24} height={24} />
              </a>
            </div>
            <p className="footer-text">
              Subscribe to our newsletter for updates
            </p>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-text">&copy; {new Date().getFullYear()} ShopNow. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
