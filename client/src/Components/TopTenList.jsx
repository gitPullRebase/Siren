import React from 'react';
import Navbar from './Navbar/jsx'
import axios from 'axios';

class TopTenList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top = [],
    }
  }

  render() {
    return (
      <div>
        Top Ten List
      </div>
    );
  }

}

export default UserPRofile;