import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import ArtistProfile from "./Components/ArtistProfile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookId: ""
    };
    this.setFacebookId = this.setFacebookId.bind(this);
  }

  setFacebookId(facebookId) {
    this.setState({
      facebookId: facebookId
    });
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
