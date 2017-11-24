import React from "react";
import SF_artist_data from "../../Database/artistData/SF_artist_data.js";
import SF_ArtistTracks from "../../Database/artistData/SF_artist_top_tracks.json";
import LA_artist_data from "../../Database/artistData/LA_artist_data.js";
import LA_ArtistTracks from "../../Database/artistData/LA_artist_top_tracks.json";
import NY_artist_data from "../../Database/artistData/NY_artist_data.js";
import NY_ArtistTracks from "../../Database/artistData/NY_artist_top_tracks.json";

import Navbar from "./Components/Navbar.jsx";
import Search from "./Components/Search.jsx";
import ArtistList from "./Components/ArtistList.jsx";
import SongsList from "./Components/SongsList.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser = "",
      artists: SF_artist_data,
      tracks: SF_ArtistTracks,
      search: "",
      clickedArtist: "",
      city: "San Francisco"
    };
    this.setArtist = this.setArtist.bind(this);
  }

  searchClickHandler(input) {
    if (input.toLowerCase() === "san francisco") {
      this.setState({
        artists: SF_artist_data,
        tracks: SF_ArtistTracks,
        clickedArtist: "",
        city: "San Francisco"
      });
    } else if (input.toLowerCase() === "los angeles") {
      this.setState({
        artists: LA_artist_data,
        tracks: LA_ArtistTracks,
        clickedArtist: "",
        city: "Los Angeles"
      });
    } else {
      this.setState({
        artists: NY_artist_data,
        tracks: NY_ArtistTracks,
        clickedArtist: "",
        city: "New York"
      });
    }
  }
  onChange(input) {
    this.setState = {
      search: input.target.value.toLowerCase()
    };
  }

  setArtist(artist) {
    this.setState({
      clickedArtist: artist
    });
  }

  profileClickHandler() {
    //if user is regular user then render user Profile


    //if user is artist then render artist profile

  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Navbar profileClickHandler={this.profileClickHandler.bind(this)} />
        <div className="landing-wrapper">
          <div className="landing" />
        </div>
        <br />
        <Search
          onClick={this.searchClickHandler.bind(this)}
          onChange={this.onChange.bind(this)}
        />
        <br />
        <div className="row">
          <ArtistList
            artists={this.state.artists}
            setArtist={this.setArtist}
            city={this.state.city}
          />
          <SongsList
            tracks={this.state.tracks}
            clickedArtist={this.state.clickedArtist}
          />
        </div>
      </div>
    );
  }
}

export default App;
