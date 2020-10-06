import React from "react";

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
                return artist.name;
              }
              return artist.name + ", ";
            })}
          </span>
        </span>
        <span className="album-year no-highlight">
          {album.release_date.slice(0, 4)} . {album.tracks.items.length} songs
        </span>
      </div>
    </div>
  );
}

export default Header;
