import {
  faPlay,
  faRandom,
  faRedo,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import Progress from "./Progress";
import React, { useEffect, useState } from "react";
import Control from "./Control";

import "./style.scss";
import Track from "./Track";
function Player() {
  const PLAYER_CONTROLS = [
    {
      name: "shuffle",
      icon: faRandom,
      onClick: "toggleShuffle",
      hoverClass: "hover-accent",
      activeClass: "accent-active",
    },
    {
      name: "prev",
      icon: faStepBackward,
      onClick: "playPrevSong",
      hoverClass: "hover-white",
      activeClass: "",
    },
    {
      name: "play",
      icon: faPlay,
      onClick: "togglePlay",
      hoverClass: "hover-white",
      activeClass: "",
    },
    {
      name: "next",
      icon: faStepForward,
      onClick: "playNextSong",
      hoverClass: "hover-white",
      activeClass: "",
    },
    {
      name: "repeat",
      icon: faRedo,
      onClick: "toggleRepeat",
      hoverClass: "hover-accent",
      activeClass: "active-accent",
    },
  ];
  return (
    <div className="player-wrapper">
      <Track />
      <div className="player-controls">
        <div className="player-buttons">
          {PLAYER_CONTROLS.map((cont) => {
            return <Control options={cont} key={cont.name} />;
          })}
        </div>
        <div className="player-progressbar">
          <Progress bgcolor="green" completed={56} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Player;
