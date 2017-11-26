import React from "react";
import ReactModal from "react-modal";

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="bookedModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Send Message
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <textarea
                ref={input => (this._message = input)}
                className="form-control"
                rows="4"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.onClick(this._message.value)}
                // onClick={() => this.props.onClickHandler(this._message.value)}
              >
                {" "}
                Send Message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
{
  /* <div>
  <ReactModal
     isOpen={this.props.showModal}
     onRequestClose = {this.props.handleCloseModal}
     closeOnEscape={true}
     contentLabel="Book Now Modal"
  >
  <input ref={input => this._message = input} />
  <button onClick={ () => this.props.onClick(this._message.value) }> Send </button>
    <button onClick={this.props.handleCloseModal}>Cancel</button>
  </ReactModal>
</div> */
}
