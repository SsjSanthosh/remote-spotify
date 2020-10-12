import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";
import dataReducer from "./Data/reducer";
import playerReducer from "./User/reducer";
import messageReducer from "./Notification/reducer";
const initialState = {};

const middlewares = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  user: playerReducer,
  notification: messageReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
