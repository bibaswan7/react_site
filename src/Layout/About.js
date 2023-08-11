import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/Button";

export default function About() {

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

            <div class="section-title">
                <h1>About</h1>
            </div>

            <div class="intro-img-info-container">
                <div class="image-section img-slider">
                    <Slider {...settings}>
                        <img src="./images/about.jpg" alt="" />
                        <img src="./images/about-2.jpg" alt="" />
                    </Slider>
                </div>

                <div class="intro-section">
                    <div class="intro-title img-slider">
                        <Slider {...settings}>
                            <h1>Noah<br />Henderson</h1>
                            <h1>I'm<br />A Designer</h1>
                        </Slider>
                    </div>

                    <div class="intro-about">
                        <h3 class="text-trans">About</h3>
                        <div class="intro-info">
                            <p>
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth. Even the
                                all-powerful Pointing has no control about the blind texts it is
                                an almost uno iconrthographic life.
                            </p>
                            <div class="social-media-icons">
                                <i
                                    class="ri-facebook-circle-line icon"
                                ></i>
                                <i
                                    class="ri-twitter-x-line icon"
                                ></i>
                                <i
                                    class="ri-instagram-line icon"
                                ></i>
                                <i
                                    class="ri-dribbble-line icon"
                                ></i>
                            </div>
                            <Button className="btn-contact">
                                CONTACT ME
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}