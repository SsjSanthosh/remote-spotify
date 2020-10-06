import React from "react";
import { Link } from "react-router-dom";

function Related({ artists }) {
  return (
    <div className="related-wrapper">
      <p className="highlight fs-1-2 border-bottom mb8">People also like</p>
      <div className="related-artists">
        {artists.map((artist) => {
          return (
            <div className="related-artist hover-item cursor-pointer">
              <img
                className="related-artist-image"
                src={artist.images[0].url}
                alt={artist.name}
              />
              <Link to={`/artist/${artist.id}`}>
                <p className="related-artist-name highlight fs-1-1 ">
                  {artist.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Related;
