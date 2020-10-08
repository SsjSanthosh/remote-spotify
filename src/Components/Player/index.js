import {
  faPause,
  faPlay,
  faRandom,
  faRedo,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import Progress from "./Progress";
import {
  playNextTrack,
  playPrevTrack,
  playResource,
  pauseResource,
  toggleShuffle,
  toggleRepeat,
} from "Redux/Player/actions";
import React, { useEffect, useState } from "react";
import Control from "./Control";

import "./style.scss";
import Track from "./Track";
import { connect } from "react-redux";
function Player({
  player,
  playNextTrack,
  playPrevTrack,
  playResource,
  pauseResource,
  toggleShuffle,
  toggleRepeat,
}) {
  const getToggleState = (player) => {
    const states = ["track", "context", "off"];
    const index = states.indexOf(player.repeat_state);
    return states[(index + 1) % states.length];
  };
  const PLAYER_CONTROLS = [
    {
      name: "shuffle",
      icon: faRandom,
      onClick: () => toggleShuffle(player.shuffle_state ? false : true),
      hoverClass: "hover-accent",
      activeClass: "accent-active",
    },
    {
      name: "prev",
      icon: faStepBackward,
      onClick: () => playPrevTrack(),
      hoverClass: "hover-white",
      activeClass: "",
    },
    {
      name: "play",
      icon: player.is_playing ? faPause : faPlay,
      onClick: player.is_playing ? () => pauseResource() : () => playResource(),
      hoverClass: "hover-white",
      activeClass: "",
    },
    {
      name: "next",
      icon: faStepForward,
      onClick: () => playNextTrack(),
      hoverClass: "hover-white",
      activeClass: "",
    },
    {
      name: "repeat",
      icon: faRedo,
      onClick: () => toggleRepeat(getToggleState(player)),
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

const mapStateToProps = ({ player }) => {
  return { player: player.player };
};

export default connect(mapStateToProps, {
  playResource,
  pauseResource,
  playNextTrack,
  playPrevTrack,
  toggleShuffle,
  toggleRepeat,
})(Player);
