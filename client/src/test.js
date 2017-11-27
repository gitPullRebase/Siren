/**
   * setFacebookId - sets the Facebook ID state of current user that is logged in
   * @param {string} facebookId The Facebook ID that is returned from the database
   */
var setFacebookId = (facebookId)=> {
    this.setState({
      facebookId: facebookId
    });
    this.profileClickHandler();
  }

  /**
   * setCurrentUser sets state of current user that is logged in
   * @param {string} currentUser the current user that is returned
   */
var setCurrentUser = (currentUser)=>{
    this.setState({
      currentUser: currentUser
    });
  }

  /**
   * searchClickHandler handles different inputs of cities
   * @param {string} input name of city that is typed in by the user
   */
var searchClickHandler = (input)=> {
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
 var onChange = (input) => {
    this.setState = {
      search: input.target.value.toLowerCase()
    };
  }

  /**
   * setArtist sets artist and tracks states of artist that was selected on the page using a POST request
   * @param {string} artist artist that is selected by user
   */
var setArtist = (artist) => {
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
var setTracks = (tracks) => {
    this.setState({
      tracks: tracks
    });
  }

/**
   * onEnter enable enter key to trigger this.props.onClick which is a search handler function
   * @param  {object} e event object from key press on enter
   * @return {null}
   */
var onEnter = (e) =>{
    if (e.key === "Enter") {
      this.props.onClick(this._cityName.value);
    }
  }

/**
   * responseFacebook
   * @param {object} response 
   * @return {null}
   */
var responseFacebook = (response) =>{
    let userObj = {
      facebookID: response.id,
      accessToken: response.accessToken,
      username: response.name
    };
    //need to ask server to check if user is client or artist
    axios({
      method: "post",
      url: "/initialLogin",
      data: userObj
    }).then(() => {
      this.props.setFacebookId(userObj.facebookID);
    });
  }

 /**
   * handleOpenModal changes the showModal state to true to render the popup
   * @return {}
   */
var handleOpenModal =()=>{
    this.setState({ showModal: true });
  }

  /**
   * handleCloseModal changes the showModal state to false to hide the popup
   * @return {}
   */
var handleCloseModal=()=>{
    this.setState({ showModal: false });
  }

  /** 
   * onClickHandler make post request to sent he message to the artist.  
   * @param  {string} input message to be sent to artist from current user.
   * @return {}
   */
var onClickHandler = (input)=>{
    var artistName = this.props.artist.username;
    var facebookId = this.props.facebookId;

    axios({
      url: "/currentUser",
      method: "post",
      data: { facebookId: facebookId }
    }).then(userObj => {
      let currentUser = userObj.data[0].username;
      axios({
        url: "/user",
        method: "post",
        data: {
          artist: artistName,
          message: input,
          user: currentUser, 
        }
      }).then(() => {
        console.log("succeeded");
      });
    });
  }
