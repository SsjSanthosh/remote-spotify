import React, { useEffect, useState } from "react";

import { getDataFromEndpoint } from "utils/utils";
import { SEARCH_API_ENDPOINT } from "utils/endpoints";

import "./style.scss";
import DisplayItems from "./DisplayItems";
import Header from "./Header";
import Loading from "Components/Common/Loading";
function Search({ history, match, ...props }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults([]);
    getDataFromEndpoint(
      SEARCH_API_ENDPOINT.replace(
        `{search}`,
        props.location.search.split("=")[1]
      )
    )
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          history.push("/error?type=no_data_returned");
        } else {
          history.push("/error?type=token_expired");
        }
      });
  }, [match, history, props.location.search]);

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
      {results.tracks ? renderSearchItems() : <Loading />}
    </div>
  );
}

export default Search;
