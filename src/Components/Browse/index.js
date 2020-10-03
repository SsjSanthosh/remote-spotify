import Category from "Components/Common/Category";
import React, { useState, useEffect } from "react";
import { If, Then } from "react-if";
import { connect } from "react-redux";
import { getBrowseCategories } from "Redux/Data/actions";

import "./style.scss";
function Categories({ categories, getBrowseCategories, loading, ...props }) {
  useEffect(() => {
    // getBrowseCategories();
  }, []);
  return (
    <div>
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
  );
}

const mapStateToProps = ({ data }) => ({
  categories: data.browse.categories,
  loading: data.loading,
});

export default connect(mapStateToProps, { getBrowseCategories })(Categories);
