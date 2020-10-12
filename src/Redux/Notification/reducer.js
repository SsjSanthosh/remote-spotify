const { MESSAGE_ACTIONS } = require("utils/constants");

const initialState = {
  message: "",
  type: "",
};

const messageReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case MESSAGE_ACTIONS.SHOW_MESSAGE:
      return payload;
    case MESSAGE_ACTIONS.CLEAR_MESSAGE:
      return initialState;
    default:
      return state;
  }
};

export default messageReducer;
