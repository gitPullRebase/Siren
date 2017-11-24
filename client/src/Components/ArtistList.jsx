import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="col artistList">
    <h5>Artists Available in {props.city}</h5>
    <br />
    <ol>
      {props.artists.map((artist, index) => {
        return (
          <li key={index}>
            <Artist artist={artist} setArtist={props.setArtist} />
          </li>
        );
      })}
    </ol>
  </div>
);

export default ArtistList;
