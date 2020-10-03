import axios from "axios";

export const setTokenLocally = (token) => {
  localStorage.setItem("spotifyToken", token);
};

export const isTokenInLocalStorage = () => {
  return localStorage.getItem("spotifyToken");
};
