import axios from "axios";
import {
  PAUSE_RESOURCE_API_ENDPOINT,
  PLAYER_API_ENDPOINT,
  PLAY_RESOURCE_API_ENDPOINT,
} from "utils/endpoints";

import { PLAYER_ACTIONS } from "utils/constants";
export const playResource = (uri = null, context_uri = null) => async (
  dispatch
) => {
  const body =
    // clean this up omg
    context_uri && uri
      ? { context_uri, offset: { uri: uri } }
      : context_uri && !uri
      ? { context_uri }
      : uri && !context_uri
      ? { uris: [uri] }
      : null;
  const play = await axios.put(PLAY_RESOURCE_API_ENDPOINT, body);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({
    type: PLAYER_ACTIONS.PLAY_RESOURCE,
    payload: player.data,
  });
};

export const pauseResource = () => async (dispatch) => {
  const pause = await axios.put(PAUSE_RESOURCE_API_ENDPOINT);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: PLAYER_ACTIONS.PAUSE_RESOURCE, payload: player.data });
};
