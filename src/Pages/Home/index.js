import Navigation from "Components/Common/Navigation";
import React from "react";
import Layout from "../../Components/Layout";

import "./style.scss";
function Home(props) {
  return (
    <Layout>
      <Navigation history={props.history} />
      <div className="page-content page-home">This is the home page!</div>
    </Layout>
  );
}

export default Home;
