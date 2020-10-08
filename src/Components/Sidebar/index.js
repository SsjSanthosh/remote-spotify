import React, { useEffect, useState } from "react";
import Navlinks from "./Navlinks";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import Playlists from "./Playlists";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Sidebar = React.memo(function Sidebar({ loggedIn, ...props }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-brand">
        <FontAwesomeIcon icon={faSpotify} className="sidebar-icon" />{" "}
        <span className="sidebar-name">Remote Spotify</span>
      </div>
      <div className="sidebar-content">
        <Navlinks />
        {loggedIn && (
          <>
            <Link to="/liked-songs">
              <p className="hover-white hover-item cursor-pointer fs-1-2 liked-songs border-bottom mb16">
                <FontAwesomeIcon icon={faHeart} className="liked-songs-icon" />{" "}
                Liked songs
              </p>
            </Link>
            <p className="highlight fs-1-1">PLAYLISTS</p>
            <Playlists />
          </>
        )}
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
