import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { SIDEBAR_NAV_LINKS } from "../../../utils/constants";

import "./style.scss";
function Navlinks() {
  return (
    <div className="sidebar-navlinks-wrapper">
      {SIDEBAR_NAV_LINKS.map((link) => {
        return (
          <NavLink
            to={link.to}
            exact
            activeClassName="active"
            className="navlink"
            key={link.name}
            isActive={(match, location) => {
              // only consider an event active if its path has the parent tag
              return location.pathname.includes(link.name.toLowerCase());
            }}
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
