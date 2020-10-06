import React, { useState } from "react";
import { useEffect } from "react";
import { getDataFromEndpoint } from "utils/utils";

import { FEATURED_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import Playlist from "Components/Common/Playlist";

import "./style.scss";
function Generic() {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(FEATURED_PLAYLISTS_API_ENDPOINT).then((res) =>
      setFeaturedPlaylists(res.data)
    );
  }, []);

  return (
    <div className="generic-wrapper">
      {featuredPlaylists.playlists && (
        <div className="featured-playlists-wrapper">
          <p className="featured-playlists-title fs-1-5 fw-m highlight">
            {featuredPlaylists.message}
          </p>
          <div className="featured-playlists">
            {featuredPlaylists.playlists.items.map((playlist) => (
              <Playlist playlist={playlist} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Generic;
