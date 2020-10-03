import { FETCH_ACTIONS } from "utils/constants";

const initialState = {
  loading: false,
  browse: {
    categories: null,
  },
};
const dataReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_ACTIONS.SET_LOADING:
      return { ...state, loading: true };

    case FETCH_ACTIONS.GET_BROWSE_CATEGORIES:
      return { ...state, browse: payload, loading: false };
    default:
      return state;
  }
};

export default dataReducer;
