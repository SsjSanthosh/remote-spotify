import axios from "axios";
import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./common.scss";
import "./index.scss";
import { USER_INFO_API_ENDPOINT } from "./endpoints";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Login from "./Pages/Login/";
import Redirect from "./Pages/Redirect/";
import { setAccessToken } from "./Redux/Auth/actions";

import { isTokenInLocalStorage } from "./utils";

function App({ setAccessToken }) {
  useEffect(() => {
    const token = isTokenInLocalStorage();
    if (token) {
      setAccessToken(token);
    }
  }, []);
  console.log(process.env.NODE_PATH);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route
            exact
            path="/redirect"
            render={(props) => <Redirect {...props} />}
          />
          <Route exact path="/browse" component={Browse}></Route>
          <Route exact path="/library" component={Library}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { setAccessToken })(App);
