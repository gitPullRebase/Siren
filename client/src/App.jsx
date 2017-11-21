import React from "react";
import SF_artist_data from "../../Database/SF_artist_data.js";
import ArtistTracks from '../../Database/SF_artist_top_tracks.json';

import Navbar from "./Components/Navbar.jsx";
import Search from "./Components/Search.jsx";
import ArtistList from "./Components/ArtistList.jsx";
import SongsList from "./Components/SongsList.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: SF_artist_data,
      tracks: ArtistTracks
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Search />
        <div className="row">
          <ArtistList artists={this.state.artists} />
          <SongsList tracks={this.state.tracks} />
        </div>
      </div>
    );
  }
}

export default App;
