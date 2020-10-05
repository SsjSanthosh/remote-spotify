import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./style.scss";
import { Link } from "react-router-dom";
function Playlist({ playlist }) {
  console.log(playlist);
  return (
    <Link to={`/playlists/${playlist.id}`}>
      <div className="playlist ">
        <div className="playlist-cover mb8">
          <img src={playlist.images[0].url} alt={playlist.name} />
          <div className="playlist-play-icon-div bg-accent cursor-pointer">
            <FontAwesomeIcon icon={faPlay} className="playlist-play-icon" />
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            className="playlist-fav hover-white"
          />
        </div>
        <p className="playlist-name fs-1-2 highlight mb4">{playlist.name}</p>

        <p className="playlist-description mb8">
          {playlist.description.slice(0, 55) + "..."}
        </p>
      </div>
    </Link>
  );
}

export default Playlist;
