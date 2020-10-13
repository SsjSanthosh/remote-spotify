import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";

import { getDataFromEndpoint } from "utils/utils";
import { ALBUM_API_ENDPOINT } from "utils/endpoints";
import Header from "./Header";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import Track from "Components/Common/Track";
import Loading from "Components/Common/Loading";
function Album({ match, history, ...props }) {
  const [album, setAlbum] = useState({});
  useEffect(() => {
    getDataFromEndpoint(ALBUM_API_ENDPOINT.replace("{id}", match.params.id))
      .then((res) => setAlbum(res.data))
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          history.push("/error?type=no_data_returned");
        } else {
          history.push("/error?type=token_expired");
        }
      });
  }, []);

  return (
    <div className="page-content album-page-wrapper">
      {!album.tracks ? (
        <Loading />
      ) : (
        <>
          <Header album={album} />
          <div className="tracklist-header">
            <p className="title">TITLE</p>
            <p className="duration">
              <FontAwesomeIcon icon={faClock} className="duration-icon" />
            </p>
          </div>
          {album.tracks.items.map((track) => (
            <Track item={track} key={track.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Album;
