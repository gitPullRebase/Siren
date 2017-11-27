import React from "react";
import { map } from "lodash";

import Song from "./Song.jsx";
/**
 * [SongsList description]
 * @param {[type]} props [props is an array of song tracks for each artist]
 */
const SongsList = props => {
  let render;
  let artist = props.artist;
  if (Object.keys(props.tracks).length > 0) {
    render = props.tracks.map((album, index) => {
      return <Song artist={album.single_id} key={index} />;
    });
  } else {
    render = <div>Loading...</div>;
  }
  return (
    <div className="song-list">
      <h5>Top Tracks for: {artist}</h5>
      <br />
      {render}
    </div>
  );
};

export default SongsList;
