import axios from "axios";
import {
  NEXT_TRACK_API_ENDPOINT,
  PAUSE_RESOURCE_API_ENDPOINT,
  PLAYER_API_ENDPOINT,
  PLAY_RESOURCE_API_ENDPOINT,
  PREV_TRACK_API_ENDPOINT,
  SAVE_TRACK_API_ENDPOINT,
  SET_REPEAT_API_ENDPOINT,
  SET_SHUFFLE_API_ENDPOINT,
} from "utils/endpoints";

import { PLAYER_ACTIONS } from "utils/constants";

export const setPlayer = () => async (dispatch) => {
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: PLAYER_ACTIONS.SET_PLAYER, payload: player.data });
};

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

export const playNextTrack = () => async (dispatch) => {
  const next = await axios.post(NEXT_TRACK_API_ENDPOINT);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: PLAYER_ACTIONS.NEXT_TRACK, payload: player.data });
};

export const playPrevTrack = () => async (dispatch) => {
  const prev = await axios.post(PREV_TRACK_API_ENDPOINT);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: PLAYER_ACTIONS.PREV_TRACK, payload: player.data });
};

export const toggleRepeat = (state) => async (dispatch) => {
  const repeat = await axios.put(
    SET_REPEAT_API_ENDPOINT.replace("{state}", state)
  );
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: PLAYER_ACTIONS.SET_REPEAT, payload: player.data });
};

export const toggleShuffle = (state) => async (dispatch) => {
  const shuffle = await axios.put(
    SET_SHUFFLE_API_ENDPOINT.replace("{state}", state)
  );
  const player = await axios.get(PLAYER_API_ENDPOINT);

  dispatch({ type: PLAYER_ACTIONS.SET_SHUFFLE, payload: player.data });
};

export const saveTrack = (ids) => async (dispatch) => {
  const save = await axios.put(
    SAVE_TRACK_API_ENDPOINT.replace("{ids}", ids.split(","))
  );
  dispatch({ type: PLAYER_ACTIONS.SAVE_TRACK });
};
