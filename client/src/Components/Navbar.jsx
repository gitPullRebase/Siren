import React from "react";
import FacebookLogin from "./FacebookLogin.jsx";
import { Link } from "react-router-dom";

const Navbar = props => {
  let login = (
    <FacebookLogin
      setFacebookId={props.setFacebookId}
      setCurrentUser={props.setCurrentUser}
    />
  );
  let profile = "";
  if (props.route !== "") {
    login = "";
    profile = (
      <Link to={{ pathname: props.route }}>
        <div className="profileBtn-toolbar">
          <a href="#" className="profileBtn">
            Profile
          </a>
        </div>
      </Link>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a className="navbar-brand" href="#">
          Siren.
        </a>
      </Link>
      <ul className="navbar-nav mr-auto">
        {profile}
        {login}
      </ul>
    </nav>
  );
};

export default Navbar;
