import React from "react";
import { millisToDuration } from "utils/utils";

import "./style.scss";
function Track({ item }) {
  console.log(item);
  const { track } = item;
  return (
    <div className="track-wrapper">
      <table>
        <tr>
          <td style={{ width: "35%" }}> {track.name}</td>
          <td style={{ width: "25%" }}> {track.artists[0].name}</td>
          <td style={{ width: "20%" }}> {track.album.name}</td>
          <td style={{ width: "20%" }} className="track-duration">
            {item.added_at.slice(0, 10)}
          </td>
          <td style={{ width: "20%" }} className="track-duration">
            {millisToDuration(track.duration_ms)}
          </td>
        </tr>
      </table>
      {/* <span className="track-name">{track.name}</span>
      <span className="track-artist">{`${track.artists[0].name}`}</span>
      <span className="track-album">{track.album.name}</span>
      <span className="track-release">{item.added_at.slice(0, 10)}</span>
      <span className="track-duration">
        {millisToDuration(track.duration_ms)}
      </span> */}
    </div>
  );
}

export default Track;
