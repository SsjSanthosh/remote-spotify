import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./style.scss";
function Navigation({ history }) {
  return (
    <div className="navigation-wrapper">
      <div onClick={history.goBack}>
        <FontAwesomeIcon icon={faChevronLeft} className="nav-left" />
      </div>
      <div onClick={history.goForward}>
        <FontAwesomeIcon icon={faChevronRight} className="nav-right" />
      </div>
    </div>
  );
}

export default Navigation;
