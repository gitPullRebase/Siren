import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="col artistList">
    <h3>Artists Available in SF</h3>
    <ol>
      {props.artists.map( artist => {
        return (
          <div>
            <li>
              <Artist artist={artist}
                      setArtist={props.setArtist} />
            </li>
            <br />
          </div>
        );
      })}
    </ol>
  </div>
);

export default ArtistList;
