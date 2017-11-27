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


  /**
   * handleOpenModal changes the showModal state to true to render the popup
   * @return {[type]}
   */
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  /**
   * handleCloseModal changes the showModal state to false to hide the popup
   * @return {[type]}
   */
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  /** 
   * onClickHandler make post request to sent he message to the artist.  
   * @param  {string} input message to be sent to artist from current user.
   * @return {[type]}
   */
  onClickHandler(input) {
    var artistName = this.props.artist.username;
    var facebookId = this.props.facebookId;

    /**
     * 1. post request to '/currentUser' to save the current user id 
     * 2. post request to 'user' to save the current artist name being booked, message to be sent to, and the user name  
     */
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
          user: currentUser, 
        }
      }).then(() => {
        console.log("succeeded");
      });
    });
  }

  render() {

    /** 
     * popup conditional statement to check for showModal state: 
     *  if true: render <Book> component 
     *  else: render nothing
     */
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
