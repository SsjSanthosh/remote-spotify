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

import { setBackendToken, setAccessToken } from "./Redux/Auth/actions";

const cookie = new Cookie();
(function () {
  let token = cookie.get(COOKIE_NAME);
  if (token) {
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }
})();
function App({ setBackendToken }) {
  useEffect(() => {
    if (!cookie.get(COOKIE_NAME)) {
      setBackendToken();
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.get(
        COOKIE_NAME
      )}`;
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/login" component={Login}></Route> */}
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
          <Route exact path="/album/:id" component={Album}></Route>
          <Route exact path="/artist/:id" component={Artist}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, {
  setAccessToken,
  setBackendToken,
})(App);
