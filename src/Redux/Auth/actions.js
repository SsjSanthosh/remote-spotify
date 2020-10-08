import axios from "axios";
import {
  BACKEND_TOKEN_ENDPOINT,
  USER_INFO_API_ENDPOINT,
} from "utils/endpoints";
import Cookies from "universal-cookie";
import { AUTH_ACTIONS, COOKIE_NAME } from "../../utils/constants";
import { setTokenLocally } from "../../utils";

const cookie = new Cookies();
export const setBackendToken = () => async (dispatch) => {
  const res = await axios.get(BACKEND_TOKEN_ENDPOINT);
  const token = res.data.access_token;
  const expires = new Date();
  expires.setTime(expires.getTime() + 1 * 3600 * 1000);
  cookie.set(COOKIE_NAME, `access=${token}`, { path: "/", expires });
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  dispatch({ type: AUTH_ACTIONS.SET_BACKEND_TOKEN, payload: token });
};

export const setAuthToken = (token) => async (dispatch) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + 1 * 3600 * 1000);
  cookie.set(COOKIE_NAME, `auth=${token}`, { path: "/", expires });
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const user = await axios.get(USER_INFO_API_ENDPOINT);
  dispatch({
    type: AUTH_ACTIONS.SET_AUTH_TOKEN,
    payload: { token, user: user.data },
  });
};

export const logout = () => async (dispatch) => {
  cookie.remove(COOKIE_NAME);
  dispatch({ type: AUTH_ACTIONS.LOGOUT });
};
