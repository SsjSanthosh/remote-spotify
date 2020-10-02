import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../../constants";

import "./style.scss";
function Navlinks() {
  return (
    <div className="sidebar-navlinks-wrapper">
      {NAV_LINKS.map((link) => {
        return (
          <NavLink
            to={link.to}
            exact
            activeClassName="active"
            className="navlink"
          >
            <FontAwesomeIcon icon={link.icon} className="navlink-icon" />

            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navlinks;
