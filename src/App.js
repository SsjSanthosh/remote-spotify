import axios from "axios";
import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./common.scss";
import { USER_INFO_API_ENDPOINT } from "./endpoints";
import Home from "./Pages/Home";
import Login from "./Pages/Login/";
import Redirect from "./Pages/Redirect/";
import { setAccessToken } from "./Redux/Auth/actions";

import { isTokenInLocalStorage } from "./utils";

function App({ setAccessToken }) {
  useEffect(() => {
    const token = isTokenInLocalStorage();
    if (token) {
      setAccessToken(token);
      // axios
      //   .get(USER_INFO_API_ENDPOINT, {
      //     headers: { Authorization: "Bearer " + token },
      //   })
      //   .then((res) => console.log("from", res.data));
    }
  }, []);
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
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { setAccessToken })(App);
