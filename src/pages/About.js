import React from "react";
import AboutLayout from "../Layout/AboutLayout";
import Testimonies from "../Layout/Testimonies";

export default function About() {
  return (
    <div className="about-page">
      <AboutLayout slideRequired={false} btnContent={"View my works"} />

      <div className="intro-paragraph">
        <p>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
        <p>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>

        <p>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
      </div>

      <div className="goals-section">
        <h1>Goals</h1>

        <div className="services-img-info-wrapper">
          <div className="services-info">
            <h3>target</h3>
            <h2>Goals</h2>
            <div className="services-list">
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="item-container">
                <h3>1 - HIGH QUALITY THEME</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>
              </div>

              <div className="item-container">
                <h3>2 - CUSTOMER SATISFACTION</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>
              </div>

              <div className="item-container">
                <h3>3 - WELL MENTAINED SITES</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>
              </div>
            </div>
          </div>
          <img src="/images/services-img-1.jpg" alt="" />
        </div>
      </div>
      <Testimonies />
    </div>
  );
}
