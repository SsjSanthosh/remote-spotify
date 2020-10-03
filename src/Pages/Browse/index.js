import axios from "axios";
import Category from "Components/Common/Category";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBrowseCategories } from "Redux/Data/actions";

import Layout from "../../Components/Layout";

import "./style.scss";
function Browse({ categories, loading, getBrowseCategories }) {
  useEffect(() => {
    console.log("in page", axios.defaults.headers.common);
    getBrowseCategories();
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
            categories &&
            categories.items.map((item) => {
              return <Category category={item} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ data }) => ({
  categories: data.browse.categories,
  loading: data.loading,
});

export default connect(mapStateToProps, { getBrowseCategories })(Browse);
