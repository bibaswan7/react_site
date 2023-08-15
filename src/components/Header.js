import React, { useState } from "react";
import MenuPopup from "./MenuPopup";
import { Link } from "react-router-dom";


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(prevMenu => !prevMenu);
    if (showMenu) {
      // Enable scrolling on the body when menu is closed
      document.body.style.overflow = "auto";
    } else {
      // Disable scrolling on the body when menu is open
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">

        <div className="logo">
          <div className="upper-logo">NO</div>
          <div className="lower-logo">AH</div>
        </div>
        </Link>

        {!showMenu ? (
          <div className="outer" onClick={handleClick}>
            <div className="menu"></div>
          </div>
        ) : (
          ""
        )}
      </div>
      {showMenu && <MenuPopup handleClick={handleClick}/>}
    </>
  );
}
