import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="col artistList">
    <h3>Artists Available in {props.name}</h3>
    <ol>
      {props.artists.map((artist, index) => {
        return (
          <div>
            <li>
              <Artist artist={artist}
                      index={index} />
            </li>
            <br />
          </div>
        );
      })}
    </ol>
  </div>
);

export default ArtistList;
