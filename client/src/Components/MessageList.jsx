import React from "react";
import { map } from "lodash";

import Message from "./Message.jsx";

const MessageList = props => {
  let chatrooms = props.chatrooms;
  let isArtist = props.isArtist;

  if (isArtist) {
    return (
      <div>
        {chatrooms.map((chatroom, index) => {
          return (
            <div key={index}>
              <li>
                <Message
                  isArtist={props.isArtist}
                  chatroom={chatroom}
                  messageClickHandler={props.messageClickHandler}
                  declineClickHandler={props.declineClickHandler}
                  acceptClickHandler={props.acceptClickHandler}
                />
              </li>
            </div>
          );
        })};
      </div>
    );
  } else {
    return (
      <div>
        {chatrooms.map((chatroom, index) => {
          return (
            <div key={index}>
              <li>
                <Message
                  isArtist={props.isArtist}
                  chatroom={chatroom}
                  messageClickHandler={props.messageClickHandler}
                />
              </li>
            </div>
          );
        })};
      </div>
    );
  }
};

export default MessageList;
