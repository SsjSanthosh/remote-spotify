import axios from "axios";
import { USER_INFO_API_ENDPOINT } from "../../endpoints";

import { AUTH_ACTIONS } from "../../constants";
import { setTokenLocally } from "../../utils";
export const setAccessToken = (token) => async (dispatch) => {
  setTokenLocally(token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const user = await axios.get(USER_INFO_API_ENDPOINT);
  dispatch({
    type: AUTH_ACTIONS.SET_AUTH_TOKEN,
    payload: { token, ...user.data },
  });
};
