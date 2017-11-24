import React from "react";

import BookedModal from './BookedModal.jsx';

const Artist = props => {
  return (
    <div
      onClick={() => props.setArtist(props.artist.name)}
      className="artist-container"
    >
      <img
        className="artist-image"
        src={props.artist.images[0].url}
        alt="Artist Pic"
        onClick={() => props.setArtist(props.artist.name)}
      />
      <div className="artist-text">
        <div onClick={() => props.setArtist(props.artist.name)}>
          {props.artist.name}
        </div>
        <a href={props.artist.uri}>
          <div>Profile</div>
        </a>
        <input
          className="bookBtn"
          type="submit"
          value="Book Now"
          data-toggle="modal"
          data-target="#bookedModal"
        />
      </div>
      <hr />

      {/* MODAL COMPONENT */}

    </div>
  );
};

export default Artist;
