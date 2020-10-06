import React from "react";
import { Link } from "react-router-dom";
import { getLinkFromType } from "utils/utils";
import "./style.scss";
function SearchItem({ item }) {
  const cover =
    item.images && item.images.length
      ? item.images[0].url
      : item.album && item.album.images
      ? item.album.images[0].url
      : null;
  const backupUrl = `https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=1.0`;
  return (
    <Link
      to={getLinkFromType(item.type, item)}
      className="search-item-wrapper hover-item"
    >
      <div className="search-cover">
        <img src={cover || backupUrl} alt={item.name} />
      </div>
      <div className="search-info">
        <p className="search-title mb8 highlight">{item.name}</p>
        {item.artists && (
          <p className="search-artist">{item.artists[0].name}</p>
        )}
      </div>
    </Link>
  );
}

export default SearchItem;
