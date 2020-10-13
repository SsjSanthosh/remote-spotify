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
import Loading from "Components/Common/Loading";
function Playlists({ match, history, ...props }) {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    setPlaylist([]);
    getDataFromEndpoint(PLAYLIST_API_ENDPOINT.replace("{id}", match.params.id))
      .then((res) => {
        setPlaylist(res.data);
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          history.push("/error?type=no_data_returned");
        } else {
          history.push("/error?type=token_expired");
        }
      });
  }, [match]);

  return (
    <div className="page page-content playlists-page-wrapper">
      {playlist.tracks ? (
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
          <div className="playlist-tracks">
            {playlist.tracks.items.map((track, idx) => {
              return (
                <Track item={track} key={track.id} contextUri={playlist.uri} />
              );
            })}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Playlists;
