import Navigation from "Components/Common/Navigation";
import Layout from "Components/Layout";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDataFromEndpoint } from "utils/utils";
import { ALBUM_API_ENDPOINT } from "utils/endpoints";
import Header from "./Header";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import TrackHeader from "Components/Common/TrackHeader";
import Track from "Components/Common/Track";
function Album({ match, ...props }) {
  const [album, setAlbum] = useState({});
  useEffect(() => {
    getDataFromEndpoint(
      ALBUM_API_ENDPOINT.replace("{id}", match.params.id)
    ).then((res) => setAlbum(res.data));
  }, []);
  return (
    <Layout>
      <Navigation history={props.history} />
      <div className="page-content album-page-wrapper">
        {album.tracks && (
          <>
            <Header album={album} />
            <div className="tracklist-header">
              <p className="title">TITLE</p>
              <p className="duration">
                <FontAwesomeIcon icon={faClock} className="duration-icon" />
              </p>
            </div>
            {album.tracks.items.map((track) => (
              <Track item={track} />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ data }) => {
  return { album: data.data };
};

export default Album;
