import { SCOPES } from "./constants";

const BASE_URL = "https://accounts.spotify.com/";
const BASE_API_URL = `${BASE_URL}api/`;
export const REDIRECT_URL = "http://localhost:3000/redirect";
export const AUTHORIZE_REDIRECT_LINK = `${BASE_URL}authorize?client_id=${
  process.env.REACT_APP_SPOTIFY_CLIENT_ID
}&response_type=token&redirect_uri=${REDIRECT_URL}&show_dialogue=true&scope=${SCOPES.join(
  ","
)}`;

export const AUTH_TOKEN_API_ENDPOINT = `${BASE_API_URL}token`;
