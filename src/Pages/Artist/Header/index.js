import React from "react";
import { BACKUP_IMAGE } from "utils/constants";
import { displayNumber } from "utils/utils";

function Header({ artist }) {
  const { name, followers } = artist;
  const image = artist.images.length ? artist.images[0].url : BACKUP_IMAGE;
  return (
    <div className="artist-header">
      <div className="artist-image">
        <img src={image} alt={artist.name} />
      </div>
      <div className="artist-info">
        <p className="highlight fs-1-2 ">ARTIST</p>
        <p className="artist-name fs-6 fw-b highlight">{name}</p>
        <p className="artist-followers">
          {displayNumber(followers.total)} Monthly listeners.
        </p>
        {/* <p>Play ICON</p>
        <p>FOLLOW ICOn</p> */}
      </div>
    </div>
  );
}

export default Header;
