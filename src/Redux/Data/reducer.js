import { FETCH_ACTIONS } from "utils/constants";

const initialState = {
  loading: true,
  data: {},
};
const dataReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_ACTIONS.SET_LOADING:
      return { ...state, loading: true };

    case FETCH_ACTIONS.SET_DATA:
      return { data: payload, loading: false };
    default:
      return state;
  }
};

export default dataReducer;
