import { faHome, faMusic, faSearch } from "@fortawesome/free-solid-svg-icons";
import { BROWSE_CATEGORIES_API_ENDPOINT } from "./endpoints";

export const SPOTIFY_SCOPES = [];

export const AUTH_ACTIONS = {
  SET_AUTH_TOKEN: "SET_AUTH_TOKEN",
  SET_BACKEND_TOKEN: "SET_BACKEND_TOKEN",
  LOGOUT: "LOGOUT",
};

export const FETCH_ACTIONS = {
  SET_DATA: "SET_DATA",
  SET_LOADING: "SET_LOADING",
};

export const PLAYER_ACTIONS = {
  SET_PLAYER: "SET_PLAYER",
  PLAY_RESOURCE: "PLAY_RESOURCE",
  PAUSE_RESOURCE: "PAUSE_RESOURCE",
  NEXT_TRACK: "NEXT_TRACK",
  PREV_TRACK: "PREV_TRACK",
  SET_REPEAT: "SET_REPEAT",
  SET_SHUFFLE: "SET_SHUFFLE",
  SAVE_TRACK: "SAVE_TRACK",
  SEEK_TRACK: "SEEK_TRACK",
  SET_VOLUME: "SET_VOLUME",
};
export const SCOPES = [
  "user-read-playback-state",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-modify-playback-state",
  "playlist-read-collaborative",
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

export const SIDEBAR_NAV_LINKS = [
  {
    name: "Home",
    to: "/",
    icon: faHome,
  },
  {
    name: "Browse",
    to: "/browse",
    icon: faSearch,
  },
  {
    name: "Library",
    to: "/library",
    icon: faMusic,
  },
];

export const NAV_LINKS = {
  browse: [
    {
      name: "Genres & Moods",
      to: "/browse/genres",
    },
    // {
    //   name: "Podcasts",
    //   to: "/browse/podcasts",
    // },
    // {
    //   name: "Charts",
    //   to: "/browse/charts",
    // },
    {
      name: "New Releases",
      to: "/browse/new-releases",
    },
    {
      name: "Featured Playlists",
      to: "/browse/featured-playlists",
    },
  ],
};

// export const BROWSE_PAGES = {
//   genres: { name: "Genres & Moods", endpoint: BROWSE_CATEGORIES_API_ENDPOINT },
//   "featured-playlists": { name: "Featured Playlists" },
//   "new-releases": { name: "The Best New releases" },
// };

export const COOKIE_NAME = "remoteSpotifyCookie";

export const BACKUP_IMAGE = `https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=1.0`;
