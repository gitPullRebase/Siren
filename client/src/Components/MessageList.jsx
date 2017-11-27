import React from "react";
import { map } from "lodash";

import Message from "./Message.jsx";

const MessageList = props => {
  let chatrooms = props.chatrooms;
  let isArtist = props.isArtist;
  if (isArtist) {
    return (
      <div>
        <h2>Gig Requests</h2>
        {chatrooms.map((chatroom, index) => {
          return (
            <div key={index}>
              <Message
                isArtist={props.isArtist}
                chatroom={chatroom}
                messageClickHandler={props.messageClickHandler}
                declineClickHandler={props.declineClickHandler}
                acceptClickHandler={props.acceptClickHandler}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2 className="text-center">Your Requests</h2>
        {chatrooms.map((chatroom, index) => {
          return (
            <div key={index}>
              <Message
                isArtist={props.isArtist}
                chatroom={chatroom}
                messageClickHandler={props.messageClickHandler}
              />
            </div>
          );
        })}
      </div>
    );
  }
};

export default MessageList;
