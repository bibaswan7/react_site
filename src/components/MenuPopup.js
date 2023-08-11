import React from "react";

export default function MenuPopup({handleClick}) {
    return (
        <div class="menu-expand">
            <div class="close-btn-container">
                <i class="ri-close-line close-btn" onClick={handleClick} ></i>
            </div>
            <form class="search-field">
                <input type="text" placeholder="Enter any key to search..." />
                <i class="ri-search-line search-icon"></i>
            </form>
            <div class="menu-items">
                <ul>
                    <li><a class="nav-link" href="/index.html">HOME</a></li>
                    <li><a class="nav-link" href="/services.html">SERVICES</a></li>
                    <li><a class="nav-link" href="/projects.html">WORK</a></li>
                    <li><a class="nav-link" href="/blog.html">BLOG</a></li>
                    <li><a class="nav-link" href="/about.html">ABOUT</a></li>
                    <li><a class="nav-link" href="/contact.html">CONTACT</a></li>
                </ul>
            </div>

            <div class="menu-works">
                <h2>Works</h2>
                <div class="menu-img-gallery">
                    <img src="./images/work-1.jpg" alt="" />
                    <img src="./images/work-2.jpg" alt="" />
                    <img src="./images/work-3.jpg" alt="" />
                    <img src="./images/work-4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}