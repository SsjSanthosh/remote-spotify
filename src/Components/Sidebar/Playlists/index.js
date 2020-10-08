import React, { useEffect, useState } from "react";
import { getDataFromEndpoint } from "utils/utils";
import { USER_PLAYLISTS_API_ENDPOINT } from "utils/endpoints";
import { Link, withRouter } from "react-router-dom";
function Playlists({ match, ...props }) {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(USER_PLAYLISTS_API_ENDPOINT).then((res) =>
      setPlaylists(res.data)
    );
  }, [match]);
  return (
    <div className="sidebar-playlists">
      {playlists.items &&
        playlists.items.map((playlist) => {
          return (
            <Link to={`/playlists/${playlist.id}`} key={playlist.id}>
              <p className="sidebar-playlist no-highlight hover-white">
                {playlist.name}
              </p>
            </Link>
          );
        })}
    </div>
  );
}

export default React.memo(Playlists);
