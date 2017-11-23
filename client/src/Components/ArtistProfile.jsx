import React from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";

class ArtistProfile extends React.Component {
  constructor() {
    super(props);
    this.state = {
      chatrooms: [],
      isArtist: true
    };
  }

  messageClickHandler() {
    //creates a new pop up window with message history btwn user <-> artist
  }

  declineClickHandler() {
    //declines gig and stores it in appropriate table in database
  }

  acceptClickHandler() {
    //accepts gig and stores it in appropriate table in database
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <MessageList
            messageClickHandler={this.messageClickHandler.bind(this)}
            declineClickHandler={this.declineClickHandler.bind(this)}
            acceptClickHandler={this.acceptClickHandler.bind(this)}
            isArtist={this.state.isArtist}
            chatrooms={this.state.chatrooms}
          />
        </div>
      </div>
    );
  }
}

export default ArtistProfile;
