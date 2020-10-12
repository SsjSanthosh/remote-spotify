import Category from "Components/Common/Category";
import React, { useState, useEffect } from "react";
import { If, Then } from "react-if";
import { connect } from "react-redux";
import { getBrowseCategories } from "Redux/Data/actions";
import { getDataFromEndpoint } from "utils/utils";
import { BROWSE_CATEGORIES_API_ENDPOINT } from "utils/endpoints";

import "./style.scss";
function Categories({ loading, ...props }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(BROWSE_CATEGORIES_API_ENDPOINT).then((res) =>
      setCategories(res.data)
    );
    // getBrowseCategories();
  }, []);
  return (
    <div>
      <p className="page-content-title highlight fs-1-3 bb-1-w pb8">
        Genres & Moods
      </p>
      <div className="browse-page-content-wrapper">
        {categories &&
          categories.items.map((item) => {
            return <Category category={item} />;
          })}
      </div>
    </div>
  );
}



export default (Categories);
