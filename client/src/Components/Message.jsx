import React from "react";

const Message = props => {
  let isArtist = props.isArtist;
  if (isArtist) {
    return (
      <div className="card">
        <div className="card-header">New request!</div>
        <div class="card-body">
          <p className="card-text">{props.chatroom.message}</p>
          <button
            onClick={props.acceptClickHandler}
            className="btn btn-primary accept"
          >
            Accept
          </button>
          <button
            onClick={props.declineClickHandler}
            className="btn btn-primary decline"
          >
            Decline
          </button>
        </div>
        <div onClick={props.messageClickHandler}>{props.chatroom.message}</div>
      </div>
    );
  } else {
    return (
      <div className="card" id="message">
        <div className="card-header">
          Your request to <strong>{props.chatroom.artistName}</strong>
        </div>
        <div className="card-body">
          <p className="card-text">{props.chatroom.message}</p>
        </div>
      </div>
    );
  }
};

export default Message;
