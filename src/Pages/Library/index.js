import React from "react";
import { connect } from "react-redux";
import LoggedOut from "./LoggedOut";

import "./style.scss";
import RecentlyPlayed from "./RecentlyPlayed";
import SavedAlbums from "./SavedAlbums";
import UserPlaylists from "./UserPlaylists";
function Library({ loggedIn, ...props }) {
  return (
    <div className="page page-content library-page-wrapper">
      {!loggedIn && <LoggedOut />}
      {loggedIn && (
        <>
          <div className="library-flex">
            <RecentlyPlayed />
            <SavedAlbums />
          </div>
          <UserPlaylists />
        </>
      )}
    </div>
  );
}

export const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};
export default connect(mapStateToProps)(Library);
