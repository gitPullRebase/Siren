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
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "",
      artists: [],
      tracks: [],
      search: "",
      artist: "",
      city: "San Francisco",
      facebookId: ""
    };
    this.setArtist = this.setArtist.bind(this);
  }

  searchClickHandler(input) {
    if (
      input.toLowerCase() === "san francisco" ||
      input.toLowerCase() === "sf"
    ) {
      this.setState({
        artists: SF_artist_data,
        tracks: SF_ArtistTracks,
        clickedArtist: "",
        city: "San Francisco"
      });
    } else if (
      input.toLowerCase() === "los angeles" ||
      input.toLowerCase() === "la"
    ) {
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
    axios({
      method: "post",
      url: "/initTracks",
      data: { artist: artist }
    }).then(tracks => {
      this.setState({
        artist: artist,
        tracks: tracks.data
      });
    });
  }

  setTracks(tracks) {
    this.setState({
      tracks: tracks
    });
  }

  profileClickHandler() {
    axios({
      method: "post",
      url: "/userCheck",
      data: this.state.facebookId
    }).then(userObj => {
      let artist = userObj.role;
      //if user is regular user then render user Profile
      if (artist) {
      } else {
      }
    });
  }

  setFacebookId(facebookId) {
    this.setState({
      facebookId: facebookId
    });
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/initArtists"
    }).then(returnedArtists => {
      let artist = returnedArtists.data[0].username;
      let artists = returnedArtists.data;
      let dataObj = {
        artist: artist,
        artists: artists
      };
      axios({
        method: "post",
        url: "/initTracks",
        data: dataObj
      }).then(returnedTracks => {
        console.log("returned Tracks is ", returnedTracks.data);
        this.setState({
          artist: artist,
          artists: artists,
          tracks: returnedTracks.data
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar
          profileClickHandler={this.profileClickHandler.bind(this)}
          setFacebookId={this.setFacebookId.bind(this)}
        />
        <div className="landing-wrapper">
          <div className="landing" />
        </div>
        <div className="container">
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
              setTracks={this.setTracks}
              city={this.state.city}
            />
            <SongsList tracks={this.state.tracks} artist={this.state.artist} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
