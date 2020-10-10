import React from "react";
import { connect } from "react-redux";
import Layout from "../../Components/Layout";
import Generic from "./Generic";

import "./style.scss";
function Home({ loggedIn, ...props }) {
  return (
    <div className="page-content home-page-wrapper">
      <Generic />
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};
export default connect(mapStateToProps)(Home);
