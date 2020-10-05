import axios from "axios";

export const slugToName = (slug) => {
  return slug.split("_").join(" ");
};

export const millisToDuration = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const getDataFromEndpoint = (endpoint) => {
  console.log(endpoint);
  return axios.get(endpoint);
};
