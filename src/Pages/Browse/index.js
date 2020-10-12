import Category from "Components/Common/Category";

import React, { useEffect, useState } from "react";

import { BROWSE_CATEGORIES_API_ENDPOINT } from "utils/endpoints";

import "./style.scss";
import { getDataFromEndpoint } from "utils/utils";
function Browse({ history }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(BROWSE_CATEGORIES_API_ENDPOINT).then((res) =>
      setCategories(res.data.categories)
    ).catch(err=>{
      if(err.response.status === 400 || err.response.status === 404){
        history.push('/error?type="no_data_returned"')
      }
      else if(err.response.status === 401){
        history.push('/error?type="expired_token"');
      }
    });
  }, []);
  return (
    <div className="page page-content browse-page-wrapper">
      <p className="page-title highlight">Browse</p>
      <p className="page-content-title highlight fs-1-3 bb-1-w pb8">
        Genres & Moods
      </p>
      <div className="browse-page-content-wrapper">
        {!categories.items && <p className="fs-1-5">Loading</p>}
        {categories.items &&
          categories.items &&
          categories.items.map((item) => {
            return <Category category={item} key={item.name} />;
          })}
      </div>
    </div>
  );
}

export default Browse;
