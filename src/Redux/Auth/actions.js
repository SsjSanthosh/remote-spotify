import axios from "axios";
import { AUTH_TOKEN_API_ENDPOINT, REDIRECT_URL } from "../../endpoints";

import { AUTH_ACTIONS } from "../../constants";
export const setAccessToken = (code) => async (dispatch) => {
  const path = AUTH_TOKEN_API_ENDPOINT;
  const data = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URL,
  };
  const headers = {
    Authorization: `Basic ${atob(
      `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
    )}`,
  };
  const res = await axios.post(path, data, { headers }).json();
  dispatch({ type: AUTH_ACTIONS.SET_AUTH_TOKEN, payload: res });
};
