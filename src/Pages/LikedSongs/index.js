import React, { useEffect, useState } from "react";
import { USER_SAVED_TRACKS_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint } from "utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./style.scss";
import Track from "Components/Common/Track";
function LikedSongs() {
  const [tracks, setTracks] = useState([]);
  //TODO: add login check here
  useEffect(() => {
    getDataFromEndpoint(USER_SAVED_TRACKS_API_ENDPOINT).then((res) =>
      setTracks(res.data)
    );
  }, []);
  return (
    <div className="page-content liked-songs-wrapper">
      <p className="highlight fs-3 page-title border-bottom mb16">
        Your liked songs
      </p>
      <div className="tracklist-header mt16">
        <p className="title">TITLE</p>
        <p className="artists">ARTISTS</p>
        <p className="album">ALBUM</p>
        <p className="release">
          <FontAwesomeIcon icon={faCalendar} />
        </p>
        <p className="duration">
          <FontAwesomeIcon icon={faClock} />
        </p>
      </div>
      <div className="liked-songs">
        {tracks.items &&
          tracks.items.map((track) => {
            return <Track item={track} key={track.id} />;
          })}
      </div>
    </div>
  );
}

export default LikedSongs;