import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { pauseResource, playResource } from "Redux/User/actions";
import { showMessage } from "Redux/Notification/actions";

function PlayButton({
  isPremium,
  type,
  playResource,
  pauseResource,
  contextUri = null,
  uri = null,
  player,
  showMessage,
}) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (
      player.is_playing &&
      (player.item.uri === uri ||
        (!player.item && player.context && player.context.uri === contextUri) ||
        (!uri && player.context && player.context.uri === contextUri))
    ) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [player, uri, contextUri]);
  const handleClick = () => {
    if (isPremium) {
      if (playing) {
        pauseResource();
        setPlaying(false);
      } else {
        playResource(uri, contextUri);
        setPlaying(true);
      }
    } else {
      showMessage(
        "Sorry! Only premium users can use the API to control playback :(",
        "error"
      );
    }
  };
  const renderButtonByType = () => {
    if (type === "icon") {
      return (
        <span
          className={`play-button play-button-icon ${
            playing ? "playing-visible" : ""
          }`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={playing ? faPause : faPlay} />
        </span>
      );
    } else {
      return (
        <button
          className="play-button play-button-text cursor-point"
          onClick={handleClick}
        >
          {playing ? "Pause" : "Play"}
        </button>
      );
    }
  };
  return renderButtonByType();
}

const mapStateToProps = ({ auth, user, notification }) => {
  return {
    player: user.player,
    isPremium: auth.user.product === "open" ? false : true,
  };
};

export default connect(mapStateToProps, {
  playResource,
  pauseResource,
  showMessage,
})(PlayButton);
