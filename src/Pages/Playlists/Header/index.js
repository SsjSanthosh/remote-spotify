import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BACKUP_IMAGE } from "utils/constants";
import React from "react";

function Header({ playlist }) {
  const image = playlist.images.length ? playlist.images[0].url : BACKUP_IMAGE;
  return (
    <div className="playlists-page-header">
      <div className="playlist-cover">
        <img src={image} alt={playlist.name} />
      </div>
      <div className="playlist-info">
        <p className="highlight fw-l">PLAYLIST</p>
        <p className="highlight page-title fs-1-4 fw-m">{playlist.name}</p>
        <p className="fs-0-8">{playlist.description.slice(0, 90) + "...."}</p>
        <p className="fs-0-8 mb8">
          Created by{" "}
          <span className="highlight">{playlist.owner.display_name}. </span>
          <span>{playlist.tracks.items.length} songs</span>
        </p>
        <div className="playlist-buttons">
          <button className="playlist-play-btn fs-1-1">Play</button>
          Icon
          <span>{playlist.followers.total} FOLLOWERS</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
