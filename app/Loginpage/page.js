"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';
import "./loginpage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Hardcoded user credentials
    const storedUser = {
      email: "test@example.com",
      password: "password123",
    };
  
    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", true); // Simulate login
      alert("Login successful!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-footer">
          Don't have an account? <Link href="../SignPage">Sign Up</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}