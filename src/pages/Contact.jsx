import React, { useState } from "react";
import "./contact.css";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Quick WhatsApp message state
  const [waMessage, setWaMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@anchortrdg.com?subject=${encodeURIComponent(
      formData.subject || "Enquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    // open user's email client
    window.location.href = mailtoLink;
  };

  const handleWhatsappSend = (e) => {
    e.preventDefault();
    const phoneNumber = "971507473289"; // <-- replace with your WhatsApp number (without +)
    const prefill = waMessage.trim()
      ? waMessage.trim()
      : `Hi, I would like to enquire. Name: ${formData.name || "—"}, Email: ${
          formData.email || "—"
        }`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefill)}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Reach out by form, visit our store, or chat with us on WhatsApp.</p>

      <div className="contact-container">
        {/* Form Card */}
        <div className="contact-card form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn" aria-label="Send message">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Card */}
        <div className="contact-card map-card">
          <h2>Our Location</h2>
          <p>
            Anchor TR L.L.C.<br />
            Sharjah, UAE
          </p>

          <div className="map-wrapper">
            {/* Replace the src with a real embed link for your store location */}
            <iframe
              title="store-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7212.947666543344!2d55.40490693068848!3d25.32187633252085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59aaa7d9adfb%3A0x9c460fc74cc8a1a2!2sANCHOR%20TR%20LLC!5e0!3m2!1sen!2sin!4v1759602676086!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <a
            className="map-link"
            href="https://maps.app.goo.gl/h5gaxjdxoTyCHAY16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on Google Maps
          </a>
        </div>

        {/* WhatsApp Card */}
        <div className="contact-card whatsapp-card">
          <h2>Chat with Us on WhatsApp</h2>
          <p>For quick replies, message us directly — we'll respond during business hours.</p>

          <form onSubmit={handleWhatsappSend} className="whatsapp-form" aria-label="WhatsApp form">
            <textarea
              placeholder="Type a quick message to send on WhatsApp..."
              value={waMessage}
              onChange={(e) => setWaMessage(e.target.value)}
              rows="4"
            />
            <button
              type="submit"
              className="whatsapp-btn"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="wa-icon" />
              Chat on WhatsApp
            </button>
          </form>

          <p className="wa-note">Or call us: <a href="tel:+97165431412">+971 6 5431 412</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
