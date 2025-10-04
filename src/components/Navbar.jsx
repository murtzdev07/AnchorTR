import React from "react";
import "./navbar.css"; 
import logo from "/public/Anchor.png"; // <-- replace with your actual logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Logo + Names */}
      <div className="navbar-brand">
         <a href="/">
 <img src={logo} alt="Company Logo" className="navbar-logo" /> </a>
        <div className="navbar-text">
        <h2 className="company-name-ar"> المرساة للتجارة ذ.م.م</h2>
        <h1 className="company-name-en">ANCHOR TR. L.L.C</h1>
          
        </div>
      </div>

      {/* Right Side: Menu */}
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/downloads">Downloads</a></li> {/* Added Downloads */}
      </ul>
    </nav>
  );
};

export default Navbar;
