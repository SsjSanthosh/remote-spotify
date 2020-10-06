import React from "react";

import "./style.scss";
function Header({ title, endpoint }) {
  return (
    <div className="search-header-wrapper">
      <p className="search-header fs-1-3 highlight">{title}</p>
    </div>
  );
}

export default Header;
