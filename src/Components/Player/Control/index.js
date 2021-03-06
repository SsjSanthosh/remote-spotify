import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { showMessage } from "Redux/User/actions";
function Control({ options, showMessage, isPremium }) {
  const handleClick = () => {
    if (isPremium) {
      options.onClick();
    } else {
      showMessage(
        "Uh oh! Sorry, only premium users can control playback through the API :(. You can still see the progress here",
        "error"
      );
    }
  };
  return (
    <FontAwesomeIcon
      onClick={handleClick}
      icon={options.icon}
      className={options.hoverClass + " " + options.activeClass + " text-muted"}
    />
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    isPremium: auth.user && auth.user.product === "open" ? false : true,
  };
};

export default connect(mapStateToProps, { showMessage })(Control);
