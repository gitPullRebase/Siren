import React from "react";

const Song = props => (
  <div className="song card">
    <iframe
      src={`https://open.spotify.com/embed?uri=spotify:track:${props.artist}`}
      frameBorder="0"
      allowTransparency="true"
      height="100"
      width="500"
    />
  </div>
);

export default Song;
