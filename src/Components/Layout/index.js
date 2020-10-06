import React from "react";
import Search from "../Search";
import Player from "../Player";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";

import "./style.scss";
import Navigation from "Components/Common/Navigation";
function Layout({ token, history, ...props }) {
  return (
    <div className="layout">
      <Search />
      <Navigation />
      <div className="layout-page">
        <Sidebar />
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
