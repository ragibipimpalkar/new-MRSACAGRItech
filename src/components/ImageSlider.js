import React, { useState } from "react";
import "../styles/ImageSlider.css";

const images = [
  "/images/farm1.jpg",
  "/images/farm2.jpg",
  "/images/farm3.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>❮</button>
      <img src={images[current]} alt="Farm" className="slider-image" />
      <button className="right-arrow" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;
