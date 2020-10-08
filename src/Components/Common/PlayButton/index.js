import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { pauseResource, playResource } from "Redux/Player/actions";

function PlayButton({
  type,
  playResource,
  pauseResource,
  contextUri = null,
  uri = null,
  player,
}) {
  const [icon, setIcon] = useState(faPlay);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    console.log("inside useeffect", player.item && player.item.uri);
    if (
      player.is_playing &&
      (player.item.uri === uri ||
        (player.context && player.context.uri === contextUri))
    ) {
      console.log("inside condition");
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [player, uri, contextUri]);
  const handleClick = () => {
    if (playing) {
      pauseResource();
      setPlaying(false);
    } else {
      playResource(uri, contextUri);
      setPlaying(true);
    }
  };
  const renderButtonByType = () => {
    if (type === "icon") {
      return (
        <span className="play-button play-button-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} />
        </span>
      );
    } else {
      return <span className="play-button play-button-text">Play</span>;
    }
  };
  return renderButtonByType();
}

const mapStateToProps = ({ player }) => {
  return { player: player.player };
};

export default connect(mapStateToProps, { playResource, pauseResource })(
  PlayButton
);
