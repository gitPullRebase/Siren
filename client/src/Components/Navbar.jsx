import React from "react";
import FacebookLogin from "./FacebookLogin.jsx";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Siren.
      </a>
      <ul className="navbar-nav mr-auto">
        <Link to={props.route}>
          <a className="profileBtn" onClick={props.profileClickHandler}>
            Profile
          </a>
        </Link>
        <FacebookLogin
          setFacebookId={props.setFacebookId}
          setCurrentUser={props.setCurrentUser}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
