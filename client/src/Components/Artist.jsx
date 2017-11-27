import React from "react";
import Book from "./Book.jsx";
import BookedModal from "./BookedModal.jsx";
import axios from "axios";
import $ from "jquery";

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showModal: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  onClickHandler(input) {
    var artistName = this.props.artist.username;

    var facebookId = this.props.facebookId;
    axios({
      url: "/currentUser",
      method: "post",
      data: { facebookId: facebookId }
    }).then(userObj => {
      let currentUser = userObj.data[0].username;
      axios({
        url: "/user",
        method: "post",
        data: {
          artist: artistName,
          message: input,
          user: currentUser
        }
      }).then(() => {
        console.log("succeeded");
      });
    });
  }

  render() {

    const popup = (this.state.showModal ? <Book showModal = {this.state.showModal} 
    handleOpenModal = {this.handleOpenModal.bind(this)} handleCloseModal = {this.handleCloseModal.bind(this)} onClick = {this.onClickHandler.bind(this)}/> : null)

    return (
      <div className="artist-container">
        <img
          className="artist-image"
          src={this.props.artist.image}
          alt="Artist Pic"
          onClick={() => this.props.setArtist(this.props.artist.username)}
        />
        <div className="artist-text">
          <div onClick={() => this.props.setArtist(this.props.artist.username)}>
            {this.props.artist.username}
          </div>
          <a href={this.props.artist.uri}>
            <div>Profile</div>
          </a>
          <input
            className="bookBtn"
            type="submit"
            value="Book Now"
            onClick={this.handleOpenModal.bind(this)}
            data-toggle="modal"
            data-target="#bookedModal"
          />
          {popup}
        </div>
      </div>
    );
  }
}
export default Artist;
