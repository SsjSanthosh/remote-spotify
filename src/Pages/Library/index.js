import Layout from "../../Components/Layout";

import React from "react";
import Navigation from "Components/Common/Navigation";

function Library(props) {
  return (
    <Layout>
      <Navigation history={props.history} />
      <div className="page page-content library-page-wrapper">
        This is the library page
      </div>
    </Layout>
  );
}

export default Library;
