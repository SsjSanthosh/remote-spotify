import React from "react";
import { Link } from "react-router-dom";
import { millisToDuration, trimString } from "utils/utils";
import { BACKUP_IMAGE } from "utils/constants";

import "./style.scss";
import PlayButton from "../PlayButton";
function MiniTrack({ track }) {
  const image =
    track.album && track.album.images
      ? track.album.images[0].url
      : BACKUP_IMAGE;
  return (
    <div className="mini-track hover-item cursor-pointer">
      <img src={image} alt={track.name} />
      <PlayButton type="icon" uri={track.uri} />
      <p className="track-name">
        <Link to={`/album/${track.album.id}`}>{trimString(track.name,15)}</Link>
      </p>
      <p className="track-duration">{millisToDuration(track.duration_ms)}</p>
    </div>
  );
}

export default MiniTrack;
