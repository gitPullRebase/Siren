import React from "react";
import GoogleLogin from "./GoogleLogin.jsx";
import FacebookLogin from "./FacebookLogin.jsx";
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
    <a className="navbar-brand" href="#">
      Siren
    </a>
    <ul className="navbar-nav mr-auto">
      <Link to="/artist">
        <div onClick={props.profileClickHandler} className="nav-item profileBtn">
          Profile
        </div>
      </Link>
      <GoogleLogin />
      <FacebookLogin />
    </ul>
  </nav>
);

export default Navbar;
