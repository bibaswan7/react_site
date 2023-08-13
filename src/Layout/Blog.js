import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog({ count }) {
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
          <img src={blogFiles[index]} alt="" />
        </div>
        <p>15. FEB 2018</p>
      </div>
      <h2>A Japanese Constellation</h2>
      <p>
        When she reached the first hills of the Italic Mountains, she had a last
        view back on the skyline of her hometown Bookmarksgrove
      </p>
    </div>
  ));

  return (
    <div className="section-blog">
      <h1>Blog</h1>

      <div className="blog-header">
        <h2>Read our case</h2>
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
      </div>

      <div className="blog-items">
        <Slider ref={sliderRef} {...settings}>
          {blogHtml}
        </Slider>
      </div>
    </div>
  );
}
