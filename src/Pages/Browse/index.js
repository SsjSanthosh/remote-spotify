import axios from "axios";
import Category from "Components/Common/Category";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDataFromEndpoint } from "Redux/Data/actions";

import { BROWSE_CATEGORIES_API_ENDPOINT } from "utils/endpoints";

import Layout from "../../Components/Layout";

import "./style.scss";
function Browse({ loading, getDataFromEndpoint, categories }) {
  useEffect(() => {
    getDataFromEndpoint(BROWSE_CATEGORIES_API_ENDPOINT);
  }, []);
  return (
    <Layout>
      <div className="page page-content browse-page-wrapper">
        <p className="page-title highlight">Browse</p>
        {/* <Navlinks links={NAV_LINKS.browse} /> */}
        {/* <Categories /> */}
        <p className="page-content-title highlight fs-1-3 bb-1-w pb8">
          Genres & Moods
        </p>
        <div className="browse-page-content-wrapper">
          {loading && <p className="fs-1-5">Loading</p>}
          {!loading &&
            categories.items &&
            categories.items &&
            categories.items.map((item) => {
              return <Category category={item} key={item.name} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ data }) => ({
  loading: data.loading,
  categories: data.data.categories,
});

export default connect(mapStateToProps, { getDataFromEndpoint })(Browse);
