"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import '../css/navbar.css'
import { FaShoppingCart,FaBars, FaTimes } from 'react-icons/fa';



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='navbar-content'>
                <Link href="/" className="logo">LoopCart</Link>
                
                <div className='nav-links'>
                    <Link href="../HomePage" className='nav-link'>Home</Link>
                    <Link href="../ProductPage" className='nav-link'>Products</Link>
                    <Link href="../AboutPage" className='nav-link'>About</Link>
                    <Link href="../ContactPage" className='nav-link'>Contact</Link>
                    
                </div>
                <div className="actions">
                    <Link href="../ProductPage" className='nav-link'>
                    <button className="icon-button">

                            <FaShoppingCart className="icon"/>
                            <p className='text'>Shop Now</p>

                    </button>
                    </Link>

                    {/* Mobile menu button */}
                    <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes className="icon"/> : <FaBars className="icon" />}
                    </button>
                </div>

            </div>


            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    Home
                    </Link>
                    <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    Products
                    </Link>
                    <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    About
                    </Link>
                    <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    Contact
                    </Link>
                </div>
            )}


        </div>
    </nav>
  )
}
