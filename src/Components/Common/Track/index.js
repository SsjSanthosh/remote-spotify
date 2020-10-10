import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { millisToDuration } from "utils/utils";
import FavButton from "../FavButton";
import PlayButton from "../PlayButton";

import "./style.scss";
function Track({ item, contextUri, idx = null }) {
  const track = item.track ? item.track : item;
  return (
    <div className="track-wrapper hover-item ">
      <div className="track ">
        <p className="track-name">
          <PlayButton type="icon" uri={track.uri} contextUri={contextUri} />
          <FavButton type="track" id={track.id} className="fav-button-md" />
          {track.name}
        </p>
        {!window.location.href.includes("album") && (
          <p className="track-artists hover-white">
            <Link to={`/artist/${track.artists[0].id}`}>
              {track.artists[0].name}
            </Link>
          </p>
        )}

        {track.album && (
          <span className="track-album hover-white">
            <Link to={`/album/${track.album.id}`}>{track.album.name}</Link>
          </span>
        )}
        {item.added_at && (
          <p className="track-release">{item.added_at.slice(0, 10)}</p>
        )}
        <p className="track-duration">{millisToDuration(track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Track;
