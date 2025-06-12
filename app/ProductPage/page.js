"use client"
import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import "./ProductStyle.css"
import Link from "next/link";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState('default');

  const productsPerPage = 12;
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];


  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

    // Filter products based on search query and category
  const filteredProducts = React.useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);
  
  // Sort products
  const sortedProducts = React.useMemo(() => {
    if (sortBy === 'default') return filteredProducts;
    
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'name-desc') return b.title.localeCompare(a.title);
      if (sortBy === 'rating') return b.rating.rate - a.rating.rate;
      return 0;
    });
  }, [filteredProducts, sortBy]);
    
   

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    // Handle search input change
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // Reset to first page when searching
    };
    
    // Handle category change
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // Reset to first page when changing category
    };
    
    // Handle sort change
    const handleSortChange = (value) => {
      setSortBy(value);
    };

   // Render star rating
   const renderRating = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {/* <span className="text-warning">
          <Icon icon="lucide:star" className="fill-current" />
        </span> */}
        <span className="text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  
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
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"/>
              </div>
              <select className="sort-select"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
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
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* products grid */}
          {!loading && sortedProducts.length > 0 && (
            <>
              <div className="product-gridd">
                {currentProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="card-body">
                      <div className="image-wrapper">
                        <img
                          alt={product.title}
                          className="product-image"
                          src={product.image}
                        />
                      </div>
                      <div className="product-meta">
                        <span className="product-category">{product.category}</span>
                        {renderRating(product.rating.rate)}
                      </div>
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="card-footer">
                      <Link href={`/products/${product.id}`} className="view-button">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="pagination-wrapper">
                  <div
                    total={totalPages}
                    initialPage={currentPage}
                    onChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}



        </div>
      </section>

      

    </div>
  )
}
