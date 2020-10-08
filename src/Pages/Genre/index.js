import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";
import { GENRE_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint, slugToName } from "utils/utils";

import "./style.scss";
import Playlist from "Components/Common/Playlist";
function Genre({ match, ...props }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(
      GENRE_PLAYLISTS_API_ENDPOINT.replace("{id}", match.params.type)
    ).then((res) => setGenres(res.data));
  }, [match]);

  return (
    <div className="page-content genre-page-content-wrapper">
      <p className="page-title">{slugToName(match.params.type)}</p>
      <div className="genre-playlists">
        {genres.playlists &&
          genres.playlists.items.map((playlist) => {
            return <Playlist playlist={playlist} />;
          })}
      </div>
    </div>
  );
}

export default Genre;
