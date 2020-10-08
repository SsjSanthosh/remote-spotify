import SearchItem from "Components/Common/SearchItem";
import React, { useEffect, useState } from "react";
import { USER_ALBUMS_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint } from "utils/utils";

function SavedAlbums() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(USER_ALBUMS_API_ENDPOINT).then((res) =>
      setAlbums(res.data)
    );
  }, []);
  return (
    <div className="saved-albums-wrapper">
      <p className="highlight fs-1-2 border-bottom">Your saved albums</p>
      {albums.items &&
        albums.items
          .slice(0, 4)
          .map((album) => <SearchItem item={album.album} />)}
    </div>
  );
}

export default SavedAlbums;
