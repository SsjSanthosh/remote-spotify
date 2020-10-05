const SCOPES = [
  "user-read-playback-state",
  "playlist-read-collaborative",
  "user-modify-playback-state",
  // "user-read-private",
  "playlist-modify-public",
  "user-library-modify",
  "user-top-read",
  "user-follow-modify",
  // "user-read-currently-playing",
  "user-follow-read",
  "user-read-recently-played",
  // "playlist-modify-private",
  "user-library-read",
];
const BASE_URL = "https://accounts.spotify.com/";
const BASE_API_URL = `https://api.spotify.com/v1/`;
export const BROWSE_CATEGORIES_API_ENDPOINT = `${BASE_API_URL}browse/categories?limit=50&locale=en_IN`;
export const GENRE_PLAYLISTS_API_ENDPOINT = `${BASE_API_URL}browse/categories/{id}/playlists`;
export const PLAYLIST_API_ENDPOINT = `${BASE_API_URL}playlists/{id}`;
export const REDIRECT_URL = "http://localhost:3000/redirect";
export const BACKEND_TOKEN_ENDPOINT =
  process.env.REACT_APP_BACKEND_TOKEN_ENDPOINT;

export const AUTHORIZE_REDIRECT_LINK = `${BASE_URL}authorize?client_id=${
  process.env.REACT_APP_SPOTIFY_CLIENT_ID
}&response_type=token&redirect_uri=${REDIRECT_URL}&show_dialogue=true&scope=${SCOPES.join(
  ","
)}`;

export const AUTH_TOKEN_API_ENDPOINT = `${BASE_API_URL}token`;

export const USER_INFO_API_ENDPOINT = `${BASE_API_URL}me`;

export const ALBUM_API_ENDPOINT = `${BASE_API_URL}albums/{id}`;
