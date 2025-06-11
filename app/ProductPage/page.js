"use client"
import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import "./ProductStyle.css"

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];
  return (
    <div className="products-page">
      <Navbar />
      <section className="products-hero">
        <div className="title-container">
          <h1 className="title-title">Our Products</h1>
          <p className="title-description">Browse our collection of high-quality products at affordable prices.</p>
        </div>
      </section>

      <section className="product-section">
        <div className="products-container">
          <div className="custom-container">
            <div className="search-sort-bar">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Search products..."
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                  className="search-input"/>
              </div>
              <select className="sort-select"
                // value={sortBy}
                // onChange={(e) => handleSortChange(e.target.value)}
                >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="category-container">
              <div className="category-chip-group">
                {categories.map((category) => (
                  <span
                    key={category}
                    className={`category-chip ${
                      selectedCategory === category ? 'selected' : ''
                    }`}
                    // onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  )
}
