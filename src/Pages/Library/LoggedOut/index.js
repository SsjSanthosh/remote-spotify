import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AUTHORIZE_REDIRECT_LINK } from "utils/endpoints";

function LoggedOut() {
  return (
    <div className="logged-out-div highlight">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="logged-out-icon"
      />
      <p className="logged-out-msg fs-1-2 mb8">
        You are currently not logged in. Please log in to see your tracks,
        playlists and more!
      </p>
      <a
        href={AUTHORIZE_REDIRECT_LINK}
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="login-btn fs-1-2 cursor-pointer">Login now</button>
      </a>
    </div>
  );
}

export default LoggedOut;
