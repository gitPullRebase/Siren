import React from 'react';
import { map } from 'lodash';

import Song from './Song.jsx';

const SongsList = (props) => {
  let artist = props.clickedArtist;

  let render = map(props.tracks, artist => {
    return <Song artist={artist[0].id} />
  });
  if (artist !== '') {
    render = props.tracks[`${artist}`].map( album => {
      return <Song artist={album.id} />
    });
  }

  return (
    <div className="col">
      <h2>List Component</h2>
      {render}
    </div>
  );
}
export default SongsList;
