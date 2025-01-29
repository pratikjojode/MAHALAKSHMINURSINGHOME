import React, { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState(""); // State to store the email value

  const getemail = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Your email:", email); // Log the email value
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">Mahalaxmi Nursing Home</h2>
          <p className="footer-description">
            Providing compassionate care and excellence in healthcare services.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p>
            Amar VikasColony, plot no 39, Radhanagari Rd,
            <br /> New Vashi Naka, Survey Nagar, Kolhapur, Maharashtra 416001
          </p>
          <p>Phone: +91-231-2651234</p>
          <p>Email: info@mahalaxminursinghome.com</p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
          </div>
        </div>

        {/* Your Information Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Connect with Me</h3>
          <p>Name: Pratik Jojode</p>
          <p>Email: pratikjojode2004@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://github.com/pratikjojode"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-jojode-95319726b/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Mahalaxmi Nursing Home, Kolhapur.
          All rights reserved.
        </p>
        <p className="made-with-love">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
