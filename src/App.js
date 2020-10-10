import axios from "axios";
import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cookie from "universal-cookie";
import "./common.scss";
import "./index.scss";

import { COOKIE_NAME } from "utils/constants";

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
import { setPlayer } from "Redux/Player/actions";
import LikedSongs from "Pages/LikedSongs";

const cookie = new Cookie();
// TODO - Try to find another way to do this, seems like a hack-y solution
(function () {
  let setToken = cookie.get(COOKIE_NAME);
  if (setToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      setToken.split("=")[1]
    }`;}
})();
function App({ setBackendToken, setAuthToken, setPlayer }) {
  useEffect(() => {
    let setToken = cookie.get(COOKIE_NAME);
    if (!setToken) {
      setBackendToken();
    } else {
      setToken = decodeURIComponent(setToken);
      let token = setToken.split("=")[1];
      let type = setToken.split("=")[0];
      if (type === "auth") {
        setAuthToken(token);
        setPlayer();
      }
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/login" component={Login}></Route> */}
          <Layout>
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
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, {
  setAuthToken,
  setBackendToken,
  setPlayer,
})(App);
