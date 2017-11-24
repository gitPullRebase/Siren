import React from "react";
import { map } from "lodash";

import Song from "./Song.jsx";

const SongsList = props => {
  let artist = props.clickedArtist;

  let render = map(props.tracks, artist => {
    return <Song artist={artist[0].id} key={artist[0].id} />;
  });
  if (artist !== "") {
    render = props.tracks[`${artist}`].map( (album, index) => {
      return <Song artist={album.id} key={index} />;
    });
  }

  return (
    <div className="song-list">
      <h5>Songs (Click on artists for their songs)</h5>
      <br />
      {render}
    </div>
  );
};

export default SongsList;
