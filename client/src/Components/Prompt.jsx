import React from 'react'
import ReactModal from 'react-modal'

class Prompt extends React.Component {
  
  render () {
    return (
      <div>
        <ReactModal 
           isOpen={this.props.showModal}
           onRequestClose = {this.props.handleCloseModal}
           closeOnEscape={true}
           contentLabel="Minimal Modal Example">
        <input ref={input => this._message = input} />
        <button onClick = {()=>{ this.props.onClick(this._message.value)} }> Send </button>
          <button onClick={this.props.handleCloseModal}>Cancel</button>
        }
        </ReactModal>
      </div>
    );
  }
}

export default Prompt
