import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
function Track() {
  return (
    <div className="track-wrapper">
      <div className="track-cover">
        <img
          src="https://cdn.vox-cdn.com/thumbor/vo9HqN5qIppUYdA6zu372trbr2E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19855434/EUFpj5EU8AMESMa.jpeg"
          alt="cover"
        />
      </div>
      <div className="track-details">
        <span className="track-name">Future Nostalgia</span>
        <span className="track-artist">Artist</span>
      </div>
      <FontAwesomeIcon icon={faHeart} className="track-fav-icon" />
    </div>
  );
}

export default Track;
