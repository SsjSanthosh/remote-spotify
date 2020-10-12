import React from "react";
import Generic from "./Generic";

import "./style.scss";
function Home({ ...props }) {
  return (
    <div className="page-content home-page-wrapper">
      <Generic />
    </div>
  );
}

export default Home;
