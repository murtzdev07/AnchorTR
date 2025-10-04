import React from "react";
import "./about.css";
import { FaBoxes, FaTools, FaDollarSign, FaThumbsUp, FaStar } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          <strong>Anchor TR LLC – Complete Range of Fasteners, Trusted in the U.A.E.</strong>
        </p>
        <p>
          Established as one of the largest stocking and wholesale distributors of fasteners in the U.A.E., 
          Anchor TR LLC is built on a simple philosophy: to deliver the highest quality parts and service possible. 
          With extensive capabilities and a proven track record, Anchor has become a trusted leader in the fasteners business.
        </p>
        <p>
          Today, we maintain an in-house stock of over 20,000 different fasteners, covering a wide range of sizes, 
          materials, and specifications. Beyond stock items, we also have the expertise to supply complex fasteners 
          and custom-made parts tailored to customer requirements.
        </p>
        <p>
          From blanket orders with scheduled releases to multi-location bin stocking services, we offer inventory 
          management programs designed to reduce costs, guarantee availability, and streamline the purchasing process.
        </p>
        <p>
          At Anchor, we believe in building long-term relationships by adapting our services to the changing needs 
          of our customers. We continuously evaluate and test new product lines, ensuring that with the strong 
          capabilities of our manufacturing partners, we provide a true “One Stop” solution for all fastening requirements.
        </p>
        <p>
          With no minimum order quantity, competitive pricing, and an uncompromising focus on quality, 
          Anchor TR LLC is your most economical and reliable source for a complete range of fasteners.
        </p>
      </div>

      {/* Expertise Section */}
      <div className="expertise">
        <h2>Our Expertise</h2>
        <p>
          At Anchor TR LLC, we deliver precision-engineered fastening solutions designed for reliability and performance.
        </p>

        <div className="expertise-grid">
          <div className="expertise-card">
            <FaBoxes className="icon" />
            <h3>Wide Product Range</h3>
            <p>
              Offering bolts, nuts, washers, screws, U bolts, L bolts, and drill bits to meet diverse project needs.
            </p>
          </div>

          <div className="expertise-card">
            <FaTools className="icon" />
            <h3>Unmatched Durability</h3>
            <p>
              Built with high-quality materials for superior strength and long-lasting performance.
            </p>
          </div>

          <div className="expertise-card">
            <FaDollarSign className="icon" />
            <h3>Competitive Pricing</h3>
            <p>
              Delivering top-quality products at prices that suit your budget without compromising excellence.
            </p>
          </div>

          <div className="expertise-card">
            <FaThumbsUp className="icon" />
            <h3>Trusted Quality</h3>
            <p>
              Backed by exceptional service and a commitment to meeting your fastening requirements with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-slider">
          <div className="reviews-track">
            {/* Review Card 1 */}
            <div className="review-card">
              <h4>Ahmed Khan</h4>
              <p>Excellent quality fasteners and great customer service. Highly recommend!</p>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="review-card">
              <h4>Maria Fernandes</h4>
              <p>Competitive prices and timely delivery. Anchor TR is my go-to supplier.</p>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="review-card">
              <h4>Rajesh Kumar</h4>
              <p>Impressive product range. Got everything I needed for my project in one place.</p>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>

            {/* Review Card 4 */}
            <div className="review-card">
              <h4>Sara Ali</h4>
              <p>Professional and reliable team. Their fasteners are durable and top-notch.</p>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>

            {/* Duplicate for Infinite Scroll */}
            <div className="review-card">
              <h4>Ahmed Khan</h4>
              <p>Excellent quality fasteners and great customer service. Highly recommend!</p>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>

            <div className="review-card">
              <h4>Maria Fernandes</h4>
              <p>Competitive prices and timely delivery. Anchor TR is my go-to supplier.</p>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
