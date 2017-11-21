import React from "react";

const Artist = props => {
  return (
    <div className="artist-container">

      <img className="artist-image" src={props.artist.images[1].url}alt="Artist Pic"/>
      <div className="artist-text">
        <div>Artist: {props.artist.name}</div>
        <a href={props.artist.uri}>
          <div>Artist URL: {props.artist.uri}</div>
        </a>
        <input className="bookBtn" type="submit" value="Book Now" />
      </div>
    </div>
  );
};

export default Artist;
