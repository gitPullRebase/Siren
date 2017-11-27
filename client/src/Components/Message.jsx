import React from "react";

const Message = props => {
  let isArtist = props.isArtist;
  if (isArtist) {
    return (
      <div>
        <div onClick={props.messageClickHandler}>{props.chatroom}</div>
        <button onClick={props.acceptClickHandler} className="accept" />
        <button onClick={props.declineClickHandler} className="decline" />
      </div>
    );
  } else {
    return <div onClick={props.messageClickHandler}>{props.chatroom}</div>;
  }
};

export default Message;
