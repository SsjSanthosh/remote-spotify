import React, { useEffect, useState } from "react";
import Layout from "Components/Layout";
import { getDataFromEndpoint } from "utils/utils";
import { SEARCH_API_ENDPOINT } from "utils/endpoints";
import SearchItem from "Components/Common/SearchItem";

import "./style.scss";
import DisplayItems from "./DisplayItems";
import Header from "./Header";
function Search({ match, ...props }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(
      SEARCH_API_ENDPOINT.replace(
        `{search}`,
        props.location.search.split("=")[1]
      )
    )
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }, [match]);

  const renderSearchItems = () => {
    return Object.keys(results).map((type) => {
      return (
        results[type].items[0] && (
          <div className="search-flex">
            <Header title={results[type].items[0].type} />
            <DisplayItems items={results[type].items} />
          </div>
        )
      );
    });
  };

  return (
    <div className="page-content search-page-wrapper">
      {results.tracks && renderSearchItems()}
    </div>
  );
}

export default Search;
