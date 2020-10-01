import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./common.scss";
import Login from "./Pages/Login/";
import Redirect from "./Pages/Redirect/";

import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/login"]} component={Login}></Route>
            <Route
              exact
              path="/redirect"
              render={(props) => <Redirect {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
