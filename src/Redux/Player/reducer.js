const { PLAYER_ACTIONS } = require("utils/constants");

const initialState = { player: {}, currentlyPlaying: null };

const playerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAYER_ACTIONS.PLAY_RESOURCE:
    case PLAYER_ACTIONS.PAUSE_RESOURCE:
      return { ...state, player: payload };
    default:
      return state;
  }
};

export default playerReducer;
