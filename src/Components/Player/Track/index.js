import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { BACKUP_IMAGE } from "utils/constants";
import { getArtistsString } from "utils/utils";
import { Link } from "react-router-dom";
import FavButton from "Components/Common/FavButton";
function Track({ track }) {
  const image =
    track.album && track.album.images.length
      ? track.album.images[0].url
      : BACKUP_IMAGE;
  return (
    <div className="player-track-wrapper">
      <div className="track-cover">
        <img src={image} alt={track.name} />
      </div>
      <div className="track-details">
        <Link to={`/album/${track.album.id}`}>
          <span className="track-name highlight fs-1-1">
            {track.name}
            <FavButton type="track" id={track.id} />
          </span>
        </Link>
        <span className="track-artist ">{getArtistsString(track.artists)}</span>
      </div>
    </div>
  );
}

export default Track;
