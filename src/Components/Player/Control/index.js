import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Control({ options }) {
  return (
    <FontAwesomeIcon
      onClick={options.onClick}
      icon={options.icon}
      className={options.hoverClass + " text-muted"}
    />
  );
}

export default Control;
