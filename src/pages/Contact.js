import React, { useReducer, useState } from "react";

export default function Contact() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Message":
        return { ...state, message: action.payload.slice(0, 200) };
      case "Email":
        return { ...state, email: action.payload };
      case "Name":
        return { ...state, name: action.payload.slice(0, 20) };
      case "setMessageWarn":
        return { ...state, messageWarn: action.payload };
      case "setNameWarn":
        return { ...state, nameWarn: action.payload };
      case "setEmailWarn":
        return { ...state, emailWarn: action.payload };
      case "resetForm":
        return initialState;
      default:
        return state;
    }
  };

  const initialState = {
    messageWarn: false,
    message:"",
    name:"",
    email:"",
    emailWarn: false,
    nameWarn: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    const { message, name, email, messageWarn, emailWarn, nameWarn } = state;

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!message || message.length < 50) {
      dispatch({ type: "setMessageWarn", payload: true });
    } else {
      dispatch({ type: "setMessageWarn", payload: false });
    }

    if (!name || name.length < 3) {
      dispatch({ type: "setNameWarn", payload: true });
    } else {
      dispatch({ type: "setNameWarn", payload: false });
    }

    if (regex.test(email)) {
      dispatch({ type: "setEmailWarn", payload: false });
    } else {
      dispatch({ type: "setEmailWarn", payload: true });
    }

    if (message?.length >= 50 && name?.length >= 3 && regex.test(email)) {
      dispatch({ type: "resetForm" });
    }
  }

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
          <form action="https://formsubmit.co/bibaswanprasai12@gmail.com" method="POST">
            <div className="data-container">
              <div className="box-wrapper">
                <textarea
                  className={`${state.messageWarn ? "border-btm-red" : ""}`}
                  name="message"
                  id=""
                  value={state.message}
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  onChange={(event) =>
                    dispatch({ type: "Message", payload: event.target.value })
                  }
                ></textarea>
                <p className="limit">
                  {state.message ? 200 - state.message.length : 200}
                </p>
              </div>
              <p className={`warning ${state.messageWarn ? "toggle" : ""}`}>
                Please enter at least 50 characters
              </p>
            </div>

            <div className="data-container">
              <div className="box-wrapper">
                <input
                  className={`${state.nameWarn ? "border-btm-red" : ""}`}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                  value={state.name}
                  onChange={(event) =>
                    dispatch({ type: "Name", payload: event.target.value })
                  }
                />
                <p className="limit">
                  {state.name ? 20 - state.name.length : 20}
                </p>
              </div>
              <p className={`warning ${state.nameWarn ? "toggle" : ""}`}>
                Please enter at least 3 characters
              </p>
            </div>

            <div className="data-container">
              <input
                className={`${state.emailWarn ? "border-btm-red" : ""}`}
                type="text"
                name="email"
                id=""
                placeholder="Email"
                value={state.email}
                onChange={(event) =>
                  dispatch({ type: "Email", payload: event.target.value })
                }
              />
              <p className={`warning ${state.emailWarn ? "toggle" : ""}`}>
                Please enter valid email
              </p>
            </div>

            <button type="submit" onClick={handleSubmit}>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}