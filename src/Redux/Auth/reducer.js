import { AUTH_ACTIONS } from "../../constants";
import SpotifyWebApi from "spotify-web-api-js";
import { setTokenLocally } from "../../utils";

const initialState = {
  token: null,
  refreshToken: null,
  username: null,
  image: null,
  webPlayer: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTIONS.SET_AUTH_TOKEN:
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        image: payload.images[0].url,
        webPlayer: payload.external_urls.spotify,
      };
    default:
      return state;
  }
};

export default authReducer;
