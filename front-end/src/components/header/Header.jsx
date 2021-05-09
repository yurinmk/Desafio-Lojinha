import "./Header.css";
import React from "react";

import HeaderBottom from "./HeaderBottom";
import HeaderHigher from "./HeaderHigher";

function Header() {
  return (
    <div className="container-header">
      <HeaderHigher />

      <div className="header-division"></div>

      <HeaderBottom />
    </div>
  );
}

export default Header;
