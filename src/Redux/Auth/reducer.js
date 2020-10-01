import { AUTH_ACTIONS } from "../../constants";

const initialState = {
  token: "hi there",
  scope: "",
  refreshToken: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTIONS.SET_AUTH_TOKEN:
      return {
        token: payload.access_token,
        refreshToken: payload.refresh_token,
        scope: payload.scope,
      };
    default:
      return state;
  }
};

export default authReducer;
