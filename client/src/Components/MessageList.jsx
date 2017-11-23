import React from "react";
import { map } from "lodash";

import Message from "./Message.jsx";

const MessageList = props => {
  let chatrooms = props.chatrooms;
  let isArtist = props.isArtist;

  if (isArtist) {
    chatrooms.map(chatroom => {
      return (
        <Message
          isArtist={props.isArtist}
          chatroom={chatroom}
          messageClickHandler={props.messageClickHandler}
          declineClickHandler={props.declineClickHandler}
          acceptClickHandler={props.acceptClickHandler}
        />
      );
    });
  } else {
    chatrooms.map(chatroom => {
      return (
        <Message
          isArtist={props.isArtist}
          chatroom={chatroom}
          messageClickHandler={props.messageClickHandler}
        />
      );
    });
  }
};

export default MessageList;
