import React, { useState } from "react";

import almiban from "../assets/almiban.jpg";
import sofaban from "../assets/sofaban.jpg";
import tableban from "../assets/tableban.jpg";
import bedban from "../assets/bedban.jpg";
import bedban2 from "../assets/bedban2.jpg";

const images = [almiban, sofaban, tableban, bedban, bedban2];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",          // smaller height
        margin: "20px 40px",     // left-right margin
        overflow: "hidden",
        borderRadius: "15px"
      }}
    >
      {/* Image */}
      <img
        src={images[current]}
        alt="Furniture Banner"
        className="w-100 h-100"
        style={{
          objectFit: "contain",   // prevents cutting
          backgroundColor: "#f8f9fa"
        }}
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "30px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          fontSize: "60px",      // triple size
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "50%"
        }}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "30px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          fontSize: "60px",      // triple size
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "50%"
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default BannerSection;
