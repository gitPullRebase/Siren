import React from 'react';
import Navbar from './Navbar.jsx'
import axios from 'axios';

class RelatedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: [],
    }
  }

  render() {
    return (
      <div>
        Related Artists List
      </div>
    );
  }

}

export default RelatedList;