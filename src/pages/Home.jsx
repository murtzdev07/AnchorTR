import React from "react";
import { FaBolt, FaCircle, FaScrewdriver, FaDotCircle, FaAnchor } from "react-icons/fa"; 
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Banner Image */}
      <section className="bolt-banner">
        <img src="/bg.png" alt="Fastener Bolt Banner" />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Anchor TR <span>L.L.C</span>
        </h1>
        <p>
          Your trusted partner for tools, fasteners, and building materials in the UAE.
        </p>
        {/* Shop Now navigates to Products page */}
        <a href="/products" className="btn-link">
          Shop Now
        </a>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2>Our Product Categories</h2>
        <p>
          We provide industrial fasteners, tools, adhesives, safety gear, valves, and fittings
          for diverse industry needs.
        </p>

        {/* Category Tabs with Icons */}
        <div className="category-tabs">
          <a href="/products?category=bolts" className="active">
            <FaBolt className="tab-icon" /> Bolts
          </a>
          <a href="/products?category=nuts">
            <FaCircle className="tab-icon" /> Nuts
          </a>
          <a href="/products?category=screws">
            <FaScrewdriver className="tab-icon" /> Screws
          </a>
          <a href="/products?category=washers">
            <FaDotCircle className="tab-icon" /> Washers
          </a>
          <a href="/products?category=anchors">
            <FaAnchor className="tab-icon" /> Anchors
          </a>
        </div>

        {/* Category Cards */}
        <div className="category-grid">
          <div className="category-card">
            <img src="/products/bolt.jpg" alt="Bolt" />
            <h3>Hex Bolts</h3>
            <a href="/products/bolt" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/products/nut.jpg" alt="Nut" />
            <h3>Hex Nuts</h3>
            <a href="/products/nut" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/products/screw.jpg" alt="Screw" />
            <h3>Screws</h3>
            <a href="/products/screw" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/products/washer.jpg" alt="Washer" />
            <h3>Washers</h3>
            <a href="/products/washer" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/products/anchor.jpg" alt="Anchor" />
            <h3>Anchors</h3>
            <a href="/products/anchor" className="btn-link">View Detail →</a>
          </div>
        </div>

        <div className="view-more">
          <a href="/products" className="btn-link dark">View More</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
