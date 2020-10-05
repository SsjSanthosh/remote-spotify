import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "Components/Layout";
import Track from "Components/Common/Track";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getDataFromEndpoint } from "Redux/Data/actions";
import { PLAYLIST_API_ENDPOINT } from "utils/endpoints";
import Header from "./Header";

import "./style.scss";
function Playlists({
  match,
  playlist,
  getDataFromEndpoint,
  loading,
  ...props
}) {
  //   const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(PLAYLIST_API_ENDPOINT.replace("{id}", match.params.id));
  }, []);
  console.log(playlist);
  return (
    <Layout>
      <div className="page page-content playlists-page-wrapper">
        {/* <p className="page-title">Playlist name</p>
        <p className="page-content-title highlight fs-1-4 bb-1-w pb8">
          Playlist name
        </p> */}
        {!loading && playlist && (
          <>
            <Header playlist={playlist} />
            <div className="tracklist-header">
              <table>
                <tr>
                  <td style={{ width: "28vw" }}>TITLE</td>
                  <td style={{ width: "15vw" }}>ARTIST</td>
                  <td style={{ width: "10vw" }} className="album">
                    ALBUM
                  </td>
                  <td style={{ width: "25vw" }} className="release">
                    <FontAwesomeIcon icon={faCalendar} />
                  </td>
                  <td style={{ width: "1vw" }} className="duration">
                    <FontAwesomeIcon icon={faClock} />
                  </td>
                </tr>
              </table>
              {/* <span className="title">TITLE</span>
              <span className="artist">ARTIST</span>
              <span className="album">ALBUM</span>
              <span className="">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span> */}
            </div>
            {playlist.tracks.items.map((track) => {
              return <Track item={track} />;
            })}
          </>
        )}
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ data, loading }) => {
  return { playlist: data.data, loading: data.loading };
};
export default connect(mapStateToProps, { getDataFromEndpoint })(Playlists);
