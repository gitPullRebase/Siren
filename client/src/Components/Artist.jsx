import React from "react";

const Artist = props => {
  return (
    <div className="artist-container">
      <img
        className="artist-image"
        src={props.artist.images[0].url}
        alt="Artist Pic"
        onClick={() => props.setArtist(props.artist.name)}/>
      <div className="artist-text">
        <div onClick={() => props.setArtist(props.artist.name)}>
          Artist: {props.artist.name}
        </div>
        <a href={props.artist.uri}>
          <div>Artist URL: {props.artist.uri}</div>
        </a>
        <input className="bookBtn" type="submit" value="Book Now" data-toggle="modal" data-target="#bookedModal"/>
      </div>

      {/* MODAL COMPONENT */}
      <div className="modal fade" id="bookedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              This Artist has been booked or is currently unavailble.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
