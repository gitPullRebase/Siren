import React from "react";

const Artist = props => {
  return (
    <div>
      <div>Artist: {props.artist.name}</div>
      <a href={props.artist.uri}>
        <div>Artist URL: {props.artist.uri}</div>
      </a>
      <input className="bookBtn" type="submit" value="Book Now" />
    </div>
  );
};

export default Artist;
