import React from 'react';


/**
 * [BookedModal description]
 * Booked Modal was going to render if Artist has been book while seeking artists.
 * We did not have enough time to make this a feature but something one could implement
 * in the futue...
 */
const BookedModal = () => (
  <div
    className="modal fade"
    id="bookedModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body text-center">
          This Artist has been booked or is currently unavailble.
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default BookedModal;
