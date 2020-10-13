const { USER_ACTIONS } = require("utils/constants");

const initialState = { player: {}, notification: { message: "", type: "" } };

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.SET_VOLUME:
    case USER_ACTIONS.SET_PLAYER:
    case USER_ACTIONS.PLAY_RESOURCE:
    case USER_ACTIONS.PAUSE_RESOURCE:
    case USER_ACTIONS.NEXT_TRACK:
    case USER_ACTIONS.PREV_TRACK:
    case USER_ACTIONS.SET_REPEAT:
    case USER_ACTIONS.SET_SHUFFLE:
    case USER_ACTIONS.SEEK_TRACK:
    case USER_ACTIONS.TRANSFER_USER_PLAYBACK:
      return { ...state, player: { ...payload } };
    case USER_ACTIONS.SHOW_MESSAGE:
      return { ...state, notification: { ...payload } };
    case USER_ACTIONS.CLEAR_MESSAGE:
      return { ...state, notification: { message: "", type: "" } };
    case USER_ACTIONS.ERROR:
      return { ...state, notification: { ...payload } };
    default:
    case USER_ACTIONS.SAVE_TRACK:
      return state;
  }
};

export default userReducer;
