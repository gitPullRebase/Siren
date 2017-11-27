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
        <Link to={{ pathname: props.route}}>
          <a
            href="#"
            className="profileBtn"
          >
            Profile
          </a>
        </Link>
        <FacebookLogin
          setFacebookId={props.setFacebookId}
          profileClickHandler={props.profileClickHandler}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
