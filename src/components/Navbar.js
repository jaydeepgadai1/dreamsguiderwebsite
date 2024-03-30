import React, { useState } from "react";
import "./Navbar.css";
import BottomNavBar from "./BottomNavBar";
import MobileNav from './MobileNav';
import logo from "./logo522.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <div className="container_gg">
    
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="bottom-nav-i">
      <BottomNavBar />
      
      </div>
      <div>
      
      <div className="icons-container">
      <a href="tel:93733464901" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon  className="contact_icons" icon= {faPhone} /> </a>
        <a href="mailto:contact@dreamsguider.com" >
        <FontAwesomeIcon className="contact_icons" icon={faEnvelope} /></a>
        <a href="https://in.linkedin.com/in/vikram-waykar-768226211" >
        <FontAwesomeIcon className="contact_icons"   icon={faLinkedin} /></a>
       
        </div>
      </div>
      <div className="mobile-nav-i">
        <MobileNav/>
        </div>
    </div>
   
    </>
  );
};

export default Navbar;
