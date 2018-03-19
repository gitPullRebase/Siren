import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Search from "./Components/Search.jsx";
import ArtistList from "./Components/ArtistList.jsx";
import SongsList from "./Components/SongsList.jsx";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      artists: [],
      tracks: [],
      search: "",
      artist: "",
      city: "San Francisco",
      route: ""
    };
    this.setArtist = this.setArtist.bind(this);
  }

  /**
   * setCurrentUser sets state of current user that is logged in
   * @param {string} currentUser the current user that is returned
   */
  setCurrentUser(currentUser) {
    this.setState({
      currentUser: currentUser
    });
  }

  /**
   * searchClickHandler handles different inputs of cities
   * @param {string} input name of city that is typed in by the user
   */
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

  /**
   * onChange handles change of text inside search bar
   * @param {string} input input from user into searchbar
   */
  onChange(input) {
    this.setState = {
      search: input.target.value.toLowerCase()
    };
  }

  /**
   * setArtist sets artist and tracks states of artist that was selected on the page using a POST request
   * @param {string} artist artist that is selected by user
   */
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

  /**
   * setTracks sets state of tracks
   * @param {array} tracks array of tracks returned from database
   */
  setTracks(tracks) {
    this.setState({
      tracks: tracks
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
          route={this.props.route}
          setFacebookId={this.props.setFacebookId}
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
              facebookId={this.props.facebookId}
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
