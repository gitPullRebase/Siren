import React from "react";
import SF_artist_data from "../../Database/SF_artist_data.js";
import SF_ArtistTracks from "../../Database/SF_artist_top_tracks.json";
import LA_artist_data from "../../Database/LA_artist_data.js";
import LA_ArtistTracks from "../../Database/LA_artist_top_tracks.json";
import NY_artist_data from "../../Database/NY_artist_data.js";
import NY_ArtistTracks from "../../Database/NY_artist_top_tracks.json";

import Navbar from "./Components/Navbar.jsx";
import Search from "./Components/Search.jsx";
import ArtistList from "./Components/ArtistList.jsx";
import SongsList from "./Components/SongsList.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: SF_artist_data,
      tracks: SF_ArtistTracks,
      search: ""
    };
  }

  searchClickHandler(input) {
    if (input.toLowerCase() === "san francisco") {
      this.setState({
        search: "San Francisco",
        artists: SF_artist_data,
        tracks: SF_ArtistTracks
      });
    } else if (input.toLowerCase() === "los angeles") {
      this.setState({
        search: "Los Angeles",
        artists: LA_artist_data,
        tracks: LA_ArtistTracks
      });
    } else {
      this.setState({
        search: "New York",
        artists: NY_artist_data,
        tracks: NY_ArtistTracks
      });
    }
  }

  bookNowHandler() {
    window.alert("Book Now Working!");
  }

  onChange(input) {
    this.setState = {
      search: input.target.value.toLowerCase()
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Navbar />
        <Search
          onClick={this.searchClickHandler.bind(this)}
          onChange={this.onChange.bind(this)}
        />
        <div className="row">
          <ArtistList
            bookNowHandler={this.bookNowHandler.bind(this)}
            artists={this.state.artists}
            name={this.state.search}
          />
          <SongsList tracks={this.state.tracks} />
        </div>
      </div>
    );
  }
}

export default App;
