import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section 1: Social Media Icons */}
    
      <div className="social-icons">
      <h2>Quick Links</h2>
        <a href="https://www.instagram.com/dreamsguideradv/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          Instagram
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
          Facebook
        </a>
        <a href="https://wa.me/9373346490" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
          Whatsapp
        </a>
        <a href="https://www.linkedin.com/company/dreamsguider/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
      </div>


      {/* Section 2: Office Addresses */}
      <div className="office-addresses">
      <h6>Our Office</h6>
      <h3>DreamsGuider.com</h3>
            <p> B.J. Vikhe Patil PLazza,</p>
            <p> Loni Tal-Rahata Dist_A.Nagar</p>
            <p> Pincode-413713</p>
            <h4>DreamsGuiderEdu.com</h4>
            <p>Banner,Pune-411045</p>
      </div>

      {/* Section 3: Phone and Email */}
      <div className="contact-info">
      <h5>Contact Us</h5>
        <p>
        <FontAwesomeIcon  className="icon"   icon= {faPhone} />+919373346490
        </p>
        <p>
          <FaEnvelope className="icon" />contact
          @dreamsguider
          .com
        </p>
      </div>
    </footer>
  );
};

export default Footer;

