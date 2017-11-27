import React from "react";
/**
 * [Song description]
 * @param {[type]} props [unique id for embedded spotify player]
 * Console may be littered "Failed to load resource: net::ERR_CONNECTION_REFUSED"
 * This is normal. Just a bug on the the Spotify Player.
 */
const Song = props => (
  <div className="song card">
    <iframe
      src={`https://open.spotify.com/embed?uri=spotify:track:${props.artist}`}
      frameBorder="0"
      allowTransparency="true"
      height="135"
      width="500"
    />
  </div>
);

export default Song;
