import React from "react";

const Artist = props => {
  return (
    <div>
      <div>Artist: {props.artist.name}</div>
      <div>Artist URL: {props.artist.uri}</div>
      <input className="bookBtn" type="submit" value="Book Now" />
    </div>
  );
};

export default Artist;
