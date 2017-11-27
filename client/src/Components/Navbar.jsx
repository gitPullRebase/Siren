import React from "react";
import FacebookLogin from "./FacebookLogin.jsx";
import { Link } from "react-router-dom";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Siren.
    </a>
    <ul className="navbar-nav mr-auto">
      <Link to={props.route}>
        <a href="#" className="profileBtn" onClick={props.profileClickHandler}>
          Profile
        </a>
      </Link>
      <FacebookLogin setFacebookId={props.setFacebookId} />
    </ul>
  </nav>
);

export default Navbar;
