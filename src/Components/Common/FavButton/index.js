import { faHeart as faRegular } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FOLLOW_PLAYLIST_API_ENDPOINT,
  SAVE_ALBUM_API_ENDPOINT,
  SAVE_TRACK_API_ENDPOINT,
} from "utils/endpoints";
import { getDataFromEndpoint } from "Redux/Data/actions";
import { faHeart as faSolid } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { connect } from "react-redux";
import { showMessage } from "Redux/Notification/actions";

function FavButton({ type, id, className, loggedIn, showMessage }) {
  const getInitialState = () => {
    // refactor this, playlist named library will throw this off
    if (
      window.location.href.includes("library") ||
      window.location.href.includes("liked-songs")
    ) {
      return true;
    }
    return false;
  };
  const [saved, setSaved] = useState(getInitialState());
  const getEndpointFromType = () => {
    switch (type) {
      case "album":
        return SAVE_ALBUM_API_ENDPOINT.replace("{ids}", id);
      case "playlist":
        return FOLLOW_PLAYLIST_API_ENDPOINT.replace("{id}", id);
      case "track":
        return SAVE_TRACK_API_ENDPOINT.replace("{ids}", id);
      default:
        return;
    }
  };
  useEffect(() => {}, []);
  const handleClick = () => {
    if (loggedIn) {
      if (saved) {
        axios.delete(getEndpointFromType()).then((res) => setSaved(false));
      } else {
        axios.put(getEndpointFromType()).then((res) => setSaved(true));
      }
    } else {
      showMessage("Please login to save to your library!");
    }
  };
  return (
    <div className={`fav-button-div ${className}`} onClick={handleClick}>
      <FontAwesomeIcon
        icon={saved ? faSolid : faRegular}
        className="fav-button-icon"
      />
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};

export default connect(mapStateToProps, { showMessage })(FavButton);
