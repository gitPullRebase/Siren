import React from "react";
import Book from './Book.jsx'
import BookedModal from './BookedModal.jsx';

class Artist extends React.Component {
  constructor(props){ 
    super(props)
    this.state = { 
      visible: false, 
      showModal: false
    }
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  onClickHandler (input) { 
    console.log("Message has been sent: ", input)
    // will be continued with post ajax calls to artist inbox db.
  }

  render() { 
    const BookModal = (this.state.showModal ? <Book showModal = {this.state.showModal} handleOpenModal = {this.handleOpenModal.bind(this)} handleCloseModal = {this.handleCloseModal.bind(this)} onClick = {this.onClickHandler.bind(this)}/> : null)

    return (
    <div
      onClick={() => this.props.setArtist(this.props.artist.name)}
      className="artist-container"
    >
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
        />
        {BookModal}
      </div>
      <hr />

    </div>
  );
  }
  
};

export default Artist;