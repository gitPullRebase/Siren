import React from "react";
import GoogleLogin from "./GoogleLogin.jsx";
import FacebookLogin from "./FacebookLogin.jsx";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Siren
    </a>
    <div onClick={props.profileClickHandler} className="profileBtn">
      Profile
    </div>
    <GoogleLogin />
    <FacebookLogin />
  </nav>
);

export default Navbar;
