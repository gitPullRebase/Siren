import React from "react";

import Artist from "./Artist.jsx";

const ArtistList = props => (
  <div className="col artistList">
    <h3>Artists Available in {props.name}</h3>
    <ol>
      {props.artists.map((artist, index) => {
        return (
          <div key={index}>
            <li>
              <Artist bookNowHandler={props.bookNowHandler} artist={artist} />
            </li>
            <br />
          </div>
        );
      })}
    </ol>
  </div>
);

export default ArtistList;
