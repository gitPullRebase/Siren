import React from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";

class UserProfile extends React.Component {
  constructor() {
    super(props);
    this.state = {
      chatrooms: [],
      isArtist: false
    };
  }

  messageClickHandler() {
    //creates a new pop up window with message history btwn user <-> artist
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <MessageList
            messageClickHandler={this.messageClickHandler.bind(this)}
            chatrooms={this.state.chatrooms}
            isArtist={this.state.isArtist}
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;
