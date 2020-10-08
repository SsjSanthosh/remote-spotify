import MiniTrack from "Components/Common/MiniTrack";
import React, { useEffect, useState } from "react";
import { USER_RECENTLY_PLAYED_API_ENDPOINT } from "utils/endpoints";
import { getDataFromEndpoint } from "utils/utils";

function RecentlyPlayed() {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    getDataFromEndpoint(USER_RECENTLY_PLAYED_API_ENDPOINT).then((res) =>
      setRecents(res.data)
    );
  }, []);

  return (
    <div className="recently-played-wrapper">
      <p className="highlight fs-1-2 border-bottom">Recently Played</p>
      {recents.items &&
        recents.items
          .slice(0, 6)
          .map((track) => <MiniTrack track={track.track} />)}
    </div>
  );
}

export default RecentlyPlayed;
