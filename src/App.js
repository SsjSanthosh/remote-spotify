import axios from "axios";
import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cookie from "universal-cookie";
import "./common.scss";
import "./index.scss";

import { COOKIE_NAME, SPOTIFY_ACCENT_COLOR } from "utils/constants";

import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Search from "./Pages/Search";

import Login from "./Pages/Login/";
import Album from "./Pages/Album/";
import Artist from "./Pages/Artist/";

import Genre from "./Pages/Genre";
import Redirect from "./Pages/Redirect/";
import Playlists from "./Pages/Playlists/";

import { setBackendToken, setAuthToken } from "./Redux/Auth/actions";
import Layout from "Components/Layout";
import { setPlayer } from "Redux/User/actions";
import LikedSongs from "Pages/LikedSongs";
import Error from "Pages/Error";

const cookie = new Cookie();
let interval;

function App({ setBackendToken, setAuthToken, setPlayer, token }) {
  useEffect(() => {
    let setToken = cookie.get(COOKIE_NAME);
    if (setToken) {
      setToken = decodeURIComponent(setToken);
      let token = setToken.split("=")[1];
      let type = setToken.split("=")[0];
      if (type === "auth") {
        setAuthToken(token);
        setPlayer();
      } else {
        setBackendToken(token);
      }
    } else {
      setBackendToken();
    }
    // Refresh token every hour from backend, if token is not auth token
    interval = setInterval(() => {
      let token = cookie.get(COOKIE_NAME);

      if (token && decodeURIComponent(token).includes("access")) {
        setBackendToken();
      }
    }, 1000 * 60 * 57);

    return () => clearInterval(interval);
  }, [setBackendToken, setAuthToken, setPlayer]);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path="/login" component={Login}></Route> */}
        <Layout>
          <Switch>
            <Route
              exact
              path="/redirect"
              render={(props) => <Redirect {...props} />}
            />
            <Route exact path={"/browse/"} component={Browse}></Route>
            <Route exact path="/library" component={Library}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/genre/:type" component={Genre} />
            <Route exact path={["/", "/login"]} component={Home}></Route>
            <Route exact path="/playlists/:id" component={Playlists}></Route>
            <Route exact path="/liked-songs" component={LikedSongs}></Route>
            <Route exact path="/album/:id" component={Album}></Route>
            <Route exact path="/artist/:id" component={Artist}></Route>
            <Route exact path="" component={Error}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};
export default connect(mapStateToProps, {
  setAuthToken,
  setBackendToken,
  setPlayer,
})(App);
