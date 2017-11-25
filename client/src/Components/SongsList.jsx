import React from "react";
import { map } from "lodash";

import Song from "./Song.jsx";

const SongsList = props => {
  let artist = props.artist;
  let render = props.tracks[`${artist}`].map( (album, index) => {
    return <Song artist={album.id} key={index} />;
  });
  return (
    <div className="song-list">
      <h5>Top Tracks for: {artist}</h5>
      <br />
      {render}
    </div>
  );
};

export default SongsList;
