import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { setAuthToken } from "../../Redux/Auth/actions";

function Redirect({ setAuthToken, ...props }) {
  useEffect(() => {
    let token = window.location.hash
      .split("&")[0]
      .replace("#access_token=", "");
    setAuthToken(token);
    // }
  }, [setAuthToken]);

  return (
    <Layout>
      <div className="page-content redirect-page-wrapper">
        this is the redirect page!
      </div>
    </Layout>
  );
}

export default connect(null, { setAuthToken })(Redirect);
