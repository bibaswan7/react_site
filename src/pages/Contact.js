import React from "react";

export default function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>My Address</h3>
          <div className="contact-items">
            <div className="contact-item">
              <i className="ri-map-pin-line"></i>
              <p>
                88 West 21th Street, Suite 721 <span>New York NY 10016</span>
              </p>
            </div>
            <div className="contact-item">
              <i className="ri-phone-line"></i>
              <p>+ 1235 2355 98</p>
            </div>
            <div className="contact-item">
              <i className="ri-message-line"></i>
              <p>
                <a href="">info@yoursite.com</a>
              </p>
            </div>
            <div className="contact-item">
              <i className="ri-pages-line"></i>
              <p>
                <a href="">www.yoursite.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
