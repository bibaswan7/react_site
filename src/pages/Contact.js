import React from "react";

export default function Contact() {
  return (
    <div class="contact-section">
      <h1>Contact</h1>
      <h2>Contact Me</h2>

      <div class="contact-container">
        <div class="contact-info">
          <h3>My Address</h3>
          <div class="contact-items">
            <div class="contact-item">
              <i class="ri-map-pin-line"></i>
              <p>
                88 West 21th Street, Suite 721 <span>New York NY 10016</span>
              </p>
            </div>
            <div class="contact-item">
              <i class="ri-phone-line"></i>
              <p>+ 1235 2355 98</p>
            </div>
            <div class="contact-item">
              <i class="ri-message-line"></i>
              <p>
                <a href="">info@yoursite.com</a>
              </p>
            </div>
            <div class="contact-item">
              <i class="ri-pages-line"></i>
              <p>
                <a href="">www.yoursite.com</a>
              </p>
            </div>
          </div>
        </div>

        <div class="contact-form">
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
