import React from "react";
import { Link } from "react-router-dom";

function Albums({ albums }) {
  return (
    <div className="artist-album-wrapper">
      <p className="highlight fs-1-2 border-bottom">Albums</p>
      <div className="artist-albums">
        {albums.map((album) => {
          return (
            <div className="artist-album cursor-pointer">
              <Link to={`/album/${album.id}`}>
                <img
                  src={album.images[0].url}
                  alt={album.name}
                  className="artist-album-image"
                />
                <p className="album-name highlight mb8">{album.name}</p>
                <p className="album-year">{album.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
