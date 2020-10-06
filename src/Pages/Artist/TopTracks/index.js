import Track from "Components/Common/Track";
import React from "react";
import { Link } from "react-router-dom";
import { millisToDuration } from "utils/utils";

function TopTracks({ tracks }) {
  return (
    <div className="artist-tracks-wrapper">
      <p className="highlight fs-1-2 border-bottom">Top Tracks</p>
      {tracks.map((track) => (
        <div className="artist-track hover-item cursor-pointer">
          <img src={track.album.images[0].url} alt={track.name} />

          <p className="track-name">
            <Link to={`/album/${track.album.id}`}>{track.name}</Link>
          </p>
          <p className="track-duration">
            {millisToDuration(track.duration_ms)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TopTracks;
