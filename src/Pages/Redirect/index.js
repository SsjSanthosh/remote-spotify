import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function Redirect(props) {
  useEffect(() => {
    const accessToken = window.location.hash
      .split("&")[0]
      .replace("#access_token=", "");
  }, []);

  return <div>This is the redirect page!</div>;
}

export default Redirect;
