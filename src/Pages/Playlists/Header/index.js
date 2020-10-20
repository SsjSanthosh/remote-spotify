import { BACKUP_IMAGE } from "utils/constants";
import React from "react";
import PlayButton from "Components/Common/PlayButton";
import FavButton from "Components/Common/FavButton";
import { displayNumber } from "utils/utils";

function Header({ playlist }) {
  const image =
    playlist.images && playlist.images.length
      ? playlist.images[0].url
      : BACKUP_IMAGE;
  return (
    <div className="playlists-page-header">
      <div className="playlist-cover">
        <img src={image} alt={playlist.name} />
      </div>
      <div className="playlist-info">
        <p className="highlight fw-l">PLAYLIST</p>
        <p className="highlight page-title fs-1-4 fw-m">{playlist.name}</p>
        <p className="fs-0-8">{playlist.description.slice(0, 90) + "...."}</p>
        <p className="fs-0-8 mb8">
          Created by{" "}
          <a
            href={playlist.owner.external_urls.spotify}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="highlight">{playlist.owner.display_name}. </span>
          </a>
          <span>{playlist.tracks.items.length} songs</span>
        </p>
        <div className="playlist-buttons">
          <PlayButton type="text" contextUri={playlist.uri} />
          <FavButton
            type="playlist"
            id={playlist.id}
            className="fav-button-lg"
          />
          <span>{displayNumber(playlist.followers.total)} FOLLOWERS</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
