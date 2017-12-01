import React from 'react';
import { connect } from 'react-redux';  
import Navbar from './Navbar.jsx'
import axios from 'axios';

const RelatedList = ( { artists } ) => {
    return (
      <div>
        <h3>Related Artists List</h3>
          <ul>
            {artists.map( artist => {
              <div>
                {artist}
              </div>
            })}
          </ul>
      </div>
    );
}

const mapStateToProps = ( { artists } ) => ({
  artists
})

export default connect(mapStateToProps)(RelatedList);