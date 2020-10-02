import React from "react";
import Navlinks from "./Navlinks";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-brand">
        <FontAwesomeIcon icon={faSpotify} className="sidebar-icon" />{" "}
        <span className="sidebar-name">Remote Spotify</span>
      </div>
      <div className="sidebar-content">
        <Navlinks />
      </div>
    </div>
  );
}

export default Sidebar;
