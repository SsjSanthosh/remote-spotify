import axios from "axios";
import {
  NEXT_TRACK_API_ENDPOINT,
  PAUSE_RESOURCE_API_ENDPOINT,
  PLAYER_API_ENDPOINT,
  PLAY_RESOURCE_API_ENDPOINT,
  PREV_TRACK_API_ENDPOINT,
  SAVE_TRACK_API_ENDPOINT,
  SEEK_TRACK_API_ENDPOINT,
  SET_REPEAT_API_ENDPOINT,
  SET_SHUFFLE_API_ENDPOINT,
  TRANSFER_USER_PLAYBACK
} from "utils/endpoints";

import { USER_ACTIONS } from "utils/constants";
import { SET_VOLUME_API_ENDPOINT } from "../../utils/endpoints";

export const setPlayer = () => async (dispatch) => {
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: USER_ACTIONS.SET_PLAYER, payload: player.data });
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
    type: USER_ACTIONS.PLAY_RESOURCE,
    payload: player.data,
  });
};

export const pauseResource = () => async (dispatch) => {
  const pause = await axios.put(PAUSE_RESOURCE_API_ENDPOINT);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: USER_ACTIONS.PAUSE_RESOURCE, payload: player.data });
};

export const playNextTrack = () => async (dispatch) => {
  const next = await axios.post(NEXT_TRACK_API_ENDPOINT);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: USER_ACTIONS.NEXT_TRACK, payload: player.data });
};

export const playPrevTrack = () => async (dispatch) => {
  const prev = await axios.post(PREV_TRACK_API_ENDPOINT);
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: USER_ACTIONS.PREV_TRACK, payload: player.data });
};

export const toggleRepeat = (state) => async (dispatch) => {
  const repeat = await axios.put(
    SET_REPEAT_API_ENDPOINT.replace("{state}", state)
  );
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: USER_ACTIONS.SET_REPEAT, payload: player.data });
};

export const toggleShuffle = (state) => async (dispatch) => {
  const shuffle = await axios.put(
    SET_SHUFFLE_API_ENDPOINT.replace("{state}", state)
  );
  const player = await axios.get(PLAYER_API_ENDPOINT);

  dispatch({ type: USER_ACTIONS.SET_SHUFFLE, payload: player.data });
};

export const saveTrack = (ids) => async (dispatch) => {
  const save = await axios.put(
    SAVE_TRACK_API_ENDPOINT.replace("{ids}", ids.split(","))
  );
  dispatch({ type: USER_ACTIONS.SAVE_TRACK });
};

export const seekTrack = (position) => async (dispatch) => {
  const seek = await axios.put(
    SEEK_TRACK_API_ENDPOINT.replace("{position}", position)
  );
  const player = await axios.get(PLAYER_API_ENDPOINT);
  dispatch({ type: USER_ACTIONS.SEEK_TRACK, payload: player.data });
};

export const setVolume = (perc) => async (dispatch) => {
  const volume = await axios.put(
    SET_VOLUME_API_ENDPOINT.replace("{volume}", perc)
  );
  const player = await axios.get(PLAYER_API_ENDPOINT+`?timestamp=${new Date().getTime()}`);
  dispatch({
    type: USER_ACTIONS.SET_VOLUME,
    payload: player.data,
  });

};

export const transferUserPlayback = (id) => async (dispatch) =>{
  const transfer = await axios.put(TRANSFER_USER_PLAYBACK,{"device_ids":[id],"play":true});
  const player = await axios.get(PLAYER_API_ENDPOINT)
  dispatch({type:USER_ACTIONS.TRANSFER_USER_PLAYBACK,payload: player.data})
}