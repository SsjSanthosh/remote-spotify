import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";
function Navlinks({ links }) {
  return (
    <div className="page-nav-links-wrapper">
      {links.map((link) => {
        return (
          <NavLink
            className="page-nav-link hover-accent"
            activeClassName="page-nav-link-active"
            to={link.to}
            key={link.name}
            exact
          >
            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navlinks;
