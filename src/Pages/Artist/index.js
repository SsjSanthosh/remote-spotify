import React, { useEffect, useState } from "react";
import Layout from "Components/Layout";
import { getDataFromEndpoint } from "utils/utils";
import {
  ARTIST_API_ENDPOINT,
  ARTIST_ALBUM_API_ENDPOINT,
  ARTIST_TOP_TRACKS_API_ENDPOINT,
  RELATED_ARTISTS_API_ENDPOINT,
} from "utils/endpoints";
import Header from "./Header";

import "./style.scss";
import TopTracks from "./TopTracks";
import Related from "./Related";
import Albums from "./Albums";
function Artist({ match, ...props }) {
  const [artist, setArtist] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    // Artist details
    getDataFromEndpoint(
      ARTIST_API_ENDPOINT.replace("{id}", match.params.id)
    ).then((res) => setArtist(res.data));
    // Artist albums
    getDataFromEndpoint(
      ARTIST_ALBUM_API_ENDPOINT.replace("{id}", match.params.id)
    ).then((res) => setAlbums(res.data));
    // Related artists
    getDataFromEndpoint(
      RELATED_ARTISTS_API_ENDPOINT.replace("{id}", match.params.id)
    ).then((res) => setRelatedArtists(res.data));
    // Artist tracks
    getDataFromEndpoint(
      ARTIST_TOP_TRACKS_API_ENDPOINT.replace("{id}", match.params.id)
    ).then((res) => setTracks(res.data));
  }, [match]);

  return (
    <div className="page-content artist-page-wrapper">
      {artist.name && <Header artist={artist} />}
      <div className="artist-flex">
        {tracks.tracks && <TopTracks tracks={tracks.tracks.slice(0, 5)} />}
        {relatedArtists.artists && (
          <Related artists={relatedArtists.artists.slice(0, 5)} />
        )}
      </div>
      {albums.items && <Albums albums={albums.items.slice(0, 12)} />}
    </div>
  );
}

export default Artist;
