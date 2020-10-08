import Playlist from "Components/Common/Playlist";
import React, { useEffect, useState } from "react";
import { USER_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint } from "utils/utils";

function UserPlaylists() {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(USER_PLAYLISTS_API_ENDPOINT).then((res) =>
      setPlaylists(res.data)
    );
  }, []);
  return (
    <>
      <p className="highlight fs-1-2 border-bottom library-playlist-title">
        Your playlists{" "}
      </p>
      <div className="library-playlists">
        {playlists.items &&
          playlists.items.map((playlist) => <Playlist playlist={playlist} />)}
      </div>
    </>
  );
}

export default UserPlaylists;
