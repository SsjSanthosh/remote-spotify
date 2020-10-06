import React from "react";
import { connect } from "react-redux";
import Layout from "../../Components/Layout";
import Generic from "./Generic";

import "./style.scss";
import User from "./User";
function Home({ loggedIn, ...props }) {
  return (
    <Layout>
      <div className="page-content home-page-wrapper">
        {!loggedIn ? <Generic /> : <User />}
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: auth.loggedIn };
};
export default connect(mapStateToProps)(Home);
