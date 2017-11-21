import React from 'react';

const Song = (props) => (
  <div className="song">
    <iframe
      src={`https://open.spotify.com/embed?uri=spotify:track:${props.artist[0].id}`}
      frameBorder="0"
      allowTransparency="true"
      height="97"
      width="500">
    </iframe>
  </div>
);

export default Song;
