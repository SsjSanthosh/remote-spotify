import axios from "axios";

export const setTokenLocally = (token) => {
  localStorage.setItem("spotifyToken", token);
};

export const isTokenInLocalStorage = () => {
  console.log("this is the localstorage", localStorage.getItem("spotifyToken"));
  return localStorage.getItem("spotifyToken");
};
