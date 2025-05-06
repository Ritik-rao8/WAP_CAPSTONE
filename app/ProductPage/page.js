"use client"
import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import "./ProductStyle.css"

export default function ProductPage() {
  return (
    <div className="products-page">
      <Navbar />
      <section className="products-hero">
        <div className="title-container">
          <h1 className="title-title">Our Products</h1>
          <p className="title-description">Browse our collection of high-quality products at affordable prices.</p>
        </div>
      </section>
      
      <section className="product-container">
        <section className="product-grid">
          <img className="product-image" src="/tshirt.jpg"/>
          <p className="product-tag">Men's Clothing</p>
          <span className="product-span">4.1</span>
          <h1 className="product-name">Mens Casual Premium Slim Fit T-Shirts</h1>
          <p className="product-price">$4.20</p>
          <button className="buy-btn">Buy Now!</button>
        </section>
      </section>
    </div>
  )
}
