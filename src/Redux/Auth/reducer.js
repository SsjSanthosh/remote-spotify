import { AUTH_ACTIONS } from "../../utils/constants";
import { setTokenLocally } from "../../utils";

const initialState = {
  token: null,
  user: null,
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTIONS.SET_AUTH_TOKEN:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loggedIn: true,
      };
    case AUTH_ACTIONS.SET_BACKEND_TOKEN:
      return { ...state, token: payload };
    case AUTH_ACTIONS.LOGOUT:
      return { initialState };
    default:
      return state;
  }
};

export default authReducer;
