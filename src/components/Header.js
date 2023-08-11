import React, { useState } from "react";
import MenuPopup from "./MenuPopup";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>

      <div className="header">
        <div className="logo">
          <div className="upper-logo">NO</div>
          <div className="lower-logo">AH</div>
        </div>

        <div className="outer" onClick={handleClick}>
          <div className="menu"></div>
        </div>
      </div>
      {showMenu && <MenuPopup handleClick={handleClick}/>}
    </>

  )
}