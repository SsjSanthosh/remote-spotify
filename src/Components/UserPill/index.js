import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { getImageFromObject } from "utils/utils";
import ReactTooltip from "react-tooltip";
import { logout } from "Redux/Auth/actions";
import "./style.scss";
function UserPill({ user, logout }) {
  return (
    <div
      className="user-pill-wrapper cursor-pointer"
      data-for="user-options"
      data-tip
      data-event="click"
    >
      <div className="user-avatar">
        <img src={getImageFromObject(user)} alt={user.display_name} />
      </div>
      <p className="user-name highlight">{user.display_name}</p>
      <FontAwesomeIcon icon={faChevronDown} className="user-menu-icon" />
      <ReactTooltip
        id="user-options"
        place="bottom"
        type="dark"
        effect="solid"
        arrow={false}
        clickable={true}
        isCapture={true}
      >
        <div className="user-menu cursor-pointer">
          <a
            href={user.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="user-option border-bottom hover-item">Account</p>
          </a>
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="user-option border-bottom hover-item">
              Open web player
            </p>
          </a>
          <p className="user-option hover-item" onClick={logout}>
            Log out
          </p>
        </div>
      </ReactTooltip>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};

export default connect(mapStateToProps, { logout })(UserPill);
