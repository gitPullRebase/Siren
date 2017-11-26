import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import ArtistProfile from "./Components/ArtistProfile.jsx";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={UserProfile} />
      <Route path="/artist" component={ArtistProfile} />
    </Switch>
  </div>
);

export default App;
