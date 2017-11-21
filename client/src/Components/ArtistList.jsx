import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="col artistList">
    <h1>Artist List Component</h1>
    {props.artists.map(artist => {
      return (
        <div>
          <Artist artist={artist} />
          <br />
        </div>
      );
    })}
  </div>
);

export default ArtistList;
