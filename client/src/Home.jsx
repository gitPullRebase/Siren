import React from "react";
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
      axios({
        method: "post",
        url: "/initArtists",
        data: { city: "San Francisco" }
      }).then(returnedArtists => {
        let artist = returnedArtists.data[0].username;
        let artists = returnedArtists.data;
        let dataObj = { artist: artist, artists: artists };
        axios({
          method: "post",
          url: "/initTracks",
          data: dataObj
        }).then(returnedTracks => {
          console.log("returned Tracks is ", returnedTracks.data);
          this.setState({
            artist: artist,
            artists: artists,
            tracks: returnedTracks.data,
            city: "San Francisco"
          });
        });
      });
    } else if (
      input.toLowerCase() === "los angeles" ||
      input.toLowerCase() === "la"
    ) {
      axios({
        method: "post",
        url: "/initArtists",
        data: { city: "Los Angeles" }
      }).then(returnedArtists => {
        let artist = returnedArtists.data[0].username;
        let artists = returnedArtists.data;
        let dataObj = { artist: artist, artists: artists };
        axios({
          method: "post",
          url: "/initTracks",
          data: dataObj
        }).then(returnedTracks => {
          console.log("returned Tracks is ", returnedTracks.data);
          this.setState({
            artist: artist,
            artists: artists,
            tracks: returnedTracks.data,
            city: "Los Angeles"
          });
        });
      });
    } else {
      axios({
        method: "post",
        url: "/initArtists",
        data: { city: "New York" }
      }).then(returnedArtists => {
        let artist = returnedArtists.data[0].username;
        let artists = returnedArtists.data;
        let dataObj = { artist: artist, artists: artists };
        axios({
          method: "post",
          url: "/initTracks",
          data: dataObj
        }).then(returnedTracks => {
          console.log("returned Tracks is ", returnedTracks.data);
          this.setState({
            artist: artist,
            artists: artists,
            tracks: returnedTracks.data,
            city: "New York"
          });
        });
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
      method: "post",
      url: "/initArtists",
      data: { city: "San Francisco" }
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
