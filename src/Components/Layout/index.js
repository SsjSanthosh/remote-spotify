import React from "react";
import Search from "../Search";
import Player from "../Player";

import Sidebar from "../Sidebar";

import "./style.scss";
function Layout(props) {
  return (
    <div className="layout">
      {/* <Search /> */}
      <div className="layout-page">
        <Sidebar />

        {props.children}
      </div>
      <Player />
    </div>
  );
}

export default Layout;
