import React from "react";
import { Link, NavLink } from 'react-router-dom';


export default function MenuPopup({ handleClick }) {
    const activeStyles = {
        
        color: "#aa00f9"
    }
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
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" style={({ isActive }) => isActive ? activeStyles : null}>
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/works" style={({ isActive }) => isActive ? activeStyles : null}>
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={({ isActive }) => isActive ? activeStyles : null}>
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : null}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyles : null}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="menu-works">
        <h2>Works</h2>
        <div className="menu-img-gallery">
          <img src="/images/work-1.jpg" alt="" />
          <img src="/images/work-2.jpg" alt="" />
          <img src="/images/work-3.jpg" alt="" />
          <img src="/images/work-4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
