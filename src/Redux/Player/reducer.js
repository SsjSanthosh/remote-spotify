const { PLAYER_ACTIONS } = require("utils/constants");

const initialState = { player: {}, currentlyPlaying: null };

const playerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAYER_ACTIONS.SET_VOLUME:
    case PLAYER_ACTIONS.SET_PLAYER:
    case PLAYER_ACTIONS.PLAY_RESOURCE:
    case PLAYER_ACTIONS.PAUSE_RESOURCE:
    case PLAYER_ACTIONS.NEXT_TRACK:
    case PLAYER_ACTIONS.PREV_TRACK:
    case PLAYER_ACTIONS.SET_REPEAT:
    case PLAYER_ACTIONS.SET_SHUFFLE:
    case PLAYER_ACTIONS.SEEK_TRACK:
      return { ...state, player: { ...payload } };
    default:
    case PLAYER_ACTIONS.SAVE_TRACK:
      return state;
  }
};

export default playerReducer;
