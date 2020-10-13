import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { transferUserPlayback } from "Redux/User/actions";
import { GET_USER_DEVICES } from "utils/endpoints";
import { getDataFromEndpoint } from "utils/utils";
import "./style.scss";
import { showMessage } from "Redux/User/actions";
function Devices({ transferUserPlayback, player, isPremium, showMessage }) {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(GET_USER_DEVICES).then((res) =>
      setDevices(res.data.devices)
    );
  }, [player]);

  const handleClick = (id) => {
    if (isPremium) {
      transferUserPlayback(id);
    } else {
      showMessage(
        "Sorry, only premium users can transfer playback using the API :(",
        "error"
      );
    }
  };
  return (
    devices && (
      <div className="user-devices">
        {devices.map((device) => {
          return (
            <p
              className={`user-device ${
                device.is_active && `accent-color`
              } hover-item cursor-pointer`}
              key={device.id}
              onClick={() => handleClick(device.id)}
            >
              {device.name}
            </p>
          );
        })}
      </div>
    )
  );
}

const mapStateToProps = ({ user, auth }) => {
  return {
    player: user.player,
    isPremium: auth.user && auth.user.product === "open" ? false : true,
  };
};
export default connect(mapStateToProps, { transferUserPlayback, showMessage })(
  Devices
);
