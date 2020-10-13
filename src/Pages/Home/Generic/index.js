import React, { useState } from "react";
import { useEffect } from "react";
import { getDataFromEndpoint } from "utils/utils";

import { FEATURED_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import Playlist from "Components/Common/Playlist";

import "./style.scss";
import Loading from "Components/Common/Loading";
function Generic({ history }) {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(FEATURED_PLAYLISTS_API_ENDPOINT + "sdsd")
      .then((res) => setFeaturedPlaylists(res.data))
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          history.push("/error?type=no_data_returned");
        } else {
          history.push("/error?type=token_expired");
        }
      });
  }, [history]);

  return (
    <div className="generic-wrapper">
      {featuredPlaylists.playlists ? (
        <div className="featured-playlists-wrapper">
          <p className="featured-playlists-title fs-1-5 fw-m highlight border-bottom">
            {featuredPlaylists.message}
          </p>
          <div className="featured-playlists">
            {featuredPlaylists.playlists.items.map((playlist) => (
              <Playlist playlist={playlist} key={playlist.id} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Generic;
