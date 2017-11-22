import React from 'react';

const Song = (props) => (
  <div className="song">
    <iframe
      src={`https://open.spotify.com/embed?uri=spotify:track:${props.artist}`}
      frameBorder="0"
      allowTransparency="true"
      height="118"
      width="500">
    </iframe>
  </div>
);

export default Song;
