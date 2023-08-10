import React from "react";
import Button from './Button';

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="section-footer-container">
                <div className="section-contact">
                    <h2>Let's Talk</h2>
                    <p>A small river named Duden flows by their place and supplies.</p>

                    <a href="#">noah@info.com</a>

                    <div className="social-media-icons">
                        <i className="ri-facebook-circle-line icon"></i>
                        <i className="ri-twitter-x-line icon"></i>
                        <i className="ri-instagram-line icon"></i>
                        <i className="ri-dribbble-line icon"></i>
                    </div>
                </div>

                <div className="section-latest-blog">
                    <h2>Latest Blog</h2>

                    <h4>FEBRUARY 15, 2018</h4>
                    <h3>Art Gallery in Japan</h3>
                    <h4>FEBRUARY 9, 2018</h4>
                    <h3>A Japanese Constellation</h3>
                    <h4>FEBRUARY 15, 2018</h4>
                    <h3>Road Trip</h3>
                </div>

                <div className="section-newsletter">
                    <h2>Newsletter</h2>
                    <p>
                        A small river named Duden flows by their place and supplies it with
                        the necessary regelialia
                    </p>

                    <form>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter Email address"
                        />
                        <Button 
                            className="btn-subscribe"
                        >SUBSCRIBE</Button>
                    </form>
                </div>
            </div>

            <div className="section-copyright">
                <p>
                    © Copyright ©2023 All rights reserved | This template is made with ❤️
                    by <span>Colorlib</span>
                </p>
            </div>

        </div>
    )
}