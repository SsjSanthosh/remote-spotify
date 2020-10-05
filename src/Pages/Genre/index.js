import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";
import { GENRE_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint, slugToName } from "utils/utils";

import "./style.scss";
import Playlist from "Components/Common/Playlist";
import Navigation from "Components/Common/Navigation";
function Genre({ match, ...props }) {
  console.log(props);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(
      GENRE_PLAYLISTS_API_ENDPOINT.replace("{id}", match.params.type)
    ).then((res) => setGenres(res.data));
  }, [match]);
  console.log(genres);
  return (
    <Layout>
      <Navigation history={props.history} />
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
