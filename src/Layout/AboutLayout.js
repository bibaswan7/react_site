import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/Button";

export default function AboutLayout({slideRequired, btnContent}) {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 800,
        prevArrow: '',
        nextArrow: '',
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    };

    return (
        <div className="about-container">

            <div className="section-title">
                <h1>About</h1>
            </div>

            <div className="intro-img-info-container">
                <div className="image-section">
                    {slideRequired?<Slider {...settings}>
                        <img src="/images/about.jpg" alt="" />
                        <img src="/images/about-2.jpg" alt="" />
                    </Slider>: <img src="./images/about.jpg" alt="" />}
                    
                </div>

                <div className="intro-section">
                    <div className="intro-title">
                        {slideRequired? <Slider {...settings}>
                            <h1>Noah<br />Henderson</h1>
                            <h1>I'm<br />A Designer</h1>
                        </Slider>: <h1>Noah<br />Henderson</h1>}
                        
                    </div>

                    <div className="intro-about">
                        <h3 className="text-trans">About</h3>
                        <div className="intro-info">
                            <p>
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth. Even the
                                all-powerful Pointing has no control about the blind texts it is
                                an almost uno iconrthographic life.
                            </p>
                            <div className="social-media-icons">
                                <i
                                    className="ri-facebook-circle-line icon"
                                ></i>
                                <i
                                    className="ri-twitter-x-line icon"
                                ></i>
                                <i
                                    className="ri-instagram-line icon"
                                ></i>
                                <i
                                    className="ri-dribbble-line icon"
                                ></i>
                            </div>
                            <Button className="btn">
                                {btnContent}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}