import React from "react";
import Book from './Book.jsx'
import BookedModal from './BookedModal.jsx';
import axios from 'axios';
import $ from 'jquery';

class Artist extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      showModal: false
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }
  onClickHandler (input) {
    var artistName = this.props.artist.name
    var hardCodedUser = 'Aygerim Test'
    console.log("Message has been sent: ", input)
    // console.log("Who artist: ", this.props.artist.name)
    $.ajax({
        url: '/user',
        method: 'POST',
        data: JSON.stringify({
          'artist': artistName,
          'message': input,
          'user': hardCodedUser
        }),
        contentType: 'application/json',
        success: (data) => {
          console.log('succeeded', data)
        },
        error: (xhr, status, error) => {
          console.log('err', xhr, status, error);
        }
      });
    // will be continued with post ajax calls to artist inbox db.
  }

  render() {
    const BookModal = (this.state.showModal ? <Book onClick = {this.onClickHandler} /> : <BookedModal />)


    // (this.state.showModal ?
    //   <Book showModal={this.state.showModal}
    //         handleOpenModal={this.handleOpenModal.bind(this)}
    //         handleCloseModal={this.handleCloseModal.bind(this)}
    //         onClick={this.onClickHandler.bind(this)}/> : <BookedModal />)

    return (
    <div className="artist-container">
      <img
        className="artist-image"
        src={this.props.artist.images[0].url}
        alt="Artist Pic"
        onClick={() => this.props.setArtist(this.props.artist.name)}
      />
      <div className="artist-text">
        <div onClick={() => this.props.setArtist(this.props.artist.name)}>
          {this.props.artist.name}
        </div>
        <a href={this.props.artist.uri}>
          <div>Profile</div>
        </a>
        <input
          className="bookBtn"
          type="submit"
          value="Book Now"
          onClick = {this.handleOpenModal.bind(this)}
          data-toggle="modal" data-target="#bookedModal"
        />
        {BookModal}
      </div>
    </div>
  );
  }

};

export default Artist;
