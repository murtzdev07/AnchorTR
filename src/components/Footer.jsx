import React from "react";
import "./footer.css";
import logo from "/public/Anchor.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT SIDE: Logo & Text */}
        <div className="footer-left">
          <img src={logo} alt="Anchor Logo" className="footer-logo" />
          <div className="footer-text">
            <h2>
              Anchor TR <span>L.L.C</span>
            </h2>
            <p>Your trusted partner for tools, fasteners, and building materials in the UAE.</p>
          </div>
        </div>

        {/* RIGHT SIDE: Links, Contact, Social */}
        <div className="footer-right">
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/downloads">Downloads</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>📍 <a href="https://www.google.com/maps/search/?api=1&query=Sharjah,UAE" target="_blank" rel="noopener noreferrer">Sharjah, UAE</a></p>
            <p>📞 <a href="tel:+97165431412">+971 6543 1412</a></p>
            <p>✉️ <a href="mailto:info@anchortrdg.com">info@anchortrdg.com</a></p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anchor TR L.L.C. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
