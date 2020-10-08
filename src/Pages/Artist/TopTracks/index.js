import MiniTrack from "Components/Common/MiniTrack";
import Track from "Components/Common/Track";
import React from "react";
import { Link } from "react-router-dom";
import { millisToDuration } from "utils/utils";

function TopTracks({ tracks }) {
  return (
    <div className="artist-tracks-wrapper">
      <p className="highlight fs-1-2 border-bottom">Top Tracks</p>
      {tracks.map((track) => {
        return <MiniTrack track={track} key={track.id} uri={track.uri} />;
      })}
    </div>
  );
}

export default TopTracks;
