import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="col artistList">
    <h5>Artists Available in {props.city}</h5>
    <br />
    <ol>
      {props.artists.map((artist, index) => {
        return (
          <div key={index}>
            <li>
              <Artist artist={artist} setArtist={props.setArtist} />
            </li>
            <br />
          </div>
        );
      })}
    </ol>
  </div>
);

export default ArtistList;
