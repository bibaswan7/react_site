import React from "react";

export default function Services() {
  return (
    <>
      <div className="services-section">
        <h1>Services</h1>
        
        <div className="services-img-info-wrapper">
          <div className="services-info">
            <p>My services</p>
            <h2>Here Are Some of My Skills</h2>
            <div className="services-list service-page-list">
              <div className="item-container">
                <h3>1 - GRAPHIC DESIGN</h3>
                <ul>
                  <li>UI Design</li>
                  <li>Website & Digital Design</li>
                  <li>Brading & Visual Identity</li>
                  <li>Print Design</li>
                </ul>
              </div>

              <div className="item-container">
                <h3>2 - ILLUSTRATION</h3>
                <ul>
                  <li>Editorial</li>
                  <li>Narrative</li>
                  <li>Motion Graphics</li>
                  <li>Animation</li>
                  <li>Visual Effects</li>
                </ul>
              </div>

              <div className="item-container">
                <h3>3 - FRONT END DEVELOPMENT</h3>
                <ul>
                  <li>HTML / CSS</li>
                  <li>JS & Jquery Startup</li>
                  <li>WordPress</li>
                  <li>Jomla</li>
                </ul>
              </div>

              <div className="item-container">
                <h3>4 - WEB MARKETING</h3>
                <ul>
                  <li>Sales Marketing</li>
                  <li>Invoice</li>
                  <li>eCommerce</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            className="services-page-img"
            src="../../images/services-img-1.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
