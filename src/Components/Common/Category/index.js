import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
function Category({ category }) {
  return (
    <Link to={`/genre/${category.id}`}>
      <div className="category">
        <div className="category-image">
          <img src={category.icons[0].url} alt={category.name} />
        </div>
        <span className="category-name hover-white fs-1-2 hover-border-white">
          {category.name}
        </span>
      </div>
    </Link>
  );
}

export default Category;
