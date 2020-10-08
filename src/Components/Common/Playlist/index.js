import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BACKUP_IMAGE } from "utils/constants";
import "./style.scss";
import { Link } from "react-router-dom";
import PlayButton from "../PlayButton";
import FavButton from "../FavButton";
function Playlist({ playlist }) {
  const image = playlist.images.length ? playlist.images[0].url : BACKUP_IMAGE;
  return (
    <div className="playlist ">
      <div className="playlist-cover mb16">
        <img src={image} alt={playlist.name} />
        <div className="playlist-play-icon-div bg-accent cursor-pointer">
          {/* <FontAwesomeIcon icon={faPlay} className="playlist-play-icon" /> */}
          <PlayButton type="icon" contextUri={playlist.uri} />
        </div>
        {!window.location.href.includes("library") && (
          <FavButton
            type="playlist"
            id={playlist.id}
            className="fav-button-lg"
          />
        )}
      </div>
      <Link to={`/playlists/${playlist.id}`}>
        <p className="playlist-name fs-1-2 highlight mt8 link ta-c">
          {playlist.name}
        </p>
      </Link>

      <p className="playlist-description mb8">
        {playlist.description.slice(0, 55) + "..."}
      </p>
    </div>
  );
}

export default Playlist;
