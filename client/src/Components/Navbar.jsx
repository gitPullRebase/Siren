import React from "react";
import Login from "./Login.jsx";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Siren
    </a>
    <div className="profileBtn">Profile</div>
    <Login />
  </nav>
);

export default Navbar;
