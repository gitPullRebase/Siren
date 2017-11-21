import React from "react";

import Navbar from "./Components/Navbar.jsx";
import Search from "./Components/Search.jsx";
import ArtistList from "./Components/ArtistList.jsx";
import SongsList from "./Components/SongsList.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: []
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
