import Layout from "Components/Layout";
import Track from "Components/Common/Track";
import React, { useEffect } from "react";
import { useState } from "react";
import { getDataFromEndpoint } from "utils/utils";
import { PLAYLIST_API_ENDPOINT } from "utils/endpoints";
import Header from "./Header";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";
import TrackHeader from "Components/Common/TrackHeader";
function Playlists({ match, ...props }) {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(
      PLAYLIST_API_ENDPOINT.replace("{id}", match.params.id)
    ).then((res) => {
      console.log("heres the data", res.data);
      setPlaylist(res.data);
    });
  }, []);
  console.log(playlist);
  return (
    <Layout>
      <div className="page page-content playlists-page-wrapper">
        {playlist.tracks && (
          <>
            <Header playlist={playlist} />
            <div className="tracklist-header">
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
            {playlist.tracks.items.map((track) => {
              return <Track item={track} />;
            })}
          </>
        )}
      </div>
    </Layout>
  );
}

export default Playlists;
