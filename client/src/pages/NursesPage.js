import React from "react";
import "../styles/Nurses.css";
import Footer from "./Footer";

const NursesPage = () => {
  const nurses = [
    {
      name: "Nurse Emily Watson",
      image: "nurse1.jpg",
      experience: "5 years",
      specialization: "Pediatrics",
      description: "Dedicated to providing the best care for children.",
    },
    {
      name: "Nurse Sophia Brown",
      image: "nurse2.jpg",
      experience: "8 years",
      specialization: "Cardiology",
      description: "Specialist in heart-related treatments and monitoring.",
    },
    {
      name: "Nurse Olivia Johnson",
      image: "nurse3.jpg",
      experience: "3 years",
      specialization: "Emergency Care",
      description: "Experienced in critical care and emergency situations.",
    },
    {
      name: "Nurse Ava Smith",
      image: "nurse4.jpg",
      experience: "10 years",
      specialization: "Surgery Assistance",
      description: "Expert in assisting during surgical procedures.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <header className="nurses-header">
        <div className="header-content">
          {/* Logo Section */}
          <img
            src={require("../images/logo.png")} // Make sure to add your logo in the images folder
            alt="Logo"
            className="header-logo"
          />
          <h1 className="header-title">Mahalaxmi Nursing Home</h1>

          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </div>
      </header>

      {/* Nurses Section */}
      <div className="nurses-page">
        <h1>Meet Our Nurses</h1>
        <div className="nurses-grid">
          {nurses.map((nurse, index) => (
            <div className="nurse-card" key={index}>
              <img src={require(`../images/${nurse.image}`)} alt={nurse.name} />
              <h2>{nurse.name}</h2>
              <p>
                Experience: <strong>{nurse.experience}</strong>
              </p>
              <p>
                Specialization: <strong>{nurse.specialization}</strong>
              </p>
              <p>{nurse.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default NursesPage;
