import React from "react";
import Generic from "./Generic";

import "./style.scss";
function Home({ history, ...props }) {
  return (
    <div className="page-content home-page-wrapper">
      <Generic history={history} />
    </div>
  );
}

export default Home;
