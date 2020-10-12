import { MESSAGE_ACTIONS } from "./../../utils/constants";
export const showMessage = (message, type) => async (dispatch) => {
  dispatch({ type: MESSAGE_ACTIONS.SHOW_MESSAGE, payload: { message, type } });
};

export const clearMessage = () => async (dispatch) => {
  dispatch({ type: MESSAGE_ACTIONS.CLEAR_MESSAGE });
};
