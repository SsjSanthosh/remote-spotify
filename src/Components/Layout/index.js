import React from "react";
import Search from "../Search";
import Player from "../Player";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";

import "./style.scss";
import Navigation from "Components/Common/Navigation";
import UserPill from "Components/UserPill";
import LoginButton from "Components/Common/LoginButton";
function Layout({ token, loggedIn, history, ...props }) {
  return (
    <div className="layout">
      <Search />
      <Navigation />
      <div className="top-right">
        {loggedIn ? <UserPill /> : <LoginButton />}
      </div>
      <div className="layout-page">
        <Sidebar />
        {props.children}
      </div>
      {loggedIn && <Player />}
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
