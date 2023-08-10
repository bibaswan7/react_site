import React from "react";

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
                    <h1>Latest Blog</h1>

                    <h3>FEBRUARY 15, 2018</h3>
                    <h2>Art Gallery in Japan</h2>
                    <h3>FEBRUARY 9, 2018</h3>
                    <h2>A Japanese Constellation</h2>
                    <h3>FEBRUARY 15, 2018</h3>
                    <h2>Road Trip</h2>
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
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
            

            <div className="section-copyright">
                <p>
                    © Copyright ©2023 All rights reserved | This template is made with ❤️
                    by <span>Colorlib</span>
                </p>
            </div>
            </div>
        </div>
    )
}