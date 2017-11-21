import React from 'react';

import Song from './Song.jsx';

const SongsList = (props) => (
  <div className="col">
    <h1>Songs List Component</h1>
    {/* {props.tracks.map( song => {
      return <Song song={song} />
    })} */}
  </div>
)

export default SongsList;
