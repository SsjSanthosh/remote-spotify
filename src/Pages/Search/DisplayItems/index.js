import SearchItem from "Components/Common/SearchItem";
import React from "react";

function Tracks({ items }) {
  return (
    <div className="search-items">
      {items.map((track) => (
        <SearchItem item={track} type="track" />
      ))}
    </div>
  );
}

export default Tracks;
