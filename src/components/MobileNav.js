// MobileNav.js

import React, { useState } from 'react';
import './MobileNav.css';
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      <div className="navbar-icon" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {isOpen && (
        <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Our Products</NavLink>
        <NavLink to="/service">Our Services</NavLink>
        <NavLink to="/contact">AboutUs</NavLink>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
