import React from "react";
import SF_artist_data from "../../Database/SF_artist_data.js";

import Navbar from "./Components/Navbar.jsx";
import Search from "./Components/Search.jsx";
import ArtistList from "./Components/ArtistList.jsx";
import SongsList from "./Components/SongsList.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: SF_artist_data
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <ArtistList artists={this.state.artists} />
        <SongsList />
      </div>
    );
  }
}

export default App;
