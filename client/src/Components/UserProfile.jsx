import React from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";
import axios from "axios";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: [],
      isArtist: false
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

  /**
   * messageClickHandler - not implemented yet
   * @return {[type]}
   */
  messageClickHandler() {
    //creates a new pop up window with message history btwn user <-> artist
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <MessageList
              messageClickHandler={this.messageClickHandler.bind(this)}
              chatrooms={this.state.chatrooms}
              isArtist={this.state.isArtist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
