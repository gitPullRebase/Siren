import React from 'react'
import ReactModal from 'react-modal'

class Book extends React.Component {

  render () {
    return (
      <div>

      </div>
    );
  }
}

export default Book;


{/* <ReactModal
   isOpen={this.props.showModal}
   onRequestClose = {this.props.handleCloseModal}
   closeOnEscape={true}
   contentLabel="Book Now Modal"
>
<input ref={input => this._message = input} />
<button onClick = {()=>{ this.props.onClick(this._message.value)} }> Send </button>
  <button onClick={this.props.handleCloseModal}>Cancel</button>
</ReactModal>
   */}
