import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./style.scss";
function Search(props) {
  console.log(props);
  const [search, setSearch] = useState("");
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder={` Type and hit enter to search for artists, albums and more!`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default withRouter(Search);
