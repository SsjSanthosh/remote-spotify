import React from "react";
import { Link } from "react-router-dom";
import { millisToDuration } from "utils/utils";

import "./style.scss";
function Track({ item }) {
  const track = item.track ? item.track : item;
  return (
    <div className="track-wrapper hover-item cursor-pointer">
      <div className="track ">
        <p className="track-name">{track.name}</p>
        {track.album && (
          <p className="track-artists">{track.artists[0].name}</p>
        )}
        {track.album && (
          <p className="track-album link">
            <Link to={`/album/${track.album.id}`}>{track.album.name}</Link>
          </p>
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
