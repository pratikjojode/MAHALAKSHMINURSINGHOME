import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../styles/Homepage.css";
import logo from "../../src/images/logo.png";
import expert from "../../src/images/image copy 13.png"; // Update this with your image path
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const bookingButton = () => {
    navigate("/user/doctors");
  };

  useEffect(() => {
    getUserData();
  }, []);

  const toggleFAQ = (index) => {
    if (activeFAQIndex === index) {
      setActiveFAQIndex(null); // If the clicked FAQ is already open, close it
    } else {
      setActiveFAQIndex(index); // Open the clicked FAQ item
    }
  };

  return (
    <Layout>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h5>
            Mahalaxmi
            <br /> Nursing Home
          </h5>
        </div>
        <div className="nav-links">
          <Link to="/gallery">Image Gallery</Link>
          <Link to="/servicesAll">Our Services</Link>
          <Link to="/NursesAll">Our Nurse</Link>
        </div>
        <button onClick={bookingButton} className="book ">
          Book now
        </button>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="content-text">
          <h1>─ EXPERT MEDICAL TREATMENT</h1>
          <h1 className="bold">We Offer Expert Solutions</h1>
          <h2>
            Where little hearts find healing and big dreams{" "}
            <span className="begin">begin.</span>
          </h2>
          <p>
            At Mahalaxmi Nursing Home, we understand the importance of
            compassionate care and innovative medical solutions.
          </p>
          <h5>Caring hands, hopeful hearts, and brighter tomorrows.</h5>
          <button
            onClick={() => navigate("/user/book-appointment")}
            className="book-appointment-button"
          >
            Book an Appointment
          </button>
        </div>
        <div className="content-image">
          <img src={expert} alt="Expert" />
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        <div className="b-1 image-1">
          <h2>Find a Doctor</h2>
          <p>Search from a wide network of certified doctors.</p>
          <button onClick={() => navigate("/user/doctors")}>
            Find Doctors
          </button>
        </div>
        <div className="b-1 image">
          <h2>Book an Appointment</h2>
          <p>Book an appointment with just a few clicks.</p>
          <button onClick={() => navigate("/user/book-appointment")}>
            Schedule Appointment
          </button>
        </div>
        <div className="b-1 image-2">
          <h2>Manage Appointments</h2>
          <p>View and manage your appointments easily.</p>
          <button onClick={() => navigate("/user/show-bookings/:id")}>
            Manage Appointments
          </button>
        </div>
      </div>

      {/* Services Section */}
      <h1 className="text-center">Our Services</h1>
      <div className="circles-1">
        <div className="services">Medical Equipment Sales</div>
        <div className="services">Doctor Appointment Booking</div>
        <div className="services">Nurse Services</div>
        <div className="services">24/7 Customer Support</div>
        <div className="services">Medical Equipment Maintenance</div>
        <div className="services">Prescription Management</div>
      </div>

      {/* FAQ Section */}
      <div className="faq">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div
          className={`faq-item ${activeFAQIndex === 0 ? "active" : ""}`}
          onClick={() => toggleFAQ(0)}
        >
          <h3>What are your working hours?</h3>
          <p>We are open from 8 AM to 10 PM every day.</p>
        </div>
        <div
          className={`faq-item ${activeFAQIndex === 1 ? "active" : ""}`}
          onClick={() => toggleFAQ(1)}
        >
          <h3>Do you accept insurance?</h3>
          <p>
            Yes, we accept various insurance plans. Please contact us for more
            details.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Send us a Message</p>
          <form>
            <input type="text" placeholder="Your Name" className="form-input" />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-submit">
              Submit
            </button>
          </form>
        </div>
        <div className="siteMap">
          <h3>Site Map</h3>
          <p>All our pages</p>
          <ul>
            <li>- Home</li>
            <li>- About Us</li>
            <li>- Services</li>
            <li>- Contact</li>
            <li>- Testimonials</li>
          </ul>
        </div>
        <div className="email-2">
          <div className="flex">
            <img src={logo} alt="logo"></img>
            <h5>
              Mahalaxmi
              <br /> Nursing Home
            </h5>
          </div>
          <p>
            Have a query? Drop us an email at:
            <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
          <p>
            <i className="fa-solid fa-phone">Contact No: (08) 4002000</i>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
