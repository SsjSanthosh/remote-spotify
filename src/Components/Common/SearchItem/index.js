import React from "react";
import { Link } from "react-router-dom";
import { BACKUP_IMAGE } from "utils/constants";
import { getLinkFromType } from "utils/utils";
import "./style.scss";
function SearchItem({ item }) {
  const cover =
    item.images && item.images.length
      ? item.images[0].url
      : item.album && item.album.images
      ? item.album.images[0].url
      : null;

  return (
    <Link
      to={getLinkFromType(item.type, item)}
      className="search-item-wrapper hover-item"
    >
      <div className="search-cover">
        <img src={cover || BACKUP_IMAGE} alt={item.name} />
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
