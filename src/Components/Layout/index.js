import React from "react";
import Search from "../Search";
import Player from "../Player";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";

import "./style.scss";
import Navigation from "Components/Common/Navigation";
import UserPill from "Components/UserPill";
import LoginButton from "Components/Common/LoginButton";
import Loading from "Components/Common/Loading";
import Message from "Components/Common/Message";
import ColorSwitch from "Components/Common/ColorSwitch";
function Layout({ token, loggedIn, history, ...props }) {
  return token ? (
    <div className="layout">
      <Search />
      <Navigation />
      <ColorSwitch />
      <div className="top-right">
        {loggedIn ? <UserPill /> : <LoginButton />}
      </div>
      <div className="layout-page">
        <Sidebar />
        {token && props.children}
        <Message />
      </div>
      {loggedIn && <Player />}
    </div>
  ) : (
    <div id="loading-page">
      <Loading />
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token,
    loggedIn: auth.loggedIn,
  };
};

export default connect(mapStateToProps)(Layout);
