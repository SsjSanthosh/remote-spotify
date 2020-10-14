import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { setAuthToken } from "../../Redux/Auth/actions";
import { setPlayer } from "Redux/User/actions";
import "./style.scss";
let timer;
function Redirect({ setAuthToken, setPlayer, history, ...props }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      let token = window.location.hash
        .split("&")[0]
        .replace("#access_token=", "");
      setMessage(
        "Thank you for authorizing the app! \n We do not store any information about your account, personal or otherwise.Redirecting you to your library in 8 seconds, you can click away anytime."
      );
      setAuthToken(token);
      setPlayer();
      window.location.hash = "#";
      timer = setTimeout(() => {
        history.push("/library");
      }, 8000);
    } else if (hash.includes("error")) {
      setMessage(
        "You have not authorized the app and won't be able to access your library. That's perfectly fine! You can still use the app to look up music and browse!Redirecting you to browse in 5 seconds, you can click away anytime."
      );
      timer = setTimeout(() => {
        history.push("/browse");
      }, 5000);
    } else {
      setMessage("How did you get here? Is this an alternate dimension?");
    }
    return () => clearTimeout(timer);
  }, [setAuthToken, setPlayer, history]);

  return (
    <div className="page-content redirect-page-wrapper">
      <div className="redirect-message">
        {message}
        <br />
        <br />
        <div className="redirect-deets">
          This app has been created solely for the purpose of exercising and
          showcasing my skills as a frontend developer. <br /> <br /> This app
          is not intended for any sort of commercial/production use, in any way
          shape or form. <br /> <br /> You can check out the github repo and a
          full working demo{" "}
          <a
            href="https://github.com/SsjSanthosh/remote-spotify"
            rel="noopener noreferrer"
            target="_blank"
            className="accent-color"
          >
            here.
          </a>{" "}
          Will appreciate any feedback!
        </div>
      </div>
    </div>
  );
}

export default connect(null, { setAuthToken, setPlayer })(Redirect);
