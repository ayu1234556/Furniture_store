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
    <div className="relative flex items-center justify-center h-[80vh] mx-10 my-5 overflow-hidden rounded-2xl bg-gray-100">

      <img
        src={images[current]}
        alt="Furniture Banner"
        className="w-full h-full object-contain"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/60 text-white text-6xl px-6 py-3 rounded-full hover:bg-black"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/60 text-white text-6xl px-6 py-3 rounded-full hover:bg-black"
      >
        ❯
      </button>
    </div>
  );
};

export default BannerSection;