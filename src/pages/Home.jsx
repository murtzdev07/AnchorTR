import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <section className="bolt-banner">
        <img src="/bg2.jpg" alt="Fastener Bolt Banner" />
        <div className="banner-content">
          <h2>Strong  Reliable  Durable </h2>
          <p>
            Discover premium quality fasteners, bolts, and construction essentials 
            trusted across the UAE for strength and performance.
          </p>
          <a href="/about" className="btn-link banner-btn">Learn More</a>
        </div>
      </section>

      {/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <h1>YOUR ONE-STOP SOURCE FOR TOOLS & FASTENERS</h1>
    <p>
      From <span className="highlight">bolts, nuts, and screws</span> to 
      <span className="highlight"> anchors, washers, and rods</span>, we supply 
      everything you need to build with confidence. Our products are trusted by 
      professionals across <strong>construction, oil & gas, marine, and 
      manufacturing industries</strong>. Count on us for unmatched reliability, 
      competitive prices, and on-time delivery every time.
    </p>
    <a href="/products" className="btn-link">Explore Products</a>
  </div>
  <div className="hero-image">
    <img src="/warehouse.jpg" alt="Industrial Warehouse" />
  </div>
</section>


      {/* ✅ Industries Section */}
      <section className="industries">
        <h2>Industries We Supply</h2>
        <p>
          We cater to a wide range of industries, delivering durable fastening solutions 
          built for demanding environments.
        </p>

        <div className="industries-grid">
          <div className="industry-card">
            <img src="/industries/construction.jpg" alt="Construction Industry" />
            <h3>Construction</h3>
          </div>

          <div className="industry-card">
            <img src="/industries/oilgas.jpg" alt="Oil & Gas Industry" />
            <h3>Oil & Gas</h3>
          </div>

          <div className="industry-card">
            <img src="/industries/manufacturing.png" alt="Manufacturing Industry" />
            <h3>Manufacturing</h3>
          </div>

          <div className="industry-card">
            <img src="/industries/marine.jpg" alt="Marine Industry" />
            <h3>Marine</h3>
          </div>

          {/* <div className="industry-card">
            <img src="/industries/infrastructure.jpg" alt="Infrastructure Industry" />
            <h3>Infrastructure</h3>
          </div> */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2>Our Product Categories</h2>
        <p>
          We provide industrial fasteners, tools, adhesives, safety gear, valves, and fittings
          for diverse industry needs.
        </p>

        {/* Category Tabs with SVG Icons */}
        <div className="category-tabs">
          <a href="/products?category=bolts" className="active">
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2l10 0-4 8h4l-10 12 3.5-10H7z" />
            </svg>
            Bolts
          </a>

          <a href="/products?category=nuts">
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.2L5 7.6v8.8l7 3.9 7-3.9V7.6L12 4.2zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
            Nuts
          </a>

          <a href="/products?category=screws">
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 2h4v2h-4V2zm1 4h2v4l4 2v2l-4 2v4h-2v-4l-4-2v-2l4-2V6z"/>
            </svg>
            Screws
          </a>

          <a href="/products?category=washers">
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
            Washers
          </a>

          <a href="/products?category=anchors">
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm1 4.27V10h3a1 1 0 010 2h-4v7a5 5 0 005-5h2a7 7 0 01-7 7 7 7 0 01-7-7h2a5 5 0 005 5v-7H8a1 1 0 010-2h3V6.27a3.001 3.001 0 012 0z"/>
            </svg>
            Anchors
          </a>
        </div>

        <div className="category-grid">
          <div className="category-card">
            <img src="/hexbolt.jpg" alt="Bolt" />
            <h3>Hex Bolts</h3>
            <a href="/products" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/hexnut.jpg" alt="Nut" />
            <h3>Hex Nuts</h3>
            <a href="/products" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/screws.jpg" alt="Screw" />
            <h3>Screws</h3>
            <a href="/products" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/washers.webp" alt="Washer" />
            <h3>Washers</h3>
            <a href="/products" className="btn-link">View Detail →</a>
          </div>

          <div className="category-card">
            <img src="/anchors.jpg" alt="Anchor" />
            <h3>Anchors</h3>
            <a href="/products" className="btn-link">View Detail →</a>
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
