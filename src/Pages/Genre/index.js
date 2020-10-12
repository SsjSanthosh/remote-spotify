import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";
import { GENRE_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint, slugToName } from "utils/utils";

import "./style.scss";
import Playlist from "Components/Common/Playlist";
import Loading from "Components/Common/Loading";
function Genre({ match, ...props }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(
      GENRE_PLAYLISTS_API_ENDPOINT.replace("{id}", match.params.type)
    ).then((res) => setGenres(res.data));
  }, [match]);

  return (
    <div className="page-content genre-page-content-wrapper">
      {genres.playlists ? (
        <>
          <p className="page-title border-bottom">
            {slugToName(match.params.type)}
          </p>
          <div className="genre-playlists">
            {genres.playlists &&
              genres.playlists.items.map((playlist) => {
                return <Playlist playlist={playlist} />;
              })}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Genre;
