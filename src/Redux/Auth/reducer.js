import { AUTH_ACTIONS } from "../../utils/constants";
import { setTokenLocally } from "../../utils";

const initialState = {
  token: null,
  refreshToken: null,
  username: null,
  image: null,
  webPlayer: null,
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTIONS.SET_ACCESS_TOKEN:
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        image: payload.images[0].url,
        webPlayer: payload.external_urls.spotify,
      };
    case AUTH_ACTIONS.SET_BACKEND_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};

export default authReducer;
