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
      <Link to={{ pathname: props.route}}>
        <a href="#" className="profileBtn">
          Profile
        </a>
      </Link>
    );
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Siren.
      </a>
      <ul className="navbar-nav mr-auto">
        {profile}
        {login}
      </ul>
    </nav>
  );
};

export default Navbar;
