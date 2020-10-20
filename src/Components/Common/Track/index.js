import React, { memo } from "react";
import { Link } from "react-router-dom";
import { millisToDuration, trimString } from "utils/utils";
import FavButton from "../FavButton";
import PlayButton from "../PlayButton";

import "./style.scss";
function Track({ item, contextUri, idx = null }) {
  const track = item.track ? item.track : item;
  return (
    <div className="track-wrapper hover-item ">
      <div className="track ">
        <p className="track-name">
          <span className="track-name-buttons">
            <PlayButton type="icon" uri={track.uri} contextUri={contextUri} />
            <FavButton type="track" id={track.id} className="fav-button-md" />
          </span>
          <span>{trimString(track.name, 30)}</span>
        </p>
        {!window.location.href.includes("album") && (
          <p className="track-artists hover-white" key={track.id}>
            <Link to={`/artist/${track.artists[0].id}`}>
              {track.artists[0].name}
            </Link>
          </p>
        )}

        {track.album && (
          <span className="track-album hover-white">
            <Link to={`/album/${track.album.id}`}>
              {trimString(track.album.name, 20)}
            </Link>
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

export default memo(Track);
