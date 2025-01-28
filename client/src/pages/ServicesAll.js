import React from "react";
import "../styles/ServicesAll.css";
import Footer from "./Footer";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const ServicesAll = () => {
  const services = [
    {
      title: "In-Patient Care",
      description:
        "Round-the-clock care for residents, ensuring their comfort and well-being.",
      icon: "🛏️",
    },
    {
      title: "Rehabilitation Services",
      description:
        "Therapies and programs to help residents regain independence.",
      icon: "🧑‍⚕️",
    },
    {
      title: "Geriatric Care",
      description:
        "Specialized care for elderly individuals, tailored to their needs.",
      icon: "👴👵",
    },
    {
      title: "Nutritional Support",
      description:
        "Personalized meal plans to maintain residents’ health and vitality.",
      icon: "🍲",
    },
    {
      title: "Medication Management",
      description: "Expert oversight of medications for residents.",
      icon: "💊",
    },
    {
      title: "24/7 Nursing Support",
      description:
        "Professional nurses available around the clock for all residents.",
      icon: "🩺",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="services-header">
        <div className="header-content">
          <div className="header-left">
            <img src={logo} width={60} alt="Mahalaxmi Nursing Home" />
            <h1>Mahalaxmi Nursing Home</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Services Section */}
      <div className="services-all">
        <div className="services-title">
          <h1>Our Services</h1>
          <p>
            Compassionate care and expert services tailored to meet the needs of
            our residents.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-button">
          <Link to={"/"}>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesAll;
