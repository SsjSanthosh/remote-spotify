import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GENRE_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import { slugToName } from "utils/utils";

import "./style.scss";
import Playlist from "Components/Common/Playlist";
function Genre({ match }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(GENRE_PLAYLISTS_API_ENDPOINT.replace("{id}", match.params.type))
      .then((res) => setGenres(res.data));
  }, [match]);
  return (
    <Layout>
      <div className="page-content genre-page-content-wrapper">
        <p className="page-title">{slugToName(match.params.type)}</p>
        <div className="genre-playlists">
          {genres.playlists &&
            genres.playlists.items.map((playlist) => {
              return <Playlist playlist={playlist} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Genre;
