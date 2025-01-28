import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Footer from "./Footer";
import logo from "../images/logo.png";
const ImageGallery = () => {
  const images = [
    {
      src: "image copy 7.png",
      title: "Image 1",
      description: "This is the first image",
      extraInfo: "Taken at Sunset Beach, Photographer: John Doe",
    },
    {
      src: "2018-01-22 (1).jpg",
      title: "Image 2",
      description: "This is the second image",
      extraInfo: "Captured during spring, Photographer: Jane Smith",
    },
    {
      src: "2021-09-21.jpg",
      title: "Image 3",
      description: "This is the third image",
      extraInfo: "Mountain view, Photographer: Mark Lee",
    },
    {
      src: "image copy 5.png",
      title: "Image 4",
      description: "This is the fourth image",
      extraInfo: "Captured in the city, Photographer: Emma White",
    },
    {
      src: "image copy 6.png",
      title: "Image 5",
      description: "This is the fifth image",
      extraInfo: "Night sky, Photographer: Chris Johnson",
    },
    {
      src: "image copy 7.png",
      title: "Image 6",
      description: "This is the sixth image",
      extraInfo: "Nature exploration, Photographer: Anna Brown",
    },
    {
      src: "2018-01-22.jpg",
      title: "Image 7",
      description: "This is the seventh image",
      extraInfo: "Wildlife photography, Photographer: David Green",
    },
    {
      src: "image copy 9.png",
      title: "Image 8",
      description: "This is the eighth image",
      extraInfo: "Historic building, Photographer: Sophie Black",
    },
    {
      src: "image copy 10.png",
      title: "Image 9",
      description: "This is the ninth image",
      extraInfo: "Captured in the forest, Photographer: Kevin White",
    },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Header Section */}
      <header
        style={{
          background: "linear-gradient(135deg, #003366, #000000)",
          color: "white",
          padding: "40px 20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <h1 style={{ fontSize: "36px", margin: "0" }}>
              Mahalaxmi Nursing Home
            </h1>
            <p style={{ fontSize: "18px", margin: "10px 0" }}>
              Discover and shop the latest products
            </p>
          </div>
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li style={{ margin: "0 15px" }}>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Carousel Section */}
      <h2 style={{ marginTop: "40px", fontSize: "28px" }}>Image Gallery</h2>
      <Carousel
        autoplay
        prevArrow={
          <LeftOutlined style={{ color: "black", fontSize: "24px" }} />
        }
        nextArrow={
          <RightOutlined style={{ color: "black", fontSize: "24px" }} />
        }
        style={{ marginTop: "20px" }}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={require(`../images/${img.src}`)}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
            <div style={{ padding: "10px" }}>
              <h3>{img.title}</h3>
              <p>{img.description}</p>
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                  fontStyle: "italic",
                }}
              >
                {img.extraInfo}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ImageGallery;
