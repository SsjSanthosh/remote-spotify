import React from "react";
import Search from "../Search";
import Player from "../Player";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";

import "./style.scss";
function Layout({ token, ...props }) {
  return (
    <div className="layout">
      {/* <Search /> */}
      <div className="layout-page">
        {/* <Sidebar /> */}
        {props.children}
      </div>
      <Player />
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token,
  };
};

export default connect(mapStateToProps)(Layout);
