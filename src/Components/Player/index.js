import {
  faPause,
  faPlay,
  faRandom,
  faRedo,
  faStepBackward,
  faStepForward,
  faVolumeDown as volumeLow,
  faVolumeOff as volumeOff,
  faVolumeUp as volumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import Progress from "./Progress";
import {
  playNextTrack,
  playPrevTrack,
  playResource,
  pauseResource,
  toggleShuffle,
  toggleRepeat,
  setPlayer,
  seekTrack,
  setVolume,
} from "Redux/User/actions";
import React, { useEffect, useState } from "react";
import Control from "./Control";

import "./style.scss";
import Track from "./Track";
import { connect } from "react-redux";
import { millisToDuration } from "utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChromecast } from "@fortawesome/free-brands-svg-icons";
import ReactTooltip from "react-tooltip";
import Devices from "./Devices";
import { showMessage } from "Redux/User/actions";

let interval;
let timeout;
function Player({
  player,
  playNextTrack,
  playPrevTrack,
  playResource,
  pauseResource,
  toggleShuffle,
  toggleRepeat,
  setPlayer,
  seekTrack,
  setVolume,
  isPremium,
  showMessage,
}) {
  const [trackProgress, setTrackProgress] = useState(null);
  const [playerVolume, setPlayerVolume] = useState(null);

  useEffect(() => {
    if (player.item || player.context) {
      setTrackProgress(player.progress_ms);
    }
    if (player.device) {
      setPlayerVolume(player.device.volume_percent);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [player]);

  useEffect(() => {
    interval = setInterval(() => {
      setTrackProgress((trackProgress) =>
        trackProgress + 1000 > player.item.duration_ms
          ? player.item.duration_ms
          : trackProgress + 1000
      );
    }, 1000);
  }, [player]);
  useEffect(() => {
    if (!player.is_playing) {
      clearTimeout(timeout);
      clearInterval(interval);
    }
    if (player.item && player.is_playing) {
      timeout = setTimeout(
        () => setPlayer(),
        player.item && player.item.duration_ms - player.progress_ms
      );
    }
    if (player.currently_playing_type === "ad") {
      clearTimeout(timeout);
      clearInterval(interval);
      showMessage(
        "Uh oh, playing an ad! Please refresh the page after the ad has finished playing.",
        "info"
      );
    }
  }, [player, setPlayer, showMessage]);

  useEffect(() => {}, [player, trackProgress]);
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
      activeClass: player.shuffle_state ? "accent-color" : "",
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
      hoverClass: "hover-white play-pause-button",
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
      activeClass: player.repeat_state === "off" ? "" : "accent-color",
    },
  ];

  const handleSeek = (perc) => {
    if (isPremium) {
      const seek_ms = Math.floor(player.item.duration_ms * (perc / 100));
      seekTrack(seek_ms);
    } else {
      showMessage(
        "Sorry, you can't seek through the API without premium :(, you can still see the progress here.",
        "error"
      );
    }
  };

  const handleVolumeChange = (perc) => {
    if (isPremium) {
      setVolume(Math.floor(perc));
    } else {
      showMessage(
        "Sorry, you can't control the volume through the API without premium :(, you can still see the progress here.",
        "error"
      );
    }
  };

  return (player.item || player.context) &&
    player.currently_playing_type !== "ad" ? (
    <div className="player-wrapper">
      <Track track={player && (player.item || player.context)} />
      <div className="player-controls">
        <div className="player-buttons">
          {PLAYER_CONTROLS.map((cont) => {
            return <Control options={cont} key={cont.name} />;
          })}
        </div>
        <div className="player-progressbar">
          <span className="player-current">
            {millisToDuration(trackProgress)}
          </span>
          <Progress
            completed={Math.floor(
              (trackProgress / player.item.duration_ms) * 100
            )}
            handleSeek={handleSeek}
          />
          <span className="player-total">
            {millisToDuration(player.item.duration_ms)}
          </span>
        </div>
      </div>
      <div className="player-devices-volume">
        <FontAwesomeIcon
          icon={
            playerVolume > 0
              ? playerVolume > 50
                ? volumeHigh
                : volumeLow
              : volumeOff
          }
        />
        <Progress completed={playerVolume} handleSeek={handleVolumeChange} />
        <FontAwesomeIcon
          icon={faChromecast}
          className="player-devices fs-1-4 hover-white"
          data-for="devices"
          data-tip
          data-event="click"
        />
        <ReactTooltip
          id="devices"
          place="top"
          type="dark"
          effect="solid"
          arrow={false}
          clickable={true}
          isCapture={true}
        >
          <Devices />
        </ReactTooltip>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}

const mapStateToProps = ({ user, auth }) => {
  return {
    player: user.player,
    isPremium: auth.user && auth.user.product === "open" ? false : true,
  };
};

export default connect(mapStateToProps, {
  playResource,
  pauseResource,
  playNextTrack,
  playPrevTrack,
  toggleShuffle,
  toggleRepeat,
  setPlayer,
  setVolume,
  seekTrack,
  showMessage,
})(Player);
