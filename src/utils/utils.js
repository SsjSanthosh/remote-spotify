import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BACKUP_IMAGE } from "utils/constants";
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

export const getImageFromObject = (obj) => {
  if (obj.type === "user") {
    return obj.images.length ? obj.images[0].url : BACKUP_IMAGE;
  }
};

export const getArtistsString = (artists) => {
  return artists.map((artist, idx) => {
    if (idx === artists.length - 1) {
      return (
        <Link
          to={`/artist/${artist.id}`}
          id={artist.id}
          className="link fs-0-9"
          key={artist.id}
        >
          {artist.name}
        </Link>
      );
    }
    return (
      <Link
        to={`/artist/${artist.id}`}
        id={artist.id}
        className="link hover-white fs-0-9"
        key={artist.id}
      >
        {artist.name + " ,  "}
      </Link>
    );
  });
};

export const trimString = (str, lim) => {
  if (str.length < lim) {
    return str;
  } else return str.slice(0, lim) + "...";
};
