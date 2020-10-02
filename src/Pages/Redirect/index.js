import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { setAccessToken } from "../../Redux/Auth/actions";

function Redirect({ setAccessToken, ...props }) {
  useEffect(() => {
    let token = window.location.hash
      .split("&")[0]
      .replace("#access_token=", "");
    setAccessToken(token);
    // }
  }, [setAccessToken]);

  return <div>This is the redirect page!</div>;
}

export default connect(null, { setAccessToken })(Redirect);
