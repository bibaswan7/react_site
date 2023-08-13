import React from "react";
import { Link } from 'react-router-dom';


export default function MenuPopup({ handleClick }) {
  return (
    <div className="menu-expand">
      <div className="close-btn-container">
        <i className="ri-close-line close-btn" onClick={handleClick}></i>
      </div>
      <form className="search-field">
        <input type="text" placeholder="Enter any key to search..." />
        <i className="ri-search-line search-icon"></i>
      </form>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/works" className="nav-link">
              WORK
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </li>
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
  );
}
