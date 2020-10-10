const SCOPES = [
  "user-read-playback-state",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "user-read-private",
  "playlist-modify-public",
  "user-library-modify",
  "user-top-read",
  "user-follow-modify",
  // "user-read-currently-playing",
  "user-follow-read",
  "user-read-recently-played",
  "playlist-modify-private",
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

export const FEATURED_PLAYLISTS_API_ENDPOINT = `${BASE_API_URL}browse/featured-playlists?country=IN&locale=en_IN&limit=10`;

export const SEARCH_API_ENDPOINT = `${BASE_API_URL}search?query={search}&type=artist,album,playlist,track,show,episode&limit=4&country=IN&locale=en_IN`;

export const ARTIST_API_ENDPOINT = `${BASE_API_URL}artists/{id}`;

export const RELATED_ARTISTS_API_ENDPOINT = `${BASE_API_URL}artists/{id}/related-artists`;

export const ARTIST_ALBUM_API_ENDPOINT = `${BASE_API_URL}artists/{id}/albums`;

export const ARTIST_TOP_TRACKS_API_ENDPOINT = `${BASE_API_URL}artists/{id}/top-tracks?market=IN`;

export const USER_PLAYLISTS_API_ENDPOINT = `${BASE_API_URL}me/playlists?limit=50`;

export const USER_RECENTLY_PLAYED_API_ENDPOINT = `${BASE_API_URL}me/player/recently-played?limit=10`;

export const USER_ALBUMS_API_ENDPOINT = `${BASE_API_URL}me/albums?limit=8`;

export const PLAY_RESOURCE_API_ENDPOINT = `${BASE_API_URL}me/player/play`;

export const PLAYER_API_ENDPOINT = `${BASE_API_URL}me/player`;

export const PAUSE_RESOURCE_API_ENDPOINT = `${BASE_API_URL}me/player/pause`;

export const NEXT_TRACK_API_ENDPOINT = `${BASE_API_URL}me/player/next`;

export const PREV_TRACK_API_ENDPOINT = `${BASE_API_URL}me/player/previous`;

export const SET_REPEAT_API_ENDPOINT = `${BASE_API_URL}me/player/repeat?state={state}`;

export const SET_SHUFFLE_API_ENDPOINT = `${BASE_API_URL}me/player/shuffle?state={state}`;

export const USER_SAVED_TRACKS_API_ENDPOINT = `${BASE_API_URL}me/tracks?limit=20`;

export const SAVE_TRACK_API_ENDPOINT = `${BASE_API_URL}me/tracks?ids={ids}`;

export const SAVE_ALBUM_API_ENDPOINT = `${BASE_API_URL}me/albums?ids={ids}`;

export const FOLLOW_PLAYLIST_API_ENDPOINT = `${BASE_API_URL}playlists/{id}/followers`;

export const SEEK_TRACK_API_ENDPOINT = `${BASE_API_URL}me/player/seek?position_ms={position}`;

export const SET_VOLUME_API_ENDPOINT = `${BASE_API_URL}me/player/volume?volume_percent={volume}`;
