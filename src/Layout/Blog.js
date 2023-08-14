import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog({ count, navIconRequired, customClass }) {
  const [blogFiles, setBlogFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3452/images")
      .then((res) => res.json())
      .then((data) => setBlogFiles(data.blog.slice(0, count)));
  }, []);

  const sliderRef = React.useRef(null);
  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 30000,
    prevArrow: null,
    nextArrow: null,
    draggable: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 3, // Show 2 slides by default
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Show 1 slide above 992px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide between 768px and 992px
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogHtml = blogFiles.map((item, index) => (
    <div key={index} className="blog-item">
      <div className="blog-image">
        <div className="banner-container"></div>
        <div className="image-wrapper">
          <img src={item.image} alt="" />
        </div>
        <p>1{item.date}</p>
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  ));

  return (
    <div className="section-blog">
      <h1>Blog</h1>

      <div className="blog-header">
        <h2>Read our case</h2>

        {navIconRequired && (
          <div className="navigation-icons">
            <i
              className="ri-arrow-left-line icons prev-button"
              onClick={handlePrevClick}
            ></i>
            <i
              className="ri-arrow-right-line icons next-button"
              onClick={handleNextClick}
            ></i>
          </div>
        )}
      </div>

      <div className={`blog-items ${customClass ? customClass : ""}`}>
        {navIconRequired ? (
          <Slider ref={sliderRef} {...settings}>
            {blogHtml}
          </Slider>
        ) : (
          blogHtml
        )}
      </div>
    </div>
  );
}
