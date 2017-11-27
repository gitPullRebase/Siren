import React from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";
import axios from "axios";

class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: [],
      isArtist: true
    };
  }

  componentDidMount() {
    axios({
      method: "post",
      url: "/currentUser",
      data: { facebookId: this.props.facebookId }
    }).then(userObj => {
      let userId = userObj.data[0].id;
      axios({
        method: "post",
        url: "/chatrooms",
        data: { userId: userId }
      }).then(chatroomsObj => {
        let returnedChatrooms = chatroomsObj.data;
        this.setState({
          chatrooms: returnedChatrooms
        });
      });
    });
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
      <div>
        <Navbar />
        <div className="container">
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
      </div>
    );
  }
}

export default ArtistProfile;
