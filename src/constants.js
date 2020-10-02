import { faHome, faMusic, faSearch } from "@fortawesome/free-solid-svg-icons";

export const SPOTIFY_SCOPES = [];

export const AUTH_ACTIONS = {
  SET_AUTH_TOKEN: "SET_AUTH_TOKEN",
};

export const SCOPES = [
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

export const NAV_LINKS = [
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
