import React, { useEffect, useState } from "react";
import Navlinks from "./Navlinks";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import Playlists from "./Playlists";
const Sidebar = React.memo(function Sidebar({ loggedIn, ...props }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-brand">
        <FontAwesomeIcon icon={faSpotify} className="sidebar-icon" />{" "}
        <span className="sidebar-name">Remote Spotify</span>
      </div>
      <div className="sidebar-content">
        <Navlinks />
        <p className="highlight">PLAYLISTS</p>
        {loggedIn && <Playlists />}
        {!loggedIn && (
          <p className="no-highlight fw-l">
            Please login to see your playlists here.
          </p>
        )}
      </div>
    </div>
  );
});

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};
export default React.memo(connect(mapStateToProps)(Sidebar));
