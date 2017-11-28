import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import ArtistProfile from "./Components/ArtistProfile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookId: "",
      route: ""
    };
    this.setFacebookId = this.setFacebookId.bind(this);
  }

  profileClickHandler() {
    axios({
      method: "post",
      url: "/userCheck",
      data: { facebookId: this.state.facebookId }
    }).then(userObj => {
      let artist = userObj.data[0].role;
      if (artist) {
        this.setState({ route: "/artist" });
      } else {
        this.setState({ route: "/user" });
      }
    });
  }

  /**
   * setFacebookId - sets the Facebook ID state of current user that is logged in
   * @param {string} facebookId The Facebook ID that is returned from the database
   */
  setFacebookId(facebookId) {
    this.setState({
      facebookId: facebookId
    });
    this.profileClickHandler();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <Home
                facebookId={this.state.facebookId}
                setFacebookId={this.setFacebookId}
                route={this.state.route}
              />
            )}
          />
          <Route
            path="/user"
            component={props => (
              <UserProfile facebookId={this.state.facebookId} />
            )}
          />
          <Route
            path="/artist"
            component={props => {
              <ArtistProfile facebookId={this.state.facebookId} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
