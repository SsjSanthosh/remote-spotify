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
  return axios.get(endpoint);
};

export const getLinkFromType = (type, item) => {
  type = type.toLowerCase();
  if (type === "track" && item.album) {
    return `/album/${item.album.id}`;
  }
  return `/${type}/${item.id}`;
};

export const displayNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
