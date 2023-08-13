import React from "react";

export default function MenuPopup({handleClick}) {
    return (
        <div className="menu-expand">
            <div className="close-btn-container">
                <i className="ri-close-line close-btn" onClick={handleClick} ></i>
            </div>
            <form className="search-field">
                <input type="text" placeholder="Enter any key to search..." />
                <i className="ri-search-line search-icon"></i>
            </form>
            <div className="menu-items">
                <ul>
                    <li><a className="nav-link" href="/index.html">HOME</a></li>
                    <li><a className="nav-link" href="/services.html">SERVICES</a></li>
                    <li><a className="nav-link" href="/projects.html">WORK</a></li>
                    <li><a className="nav-link" href="/blog.html">BLOG</a></li>
                    <li><a className="nav-link" href="/about.html">ABOUT</a></li>
                    <li><a className="nav-link" href="/contact.html">CONTACT</a></li>
                </ul>
            </div>

            <div className="menu-works">
                <h2>Works</h2>
                <div className="menu-img-gallery">
                    <img src="./images/work-1.jpg" alt="" />
                    <img src="./images/work-2.jpg" alt="" />
                    <img src="./images/work-3.jpg" alt="" />
                    <img src="./images/work-4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}