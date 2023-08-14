import React, { useState } from "react";
import MenuPopup from "./MenuPopup";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
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
        <div className="logo">
          <div className="upper-logo">NO</div>
          <div className="lower-logo">AH</div>
        </div>

        {!showMenu ? (
          <div className="outer" onClick={handleClick}>
            <div className="menu"></div>
          </div>
        ) : (
          ""
        )}
      </div>
      {showMenu && <MenuPopup handleClick={handleClick} />}
    </>
  );
}
