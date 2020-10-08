import React from "react";
import { AUTHORIZE_REDIRECT_LINK } from "utils/endpoints";
import "./style.scss";
function LoginButton() {
  return (
    <a href={AUTHORIZE_REDIRECT_LINK} target="_blank" rel="noopener noreferrer">
      <button className="login-button cursor-pointer">Login</button>
    </a>
  );
}

export default LoginButton;
