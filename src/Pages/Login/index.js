import React from "react";
import { connect } from "react-redux";
import { AUTHORIZE_REDIRECT_LINK } from "../../endpoints";

import "./style.scss";
function Login({ auth }) {
  console.log(auth);
  return (
    <div className="page">
      <div className="page-login">
        <h1>Remote Spotify</h1>
        <div className="login-img-div">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
            alt="Spotify"
          />
        </div>
        <span className="text-muted">
          You must be logged in to use this app.
        </span>
        <a
          href={AUTHORIZE_REDIRECT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="login-redirect-link font-light"
        >
          <h3> Click here to login and start using the application!</h3>
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Login);
