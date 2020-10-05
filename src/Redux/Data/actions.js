import { BROWSE_CATEGORIES_API_ENDPOINT } from "utils/endpoints";
import axios from "axios";
import { FETCH_ACTIONS } from "utils/constants";

export const getDataFromEndpoint = (endpoint) => async (dispatch) => {
  dispatch({ type: FETCH_ACTIONS.SET_LOADING });
  const res = await axios.get(endpoint);
  const data = res.data;
  dispatch({ type: FETCH_ACTIONS.SET_DATA, payload: data });
};
