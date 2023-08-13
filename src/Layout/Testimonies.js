import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonies() {
  const [testimonie, setTestimonie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3452/quotes")
      .then((res) => res.json())
      .then((data) => setTestimonie(data));
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    // fade:true,
    speed: 800,
    prevArrow: "",
    nextArrow: "",
    draggable: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    adaptiveHeight: true,
  };

  const testimonialsHTML = testimonie.map((item, index) => (
    <div key={index} className="quote">
      <p>{item.quote}</p>
      <p>" {item.author}</p>
    </div>
  ));
  return (
    <div className="section-testimonials">
      <h1>Testimonies</h1>
      <h2>Clients Says</h2>

      <div className="quote-container text-slider">
        <Slider {...settings}>{testimonialsHTML}</Slider>
      </div>
    </div>
  );
}
