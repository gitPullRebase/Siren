import React from 'react';
import { map } from 'lodash';

import Song from './Song.jsx';

const SongsList = (props) => (
  <div className="col">
    <h2>List Component</h2>
    {map(props.tracks, artist => {
      return <Song artist={artist} />
    })}
  </div>
);

export default SongsList;
