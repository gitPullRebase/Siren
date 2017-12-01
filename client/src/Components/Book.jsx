import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '75%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
};

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      msgStat: '',
    };
  }
  change(e) {
    this.setState({
      input: e.target.value,
    });
    console.log('state in book', this.state.input);
  }
  onSubmit() {
    if (this.state.input === '') {
      this.setState({
        msgStat: 'no message',
      });
    } else {
      let input = this.state.input;
      this.setState({
        input: '',
        msgStat: 'success',
      });
      console.log('this is current state', this.state);
      this.props.onClick(input);
    }
  }
  toggleHideen() {
    this.set;
  }
  render() {
    let message;
    if (this.state.msgStat === 'success') {
      message = (
        <p className="book message" id="message">
          Message has been sent!
        </p>
      );
    } else if (this.state.msgStat === 'no message') {
      message = (
        <p className="book message" id="errmessage">
          Message is empty!
        </p>
      );
    }
    return (
      <div>
        <ReactModal
          isOpen={this.props.showModal}
          onRequestClose={this.props.handleCloseModal}
          closeOnEscape={true}
          contentLabel="Book Now Modal"
          style={customStyles}
        >
          <h4 className="book message">To {this.props.artist}</h4>
          <textarea
            id="book-message-textbox"
            color="black"
            rows="9"
            cols="50"
            placeholder="Please enter your message here"
            value={this.state.input}
            onChange={this.change.bind(this)}
          />
          <div>
            <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>
              {' '}
              Send{' '}
            </button>
            <button className="btn btn-primary" onClick={this.props.handleCloseModal}>
              Cancel
            </button>
            {message}
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Book;
