import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="artistList">
    <h3>Artists Available in SF</h3>
    {props.artists.map((artist, index) => {
      return (
        <div>
          <label>
            <strong>{index + 1 + "."}</strong>
          </label>
          <Artist artist={artist} />
          <br />
        </div>
      );
    })}
  </div>
);

export default ArtistList;
