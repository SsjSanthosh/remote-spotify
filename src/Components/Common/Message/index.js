import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { clearMessage } from "Redux/User/actions";
let timer;
function Message({ notif, clearMessage }) {
  const { type, message } = notif;
  useEffect(() => {
    if (message) {
      timer = setTimeout(() => clearMessage(), 3500);
    }
    return () => clearInterval(timer);
  }, [message, clearMessage]);
  return message && <div className={`message-div ${type}`}>{message}</div>;
}

const mapStateToProps = ({ user }) => {
  return { notif: user.notification };
};

export default connect(mapStateToProps, { clearMessage })(Message);
