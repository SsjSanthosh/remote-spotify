import FavButton from "Components/Common/FavButton";
import PlayButton from "Components/Common/PlayButton";
import React from "react";
import { Link } from "react-router-dom";

function Header({ album }) {
  return (
    <div className="album-header">
      <div className="album-cover">
        <img src={album.images[0].url} alt={album.name} />
      </div>
      <div className="album-info highlight">
        <span>ALBUM</span>
        <span className="album-title fs-1-5 fw-b">{album.name}</span>
        <span>
          By{" "}
          <span className="album-artists">
            {album.artists.map((artist, idx) => {
              if (idx === album.artists.length - 1) {
                return (
                  <Link
                    className="link hover-white"
                    to={`/artist/${artist.id}`}
                    key={artist.id}
                  >
                    {artist.name}
                  </Link>
                );
              }
              return (
                <Link
                  className="link hover-white"
                  to={`/artist/${artist.id}`}
                  key={artist.id}
                >
                  {artist.name + ","}
                </Link>
              );
            })}
          </span>
        </span>
        <span className="album-year no-highlight">
          {album.release_date.slice(0, 4)} . {album.tracks.items.length} songs
        </span>
        <span className="album-buttons mt16">
          <PlayButton contextUri={album.uri} type="text" />
          <FavButton type="album" id={album.id} className="fav-button-lg" />
        </span>
      </div>
    </div>
  );
}

export default Header;
